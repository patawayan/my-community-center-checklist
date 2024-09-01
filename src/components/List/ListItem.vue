<script setup lang="ts">
import { Sprites, type RoomBundleItem } from '@/data'
import RoomTag from '../common/tags/RoomTag.vue'
import BundleTag from '../common/tags/BundleTag.vue'
import dropdownArrow from '@/assets/images/dropdown_arrow.png'
import PixelText from '../common/PixelText.vue'
import SeasonTag from '../common/tags/SeasonTag.vue'
import SourceDetails from '../common/tags/SourceDetails.vue'
import PixelButton from '../common/PixelButton.vue'
import { computed } from 'vue'

const props = defineProps({
  item: {
    type: Object as () => RoomBundleItem,
    required: true
  }
})

const itemSprite = computed(() => {
  console.log(props.item)
  return Sprites[props.item.item.spriteId]
    ? Sprites[props.item.item.spriteId]
    : { name: '', image: '' }
})
</script>

<template>
  <div class="w-full pt-2 relative">
    <div class="w-full py-3 px-10 bg-brown-50 pixel-shadow flex items-center gap-5">
      <div class="basis-1/5 flex gap-3 items-center">
        <img :src="itemSprite.image" alt="dropdown arrow" class="w-10 h-10" />
        <PixelText size="2xl" class="flex-grow">{{ itemSprite.name }}</PixelText>
        <PixelText v-if="item.quantity">x {{ item?.quantity }}</PixelText>
      </div>
      <div class="flex gap-3 flex-grow w-0 justify-center">
        <SourceDetails
          v-for="(source, index) in item.item.sourceDetails"
          :detail="source"
          :key="index"
        />
      </div>
      <PixelButton> To DO</PixelButton>
    </div>
    <div class="absolute top-0 -left-1 flex items-center gap-2">
      <RoomTag :room="item.room" />
      <img :src="dropdownArrow" alt="dropdown arrow" class="-rotate-90 w-4 h-2" />
      <BundleTag :bundle="item.bundle" />
    </div>
  </div>
</template>

<style scoped></style>
