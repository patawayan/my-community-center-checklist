/**
 * Sort functions for the RoomBundleItems
 */

import { Sprites, type RoomBundleItem } from '@/data'

export enum SortTypes {
  Name = 'Name',
  Room = 'Room',
  Bundle = 'Bundle',
  Source = 'Source',
  Status = 'Status'
}

export const roomSort = (a: RoomBundleItem, b: RoomBundleItem) => a.room.localeCompare(b.room)
export const bundleSort = (a: RoomBundleItem, b: RoomBundleItem) => a.bundle.localeCompare(b.bundle)

export const sourceSort = (a: RoomBundleItem, b: RoomBundleItem) => {
  if (
    a.item.sourceDetails[0].sources[0].__typename &&
    b.item.sourceDetails[0].sources[0].__typename
  ) {
    return a.item.sourceDetails[0].sources[0].__typename?.localeCompare(
      b.item.sourceDetails[0].sources[0].__typename
    )
  }
  return 0
}

export const nameSort = (a: RoomBundleItem, b: RoomBundleItem) =>
  Sprites[a.item.spriteId].name.localeCompare(Sprites[b.item.spriteId].name)
