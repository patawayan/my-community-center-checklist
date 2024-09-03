<script setup lang="ts">
import PixelTitle from '@/components/common/PixelTitle.vue'
import PixelButton from '@/components/common/PixelButton.vue'
import funnelIcon from '@/assets/images/funnel_icon.png'
import funnelIconX from '@/assets/images/funnel_icon_x.png'
import { ref } from 'vue'
import HomeFilters from './HomeFilters.vue'
import { useUserDataStore } from '@/stores/userData'
import ModalBody from '../common/ModalBody.vue'
import InputText from '../common/input/InputText.vue'
import { onClickOutside } from '@vueuse/core'
import InputDropdown from '../common/input/InputDropdown.vue'

const userData = useUserDataStore()

const isFilterOpen = ref(
  userData.dataFilters.bundle.length > 0 ||
    userData.dataFilters.room.length > 0 ||
    userData.dataFilters.onlyShowSelectedDetails ||
    userData.dataFilters.season.length > 0 ||
    userData.dataFilters.source.length > 0 ||
    userData.dataFilters.sortBy.length > 0 ||
    !!userData.dataFilters.searchValue ||
    userData.globalFilters.farmCaveType.length > 0
)

const openNewListModal = ref(false)

const openNameEdit = ref(false)
const newListName = ref<string>('')

const listNameInput = ref(null)
onClickOutside(listNameInput, () => {
  openNameEdit.value = false
})
</script>

<template>
  <header class="bg-brown-100 flex flex-col gap-5 p-5">
    <div class="flex justify-between w-full">
      <PixelTitle size="2xl">My Community Center Checklist</PixelTitle>

      <div class="flex gap-3 items-center">
        <InputText
          ref="listNameInput"
          v-if="openNameEdit"
          v-model="newListName"
          placeholder="New List Name"
          @keydown.enter="
            () => {
              userData.checklistData.listName = newListName
              openNameEdit = false
            }
          "
        />
        <PixelTitle
          v-else
          class="hover:cursor-pointer"
          @click="
            () => {
              newListName = userData.checklistData.listName
              openNameEdit = true
            }
          "
          >{{ userData.checklistData.listName }}</PixelTitle
        >
        <PixelButton> Play with Friends! </PixelButton>
        <PixelButton @click="openNewListModal = true"> New List! </PixelButton>
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
              userData.createNewCheckListData()
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
