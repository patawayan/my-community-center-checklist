<script lang="ts">
const titleSizes = {
  '2xl': 'text-4xl',
  xl: 'text-3xl',
  lg: 'text-2xl',
  md: 'text-xl',
  sm: 'text-base',
  xs: 'text-xs'
}

export default {}
</script>

<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  size: {
    default: 'md',
    type: String as PropType<keyof typeof titleSizes>,
    validator(value: string) {
      return Object.keys(titleSizes).includes(value)
    }
  },
  noShadow: {
    default: false,
    type: Boolean
  }
})
</script>

<template>
  <h1 :class="['font-bold noselect', titleSizes[size], noShadow ? '' : 'pixel-text-shadow']">
    <slot></slot>
  </h1>
</template>

<style scoped></style>
