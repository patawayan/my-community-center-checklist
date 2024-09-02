<script lang="ts">
const qualityImgSource: Record<Quality, string> = {
  [Quality.Silver]: silverQuality,
  [Quality.Gold]: goldQuality,
  [Quality.Iridium]: iridiumQuality,
  [Quality.Normal]: ''
}

const statusBgColor: Record<CheckListStatus, string> = {
  [CheckListStatus.ToDo]: 'bg-brown-50',
  [CheckListStatus.Acquired]: 'bg-blue-50',
  [CheckListStatus.InProgress]: 'bg-orange-50',
  [CheckListStatus.Submitted]: 'bg-green-50'
}

export default {}
</script>

<script setup lang="ts">
import { Sprites, type RoomBundleItem } from '@/data'
import RoomTag from '../common/tags/RoomTag.vue'
import BundleTag from '../common/tags/BundleTag.vue'
import dropdownArrow from '@/assets/images/dropdown_arrow.png'
import goldQuality from '@/assets/images/quality_gold.png'
import silverQuality from '@/assets/images/quality_silver.png'
import iridiumQuality from '@/assets/images/quality_iridium.png'
import PixelText from '../common/PixelText.vue'
import SourceDetails from '../common/tags/SourceDetails.vue'
import { computed, ref, watch } from 'vue'
import { Quality } from '@/data/types'
import { useUserDataStore } from '@/stores/userData'
import { CheckListStatus } from '@/types'
import StatusDropdown from '../common/input/StatusDropdown.vue'

const props = defineProps({
  item: {
    type: Object as () => RoomBundleItem,
    required: true
  }
})

const itemSprite = computed(() => Sprites[props.item.item.spriteId])

const userData = useUserDataStore()

const itemStatus = ref(userData.statusItems?.[props.item.id]?.status ?? CheckListStatus.ToDo)
watch(itemStatus, (value) => {
  userData.setStatus(props.item.id, value)
})
</script>

<template>
  <div class="w-full pt-2 relative">
    <div
      :class="['w-full py-3 px-10 pixel-shadow flex items-center gap-5', statusBgColor[itemStatus]]"
    >
      <div class="basis-1/5 flex gap-3 items-center">
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
      <div class="flex gap-3 flex-grow w-0 justify-center">
        <SourceDetails
          v-for="(source, index) in item.item.sourceDetails"
          :detail="source"
          :key="index"
        />
      </div>
      <div class="basis-1/6 flex justify-end">
        <StatusDropdown v-model="itemStatus" />
      </div>
      <!-- <div class="absolute top-0 bottom-0 left-0 right-0 bg-grey-10 z-50 opacity-90"></div> -->
    </div>
    <div class="absolute top-0 -left-1 flex items-center gap-2">
      <RoomTag :room="item.room" />
      <img :src="dropdownArrow" alt="dropdown arrow" class="-rotate-90 w-4 h-2" />
      <BundleTag :bundle="item.bundle" />
    </div>
    <!-- <div class="absolute top-0 bottom-0 left-0 right-0 min-w-full min-h-full flex">
      <PixelTitle size="xl" class="flex-grow flex items-center justify-center">
        Bundle Completed. No longer needed.
      </PixelTitle>
    </div> -->
  </div>
</template>

<style scoped></style>
