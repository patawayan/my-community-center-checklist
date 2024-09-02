<script lang="ts">
export default {}
</script>

<script setup lang="ts">
import { SourceType, type Cooking } from '@/data/types'
import SourceContainer from './SourceContainer.vue'
import { Sprites } from '@/data'
import SourceTag from '../common/tags/SourceTag.vue'
import PixelText from '../common/PixelText.vue'
import SpriteComponent from '../common/SpriteComponent.vue'

defineProps({
  detail: {
    type: Object as () => Cooking,
    required: true
  }
})
</script>

<template>
  <SourceContainer>
    <div class="flex items-center gap-2">
      <SourceTag :source="SourceType.Cooking" />
    </div>

    <div class="flex gap-2 items-center">
      <PixelText>Ingredients:</PixelText>
      <SpriteComponent
        v-for="ingredient in detail.ingredients"
        :key="ingredient"
        :sprite="Sprites[ingredient]"
      />
    </div>
  </SourceContainer>
</template>

<style scoped></style>
