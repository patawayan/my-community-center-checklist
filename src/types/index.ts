import type { BundleTypes, ForagingLocations, RoomTypes, Seasons, SourceType } from '@/data/types'
import type { SortTypes } from '@/stores/userData'

export enum CheckListStatus {
  ToDo = 'To Do',
  InProgress = 'In Progress',
  Acquired = 'Acquired',
  Submitted = 'Submitted'
}

export type ChecklistItem = {
  bundleItem: string
  status: CheckListStatus
}

export type ChecklistItems = ChecklistItem[]

export type Checklist = {
  listId?: string
  listName: string
  ownerId: string
}

export type UserData = {
  userId: string
  currentListId: string
  listIds: string[]
}

export type GlobalFilters = {
  farmCaveType: ForagingLocations[]
  lastUpdated: string
}

export type ViewFilters = {
  isVerboseList: boolean
}

export type DataFilters = {
  onlyShowSelectedDetails: boolean
  sortBy: SortTypes[]
  season: Seasons[]
  source: SourceType[]
  room: RoomTypes[]
  bundle: BundleTypes[]
  status: CheckListStatus[]
  searchValue: string
}
