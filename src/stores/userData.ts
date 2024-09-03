import { ref, computed, watch, reactive } from 'vue'
import { defineStore } from 'pinia'
import {
  CheckListStatus,
  type Checklist,
  type ChecklistItem,
  type DataFilters,
  type GlobalFilters,
  type UserData,
  type ViewFilters
} from '@/types'
import { RoomBundleItems, Sprites, type RoomBundleItem } from '@/data'
import { ForagingLocations, SourceType } from '@/data/types'
import { useDebounceFn } from '@vueuse/core'

const STARDEW_COMMUNITY_LIST_USER_STORAGE_KEY = '@stardew-my-community-list-user'
const STARDEW_COMMUNITY_LIST_LIST_STORAGE_KEY = '@stardew-my-community-list-list'
const STARDEW_COMMUNITY_LIST_DATA_FILTERS_STORAGE_KEY = '@stardew-my-community-list-data-filters'
const STARDEW_COMMUNITY_LIST_VIEW_FILTERS_STORAGE_KEY = '@stardew-my-community-list-view-filters'
const STARDEW_COMMUNITY_LIST_GLOBAL_FILTERS_STORAGE_KEY =
  '@stardew-my-community-list-global-filters'

export enum SortTypes {
  Name = 'Name',
  Room = 'Room',
  Bundle = 'Bundle',
  Source = 'Source',
  Status = 'Status'
}

const roomSort = (a: RoomBundleItem, b: RoomBundleItem) => a.room.localeCompare(b.room)
const bundleSort = (a: RoomBundleItem, b: RoomBundleItem) => a.bundle.localeCompare(b.bundle)

const sourceSort = (a: RoomBundleItem, b: RoomBundleItem) => {
  if (
    a.item.sourceDetails[0].sources[0].__typename &&
    b.item.sourceDetails[0].sources[0].__typename
  ) {
    return a.item.sourceDetails[0].sources[0].__typename?.localeCompare(
      b.item.sourceDetails[0].sources[0].__typename
    )
  }
  return 0
}

const nameSort = (a: RoomBundleItem, b: RoomBundleItem) =>
  Sprites[a.item.spriteId].name.localeCompare(Sprites[b.item.spriteId].name)

/**
 * Store for user data
 */
export const useUserDataStore = defineStore('userData', () => {
  /**
   * Filters applied to all users (multiplayer)
   * Can only be edited by list owner
   */
  const globalFilters = reactive<GlobalFilters>({
    farmCaveType: [],
    lastUpdated: ''
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
    searchValue: ''
  })

  const checklistData = reactive<Checklist>({
    listName: '',
    ownerId: '',
    listId: '',
    checklistData: [],
    lastUpdated: ''
  })

  const userData = reactive<UserData>({
    userId: '',
    currentListId: '',
    listIds: []
  })

  const checklistStorageKey = computed(
    () => `${STARDEW_COMMUNITY_LIST_LIST_STORAGE_KEY}-${userData.currentListId}`
  )

  const checklistDataFilterKey = computed(
    () => `${STARDEW_COMMUNITY_LIST_DATA_FILTERS_STORAGE_KEY}-${userData.currentListId}`
  )

  const checklistViewFilterKey = computed(
    () => `${STARDEW_COMMUNITY_LIST_VIEW_FILTERS_STORAGE_KEY}-${userData.currentListId}`
  )
  const checklistGlobalFilterKey = computed(
    () => `${STARDEW_COMMUNITY_LIST_GLOBAL_FILTERS_STORAGE_KEY}-${userData.currentListId}`
  )

  const listNames = ref<{ value: string; label: string }[]>([])

  const reloadListNames = () => {
    listNames.value = userData.listIds.map((listId) => {
      const listData = localStorage.getItem(`${STARDEW_COMMUNITY_LIST_LIST_STORAGE_KEY}-${listId}`)
      if (listData) {
        const parsedListData = JSON.parse(listData) as Checklist
        return {
          value: listId,
          label: parsedListData.listName
        }
      }
      return {
        value: listId,
        label: ''
      }
    })
  }

  const debouncedChecklistData = useDebounceFn(() => {
    localStorage.setItem(checklistStorageKey.value, JSON.stringify(checklistData))
  }, 1000)

  const storeChecklistData = () => {
    checklistData.lastUpdated = new Date().toISOString()
    debouncedChecklistData()
  }

  const storeUserData = () => {
    localStorage.setItem(STARDEW_COMMUNITY_LIST_USER_STORAGE_KEY, JSON.stringify(userData))
  }

  const storeFilters = () => {
    localStorage.setItem(checklistDataFilterKey.value, JSON.stringify(dataFilters))
    localStorage.setItem(checklistViewFilterKey.value, JSON.stringify(viewFilters))
  }

  const setNewDataFilter = () => {
    dataFilters.onlyShowSelectedDetails = false
    dataFilters.sortBy = []
    dataFilters.season = []
    dataFilters.source = []
    dataFilters.room = []
    dataFilters.bundle = []
    dataFilters.status = []
    dataFilters.searchValue = ''
    storeFilters()
  }

  const setNewViewFilter = () => {
    viewFilters.isVerboseList = true
    storeFilters()
  }

  const setFilters = () => {
    const dataFiltersData = localStorage.getItem(checklistDataFilterKey.value)
    if (dataFiltersData) {
      const localDataFilters = JSON.parse(dataFiltersData) as DataFilters
      dataFilters.onlyShowSelectedDetails = localDataFilters.onlyShowSelectedDetails
      dataFilters.sortBy = localDataFilters.sortBy
      dataFilters.season = localDataFilters.season
      dataFilters.source = localDataFilters.source
      dataFilters.room = localDataFilters.room
      dataFilters.bundle = localDataFilters.bundle
      dataFilters.status = localDataFilters.status
      dataFilters.searchValue = localDataFilters.searchValue
    } else {
      setNewDataFilter()
    }

    const viewFiltersData = localStorage.getItem(checklistViewFilterKey.value)
    if (viewFiltersData) {
      const localViewFilters = JSON.parse(viewFiltersData) as ViewFilters
      viewFilters.isVerboseList = localViewFilters.isVerboseList
    } else {
      setNewViewFilter()
    }
  }

  const storeGlobalFilters = () => {
    localStorage.setItem(checklistGlobalFilterKey.value, JSON.stringify(globalFilters))
  }

  const setNewGlobalFilters = () => {
    globalFilters.farmCaveType = []
    globalFilters.lastUpdated = new Date().toISOString()
    storeGlobalFilters()
  }

  const setGlobalFilters = () => {
    const globalFiltersData = localStorage.getItem(checklistGlobalFilterKey.value)

    if (globalFiltersData) {
      const localGlobalFilters = JSON.parse(globalFiltersData) as GlobalFilters
      globalFilters.farmCaveType = localGlobalFilters.farmCaveType
      globalFilters.lastUpdated = localGlobalFilters.lastUpdated
    } else {
      setNewGlobalFilters()
    }
  }

  const setChecklistData = () => {
    const checklistdata = localStorage.getItem(checklistStorageKey.value)
    if (checklistdata) {
      const localChecklistData = JSON.parse(checklistdata) as Checklist
      checklistData.ownerId = localChecklistData.ownerId
      checklistData.listName = localChecklistData.listName
      checklistData.listId = localChecklistData.listId
      checklistData.checklistData = localChecklistData.checklistData
      checklistData.lastUpdated = localChecklistData.lastUpdated
    }
  }

  const createNewCheckList = () => {
    const newListId = window.crypto.randomUUID()

    checklistData.ownerId = userData.userId
    checklistData.listName = `My List ${userData.listIds.length}`
    checklistData.listId = newListId
    checklistData.checklistData = []
    checklistData.lastUpdated = new Date().toISOString()

    storeChecklistData()
    setNewGlobalFilters()

    userData.currentListId = newListId
    userData.listIds.push(newListId)

    storeUserData()
  }

  const createNewCheckListData = () => {
    createNewCheckList()
    setNewViewFilter()
    setNewDataFilter()
  }

  const loadData = (listId?: string) => {
    const localUserDataStr = localStorage.getItem(STARDEW_COMMUNITY_LIST_USER_STORAGE_KEY)

    console.log('localUserDataStr', localUserDataStr)

    if (localUserDataStr) {
      const localUserData = JSON.parse(localUserDataStr) as UserData
      console.log('localUserDatalocalUserData', localUserData)

      userData.currentListId = localUserData.currentListId
      userData.userId = localUserData.userId
      userData.listIds = localUserData.listIds

      if (listId) {
        if (userData.listIds.includes(listId)) {
          userData.currentListId = listId
          setChecklistData()
          setGlobalFilters()
        }

        //TODO: Pull Data Online
        // If current list id is set then check whether local data is latest or online data, then update based on that

        // If no data to pull then get from listIds
        // if listIds is empty then create a new list
      }

      if (!userData.currentListId) {
        if (userData.listIds.length == 0) {
          createNewCheckList()
        } else {
          userData.currentListId = userData.listIds[0]
          setChecklistData()
        }
      } else {
        setChecklistData()
      }
    } else {
      userData.currentListId = ''
      userData.userId = window.crypto.randomUUID()
      userData.listIds = []

      if (listId) {
        // Pull Online

        // if no list pulled online then create new list
        if (!userData.currentListId) {
          createNewCheckList()
        }
      } else {
        createNewCheckList()
      }

      storeUserData()
    }

    setFilters()
  }

  const statusItems = computed(() =>
    checklistData.checklistData.reduce(
      (acc, item) => ({ ...acc, [item.bundleItem]: item }),
      {} as Record<string, ChecklistItem>
    )
  )

  const setStatus = (bundleItem: string, status: CheckListStatus) => {
    const localStatusItems: ChecklistItem[] = [
      ...Object.values(statusItems),
      { bundleItem, status, lastUpdated: new Date().toISOString() }
    ]
    checklistData.checklistData = localStatusItems
    storeChecklistData()
  }

  const statusSort = (a: RoomBundleItem, b: RoomBundleItem) =>
    (statusItems.value[a.id]?.status ?? CheckListStatus.ToDo).localeCompare(
      statusItems.value[b.id]?.status ?? CheckListStatus.ToDo
    )

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
  const checklist = computed(() => {
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
          .reduce((items, sortBy) => items.sort(SortFunctions[sortBy]), finalBundleItem)
      : finalBundleItem
  })

  // Save the data filters to local storage
  watch(dataFilters, () => {
    storeFilters()
  })

  watch(viewFilters, () => {
    storeFilters()
  })

  // Save the data filters to local storage
  watch(globalFilters, () => {
    storeFilters()
  })

  watch(checklistData, () => {
    storeChecklistData()
    console.log('betterrrlife')
    reloadListNames()
  })

  watch(userData, () => {
    storeUserData()
  })

  const reloadData = () => {
    setChecklistData()
    setFilters()
    setGlobalFilters()
  }

  return {
    statusItems,
    checklist,
    checklistData,
    userData,
    reloadListNames,
    listNames,
    reloadData,
    loadData,
    setStatus,
    createNewCheckListData,
    dataFilters,
    globalFilters,
    viewFilters
  }
})
