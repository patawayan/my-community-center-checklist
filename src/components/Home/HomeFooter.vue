<script setup lang="ts">
import PixelButton from '@/components/common/PixelButton.vue'
import { ref } from 'vue'
import { useAppStore } from '@/stores/app'
import ChecklistNamesDropdown from '../Header/ChecklistNamesDropdown.vue'
import NewListModal from '../modal/NewListModal.vue'

const userDataStore = useAppStore()

const openNewListModal = ref(false)
</script>

<template>
  <footer class="bg-brown-100 flex flex-col gap-5 pt-3 p-2 md:hidden">
    <div class="flex justify-end w-full gap-3 items-center">
      <ChecklistNamesDropdown />

      <PixelButton @click="userDataStore.createDatabaseList()">
        {{ userDataStore.checklistData.isOnline ? 'Copy Link to List' : 'Play with Friends!' }}
      </PixelButton>
      <PixelButton @click="openNewListModal = true"> New List! </PixelButton>
    </div>

    <NewListModal :openNewListModal="openNewListModal" @close="openNewListModal = false" />
  </footer>
</template>

<style scoped>
footer {
  border-top: 3px solid theme('colors.brown.700');
  box-shadow:
    inset 0px 6px 0px 0px theme('colors.brown.300'),
    inset 0px 12px 0px 0px theme('colors.brown.200');
}
</style>
