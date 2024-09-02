<script setup lang="ts">
import type { PropType } from 'vue'
import PixelText from './PixelText.vue'
import type { SpriteType } from '@/data/sprites'

defineProps({
  sprite: {
    required: true,
    type: Object as PropType<SpriteType>
  }
})
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="w-8">
      <img :src="sprite.image" :alt="sprite.name" class="w-full" />
    </div>
    <PixelText size="xs"> {{ sprite.name }} </PixelText>
  </div>
</template>

<style scoped></style>
