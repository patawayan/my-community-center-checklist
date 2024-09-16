<script setup lang="ts">
import checkboxX from '@/assets/images/checkbox_x.png'
import PixelText from '../PixelText.vue'

defineEmits(['update:modelValue'])

defineProps({
  modelValue: {
    type: Boolean
  }
})
</script>

<template>
  <div
    class="flex gap-2 hover:cursor-pointer h-8 w-max items-center"
    @click="$emit('update:modelValue', !modelValue)"
  >
    <div
      class="h-5 w-5 border-brown-500 border-b-4 border-t-4 border-l-4 border-r-4"
      @keydown.enter="$emit('update:modelValue', !modelValue)"
      tabindex="0"
    >
      <img v-if="modelValue" :src="checkboxX" alt="checkbox x" class="w-full" />
    </div>
    <PixelText size="xl">
      <slot></slot>
    </PixelText>
  </div>
</template>

<style scoped></style>
