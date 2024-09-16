import type { Checklist, ChecklistItems, GlobalFilters } from '@/types'
import { fetchGet, fetchPost } from '@/utils/fetch'
import { deleteApp, getApp, initializeApp, type FirebaseApp } from 'firebase/app'
import { getDatabase, ref } from 'firebase/database'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  databaseURL: import.meta.env.VITE_FIREBASE_DB_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
}

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

// ------------------Calls to service------------------

export const doesChecklistExist = async (listId: string) => {
  const { exists = false } = await fetchGet(`exist?listId=${listId}`)

  if (!exists) {
    deleteFirebaseApp()
  }

  console.log('doesChecklistExist exists:', exists)

  return exists
}

export const createChecklist = async (
  checklist: Checklist,
  checklistItems: ChecklistItems,
  globalFilters: GlobalFilters
) => {
  const response = await fetchPost('create', {
    checklist,
    checklistItems,
    globalFilters
  })

  console.log('createChecklist response:', response)
}

export const storeOnlineChecklistData = async (checklist: Checklist) => {
  const response = await fetchPost('checklist', {
    checklist
  })
  console.log('storeOnlineChecklistData response:', response)
}

export const storeOnlineChecklistListItems = async (
  listId: String,
  checklistItems: ChecklistItems
) => {
  console.log('storeOnlineChecklistListItems listId:', checklistItems)
  const response = await fetchPost('items', {
    listId,
    checklistItems
  })

  console.log('storeOnlineChecklistItemsData response:', response)
}

export const storeOnlineGlobalFilters = async (
  listId: string | undefined,
  globalFilter: GlobalFilters
) => {
  const response = await fetchPost('filters', {
    listId,
    globalFilter
  })

  console.log('storeOnlineGlobalFilters response:', response)
}
