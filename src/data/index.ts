import { Rooms } from './rooms'
import { sprites as Sprites } from './sprites'
import { mobs as Mobs } from './mobs'
import type { BundleTypes } from './types'

export const RoomBundleItems = Rooms.flatMap((room) =>
  room.bundles.flatMap((bundle) =>
    bundle.items.flatMap((item) => ({ ...item, room: room.name, bundle: bundle.name }))
  )
)

export type RoomBundleItem = (typeof RoomBundleItems)[0]

/**
 * Map of Bundles to their Item Ids
 *
 * @example
 * {
 *   'SpringForagingBundle' : ['springForagingBundle-0', 'springForagingBundle-1', 'springForagingBundle-2', 'springForagingBundle-3'],
 *   ...
 * }
 */
export const BundleItemIdsMap = RoomBundleItems.reduce(
  (acc, item) => ({
    ...acc,
    [item.bundle]: acc[item.bundle] ? [...acc[item.bundle], item.id] : [item.id]
  }),
  {} as Record<BundleTypes, RoomBundleItem['id'][]>
)

/**
 * Map of Bundles to their Required Item Count
 *
 * @example
 * {
 *   'SpringForagingBundle' : 4,
 *   ...
 * }
 */
export const BundleItemRequiredMap = Rooms.reduce(
  (acc, room) => ({
    ...acc,
    ...room.bundles.reduce(
      (acc, bundle) => ({ ...acc, [bundle.name]: bundle.required }),
      {} as Record<BundleTypes, number>
    )
  }),
  {} as Record<BundleTypes, number>
)

export { Sprites, Mobs }
