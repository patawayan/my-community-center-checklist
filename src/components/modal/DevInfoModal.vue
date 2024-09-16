<script setup lang="ts">
import PixelButton from '@/components/common/PixelButton.vue'
import ModalBody from '../common/ModalBody.vue'
import { ref } from 'vue'

const openDevInfo = ref(false)
</script>

<template>
  <PixelButton
    type="secondary"
    class="absolute bottom-20 md:bottom-2 left-2"
    @click="openDevInfo = true"
  >
    dev info
  </PixelButton>
  <ModalBody :is-open="openDevInfo" @close="openDevInfo = false">
    Look at me, I'm the dev info
  </ModalBody>
</template>
