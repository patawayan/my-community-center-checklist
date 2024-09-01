<script lang="ts">
const roomColor: Record<string, string> = {
  'Crafts Room': 'bg-green-100',
  Pantry: 'bg-orange-100',
  'Fish Tank': 'bg-blue-100',
  'Boiler Room': 'bg-gray-100',
  'Bulletin Board': 'bg-red-100',
  Vault: 'bg-yellow-100',
  'Abandoned JojaMart': 'bg-ice-100'
}

export default {}
</script>

<script setup lang="ts">
import type { PropType } from 'vue'
import PixelTitle from '../PixelTitle.vue'

defineProps({
  room: {
    type: String as PropType<keyof typeof roomColor>,
    required: true
  }
})
</script>

<template>
  <div :class="['p-2 pixel-shadow', roomColor[room]]">
    <PixelTitle>{{ room }}</PixelTitle>
  </div>
</template>

<style scoped></style>
