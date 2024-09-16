<script lang="ts">
const titleSizes = {
  '2xl': 'text-2xl md:text-4xl',
  xl: 'lg:text-3xl md:text-2xl text-xl',
  lg: 'text-2xl',
  md: 'text-xl',
  sm: 'text-base',
  xs: 'text-xs',
  tag: 'text-base lg:text-xl'
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
