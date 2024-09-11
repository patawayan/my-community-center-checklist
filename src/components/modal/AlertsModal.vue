<script setup lang="ts">
import ModalBody from '../common/ModalBody.vue'
import { useAlerts } from '@/stores/alert'
import PixelText from '../common/PixelText.vue'
import { storeToRefs } from 'pinia'
import PixelTitle from '../common/PixelTitle.vue'

const alertsStore = useAlerts()
const alerts = storeToRefs(alertsStore).alerts
const isOpen = storeToRefs(alertsStore).isOpen
</script>

<template>
  <ModalBody :is-open="isOpen" @close="alertsStore.closeAlert()">
    <div class="flex flex-col items-center">
      <PixelTitle class="text-brown-500">{{ alerts.title }}</PixelTitle>
      <PixelText size="2xl">{{ alerts.message }}</PixelText>
    </div>
  </ModalBody>
</template>
