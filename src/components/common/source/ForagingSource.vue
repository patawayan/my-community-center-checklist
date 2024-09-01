<script lang="ts">
export default {}
</script>

<script setup lang="ts">
import { SourceType, type Foraging } from '@/data/types'
import SourceContainer from './SourceContainer.vue'
import SourceTag from '../tags/SourceTag.vue'
import PixelText from '../PixelText.vue'

defineProps({
  detail: {
    type: Object as () => Foraging,
    required: true
  }
})
</script>

<template>
  <SourceContainer>
    <div class="flex justify-between items-center gap-2 w-full">
      <SourceTag :source="SourceType.Foraging" />
      <PixelText v-if="detail.locations">{{ detail.locations.join(', ') }}</PixelText>
    </div>
    <PixelText v-if="detail.info" class="max-w-52">{{ detail.info }}</PixelText>
  </SourceContainer>
</template>

<style scoped></style>
