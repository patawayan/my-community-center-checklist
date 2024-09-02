<script lang="ts">
export default {}
</script>

<script setup lang="ts">
import { SourceType, type Foraging } from '@/data/types'
import SourceContainer from './SourceContainer.vue'
import SourceTag from '../common/tags/SourceTag.vue'
import PixelText from '../common/PixelText.vue'

defineProps({
  detail: {
    type: Object as () => Foraging,
    required: true
  }
})
</script>

<template>
  <SourceContainer>
    <div class="flex items-center gap-2">
      <SourceTag :source="SourceType.Foraging" />
    </div>
    <PixelText v-if="detail.locations">{{ detail.locations.join(', ') }}</PixelText>
    <PixelText v-if="detail.info" class="max-w-40 text-center">{{ detail.info }}</PixelText>
  </SourceContainer>
</template>

<style scoped></style>
