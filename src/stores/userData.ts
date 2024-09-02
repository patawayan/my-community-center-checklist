import { ref, computed, watch, reactive } from 'vue'
import { defineStore } from 'pinia'
import { CheckListStatus, type ChecklistItem, type UserData } from '@/types'
import { RoomBundleItems, Sprites, type RoomBundleItem } from '@/data'
import {
  ForagingLocations,
  SourceType,
  type BundleTypes,
  type RoomTypes,
  type Seasons
} from '@/data/types'

const STARDEW_COMMUNITY_LIST_STORAGE_KEY = '@stardew-my-community-list'
const STARDEW_COMMUNITY_LIST_DATA_FILTERS_STORAGE_KEY = '@stardew-my-community-list-data-filters'
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

interface DataFilters {
  onlyShowSelectedDetails: boolean
  sortBy: SortTypes[]
  season: Seasons[]
  source: SourceType[]
  room: RoomTypes[]
  bundle: BundleTypes[]
  status: CheckListStatus[]
  searchValue: string
}

const nameSort = (a: RoomBundleItem, b: RoomBundleItem) =>
  Sprites[a.item.spriteId].name.localeCompare(Sprites[b.item.spriteId].name)

/**
 * Store for user data
 */
export const useUserDataStore = defineStore('userData', () => {
  const isMultiplayer = ref(false)

  /**
   * Filters applied to all users (multiplayer)
   * Can only be edited by list owner
   */
  const globalFilters = reactive<{
    farmCaveType: ForagingLocations[]
  }>({
    farmCaveType: []
  })

  /**
   * Filters for the list viewing experience
   */
  const viewFilters = reactive({
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

  const userData = ref<UserData>({
    ownerId: '',
    checklistData: []
  })

  const storeUserData = () => {
    localStorage.setItem(STARDEW_COMMUNITY_LIST_STORAGE_KEY, JSON.stringify(userData.value))
  }

  const storeFilters = () => {
    localStorage.setItem(
      STARDEW_COMMUNITY_LIST_DATA_FILTERS_STORAGE_KEY,
      JSON.stringify(dataFilters)
    )
    localStorage.setItem(
      STARDEW_COMMUNITY_LIST_GLOBAL_FILTERS_STORAGE_KEY,
      JSON.stringify(globalFilters)
    )
  }

  const loadData = () => {
    const localUserData = localStorage.getItem(STARDEW_COMMUNITY_LIST_STORAGE_KEY)

    if (localUserData) {
      userData.value = JSON.parse(localUserData)
      if (userData.value?.listId) {
        isMultiplayer.value = true
      }
    } else {
      const localUserData = {
        ownerId: window.crypto.randomUUID(),
        checklistData: []
      }
      userData.value = { ...localUserData }
      isMultiplayer.value = false
      storeUserData()
    }
    const localDataFilters = localStorage.getItem(STARDEW_COMMUNITY_LIST_DATA_FILTERS_STORAGE_KEY)
    if (localDataFilters) {
      const parsedDataFilters = JSON.parse(localDataFilters)

      Object.keys(parsedDataFilters).forEach((key) => {
        // @ts-ignore
        dataFilters[key] = parsedDataFilters[key]
      })
    }

    const localGlobalFilters = localStorage.getItem(
      STARDEW_COMMUNITY_LIST_GLOBAL_FILTERS_STORAGE_KEY
    )
    if (localGlobalFilters) {
      const parsedGlobalFilters = JSON.parse(localGlobalFilters)

      Object.keys(parsedGlobalFilters).forEach((key) => {
        // @ts-ignore
        globalFilters[key] = parsedGlobalFilters[key]
      })
    }

    storeFilters()
  }

  const statusItems = computed(() =>
    userData.value?.checklistData.reduce(
      (acc, item) => ({ ...acc, [item.bundleItem]: item }),
      {} as Record<string, ChecklistItem>
    )
  )

  const setStatus = (bundleItem: string, status: CheckListStatus) => {
    const localStatusItems = { ...statusItems.value, [bundleItem]: { bundleItem, status } }
    userData.value.checklistData = Object.values(localStatusItems)
    storeUserData()
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
    console.log('asasasas', searchValue)
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

  // Save the data filters to local storage
  watch(globalFilters, () => {
    storeFilters()
  })

  return {
    statusItems,
    checklist,
    loadData,
    setStatus,
    dataFilters,
    globalFilters,
    viewFilters
  }
})
