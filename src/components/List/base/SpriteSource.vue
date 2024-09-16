<script setup lang="ts">
import PixelText from '../../common/PixelText.vue'
import SourceDetails from '../../common/tags/SourceDetails.vue'
import { qualityImgSource } from '../useListitem'
import type { RoomBundleItem } from '@/data'
import { useItemSprite } from '../useItemSprite'

const props = defineProps({
  item: {
    type: Object as () => RoomBundleItem,
    required: true
  }
})

const { itemSprite } = useItemSprite(props.item)
</script>

<template>
  <div class="w-full flex flex-col lg:flex-row gap-2">
    <div class="md:basis-[24%] flex gap-3 items-center">
      <div class="w-10 relative">
        <img
          v-if="item.quality"
          :src="qualityImgSource[item.quality]"
          :alt="`${item.quality} Quality`"
          class="w-full absolute bottom-0"
        />
        <img :src="itemSprite.image" alt="dropdown arrow" class="w-full" />
      </div>
      <PixelText v-if="item.quality" size="2xl">{{ item.quality }} Quality </PixelText>
      <PixelText size="2xl" class="flex-grow">{{ itemSprite.name }}</PixelText>
      <PixelText v-if="item.quantity">x {{ item?.quantity }}</PixelText>
    </div>
    <div class="flex gap-3 w-full flex-col md:flex-row lg:basis-[76%] lg:w-0 justify-center">
      <SourceDetails
        v-for="(source, index) in item.item.sourceDetails"
        :detail="source"
        :key="index"
      />
    </div>
  </div>
</template>

<style scoped></style>
