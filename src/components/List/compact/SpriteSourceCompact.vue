<script setup lang="ts">
import { type RoomBundleItem } from '@/data'
import { computed } from 'vue'
import { SourceType } from '@/data/types'
import { qualityImgSource, useListItem } from '../useListitem'

import SeasonTag from '@/components/common/tags/SeasonTag.vue'
import SourceTag from '@/components/common/tags/SourceTag.vue'
import PixelText from '@/components/common/PixelText.vue'
import { useItemSprite } from '../useItemSprite'

const props = defineProps({
  item: {
    type: Object as () => RoomBundleItem,
    required: true
  }
})

defineEmits(['item-click'])

const { itemSprite, isNotNeeded } = useItemSprite(props.item)

const itemSeasons = computed(() => {
  return [...new Set(props.item.item.sourceDetails.flatMap((source) => source.seasons))]
})

const itemSources = computed(() => {
  return [
    ...new Set(
      props.item.item.sourceDetails.flatMap((source) =>
        source.sources.flatMap((source) => source.__typename as SourceType)
      )
    )
  ]
})
</script>

<template>
  <div class="w-full flex flex-col md:flex-row gap-2">
    <div
      class="basis-1/3 flex gap-3 items-center hover:cursor-pointer hover:opacity-70"
      @click="
        () => {
          if (!isNotNeeded) {
            $emit('item-click')
          }
        }
      "
    >
      <div class="w-10 relative">
        <img
          v-if="item.quality"
          :src="qualityImgSource[item.quality]"
          :alt="`${item.quality} Quality`"
          class="w-full absolute bottom-0"
        />
        <img :src="itemSprite.image" alt="dropdown arrow" class="w-full" />
      </div>
      <PixelText v-if="item.quality" size="2xl">{{ item.quality }} Quality</PixelText>
      <PixelText size="2xl" class="flex-grow">{{ itemSprite.name }}</PixelText>
      <PixelText v-if="item.quantity">x {{ item?.quantity }}</PixelText>
    </div>
    <div
      class="flex gap-3 basis-2/3 lg:flex-col items-center lg:justify-center md:justify-end flex-wrap"
    >
      <div class="hidden md:flex gap-3">
        <SeasonTag v-for="season in itemSeasons" :key="season" :season="season" />
      </div>
      <div class="hidden md:flex gap-3">
        <SourceTag v-for="src in itemSources" :key="src" :source="src" />
      </div>
      <SeasonTag v-for="season in itemSeasons" :key="season" :season="season" class="md:hidden" />
      <SourceTag v-for="src in itemSources" :key="src" :source="src" class="md:hidden" />
    </div>
  </div>
</template>

<style scoped></style>
