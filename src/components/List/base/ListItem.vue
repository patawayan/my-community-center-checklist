<script setup lang="ts">
import StatusDropdown from '../../common/input/StatusDropdown.vue'
import PixelTitle from '../../common/PixelTitle.vue'
import { statusBgColor, useListItem } from '../useListitem'
import type { RoomBundleItem } from '@/data'
import SpriteSource from './SpriteSource.vue'
import RoomBundleTag from '../RoomBundleTag.vue'

const props = defineProps({
  item: {
    type: Object as () => RoomBundleItem,
    required: true
  }
})

const { doShowItem, itemStatus, isNotNeeded, isListItemLoading } = useListItem(props.item)
</script>

<template>
  <div :class="['w-full relative', isNotNeeded ? ' pt-0' : 'pt-0 md:pt-2']" v-if="doShowItem">
    <div
      :class="[
        'w-full pt-3 pb-5 lg:pb-3 px-5 lg:px-10 pixel-shadow flex flex-col lg:flex-row items-center gap-5',
        statusBgColor[itemStatus]
      ]"
    >
      <SpriteSource :item="item" />

      <div class="lg:basis-1/6 w-full flex gap-5 items-center justify-between lg:justify-center">
        <RoomBundleTag :class="['lg:hidden ']" :item="item" />
        <StatusDropdown v-model="itemStatus" :disabled="isListItemLoading" />
      </div>
    </div>
    <RoomBundleTag
      :class="[
        'hidden lg:flex absolute items-center gap-2',
        isNotNeeded ? 'top-1 left-1' : 'top-0 -left-1'
      ]"
      :item="item"
    />
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
