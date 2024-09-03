<script lang="ts">
const getTime = (time: number) => {
  if (time === 0) return '12am'
  if (time === 12) return '12pm'
  return time > 12 ? time - 12 + 'pm' : time + 'am'
}

export default {}
</script>

<script setup lang="ts">
import { SourceType, type Fishing } from '@/data/types'
import SourceContainer from './SourceContainer.vue'
import SourceTag from '../common/tags/SourceTag.vue'
import PixelText from '../common/PixelText.vue'

defineProps({
  detail: {
    type: Object as () => Fishing,
    required: true
  }
})
</script>

<template>
  <SourceContainer>
    <div class="flex items-center gap-2">
      <SourceTag :source="SourceType.Fishing" />
    </div>
    <PixelText v-if="detail.locations" class="text-center">{{
      detail.locations.join(', ')
    }}</PixelText>
    <div class="flex gap-2 flex-wrap justify-center">
      <PixelText v-if="detail.time" class="max-w-52 text-center text-nowrap"
        >{{ getTime(detail.time.starting) }}
        {{ detail.time.ending ? '- ' + getTime(detail.time.ending) : undefined }}</PixelText
      >
      <PixelText v-if="detail.weather" class="text-center max-w-52">{{ detail.weather }}</PixelText>
    </div>
  </SourceContainer>
</template>

<style scoped></style>
