<script setup lang="ts">
import PixelButton from '@/components/common/PixelButton.vue'
import ModalBody from '../common/ModalBody.vue'
import { ref } from 'vue'
import PixelText from '../common/PixelText.vue'

const openDevInfo = ref(false)
</script>

<template>
  <PixelButton
    type="secondary"
    class="absolute bottom-20 md:bottom-2 left-2"
    @click="openDevInfo = true"
  >
    info
  </PixelButton>
  <ModalBody :is-open="openDevInfo" @close="openDevInfo = false" title="Thanks for using my list!">
    <PixelText size="xl"> Implemented using Vue3 and hosted on Firebase </PixelText>
    <PixelText size="xl">
      All data and images taken from the
      <a
        href="https://stardewvalleywiki.com/Bundles"
        target="_blank"
        rel="noopener noreferrer"
        class="text-blue-500"
        >Stardew Valley Wiki</a
      >
    </PixelText>

    <br />
    <a
      href="https://ko-fi.com/pataway"
      target="_blank"
      rel="noopener noreferrer"
      class="text-blue-500"
      >buy me a coffee?</a
    >
  </ModalBody>
</template>
