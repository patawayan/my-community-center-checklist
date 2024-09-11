import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'

/**
 * Store to handle alerts
 */
export const useAlerts = defineStore('alerts', () => {
  /**
   * Alert Data
   */
  const alerts = reactive({
    title: '',
    message: ''
  })

  /**
   * Use to add/show an alert
   */
  const addAlert = (message: string, title?: string) => {
    alerts.title = title ?? ''
    alerts.message = message
  }

  /**
   * Clears the alert and closes the alert modal
   */
  const closeAlert = () => {
    alerts.title = ''
    alerts.message = ''
  }

  const isOpen = computed(() => !!alerts.message)

  return { alerts, isOpen, addAlert, closeAlert }
})
