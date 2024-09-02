import { items, type BundleItemBare } from '../items'
import { CraftsRoomBundles, RoomReward, RoomTypes, type Bundle, type Room } from '../types'

const SpringForagingBundle: BundleItemBare[] = [
  {
    item: items.wildHorseradish
  },
  {
    item: items.daffodil
  },
  {
    item: items.leek
  },
  {
    item: items.dandelion
  }
]

const SummerForagingBundle: BundleItemBare[] = [
  {
    item: items.grape
  },
  {
    item: items.spiceBerry
  },
  {
    item: items.sweetPea
  }
]

const FallForagingBundle: BundleItemBare[] = [
  {
    item: items.commonMushroom
  },
  {
    item: items.wildPlum
  },
  {
    item: items.hazelnut
  },
  {
    item: items.blackberry
  }
]

const WinterForagingBundle: BundleItemBare[] = [
  {
    item: items.winterRoot
  },
  {
    item: items.crystalFruit
  },
  {
    item: items.snowYam
  },
  {
    item: items.crocus
  }
]

const ConstructionBundle: BundleItemBare[] = [
  {
    item: items.wood,
    quantity: 198
  },
  {
    item: items.stone,
    quantity: 99
  },
  {
    item: items.hardwood,
    quantity: 10
  }
]

const ExoticForagingBundle: BundleItemBare[] = [
  {
    item: items.coconut
  },
  {
    item: items.cactusFruit
  },
  {
    item: items.caveCarrot
  },
  {
    item: items.redMushroom
  },
  {
    item: items.purpleMushroom
  },
  {
    item: items.mapleSyrup
  },
  {
    item: items.oakResin
  },
  {
    item: items.pineTar
  },
  {
    item: items.morel
  }
]

const CraftsRoomBundle: Bundle[] = [
  {
    name: CraftsRoomBundles.SpringForagingBundle,
    required: 4,
    items: SpringForagingBundle.map((item, index) => ({
      id: `springForagingBundle-${index}`,
      ...item
    }))
  },
  {
    name: CraftsRoomBundles.SummerForagingBundle,
    required: 3,
    items: SummerForagingBundle.map((item, index) => ({
      id: `summerForagingBundle-${index}`,
      ...item
    }))
  },
  {
    name: CraftsRoomBundles.FallForagingBundle,
    required: 4,
    items: FallForagingBundle.map((item, index) => ({
      id: `fallForagingBundle-${index}`,
      ...item
    }))
  },
  {
    name: CraftsRoomBundles.WinterForagingBundle,
    required: 4,
    items: WinterForagingBundle.map((item, index) => ({
      id: `winterForagingBundle-${index}`,
      ...item
    }))
  },
  {
    name: CraftsRoomBundles.ConstructionBundle,
    required: 3,
    items: ConstructionBundle.map((item, index) => ({
      id: `constructionBundle-${index}`,
      ...item
    }))
  },
  {
    name: CraftsRoomBundles.ExoticForagingBundle,
    required: 5,
    items: ExoticForagingBundle.map((item, index) => ({
      id: `exoticForagingBundle-${index}`,
      ...item
    }))
  }
]

export const CraftsRoom: Room = {
  name: RoomTypes.CraftsRoom,
  bundles: CraftsRoomBundle,
  reward: RoomReward.BridgeRepair
}
