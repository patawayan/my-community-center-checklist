import { items, type BundleItemBare } from '../items'
import { BoilerRoomBundles, RoomReward, RoomTypes, type Bundle, type Room } from '../types'

const BlacksmithsBundle: BundleItemBare[] = [
  {
    item: items.copperBar
  },
  {
    item: items.ironBar
  },
  {
    item: items.goldBar
  }
]

const GeologistsBundle: BundleItemBare[] = [
  {
    item: items.quartz
  },
  {
    item: items.earthCrystal
  },
  {
    item: items.frozenTear
  },
  {
    item: items.fireQuartz
  }
]

const AdventurersBundle: BundleItemBare[] = [
  {
    item: items.slime,
    quantity: 99
  },
  {
    item: items.batwing,
    quantity: 10
  },
  {
    item: items.solarEssence
  },
  {
    item: items.voidEssence
  }
]

const BoilerRoomBundle: Bundle[] = [
  {
    name: BoilerRoomBundles.BlacksmithsBundle,
    required: 3,
    items: BlacksmithsBundle.map((item, index) => ({
      id: `blacksmithsBundle-${index}`,
      ...item
    }))
  },
  {
    name: BoilerRoomBundles.GeologistsBundle,
    required: 4,
    items: GeologistsBundle.map((item, index) => ({
      id: `geologistsBundle-${index}`,
      ...item
    }))
  },
  {
    name: BoilerRoomBundles.AdventurersBundle,
    required: 2,
    items: AdventurersBundle.map((item, index) => ({
      id: `adventurersBundle-${index}`,
      ...item
    }))
  }
]

export const BoilerRoom: Room = {
  name: RoomTypes.BoilerRoom,
  bundles: BoilerRoomBundle,
  reward: RoomReward.MinecartsRepaired
}
