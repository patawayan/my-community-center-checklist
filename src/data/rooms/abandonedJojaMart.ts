import { items, type BundleItemBare } from '../items'
import { Quality, RoomReward, type Bundle, type Room } from '../types'

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
    name: 'The Missing Bundle',
    items: TheMissingBundle.map((item, index) => ({
      id: `theMissing-${index}`,
      ...item
    }))
  }
]

export const AbandonedJojaMart: Room = {
  name: 'Abandoned JojaMart',
  bundles: AbandonedJojaMartBundle,
  reward: RoomReward.MovieTheater
}
