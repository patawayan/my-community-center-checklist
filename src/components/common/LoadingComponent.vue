<script setup lang="ts">
import { useAppStore } from '@/stores/app'

const appData = useAppStore()
</script>

<template>
  <div
    v-if="appData.isAppLoading"
    class="bg-black bg-opacity-50 fixed z-[1000] top-0 left-0 bottom-0 right-0"
  ></div>
</template>
