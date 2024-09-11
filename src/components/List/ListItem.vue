<script setup lang="ts">
import RoomTag from '../common/tags/RoomTag.vue'
import BundleTag from '../common/tags/BundleTag.vue'
import dropdownArrow from '@/assets/images/dropdown_arrow.png'
import PixelText from '../common/PixelText.vue'
import SourceDetails from '../common/tags/SourceDetails.vue'
import StatusDropdown from '../common/input/StatusDropdown.vue'
import PixelTitle from '../common/PixelTitle.vue'
import { qualityImgSource, statusBgColor, useListItem } from './useListitem'
import type { RoomBundleItem } from '@/data'
import { useAppStore } from '@/stores/app'

const props = defineProps({
  item: {
    type: Object as () => RoomBundleItem,
    required: true
  }
})

const { itemStatus, isNotNeeded, itemSprite } = useListItem(props.item)

const userData = useAppStore()
</script>

<template>
  <div
    :class="['w-full relative', isNotNeeded ? ' pt-0' : ' pt-2']"
    v-if="!isNotNeeded || !userData.dataFilters.hideUnecessaryItems"
  >
    <div
      :class="['w-full py-3 px-10 pixel-shadow flex items-center gap-5', statusBgColor[itemStatus]]"
    >
      <div class="basis-1/5 flex gap-3 items-center">
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
      <div class="flex gap-3 flex-grow w-0 justify-center">
        <SourceDetails
          v-for="(source, index) in item.item.sourceDetails"
          :detail="source"
          :key="index"
        />
      </div>
      <div class="basis-1/6 flex justify-end">
        <StatusDropdown v-model="itemStatus" />
      </div>
    </div>
    <div
      :class="['absolute flex items-center gap-2', isNotNeeded ? 'top-1 left-1' : 'top-0 -left-1']"
    >
      <RoomTag :room="item.room" />
      <img :src="dropdownArrow" alt="dropdown arrow" class="-rotate-90 w-4 h-2" />
      <BundleTag :bundle="item.bundle" />
    </div>
    <div
      v-if="isNotNeeded"
      class="absolute top-0 bottom-0 left-0 right-0 bg-grey-10 opacity-90 flex min-w-full min-h-full"
    >
      <PixelTitle size="xl" class="flex-grow flex items-center justify-center">
        Bundle Completed. No longer needed.
      </PixelTitle>
    </div>
  </div>
</template>

<style scoped></style>
