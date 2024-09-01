<script lang="ts">
const seasonColor: Record<Seasons, string> = {
  Spring: 'bg-green-200 text-green-700',
  Summer: 'bg-yellow-200 text-yellow-700',
  Fall: 'bg-orange-200 text-orange-700',
  Winter: 'bg-blue-200 text-blue-700',
  'All Seasons': 'bg-purple-200 text-purple-500'
}

export default {}
</script>

<script setup lang="ts">
import type { PropType } from 'vue'
import PixelTitle from '../PixelTitle.vue'
import type { Seasons } from '@/data/types'

defineProps({
  season: {
    type: String as PropType<Seasons>,
    required: true
  }
})
</script>

<template>
  <div :class="['p-2 pixel-shadow rounded', seasonColor[season]]">
    <PixelTitle>{{ season }}</PixelTitle>
  </div>
</template>

<style scoped></style>
