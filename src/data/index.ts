import { Rooms } from './rooms'
import { sprites as Sprites } from './sprites'
import { mobs as Mobs } from './mobs'

export const RoomBundleItems = Rooms.flatMap((room) =>
  room.bundles.flatMap((bundle) =>
    bundle.items.flatMap((item) => ({ ...item, room: room.name, bundle: bundle.name }))
  )
)

export type RoomBundleItem = (typeof RoomBundleItems)[0]

export { Sprites, Mobs }
