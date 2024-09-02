<script lang="ts">
export default {}
</script>

<script setup lang="ts">
import { SourceType, type ArtisanGoods } from '@/data/types'
import SourceContainer from './SourceContainer.vue'
import { Sprites } from '@/data'
import SourceTag from '../common/tags/SourceTag.vue'

import SpriteComponent from '../common/SpriteComponent.vue'

defineProps({
  detail: {
    type: Object as () => ArtisanGoods,
    required: true
  }
})
</script>

<template>
  <SourceContainer>
    <div class="flex items-center gap-2">
      <SourceTag :source="SourceType.ArtisanGoods" />
    </div>
    <div
      v-for="requirement in detail.requirements"
      :key="requirement.equipment"
      class="flex gap-4 items-center"
    >
      <SpriteComponent :sprite="Sprites[requirement.equipment]" />
      <div
        class="flex-grow flex gap-2 items-center justify-center min-w-10"
        v-if="requirement.material"
      >
        <div
          v-for="material in requirement.material"
          :key="material"
          class="flex flex-col items-center"
        >
          <SpriteComponent :sprite="Sprites[material]" />
        </div>
      </div>
    </div>
  </SourceContainer>
</template>

<style scoped></style>
