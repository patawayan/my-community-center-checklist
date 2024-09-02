<script setup lang="ts">
import { SourceType, type Combat } from '@/data/types'
import SourceContainer from './SourceContainer.vue'
import { Mobs, Sprites } from '@/data'
import SourceTag from '../common/tags/SourceTag.vue'
import PixelText from '../common/PixelText.vue'
import SpriteComponent from '../common/SpriteComponent.vue'

defineProps({
  detail: {
    type: Object as () => Combat,
    required: true
  }
})
</script>

<template>
  <SourceContainer>
    <div class="flex items-center gap-2">
      <SourceTag :source="SourceType.Combat" />
    </div>
    <div
      v-for="location in detail.locations"
      :key="location.location"
      class="flex gap-4 items-center"
    >
      <PixelText>
        {{ location.location }}
      </PixelText>
      <div class="flex-grow flex gap-2 items-center justify-end min-w-10">
        <div v-for="mob in location.mobFloor" :key="mob.mobId" class="flex flex-col items-center">
          <PixelText v-if="Mobs[mob.mobId]?.locations?.[0]?.floor" size="sm"
            >Floors
            {{
              Mobs[mob.mobId]?.locations?.[0]?.floor
                ? Mobs[mob.mobId]?.locations?.[0]?.floor?.starting +
                  (Mobs[mob.mobId]?.locations?.[0]?.floor?.ending
                    ? ' - ' + Mobs[mob.mobId]?.locations?.[0]?.floor?.ending
                    : '+')
                : undefined
            }}</PixelText
          >
          <SpriteComponent :sprite="Sprites[mob.mobId]" />
          <PixelText v-if="mob.chance" size="xs"> {{ mob.chance * 100 }}% </PixelText>
        </div>
      </div>
    </div>
    <PixelText v-if="detail.info" class="max-w-52 text-center">{{ detail.info }}</PixelText>
  </SourceContainer>
</template>

<style scoped></style>
