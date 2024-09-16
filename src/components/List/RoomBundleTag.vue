<script setup lang="ts">
import { type RoomBundleItem } from '@/data'
import dropdownArrow from '@/assets/images/dropdown_arrow.png'

import RoomTag from '@/components/common/tags/RoomTag.vue'
import BundleTag from '@/components/common/tags/BundleTag.vue'

defineProps({
  item: {
    type: Object as () => RoomBundleItem,
    required: true
  }
})
</script>

<template>
  <div class="flex items-center gap-2">
    <RoomTag :room="item.room" />
    <img :src="dropdownArrow" alt="dropdown arrow" class="-rotate-90 w-4 h-2" />
    <BundleTag :bundle="item.bundle" />
  </div>
</template>
å

<style scoped></style>
