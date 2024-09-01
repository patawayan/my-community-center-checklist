import { items, type BundleItemBare } from '../items'
import { RoomReward, type Bundle, type Room } from '../types'

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
    name: "Blacksmith's Bundle",
    items: BlacksmithsBundle.map((item, index) => ({
      id: `blacksmithsBundle-${index}`,
      ...item
    }))
  },
  {
    name: "Geologist's Bundle",
    items: GeologistsBundle.map((item, index) => ({
      id: `geologistsBundle-${index}`,
      ...item
    }))
  },
  {
    name: "Adventurer's Bundle",
    items: AdventurersBundle.map((item, index) => ({
      id: `adventurersBundle-${index}`,
      ...item
    }))
  }
]

export const BoilerRoom: Room = {
  name: 'Boiler Room',
  bundles: BoilerRoomBundle,
  reward: RoomReward.MinecartsRepaired
}
