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
defineProps({
  size: {
    default: 'md',
    validator(value) {
      return Object.keys(titleSizes).includes(value)
    }
  }
})
</script>

<template>
  <h1 :class="['font-bold pixel-text-shadow', titleSizes[size]]">
    <slot></slot>
  </h1>
</template>

<style scoped></style>
