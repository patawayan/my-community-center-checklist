<script setup lang="ts">
import { type RoomBundleItem } from '@/data'
import RoomTag from '../common/tags/RoomTag.vue'
import BundleTag from '../common/tags/BundleTag.vue'
import dropdownArrow from '@/assets/images/dropdown_arrow.png'
import PixelText from '../common/PixelText.vue'
import { computed } from 'vue'
import { SourceType } from '@/data/types'
import StatusDropdown from '../common/input/StatusDropdown.vue'
import SeasonTag from '../common/tags/SeasonTag.vue'
import SourceTag from '../common/tags/SourceTag.vue'
import { qualityImgSource, statusBgColor, useListItem } from './useListitem'
import PixelTitle from '../common/PixelTitle.vue'
import { useAppStore } from '@/stores/app'

const props = defineProps({
  item: {
    type: Object as () => RoomBundleItem,
    required: true
  }
})

defineEmits(['item-click'])

const { itemStatus, isNotNeeded, itemSprite } = useListItem(props.item)

const itemSeasons = computed(() => {
  return [...new Set(props.item.item.sourceDetails.flatMap((source) => source.seasons))]
})

const itemSources = computed(() => {
  return [
    ...new Set(
      props.item.item.sourceDetails.flatMap((source) =>
        source.sources.flatMap((source) => source.__typename as SourceType)
      )
    )
  ]
})

const userData = useAppStore()
</script>

<template>
  <div class="w-full relative" v-if="!isNotNeeded || !userData.dataFilters.hideUnecessaryItems">
    <div
      :class="['w-full py-2 px-5 pixel-shadow flex items-center gap-5', statusBgColor[itemStatus]]"
    >
      <div class="flex basis-[23%] items-center gap-2">
        <RoomTag :room="item.room" />
        <img :src="dropdownArrow" alt="dropdown arrow" class="-rotate-90 w-4 h-2" />
        <BundleTag :bundle="item.bundle" />
      </div>
      <div
        class="basis-1/5 flex gap-3 items-center hover:cursor-pointer hover:opacity-70"
        @click="
          () => {
            if (!isNotNeeded) {
              $emit('item-click')
            }
          }
        "
      >
        <div class="w-10 relative">
          <img
            v-if="item.quality"
            :src="qualityImgSource[item.quality]"
            :alt="`${item.quality} Quality`"
            class="w-full absolute bottom-0"
          />
          <img :src="itemSprite.image" alt="dropdown arrow" class="w-full" />
        </div>
        <PixelText v-if="item.quality" size="2xl">{{ item.quality }} Quality</PixelText>
        <PixelText size="2xl" class="flex-grow">{{ itemSprite.name }}</PixelText>
        <PixelText v-if="item.quantity">x {{ item?.quantity }}</PixelText>
      </div>
      <div class="flex gap-3 flex-col flex-grow w-0 items-center justify-center">
        <div class="flex gap-3">
          <SeasonTag v-for="season in itemSeasons" :key="season" :season="season" />
        </div>
        <div class="flex gap-3">
          <SourceTag v-for="src in itemSources" :key="src" :source="src" />
        </div>
      </div>
      <div class="basis-1/6 flex justify-end">
        <StatusDropdown v-model="itemStatus" />
      </div>
      <div
        v-if="isNotNeeded"
        class="absolute top-0 bottom-0 left-0 right-0 bg-grey-10 z-50 opacity-90"
      ></div>
    </div>
    <div class="absolute top-0 -left-1 flex items-center gap-2"></div>
    <div
      class="absolute top-0 bottom-0 left-0 right-0 min-w-full min-h-full flex"
      v-if="isNotNeeded"
    >
      <PixelTitle size="xl" class="flex-grow flex items-center justify-center">
        Bundle Completed. No longer needed.
      </PixelTitle>
    </div>
  </div>
</template>

<style scoped></style>
