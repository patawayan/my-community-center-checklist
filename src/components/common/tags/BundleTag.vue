<script setup lang="ts">
import { computed } from 'vue'
import PixelTitle from '../PixelTitle.vue'
import PixelText from '../PixelText.vue'

const props = defineProps({
  bundle: {
    type: String,
    required: true
  }
})

const backgroundColor = computed(() => {
  switch (props.bundle) {
    case 'Spring Foraging Bundle':
      return 'bg-green-100'
    case 'Artisan Bundle':
      return 'bg-purple-100'
    default:
      return 'bg-gray-100'
  }
})
</script>

<template>
  <div :class="['p-2 pixel-shadow', backgroundColor]">
    <PixelText>{{ bundle }}</PixelText>
  </div>
</template>

<style scoped></style>
