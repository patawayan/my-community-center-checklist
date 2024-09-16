<script setup lang="ts">
import PixelTitle from '@/components/common/PixelTitle.vue'
import PixelButton from '@/components/common/PixelButton.vue'
import funnelIcon from '@/assets/images/funnel_icon.png'
import funnelIconX from '@/assets/images/funnel_icon_x.png'
import { ref } from 'vue'
import HomeFilters from './HomeFilters.vue'
import ModalBody from '../common/ModalBody.vue'
import { useAppStore } from '@/stores/app'
import ChecklistNamesDropdown from '../Header/ChecklistNamesDropdown.vue'

const userDataStore = useAppStore()

const isFilterOpen = ref(
  userDataStore.dataFilters.bundle.length > 0 ||
    userDataStore.dataFilters.room.length > 0 ||
    userDataStore.dataFilters.onlyShowSelectedDetails ||
    userDataStore.dataFilters.season.length > 0 ||
    userDataStore.dataFilters.source.length > 0 ||
    userDataStore.dataFilters.sortBy.length > 0 ||
    !!userDataStore.dataFilters.searchValue ||
    userDataStore.globalFilters.farmCaveType.length > 0
)

const openNewListModal = ref(false)
</script>

<template>
  <header class="bg-brown-100 flex flex-col gap-5 p-5">
    <div class="flex justify-between w-full">
      <PixelTitle size="2xl">My Community Center Checklist</PixelTitle>

      <div class="flex gap-3 w-max items-center">
        <ChecklistNamesDropdown class="hidden md:block" />

        <PixelButton @click="userDataStore.createDatabaseList()" class="hidden md:block">
          {{ userDataStore.checklistData.isOnline ? 'Copy Link to List' : 'Play with Friends!' }}
        </PixelButton>
        <PixelButton class="hidden md:block" @click="openNewListModal = true">
          New List!
        </PixelButton>

        <PixelButton class="w-10" @click="isFilterOpen = !isFilterOpen">
          <img v-if="!isFilterOpen" :src="funnelIcon" alt="filter icon" class="w-full" />
          <img v-else :src="funnelIconX" alt="filter icon" class="w-full" />
        </PixelButton>
      </div>
    </div>
    <HomeFilters v-if="isFilterOpen" />
    <ModalBody :isOpen="openNewListModal" @close="openNewListModal = false" title="New List">
      <div class="w-full flex flex-col gap-2">
        <PixelButton
          @click="
            () => {
              userDataStore.createNewCheckList()
              openNewListModal = false
            }
          "
          >Create a New List (does not affect current list)</PixelButton
        >
        <PixelButton type="danger">Clear Current List (cannot be undone!)</PixelButton>
        <PixelButton type="secondary" @click="openNewListModal = false">Cancel</PixelButton>
      </div>
    </ModalBody>
  </header>
</template>

<style scoped>
header {
  border-bottom: 3px solid theme('colors.brown.700');
  box-shadow:
    inset 0px -6px 0px 0px theme('colors.brown.300'),
    inset 0px -12px 0px 0px theme('colors.brown.200');
}
</style>
