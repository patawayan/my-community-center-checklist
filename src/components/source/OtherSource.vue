<script lang="ts">
export default {}
</script>

<script setup lang="ts">
import { SourceType, type Other } from '@/data/types'
import SourceContainer from './SourceContainer.vue'
import SourceTag from '../common/tags/SourceTag.vue'
import PixelText from '../common/PixelText.vue'

defineProps({
  detail: {
    type: Object as () => Other,
    required: true
  }
})
</script>

<template>
  <SourceContainer>
    <div class="flex items-center gap-2">
      <SourceTag :source="SourceType.Other" />
    </div>
    <PixelText v-if="detail.info" class="max-w-52">{{ detail.info }}</PixelText>
  </SourceContainer>
</template>

<style scoped></style>
