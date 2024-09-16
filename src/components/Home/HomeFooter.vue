<script setup lang="ts">
import PixelButton from '@/components/common/PixelButton.vue'
import { ref } from 'vue'
import ModalBody from '../common/ModalBody.vue'
import { useAppStore } from '@/stores/app'
import ChecklistNamesDropdown from '../Header/ChecklistNamesDropdown.vue'

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
