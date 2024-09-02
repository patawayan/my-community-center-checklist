<script setup lang="ts">
import HomeList from '../components/Home/HomeList.vue'
import HomeHeader from '../components/Home/HomeHeader.vue'
import { eventBus } from '@/utils/eventBus'
</script>

<template>
  <main class="flex flex-col max-h-screen" @click="(e) => eventBus.emit('listClick', e)">
    <HomeHeader />
    <HomeList class="flex-grow overflow-scroll" @scroll="(e) => eventBus.emit('listScroll', e)" />
  </main>
</template>
