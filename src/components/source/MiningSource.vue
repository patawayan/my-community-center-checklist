<script lang="ts">
export default {}
</script>

<script setup lang="ts">
import { SourceType, type Mining } from '@/data/types'
import SourceContainer from './SourceContainer.vue'
import SourceTag from '../common/tags/SourceTag.vue'
import PixelText from '../common/PixelText.vue'

defineProps({
  detail: {
    type: Object as () => Mining,
    required: true
  }
})
</script>

<template>
  <SourceContainer>
    <div class="flex items-center gap-2">
      <SourceTag :source="SourceType.Mining" />
    </div>
    <div v-for="loc in detail.locations" :key="loc.name" class="flex gap-1">
      <PixelText>{{ loc.name }}{{ loc.floors ? ',' : undefined }}</PixelText>
      <span v-if="loc.floors">
        <PixelText
          >Floors {{ loc.floors.starting
          }}{{ loc.floors.ending ? ' - ' + loc.floors.ending : '+' }}</PixelText
        >
      </span>
    </div>
  </SourceContainer>
</template>

<style scoped></style>
