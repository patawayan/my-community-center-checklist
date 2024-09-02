<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import InputCheckbox from '../common/input/InputCheckbox.vue'
import InputDropdown from '../common/input/InputDropdown.vue'
import { ForagingLocations, RoomBundleMap, RoomTypes, Seasons, SourceType } from '@/data/types'
import InputText from '../common/input/InputText.vue'
import { SortTypes, useUserDataStore } from '@/stores/userData'
import { CheckListStatus } from '@/types'

const userData = useUserDataStore()

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
</script>

<template>
  <div class="w-full flex gap-2">
    <div class="flex flex-col gap-2 basis-1/5 max-w-[20%]">
      <InputCheckbox v-model="userData.viewFilters.isVerboseList" class="max-w-full"
        >Show All Details</InputCheckbox
      >
      <InputCheckbox v-model="userData.dataFilters.onlyShowSelectedDetails" class="pl-2 w-full"
        >Only Show Details Selected</InputCheckbox
      >
    </div>
    <div class="flex flex-col gap-2 basis-1/5 max-w-[20%]">
      <InputDropdown
        v-model="userData.globalFilters.farmCaveType"
        class="w-full"
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
    </div>
    <div class="flex flex-col gap-2 basis-1/5 max-w-[20%]">
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
    </div>
    <div class="flex flex-col gap-2 basis-1/5 max-w-[20%]">
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

    <div class="flex flex-col gap-2 basis-1/5 max-w-[20%]">
      <InputText
        v-model="searchValue"
        placeholder="Search..."
        @keydown.enter="userData.dataFilters.searchValue = searchValue"
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
  </div>
</template>

<style scoped></style>
