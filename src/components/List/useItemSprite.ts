import { Sprites, type RoomBundleItem } from '@/data'
import { useAppStore } from '@/stores/app'
import { CheckListStatus } from '@/types'
import { storeToRefs } from 'pinia'
import { computed, toValue } from 'vue'

/**
 * Composable to handle the logic for a list item
 */
export const useItemSprite = (bundleItem: RoomBundleItem) => {
  const item = toValue(bundleItem)

  const userData = useAppStore()
  const statusItems = storeToRefs(userData).statusItems
  const completedBundles = storeToRefs(userData).completedBundles

  /**
   * Get the sprite of the item
   */
  const itemSprite = computed(() => Sprites[item.item.spriteId])

  /**
   * No longer needed for their respective bundle
   */
  const isNotNeeded = computed(
    () =>
      completedBundles?.value?.[item.bundle] &&
      (!statusItems?.value?.[item.id]?.status ||
        statusItems?.value?.[item.id]?.status === CheckListStatus.ToDo)
  )

  return {
    itemSprite,
    isNotNeeded
  }
}
