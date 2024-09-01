<script setup lang="ts">
import PixelTitle from '@/components/common/PixelTitle.vue'
import PixelButton from '@/components/common/PixelButton.vue'
</script>

<template>
  <header class="bg-brown-100 flex gap-5 p-5">
    <div class="flex justify-between w-full">
      <PixelTitle size="2xl">My Community Center Checklist</PixelTitle>

      <div class="flex gap-3">
        <PixelButton type="secondary"> info? </PixelButton>
        <PixelButton> Play with Friends! </PixelButton>
        <PixelButton> New List! </PixelButton>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  border-bottom: 3px solid theme('colors.brown.700');
  box-shadow:
    inset 0px -6px 0px 0px theme('colors.brown.300'),
    inset 0px -12px 0px 0px theme('colors.brown.200');
}
</style>
