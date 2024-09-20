<script setup lang="ts">
import { type RoomBundleItem } from '@/data'

import { statusBgColor, useListItem } from '../useListitem'
import StatusDropdown from '@/components/common/input/StatusDropdown.vue'
import PixelTitle from '@/components/common/PixelTitle.vue'
import SpriteSourceCompact from './SpriteSourceCompact.vue'
import RoomBundleTag from '../RoomBundleTag.vue'

const props = defineProps({
  item: {
    type: Object as () => RoomBundleItem,
    required: true
  }
})

defineEmits(['item-click'])

const { doShowItem, itemStatus, isNotNeeded } = useListItem(props.item)
</script>

<template>
  <div class="w-full relative" v-if="doShowItem">
    <div
      :class="[
        'w-full pt-2 pb-5 md:pb-2 px-5 pixel-shadow flex lg:flex-row flex-col items-center gap-2 lg:gap-5',
        statusBgColor[itemStatus]
      ]"
    >
      <SpriteSourceCompact
        class="basis-3/5 lg:hidden"
        :item="item"
        @item-click="$emit('item-click')"
      />
      <div class="w-full flex gap-5 items-center justify-between lg:justify-center">
        <RoomBundleTag class="lg:basis-[23%]" :item="item" />
        <SpriteSourceCompact
          class="basis-3/5 hidden lg:flex"
          :item="item"
          @item-click="$emit('item-click')"
        />

        <div class="lg:basis-1/6 flex justify-end">
          <StatusDropdown v-model="itemStatus" />
        </div>
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
å

<style scoped></style>
