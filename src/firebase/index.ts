import type { Checklist, ChecklistItems, GlobalFilters } from '@/types'
import { deleteApp, getApp, initializeApp, type FirebaseApp } from 'firebase/app'
import { child, get, getDatabase, ref, set } from 'firebase/database'

const firebaseConfig = {}

/**
 * ============ Firebase Functions ============
 */

const getFirebaseApp = () => {
  let app: FirebaseApp

  try {
    app = getApp()
  } catch (error) {
    app = initializeApp(firebaseConfig)
  }

  return app
}

const getRealtimeDatabase = () => {
  return getDatabase(getFirebaseApp())
}

const deleteFirebaseApp = () => {
  try {
    const app = getApp()
    deleteApp(app)
  } catch (error) {
    console.log('App does not exist')
  }
}

export const doesChecklistExist = async (listId: string) => {
  const dbRef = ref(getRealtimeDatabase())
  const snapshot = await get(child(dbRef, `checklist/${listId}`))

  const exists = snapshot.exists()

  if (!exists) {
    deleteFirebaseApp()
  }

  return exists
}

export const getChecklistRef = async (listId: string) => {
  const database = getRealtimeDatabase()
  return ref(database, 'checklist/' + listId)
}

export const getChecklistItemsRef = async (listId: string) => {
  const database = getRealtimeDatabase()
  return ref(database, 'checklist-items/' + listId)
}

export const getGlobalFilterRef = async (listId: string) => {
  const database = getRealtimeDatabase()
  return ref(database, 'global-filters/' + listId)
}

export const storeOnlineChecklistData = async (checkList: Checklist) => {
  const database = getRealtimeDatabase()
  set(ref(database, 'checklist/' + checkList.listId), {
    ...checkList
  })
}

export const storeOnlineChecklistListItems = async (
  listId: String,
  checkListItems: ChecklistItems
) => {
  const database = getRealtimeDatabase()
  set(ref(database, 'checklist-items/' + listId), [...checkListItems])
}

export const storeOnlineGlobalFilters = async (
  listId: string | undefined,
  globalFilter: GlobalFilters
) => {
  const database = getRealtimeDatabase()
  set(ref(database, 'global-filters/' + listId), {
    ...globalFilter
  })
}

export const createChecklist = async (
  checkList: Checklist,
  checkListItems: ChecklistItems,
  globalFilters: GlobalFilters
) => {
  const listId = checkList.listId

  storeOnlineChecklistData(checkList)
  storeOnlineChecklistListItems(listId, checkListItems)
  storeOnlineGlobalFilters(listId, globalFilters)
}
