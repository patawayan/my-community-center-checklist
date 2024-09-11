import { defineStore } from 'pinia'
import { useAlerts } from './alert'
import { useClipboard } from '@vueuse/core'
import { computed, reactive, ref, watch } from 'vue'
import {
  CheckListStatus,
  type Checklist,
  type ChecklistItem,
  type ChecklistItems,
  type DataFilters,
  type GlobalFilters,
  type UserData,
  type ViewFilters
} from '@/types'
import {
  getLocalCheckListData,
  getLocalChecklistListItem,
  getLocalDataFilters,
  getLocalGlobalFilters,
  getLocalUserData,
  getLocalViewFilters,
  storeLocalChecklistData,
  storeLocalChecklistListItem,
  storeLocalDataFilters,
  storeLocalGlobalFilters,
  storeLocalUserData,
  storeLocalViewFilters
} from '@/utils/localStorage'
import { onValue } from 'firebase/database'
import {
  createChecklist,
  doesChecklistExist,
  getChecklistItemsRef,
  getChecklistRef,
  getGlobalFilterRef,
  storeOnlineChecklistData,
  storeOnlineChecklistListItems,
  storeOnlineGlobalFilters
} from '@/firebase'
import { bundleSort, nameSort, roomSort, SortTypes, sourceSort } from '@/utils/sort'
import {
  BundleItemIdsMap,
  BundleItemRequiredMap,
  RoomBundleItems,
  Sprites,
  type RoomBundleItem
} from '@/data'
import { ForagingLocations, type BundleTypes, type SourceType } from '@/data/types'
import { generateRandomKey } from '@/utils/text'

/**
 * Store for the application
 */
export const useAppStore = defineStore('appStore', () => {
  const { addAlert } = useAlerts()
  const { copy } = useClipboard()

  /** Unsubscribe function for check list  */
  const checklistDataUnsubscribe = ref()
  /** Unsubscribe function for check list items */
  const checklistItemUnsubscribe = ref()
  /** Unsubscribe function for globalFilters */
  const globalFiltersUnsubscribe = ref()

  /**
   * Unsubscribe functions for the realtime database listeners
   */
  const unsubscribeListeners = () => {
    checklistDataUnsubscribe?.value?.()
    checklistItemUnsubscribe?.value?.()
    globalFiltersUnsubscribe?.value?.()
  }

  /**
   * Filters applied to all users (multiplayer)
   * Can only be edited by list owner
   */
  const globalFilters = reactive<GlobalFilters>({
    farmCaveType: []
  })

  /**
   * Filters for the list viewing experience
   */
  const viewFilters = reactive<ViewFilters>({
    // Whether the list is in a compact style or not
    isVerboseList: true
  })

  /**
   * Filters for the actual checklist data
   */
  const dataFilters = reactive<DataFilters>({
    onlyShowSelectedDetails: false,
    sortBy: [],
    season: [],
    source: [],
    room: [],
    bundle: [],
    status: [],
    searchValue: '',
    hideUnecessaryItems: false
  })

  /**
   * Data for the current checklist
   */
  const checklistData = reactive<Checklist>({
    listName: '',
    ownerId: '',
    listId: '',
    isOnline: false
  })

  /**
   * Items in the checklist
   */
  const checklistItems = reactive<ChecklistItems>([])

  /**
   * Local user data
   */
  const userData = reactive<UserData>({
    userId: '',
    currentListId: '',
    listIds: []
  })

  /** A list of all the locally available checklists' names */
  const listNames = ref<{ value: string; label: string }[]>([])

  /** Reloads the list of local checklists */
  const reloadListNames = () => {
    listNames.value = userData.listIds.map((listId) => {
      const listData = getLocalCheckListData(listId)
      if (listData) {
        return {
          value: listId,
          label: listData.listName
        }
      }
      return {
        value: listId,
        label: ''
      }
    })
  }

  /**
   * Create a new data filter and store it to local storage
   */
  const createNewDataFilter = () => {
    dataFilters.onlyShowSelectedDetails = false
    dataFilters.sortBy = []
    dataFilters.season = []
    dataFilters.source = []
    dataFilters.room = []
    dataFilters.bundle = []
    dataFilters.status = []
    dataFilters.searchValue = ''
    dataFilters.hideUnecessaryItems = false
    storeLocalDataFilters(checklistData.listId, dataFilters)
  }

  /**
   * Create a new view filter and store it to local storage
   */
  const createNewViewFilter = () => {
    viewFilters.isVerboseList = true
    storeLocalViewFilters(checklistData.listId, viewFilters)
  }

  /**
   * Create a new global filter and store it to local storage
   */
  const createNewGlobalFilters = () => {
    globalFilters.farmCaveType = []
    storeLocalGlobalFilters(checklistData.listId, globalFilters)
  }

  /**
   * Create a new checklist, set it as current active list, and store to local storage
   * Also creates new data, view, and global filters
   */
  const createNewCheckList = () => {
    const newListId = generateRandomKey()

    userData.currentListId = newListId
    userData.listIds.push(newListId)
    storeLocalUserData(userData)

    checklistData.ownerId = userData.userId
    checklistData.listName = `My List${userData.listIds.length > 0 ? ' ' + userData.listIds.length : ''}`
    checklistData.listId = newListId
    checklistData.isOnline = false
    checklistItems.length = 0

    storeLocalChecklistData(checklistData)
    storeLocalChecklistListItem(checklistData.listId, checklistItems)
    createNewGlobalFilters()
    createNewDataFilter()
    createNewViewFilter()
    reloadListNames()
  }

  /**
   * Load the data filters from local storage and set to store variables
   * If no data filters are found, create a new one
   */
  const setDataFilters = () => {
    const localDataFilters = getLocalDataFilters(checklistData.listId)
    if (localDataFilters) {
      dataFilters.onlyShowSelectedDetails = localDataFilters.onlyShowSelectedDetails
      dataFilters.sortBy = localDataFilters.sortBy
      dataFilters.season = localDataFilters.season
      dataFilters.source = localDataFilters.source
      dataFilters.room = localDataFilters.room
      dataFilters.bundle = localDataFilters.bundle
      dataFilters.status = localDataFilters.status
      dataFilters.searchValue = localDataFilters.searchValue
      dataFilters.hideUnecessaryItems = localDataFilters.hideUnecessaryItems
    } else {
      createNewDataFilter()
    }
  }

  /**
   * Load the view filters from local storage and set to store variables
   * If no view filters are found, create a new one
   */
  const setViewFilters = () => {
    const localViewFilters = getLocalViewFilters(checklistData.listId)
    if (localViewFilters) {
      viewFilters.isVerboseList = localViewFilters.isVerboseList
    } else {
      createNewViewFilter()
    }
  }

  /**
   * Load the global filters from local storage and set to store variables
   */
  const setGlobalFilters = () => {
    const localGlobalFilters = getLocalGlobalFilters(checklistData.listId)

    if (localGlobalFilters) {
      globalFilters.farmCaveType = localGlobalFilters.farmCaveType
    }
  }

  /**
   * Load the checklist items from local storage and set to store variables
   */
  const setChecklistItems = () => {
    const localChecklistItems = getLocalChecklistListItem(checklistData.listId)
    if (localChecklistItems) {
      checklistItems.length = 0
      checklistItems.push(...localChecklistItems)
    }
  }

  /**
   * Load the checklist data from local storage and set to store variables
   * @param listId - id of the checklist to load
   */
  const setChecklistData = (listId: string) => {
    const localChecklistData = getLocalCheckListData(listId)
    if (localChecklistData) {
      checklistData.ownerId = localChecklistData.ownerId
      checklistData.listName = localChecklistData.listName
      checklistData.listId = localChecklistData.listId
      checklistData.isOnline = !!localChecklistData.isOnline
    }
  }

  /**
   * Check if the current checklist is online, automatically sets the local data to offline if it isnt
   */
  const checkIfOnline = async (listId: string) => {
    const isOnline = await doesChecklistExist(listId)
    if (!isOnline) {
      checklistData.isOnline = false
    }
    return isOnline
  }

  /**
   * Assumes checklist is already online and sets the local data accordingly
   * Also sets up the listeners for the online data for real-time updates
   */
  const setOnlineList = async (listId: string) => {
    const checklistRef = await getChecklistRef(listId)
    checklistDataUnsubscribe.value = onValue(checklistRef, (snapshot) => {
      const data: Checklist = snapshot.val()
      if (data) {
        checklistData.listName = data.listName
        checklistData.ownerId = data.ownerId
        checklistData.listId = data.listId
        checklistData.isOnline = true

        reloadListNames()
      }
    })

    const checkListItemsRef = await getChecklistItemsRef(listId)
    checklistItemUnsubscribe.value = onValue(checkListItemsRef, (snapshot) => {
      const data: ChecklistItems = snapshot.val()
      if (data) {
        checklistItems.length = 0
        checklistItems.push(...data)
      }
    })

    const globalFiltersRef = await getGlobalFilterRef(listId)
    globalFiltersUnsubscribe.value = onValue(globalFiltersRef, (snapshot) => {
      const data: GlobalFilters = snapshot.val()
      if (data) {
        globalFilters.farmCaveType = data.farmCaveType
      }
    })

    setDataFilters()
    setViewFilters()
  }

  /**
   * Reload the data according to the current list id
   */
  const reloadData = async () => {
    unsubscribeListeners()

    if (await doesChecklistExist(userData.currentListId)) {
      setOnlineList(userData.currentListId)
    } else {
      setChecklistData(userData.currentListId)

      if (checklistData.isOnline) {
        checklistData.isOnline = false
        addAlert('Checklist set to offline', 'List does not exist online')
      }
      setChecklistItems()
      setGlobalFilters()
    }

    setDataFilters()
    setViewFilters()
  }

  /**
   * load data from local storage and check if online data is available
   */
  const loadData = async (listId?: string) => {
    const localUserData = getLocalUserData()

    if (localUserData) {
      userData.currentListId = localUserData.currentListId
      userData.userId = localUserData.userId
      userData.listIds = localUserData.listIds

      if (listId) {
        userData.currentListId = listId
      }

      if (await checkIfOnline(userData.currentListId)) {
        if (!userData.listIds.includes(userData.currentListId)) {
          userData.listIds.push(userData.currentListId)
        }

        await setOnlineList(userData.currentListId)
      } else if (userData.listIds.includes(userData.currentListId)) {
        reloadData()
      } else {
        createNewCheckList()
      }
    } else {
      userData.currentListId = ''
      userData.userId = generateRandomKey()
      userData.listIds = []

      if (listId) {
        if (await checkIfOnline(listId)) {
          await setOnlineList(listId)
        } else {
          createNewCheckList()
        }
      } else {
        createNewCheckList()
      }
    }
  }

  /**
   * Map of the status of each item in the checklist
   */
  const statusItems = computed(() =>
    checklistItems.reduce(
      (acc, item) => ({ ...acc, [item.bundleItem]: item }),
      {} as Record<string, ChecklistItem>
    )
  )

  /**
   * Set the status of a bundle item. Store to local storage and online if available
   * @param bundleItem
   * @param status
   */
  const setStatus = (bundleItem: string, status: CheckListStatus) => {
    const localStatusItems = { ...statusItems.value, [bundleItem]: { bundleItem, status } }

    checklistItems.length = 0
    checklistItems.push(...Object.values(localStatusItems))
    storeLocalChecklistListItem(checklistData.listId, checklistItems)
    if (checklistData.isOnline) {
      storeOnlineChecklistListItems(checklistData.listId, checklistItems)
    }
  }

  /**
   * Sort the checklist by status
   */
  const statusSort = (a: RoomBundleItem, b: RoomBundleItem) =>
    (statusItems.value[a.id]?.status ?? CheckListStatus.ToDo).localeCompare(
      statusItems.value[b.id]?.status ?? CheckListStatus.ToDo
    )

  /**
   * Sort functions for the checklist
   */
  const SortFunctions = {
    [SortTypes.Name]: nameSort,
    [SortTypes.Room]: roomSort,
    [SortTypes.Bundle]: bundleSort,
    [SortTypes.Source]: sourceSort,
    [SortTypes.Status]: statusSort
  }

  /**
   * Filter the checklist based on the current filters
   */
  const checklist = computed((): RoomBundleItem[] => {
    const {
      source: localSource,
      room: localRoom,
      bundle: localBundle,
      season: localSeasons,
      status: localStatus,
      searchValue,
      onlyShowSelectedDetails,
      sortBy: localSortBy
    } = dataFilters

    const { farmCaveType: localFarmCaveType } = globalFilters
    // If no filters are applied, return the full list
    if (
      localSeasons.length === 0 &&
      localSource.length === 0 &&
      localRoom.length === 0 &&
      localBundle.length === 0 &&
      localStatus.length === 0 &&
      !searchValue &&
      localSortBy.length === 0 &&
      localFarmCaveType.length === 0 &&
      !onlyShowSelectedDetails
    ) {
      return RoomBundleItems
    }

    const copiedBundleItems: RoomBundleItem[] = JSON.parse(JSON.stringify(RoomBundleItems))

    const finalBundleItem = copiedBundleItems.flatMap((item) => {
      const localItem = { ...item }

      const includeItem =
        (searchValue === '' ||
          Sprites[localItem.item.spriteId].name
            .toLowerCase()
            .includes(searchValue.toLowerCase())) &&
        (localStatus.length === 0 ||
          (statusItems.value[localItem.id] &&
            localStatus.includes(statusItems.value[localItem.id].status)) ||
          (!statusItems.value[localItem.id] && localStatus.includes(CheckListStatus.ToDo))) &&
        localItem.item.sourceDetails.some(
          (sourceDetail) =>
            // Filtering items thatare available in the selected seasons
            (localSeasons.length === 0 ||
              (localSeasons.length === 4
                ? sourceDetail.seasons.length === 4
                : sourceDetail.seasons.length < 4 &&
                  sourceDetail.seasons.some((season) => localSeasons.includes(season)))) &&
            // Filtering items thatare available in the selected sources
            (localSource.length === 0 ||
              sourceDetail.sources.some((source) =>
                localSource.includes(source.__typename as SourceType)
              ))
        ) &&
        (localRoom.length === 0 || localRoom.includes(localItem.room)) &&
        (localBundle.length === 0 || localBundle.includes(localItem.bundle))

      localItem.item.sourceDetails = localItem.item.sourceDetails.flatMap((sourceDetail) => {
        // Filter out the farm cave sources if the selected farm cave type is not included
        sourceDetail.sources = sourceDetail.sources.flatMap((source) => {
          if (
            localFarmCaveType.length > 0 &&
            source.__typename === 'Foraging' &&
            source.locations?.some((location) =>
              [ForagingLocations.MushroomFarmCave, ForagingLocations.FruitBatFarmCave].includes(
                location
              )
            )
          ) {
            source.locations = source.locations.flatMap((location) => {
              return (localFarmCaveType.includes(ForagingLocations.MushroomFarmCave) &&
                location === ForagingLocations.FruitBatFarmCave) ||
                (localFarmCaveType.includes(ForagingLocations.FruitBatFarmCave) &&
                  location === ForagingLocations.MushroomFarmCave)
                ? []
                : location
            })
            return source.locations.length > 0 ? source : []
          }

          // if onlyShowSelectedDetails is true, then we only want to show details that are exclusve to the selected filters
          if (onlyShowSelectedDetails && localSource.length > 0) {
            return localSource.includes(source.__typename as SourceType) ? source : []
          }

          return source
        })

        // if onlyShowSelectedDetails is true, then we only want to show details that are exclusve to the selected filters
        if (onlyShowSelectedDetails && localSeasons.length > 0) {
          if (localSeasons.length !== sourceDetail.seasons.length) {
            return []
          }

          if (localSeasons.length === 4) {
            return sourceDetail
          }
          return sourceDetail.seasons.every((season) => localSeasons.includes(season))
            ? sourceDetail
            : []
        }

        return sourceDetail.sources.length > 0 ? sourceDetail : []
      })

      return includeItem && localItem.item.sourceDetails.length > 0 ? localItem : []
    })

    return localSortBy.length > 0
      ? localSortBy
          .reverse()
          .reduce(
            (items: RoomBundleItem[], sortBy: SortTypes) => items.sort(SortFunctions[sortBy]),
            finalBundleItem as RoomBundleItem[]
          )
      : finalBundleItem
  })

  /**
   * Map of bundles with items that are either acquired, in progress or submitted
   *
   * @example
   * {
   *   'Spring Foraging Bundle': true,
   *   'Summer Foraging Bundle': false,
   *   ...
   * }
   */
  const completedBundles = computed(() =>
    Object.keys(BundleItemIdsMap).reduce(
      (acc, itemKey) => {
        const bundleItemKey = itemKey as BundleTypes
        const completedBundleItems = BundleItemIdsMap[bundleItemKey].flatMap((itemId) =>
          statusItems.value[itemId] && statusItems.value[itemId].status !== CheckListStatus.ToDo
            ? statusItems.value[itemId].bundleItem
            : []
        )

        return {
          ...acc,
          [itemKey]: completedBundleItems.length >= BundleItemRequiredMap[bundleItemKey]
        }
      },
      {} as Record<BundleTypes, boolean>
    )
  )

  /**
   * Push current list to the online database
   */
  const createDatabaseList = async () => {
    const doesExist = await doesChecklistExist(checklistData.listId)
    if (!doesExist) {
      checklistData.isOnline = true
      await createChecklist(checklistData, checklistItems, globalFilters)

      await setOnlineList(checklistData.listId)
    }
    copy(window.location.origin + '/' + checklistData.listId)
    addAlert(
      'Shareable link copied to clipboard!',
      doesExist ? 'Shareable URL Copied' : 'List created'
    )
  }

  // --------------------- Watchers ---------------------

  // Save the data filters to local storage
  watch(dataFilters, () => {
    storeLocalDataFilters(checklistData.listId, dataFilters)
  })

  // save the view filters to local storage
  watch(viewFilters, () => {
    storeLocalViewFilters(checklistData.listId, viewFilters)
  })

  // Save the data filters to local storage
  watch(globalFilters, () => {
    storeLocalGlobalFilters(checklistData.listId, globalFilters)
    if (checklistData.isOnline) {
      storeOnlineGlobalFilters(checklistData.listId, globalFilters)
    }
  })

  watch(checklistData, async () => {
    storeLocalChecklistData(checklistData)
    reloadListNames()
    if (checklistData.isOnline) {
      await storeOnlineChecklistData(checklistData)
    }
  })

  watch(userData, () => {
    storeLocalUserData(userData)
  })

  return {
    statusItems,
    checklist,
    checklistData,
    checklistItems,
    completedBundles,
    dataFilters,
    globalFilters,
    viewFilters,
    userData,
    listNames,
    reloadData,
    loadData,
    setStatus,
    createNewCheckList,
    createDatabaseList
  }
})
