<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import InputCheckbox from '../common/input/InputCheckbox.vue'
import InputDropdown from '../common/input/InputDropdown.vue'
import { ForagingLocations, RoomBundleMap, RoomTypes, Seasons, SourceType } from '@/data/types'
import InputText from '../common/input/InputText.vue'
import { CheckListStatus } from '@/types'
import { SortTypes } from '@/utils/sort'
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'

const userData = useAppStore()

const computedBundleOptions = computed(() => {
  return userData.dataFilters.room.length > 0
    ? [
        'All Bundles',
        ...userData.dataFilters.room.flatMap((room) => Object.values(RoomBundleMap[room]))
      ].map((val) => ({
        label: val,
        value: val
      }))
    : ['All Bundles', ...Object.values(RoomBundleMap).flatMap((room) => Object.values(room))].map(
        (val) => ({
          label: val,
          value: val
        })
      )
})

const searchValue = ref('')

const viewFilters = storeToRefs(userData).viewFilters
watch(viewFilters.value, (newVal) => {
  if (!newVal.isVerboseList) {
    userData.dataFilters.onlyShowSelectedDetails = false
  }
})
</script>

<template>
  <div class="w-full flex gap-2">
    <div class="flex flex-col gap-2 basis-1/5 max-w-[20%]">
      <InputCheckbox v-model="userData.viewFilters.isVerboseList" class="max-w-full">
        Show All Details
      </InputCheckbox>
      <InputCheckbox
        v-if="userData.viewFilters.isVerboseList"
        v-model="userData.dataFilters.onlyShowSelectedDetails"
        class="pl-2 w-full"
      >
        Only Show Details Selected
      </InputCheckbox>
      <InputCheckbox v-model="userData.dataFilters.hideUnecessaryItems" class="w-full">
        Hide Done Items
      </InputCheckbox>
    </div>
    <div class="flex gap-2 basis-4/5 max-w-[80%]">
      <div class="flex flex-col gap-2 basis-1/3 max-w-[33%]">
        <InputDropdown
          v-model="userData.globalFilters.farmCaveType"
          class="w-full"
          :disabled="!userData.isOwner"
          :options="
            [ForagingLocations.FruitBatFarmCave, ForagingLocations.MushroomFarmCave].map(
              (status) => ({
                label: status,
                value: status
              })
            )
          "
          placeholder="Farm Cave Type"
        />
        <InputDropdown
          v-model="userData.dataFilters.sortBy"
          class="w-full"
          multiple
          :options="
            Object.values(SortTypes).map((status) => ({
              label: status,
              value: status
            }))
          "
          placeholder="Sort by"
        />
        <InputDropdown
          v-model="userData.dataFilters.status"
          multiple
          :options="
            Object.values(CheckListStatus).map((status) => ({
              label: status,
              value: status
            }))
          "
          placeholder="Status"
        />
      </div>
      <div class="flex flex-col gap-2 basis-1/3 max-w-[33%]">
        <InputDropdown
          v-model="userData.dataFilters.room"
          class="max-w-full"
          multiple
          :options="
            Object.values(RoomTypes).map((val) => ({
              label: val,
              value: val
            }))
          "
          @afterChange="userData.dataFilters.bundle = []"
          placeholder="Room"
        />
        <InputDropdown
          v-model="userData.dataFilters.bundle"
          class="w-full"
          selectAll="All Bundles"
          :options="computedBundleOptions"
          placeholder="Bundle"
        />
        <InputDropdown
          v-model="userData.dataFilters.season"
          :selectAll="Seasons.AllSeasons"
          class="w-full"
          :options="
            Object.values(Seasons).map((status) => ({
              label: status,
              value: status
            }))
          "
          placeholder="Season"
        />
      </div>

      <div class="flex flex-col gap-2 basis-1/3 max-w-[34%]">
        <InputText
          v-model="searchValue"
          placeholder="Search..."
          @keydown.enter="userData.dataFilters.searchValue = searchValue"
        />
        <InputDropdown
          v-model="userData.dataFilters.source"
          class="w-full"
          multiple
          :options="
            Object.values(SourceType).map((status) => ({
              label: status,
              value: status
            }))
          "
          placeholder="Source"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
