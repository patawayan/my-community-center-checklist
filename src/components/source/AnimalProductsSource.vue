<script lang="ts">
export default {}
</script>

<script setup lang="ts">
import { SourceType, type AnimalProducts } from '@/data/types'
import SourceContainer from './SourceContainer.vue'

import { computed } from 'vue'
import { Sprites } from '@/data'
import SourceTag from '../common/tags/SourceTag.vue'

const props = defineProps({
  detail: {
    type: Object as () => AnimalProducts,
    required: true
  }
})

const animallocations = computed(() => {
  const spriteIds = new Set(
    props.detail.animals.flatMap((animal) => [animal.spriteId, animal.location])
  )

  return [...spriteIds].map((sprite) => Sprites[sprite])
})
</script>

<template>
  <SourceContainer>
    <SourceTag :source="SourceType.AnimalProducts" />

    <div class="flex gap-1 items-center">
      <SpriteComponent v-for="loc in animallocations" :key="loc.name" :sprite="loc" />
    </div>
  </SourceContainer>
</template>

<style scoped></style>
