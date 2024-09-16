<script setup lang="ts">
import { Sprites } from '@/data'
import ListItem from '../List/base/ListItem.vue'
import ListItemCompact from '../List/compact/ListItemCompact.vue'
import ModalBody from '../common/ModalBody.vue'
import { ref } from 'vue'
import type { Item } from '@/data/types'
import PixelTitle from '../common/PixelTitle.vue'
import PixelText from '../common/PixelText.vue'
import SourceDetails from '../common/tags/SourceDetails.vue'
import { useAppStore } from '@/stores/app'

const userData = useAppStore()
const isItemDetailsModalOpen = ref(false)
const modalDetailData = ref<Item>()
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-col p-5 gap-3" v-if="userData.viewFilters.isVerboseList">
      <ListItem
        v-for="item in userData.checklist"
        :key="`${item.room}-${item.bundle}-${Sprites[item.item.spriteId] ? Sprites[item.item.spriteId].name : ''}`"
        :item="item"
      />
    </div>
    <div v-else class="flex flex-col p-5 gap-3">
      <ListItemCompact
        v-for="item in userData.checklist"
        :key="`compact-${item.room}-${item.bundle}-${Sprites[item.item.spriteId] ? Sprites[item.item.spriteId].name : ''}`"
        :item="item"
        @item-click="
          () => {
            isItemDetailsModalOpen = true
            modalDetailData = item.item
          }
        "
      />

      <ModalBody :is-open="isItemDetailsModalOpen" @close="isItemDetailsModalOpen = false">
        <div v-if="modalDetailData" class="flex flex-col gap-3 p-5">
          <PixelTitle size="xl" class="text-center">Item Details</PixelTitle>
          <div
            class="flex gap-2 items-center justify-center"
            v-if="Sprites[modalDetailData.spriteId]"
          >
            <div class="w-10">
              <img
                :src="Sprites[modalDetailData.spriteId].image"
                alt="dropdown arrow"
                class="w-full"
              />
            </div>
            <PixelText size="xl" class="text-center">{{
              Sprites[modalDetailData.spriteId].name
            }}</PixelText>
          </div>
          <div class="flex gap-2 justify-center">
            <SourceDetails
              v-for="(detail, index) in modalDetailData.sourceDetails"
              :detail="detail"
              :key="index"
            />
          </div>
        </div>
      </ModalBody>
    </div>
  </div>
</template>

<style scoped></style>
