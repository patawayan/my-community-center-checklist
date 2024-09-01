<script lang="ts">
const SourceColors: Record<SourceType, string> = {
  [SourceType.AnimalProducts]: 'bg-brown-600 text-brown-50',
  [SourceType.ArtisanGoods]: 'bg-purple-300 text-white',
  [SourceType.Buying]: 'bg-yellow-200 text-white',
  [SourceType.Combat]: 'bg-red-300 text-white',
  [SourceType.Cooking]: 'bg-blue-100 text-black',
  [SourceType.CrabPot]: 'bg-red-100 text-red-300',
  [SourceType.Farming]: 'bg-green-200 text-green-700',
  [SourceType.Fishing]: 'bg-blue-400 text-blue-100',
  [SourceType.Foraging]: 'bg-green-700 text-white',
  [SourceType.Mining]: 'bg-grey-100 text-white',
  [SourceType.Other]: 'bg-purple-100 text-black'
}
export default {}
</script>

<script setup lang="ts">
import { SourceType } from '@/data/types'
import type { PropType } from 'vue'
import PixelText from '../PixelText.vue'

defineProps({
  source: {
    type: String as PropType<SourceType>,
    required: true
  }
})
</script>

<template>
  <div :class="['p-1 pixel-shadow rounded', SourceColors[source]]">
    <PixelText>{{ source.replace(/([A-Z])/g, ' $1').trim() }}</PixelText>
  </div>
</template>

<style scoped></style>
