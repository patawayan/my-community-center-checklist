<script setup lang="ts">
import PixelTitle from './PixelTitle.vue'

defineEmits(['close'])
defineProps({
  isOpen: {
    type: Boolean
  },
  title: {
    type: String
  }
})
</script>

<template>
  <Teleport to="#modal">
    <div
      @click="$emit('close')"
      v-if="isOpen"
      class="bg-black bg-opacity-50 fixed z-[1000] top-0 left-0 bottom-0 right-0"
    >
      <div
        @click.stop=""
        class="bg-brown-50 pixel-shadow p-3 min-w-28 absolute z-[1000] flex gap-2 flex-col top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
      >
        <div class="flex w-full justify-center" v-if="title">
          <PixelTitle size="lg">{{ title }}</PixelTitle>
        </div>
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<style scoped></style>
