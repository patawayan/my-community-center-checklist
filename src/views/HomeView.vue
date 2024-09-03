<script setup lang="ts">
import HomeList from '../components/Home/HomeList.vue'
import HomeHeader from '../components/Home/HomeHeader.vue'
import { eventBus } from '@/utils/eventBus'
import { useUserDataStore } from '@/stores/userData'
import { useRoute } from 'vue-router'
import PixelButton from '@/components/common/PixelButton.vue'
import DevInfoModal from '@/components/modal/DevInfoModal.vue'

const userData = useUserDataStore()
const route = useRoute()

userData.loadData(route.params?.listId?.toString() ?? undefined)
</script>

<template>
  <main class="flex relative flex-col max-h-screen" @click="(e) => eventBus.emit('listClick', e)">
    <HomeHeader />
    <HomeList class="flex-grow overflow-scroll" @scroll="(e) => eventBus.emit('listScroll', e)" />

    <DevInfoModal />
  </main>
</template>
