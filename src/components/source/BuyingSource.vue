<script lang="ts">
export default {}
</script>

<script setup lang="ts">
import { SourceType, type Buying } from '@/data/types'
import SourceContainer from './SourceContainer.vue'
import SourceTag from '../common/tags/SourceTag.vue'
import PixelText from '../common/PixelText.vue'

defineProps({
  detail: {
    type: Object as () => Buying,
    required: true
  }
})
</script>

<template>
  <SourceContainer class="flex-row">
    <div class="flex flex-row md:flex-col gap-2 justify-center items-center">
      <SourceTag :source="SourceType.Buying" />

      <PixelText v-if="detail.locations">{{ detail.locations.join(', ') }}</PixelText>
    </div>
  </SourceContainer>
</template>

<style scoped></style>
