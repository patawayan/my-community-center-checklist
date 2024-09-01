import { items, type BundleItemBare } from '../items'
import { Quality, RoomReward, type Bundle, type Room } from '../types'

const SpringCropsBundle: BundleItemBare[] = [
  {
    item: items.parsnip
  },
  {
    item: items.greenBean
  },
  {
    item: items.cauliflower
  },
  {
    item: items.potato
  }
]

const SummerCropsBundle: BundleItemBare[] = [
  {
    item: items.tomato
  },
  {
    item: items.hotPepper
  },
  {
    item: items.blueberry
  },
  {
    item: items.melon
  }
]

const FallCropsBundle: BundleItemBare[] = [
  {
    item: items.corn
  },
  {
    item: items.eggplant
  },
  {
    item: items.pumpkin
  },
  {
    item: items.yam
  }
]

const QualityCropsBundle: BundleItemBare[] = [
  {
    item: items.parsnip,
    quality: Quality.Gold,
    quantity: 5
  },
  {
    item: items.melon,
    quality: Quality.Gold,
    quantity: 5
  },
  {
    item: items.pumpkin,
    quality: Quality.Gold,
    quantity: 5
  },
  {
    item: items.corn,
    quality: Quality.Gold,
    quantity: 5
  }
]

const AnimalBundle: BundleItemBare[] = [
  {
    item: items.largeMilk
  },
  {
    item: items.largeEggBrown
  },
  {
    item: items.largeEgg
  },
  {
    item: items.largeGoatMilk
  },
  {
    item: items.wool
  },
  {
    item: items.duckEgg
  }
]

const ArtisanBundle: BundleItemBare[] = [
  {
    item: items.truffleOil
  },
  {
    item: items.cloth
  },
  {
    item: items.goatCheese
  },
  {
    item: items.cheese
  },
  {
    item: items.honey
  },
  {
    item: items.jelly
  },
  {
    item: items.apple
  },
  {
    item: items.apricot
  },
  {
    item: items.orange
  },
  {
    item: items.peach
  },
  {
    item: items.pomegranate
  },
  {
    item: items.cherry
  }
]

const PantryBundle: Bundle[] = [
  {
    name: 'Spring Crops Bundle',
    items: SpringCropsBundle.map((item, index) => ({
      id: `springCropsBundle-${index}`,
      ...item
    }))
  },
  {
    name: 'Summer Crops Bundle',
    items: SummerCropsBundle.map((item, index) => ({
      id: `summerCropsBundle-${index}`,
      ...item
    }))
  },
  {
    name: 'Fall Crops Bundle',
    items: FallCropsBundle.map((item, index) => ({
      id: `fallCropsBundle-${index}`,
      ...item
    }))
  },
  {
    name: 'Quality Crops Bundle',
    items: QualityCropsBundle.map((item, index) => ({
      id: `qualityCropsBundle-${index}`,
      ...item
    }))
  },
  {
    name: 'Animal Bundle',
    items: AnimalBundle.map((item, index) => ({
      id: `animalBundle-${index}`,
      ...item
    }))
  },
  {
    name: 'Artisan Bundle',
    items: ArtisanBundle.map((item, index) => ({
      id: `artisanBundle-${index}`,
      ...item
    }))
  }
]

export const Pantry: Room = {
  name: 'Pantry',
  bundles: PantryBundle,
  reward: RoomReward.Greenhouse
}
