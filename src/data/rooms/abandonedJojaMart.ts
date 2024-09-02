import { items, type BundleItemBare } from '../items'
import {
  AbandonedJojaMartBundles,
  Quality,
  RoomReward,
  RoomTypes,
  type Bundle,
  type Room
} from '../types'

const TheMissingBundle: BundleItemBare[] = [
  {
    item: items.wine,
    quality: Quality.Silver
  },
  {
    item: items.dinosaurMayonnaise
  },
  {
    item: items.prismaticShard
  },
  {
    item: items.ancientFruit,
    quantity: 5,
    quality: Quality.Gold
  },
  {
    item: items.voidSalmon,
    quality: Quality.Gold
  },
  {
    item: items.caviar
  }
]

const AbandonedJojaMartBundle: Bundle[] = [
  {
    name: AbandonedJojaMartBundles.TheMissingBundle,
    required: 5,
    items: TheMissingBundle.map((item, index) => ({
      id: `theMissing-${index}`,
      ...item
    }))
  }
]

export const AbandonedJojaMart: Room = {
  name: RoomTypes.AbandonedJojaMart,
  bundles: AbandonedJojaMartBundle,
  reward: RoomReward.MovieTheater
}
