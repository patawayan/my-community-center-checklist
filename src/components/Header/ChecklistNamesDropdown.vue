<script setup lang="ts">
import PixelTitle from '@/components/common/PixelTitle.vue'
import { ref, watch } from 'vue'

import InputText from '../common/input/InputText.vue'
import { onClickOutside } from '@vueuse/core'
import InputDropdown from '../common/input/InputDropdown.vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'

const userDataStore = useAppStore()

const openNameEdit = ref(false)
const newListName = ref<string>('')

const listNameInput = ref(null)
onClickOutside(listNameInput, () => {
  if (userDataStore.isOwner) {
    userDataStore.checklistData.listName = newListName.value
  }
  openNameEdit.value = false
})

const checklistData = storeToRefs(userDataStore).checklistData

const currentListId = ref<string[]>([checklistData.value.listId ?? ''])
watch(currentListId, (newVal) => {
  userDataStore.userData.currentListId = newVal[0]
  userDataStore.reloadData()
})

watch(checklistData.value, (newVal) => {
  if (!currentListId.value || newVal.listId !== currentListId.value[0]) {
    currentListId.value = [newVal.listId]
  }
})
</script>

<template>
  <div>
    <InputDropdown
      v-if="userDataStore.listNames.length > 1 && !openNameEdit"
      :options="
        userDataStore.listNames.map((name) => {
          if (name.value === userDataStore.userData.currentListId) {
            return { label: userDataStore.checklistData.listName, value: name.value }
          }
          return name
        })
      "
      :inner-box-class="userDataStore.isOwner ? 'hover:cursor-text' : 'hover:cursor-default'"
      v-model="currentListId"
      @subclick="
        (event) => {
          event.stopPropagation()
          if (userDataStore.isOwner) {
            newListName = userDataStore.checklistData.listName
            openNameEdit = true
          }
        }
      "
      disable-unselect
    />
    <PixelTitle
      v-else-if="!openNameEdit"
      :class="[userDataStore.isOwner ? 'hover:cursor-pointer' : 'hover:cursor-default']"
      @click="
        () => {
          if (userDataStore.isOwner) {
            newListName = userDataStore.checklistData.listName
            openNameEdit = true
          }
        }
      "
      >{{ userDataStore.checklistData.listName }}</PixelTitle
    >
    <InputText
      ref="listNameInput"
      v-else
      v-model="newListName"
      placeholder="New List Name"
      @keydown.enter="
        () => {
          if (userDataStore.isOwner) {
            userDataStore.checklistData.listName = newListName
          }
          openNameEdit = false
        }
      "
    />
  </div>
</template>

<style scoped>
header {
  border-bottom: 3px solid theme('colors.brown.700');
  box-shadow:
    inset 0px -6px 0px 0px theme('colors.brown.300'),
    inset 0px -12px 0px 0px theme('colors.brown.200');
}
</style>
