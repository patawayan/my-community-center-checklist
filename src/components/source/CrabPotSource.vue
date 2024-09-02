<script lang="ts">
export default {}
</script>

<script setup lang="ts">
import { SourceType, type CrabPot } from '@/data/types'
import SourceContainer from './SourceContainer.vue'
import SourceTag from '../common/tags/SourceTag.vue'
import PixelText from '../common/PixelText.vue'

defineProps({
  detail: {
    type: Object as () => CrabPot,
    required: true
  }
})
</script>

<template>
  <SourceContainer>
    <div class="flex items-center gap-2">
      <SourceTag :source="SourceType.CrabPot" />
      <PixelText v-if="detail.location">{{ detail.location }}</PixelText>
    </div>
  </SourceContainer>
</template>

<style scoped></style>
