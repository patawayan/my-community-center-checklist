<script lang="ts">
const textSizes = {
  '2xl': 'text-xl',
  xl: 'text-lg',
  md: 'text-base',
  sm: 'text-sm',
  xs: 'text-xs',
  tag: 'text-sm md:text-base'
}

export default {}
</script>

<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  size: {
    default: 'md',
    type: String as PropType<keyof typeof textSizes>
  }
})
</script>

<template>
  <span :class="['pixel-text-shadow noselect', textSizes[size]]">
    <slot></slot>
  </span>
</template>

<style scoped></style>
