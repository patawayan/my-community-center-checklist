<script setup lang="ts">
import HomeList from '../components/Home/HomeList.vue'
import HomeHeader from '../components/Home/HomeHeader.vue'
import { eventBus } from '@/utils/eventBus'
import { useRoute } from 'vue-router'
import DevInfoModal from '@/components/modal/DevInfoModal.vue'
import { useAppStore } from '@/stores/app'
import LoadingComponent from '@/components/common/LoadingComponent.vue'
import HomeFooter from '@/components/Home/HomeFooter.vue'

const userData = useAppStore()
const route = useRoute()

userData.loadData(route.params?.listId?.toString() ?? undefined)
</script>

<template>
  <main
    class="flex relative flex-col min-h-screen h-full max-h-screen"
    @click="(e) => eventBus.emit('listClick', e)"
  >
    <HomeHeader />
    <HomeList
      class="h-0 flex-grow overflow-scroll"
      @scroll="(e) => eventBus.emit('listScroll', e)"
    />

    <HomeFooter />

    <LoadingComponent />
    <DevInfoModal />
  </main>
</template>
