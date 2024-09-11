import { Sprites, type RoomBundleItem } from '@/data'
import { Quality } from '@/data/types'
import { CheckListStatus } from '@/types'
import { storeToRefs } from 'pinia'
import { ref, computed, watch, toValue } from 'vue'
import goldQuality from '@/assets/images/quality_gold.png'
import silverQuality from '@/assets/images/quality_silver.png'
import iridiumQuality from '@/assets/images/quality_iridium.png'
import { useAppStore } from '@/stores/app'

export const qualityImgSource: Record<Quality, string> = {
  [Quality.Silver]: silverQuality,
  [Quality.Gold]: goldQuality,
  [Quality.Iridium]: iridiumQuality,
  [Quality.Normal]: ''
}

export const statusBgColor: Record<CheckListStatus, string> = {
  [CheckListStatus.ToDo]: 'bg-brown-50',
  [CheckListStatus.Acquired]: 'bg-blue-50',
  [CheckListStatus.InProgress]: 'bg-orange-50',
  [CheckListStatus.Submitted]: 'bg-green-50'
}

/**
 * Composable to handle the logic for a list item
 */
export const useListItem = (bundleItem: RoomBundleItem) => {
  const item = toValue(bundleItem)

  const itemSprite = computed(() => Sprites[item.item.spriteId])

  const userData = useAppStore()
  const statusItems = storeToRefs(userData).statusItems
  const completedBundles = storeToRefs(userData).completedBundles

  const isNotNeeded = computed(
    () =>
      completedBundles?.value?.[item.bundle] &&
      (!statusItems?.value?.[item.id]?.status ||
        statusItems?.value?.[item.id]?.status === CheckListStatus.ToDo)
  )

  const itemStatus = ref(statusItems?.value?.[item.id]?.status ?? CheckListStatus.ToDo)
  watch(itemStatus, (value) => userData.setStatus?.(item.id, value))
  watch(statusItems, (value) => {
    itemStatus.value = value?.[item.id]?.status ?? CheckListStatus.ToDo
  })

  return {
    itemSprite,
    isNotNeeded,
    itemStatus
  }
}
