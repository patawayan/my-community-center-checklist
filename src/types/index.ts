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

export type UserData = {
  listId?: string
  ownerId: string
  checklistData: ChecklistItem[]
}
