<script lang="ts">
export default {}
</script>

<script setup lang="ts">
import PixelTitle from '../PixelTitle.vue'
import SeasonTag from './SeasonTag.vue'
import PixelText from '../PixelText.vue'
import { SourceType, type SourceDetail } from '@/data/types'
import ForagingSource from '../source/ForagingSource.vue'

defineProps({
  detail: {
    type: Object as () => SourceDetail,
    required: true
  }
})
</script>

<template>
  <div class="relative pt-5">
    <div class="pt-9 pb-3 px-6 bg-brown-75 pixel-sunken-shadow gap-3 flex">
      <div v-for="source in detail.sources" :key="source.__typename">
        <ForagingSource v-if="source.__typename === SourceType.Foraging" :detail="source" />
      </div>
    </div>
    <div class="flex gap-2 absolute top-0 left-0">
      <SeasonTag v-for="season in detail.seasons" :season="season" :key="season" />
    </div>
  </div>
</template>

<style scoped></style>
