/**
 * Local storage utility functions
 */

import type {
  Checklist,
  ChecklistItems,
  DataFilters,
  GlobalFilters,
  UserData,
  ViewFilters
} from '@/types'

export const STARDEW_COMMUNITY_LIST = {
  USER_STORAGE_KEY: '@stardew-my-community-list-user',
  LIST_STORAGE_KEY: '@stardew-my-community-list-list',
  LIST_ITEM_STORAGE_KEY: '@stardew-my-community-list-list-item',
  DATA_FILTERS_STORAGE_KEY: '@stardew-my-community-list-data-filters',
  VIEW_FILTERS_STORAGE_KEY: '@stardew-my-community-list-view-filters',
  GLOBAL_FILTERS_STORAGE_KEY: '@stardew-my-community-list-global-filters'
}

/** Get the storage key for the current checklist with the current list id */
const getChecklistStorageKey = (listId: string) =>
  `${STARDEW_COMMUNITY_LIST.LIST_STORAGE_KEY}-${listId}`

/** Get the storage key for the current checklist items with the current list id */
const getChecklistItemsStorageKey = (listId: string) =>
  `${STARDEW_COMMUNITY_LIST.LIST_ITEM_STORAGE_KEY}-${listId}`

/** Get the storage key for the current data filters with the current list id */
const getChecklistDataFilterKey = (listId: string) =>
  `${STARDEW_COMMUNITY_LIST.DATA_FILTERS_STORAGE_KEY}-${listId}`

/** Get the storage key for the current view filters with the current list id */
const getChecklistViewFilterKey = (listId: string) =>
  `${STARDEW_COMMUNITY_LIST.VIEW_FILTERS_STORAGE_KEY}-${listId}`

/** Get the storage key for the current global filters with the current list id */
const getChecklistGlobalFilterKey = (listId: string) =>
  `${STARDEW_COMMUNITY_LIST.GLOBAL_FILTERS_STORAGE_KEY}-${listId}`

export const getLocalCheckListData = (listId: string) => {
  const data = localStorage.getItem(getChecklistStorageKey(listId))
  return data ? (JSON.parse(data) as Checklist) : null
}

export const storeLocalChecklistData = (checklistData: Checklist) => {
  localStorage.setItem(getChecklistStorageKey(checklistData.listId), JSON.stringify(checklistData))
}

export const getLocalChecklistListItem = (listId: string) => {
  const data = localStorage.getItem(getChecklistItemsStorageKey(listId))
  return data ? (JSON.parse(data) as ChecklistItems) : null
}

export const storeLocalChecklistListItem = (listId: string, checkListItems: ChecklistItems) => {
  localStorage.setItem(getChecklistItemsStorageKey(listId), JSON.stringify(checkListItems))
}

export const getLocalUserData = () => {
  const data = localStorage.getItem(STARDEW_COMMUNITY_LIST.USER_STORAGE_KEY)
  return data ? (JSON.parse(data) as UserData) : null
}

export const storeLocalUserData = (userData: UserData) => {
  localStorage.setItem(STARDEW_COMMUNITY_LIST.USER_STORAGE_KEY, JSON.stringify(userData))
}

export const getLocalDataFilters = (listId: string) => {
  const data = localStorage.getItem(getChecklistDataFilterKey(listId))
  return data ? (JSON.parse(data) as DataFilters) : null
}

export const storeLocalDataFilters = (listId: string, dataFilters: DataFilters) => {
  localStorage.setItem(getChecklistDataFilterKey(listId), JSON.stringify(dataFilters))
}

export const getLocalViewFilters = (listId: string) => {
  const data = localStorage.getItem(getChecklistViewFilterKey(listId))
  return data ? (JSON.parse(data) as ViewFilters) : null
}

export const storeLocalViewFilters = (listId: string, viewFilters: ViewFilters) => {
  localStorage.setItem(getChecklistViewFilterKey(listId), JSON.stringify(viewFilters))
}

export const getLocalGlobalFilters = (listId: string) => {
  const data = localStorage.getItem(getChecklistGlobalFilterKey(listId))
  return data ? (JSON.parse(data) as GlobalFilters) : null
}

export const storeLocalGlobalFilters = (listId: string, globalFilters: GlobalFilters) => {
  localStorage.setItem(getChecklistGlobalFilterKey(listId), JSON.stringify(globalFilters))
}
