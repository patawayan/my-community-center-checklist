<script setup lang="ts">
import PixelButton from '@/components/common/PixelButton.vue'
import ModalBody from '../common/ModalBody.vue'
import { useAppStore } from '@/stores/app'

const userDataStore = useAppStore()

defineProps({
  openNewListModal: Boolean
})
defineEmits(['close'])
</script>

<template>
  <ModalBody :isOpen="openNewListModal" @close="$emit('close')" title="New List">
    <div class="w-full flex flex-col gap-2">
      <PixelButton
        @click="
          () => {
            userDataStore.createNewCheckList()
            $emit('close')
          }
        "
        >Create a New List (does not affect current list)</PixelButton
      >

      <PixelButton
        v-if="userDataStore.isOwner"
        @click="
          () => {
            userDataStore.clearCurrentList()
            $emit('close')
          }
        "
        type="danger"
      >
        Clear Current List (cannot be undone!)
      </PixelButton>
      <PixelButton type="secondary" @click="$emit('close')">Cancel</PixelButton>
    </div>
  </ModalBody>
</template>

<style scoped></style>
