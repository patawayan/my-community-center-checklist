import { items, type BundleItemBare } from '../items'
import { RoomReward, type Bundle, type Room } from '../types'

const RiverFishBundle: BundleItemBare[] = [
  {
    item: items.sunfish
  },
  {
    item: items.catfish
  },
  {
    item: items.shad
  },
  {
    item: items.tigerTrout
  }
]

const LakeFishBundle: BundleItemBare[] = [
  {
    item: items.largemouthBass
  },
  {
    item: items.carp
  },
  {
    item: items.bullhead
  },
  {
    item: items.sturgeon
  }
]

const OceanFishBundle: BundleItemBare[] = [
  {
    item: items.sardine
  },
  {
    item: items.tuna
  },
  {
    item: items.redSnapper
  },
  {
    item: items.tilapia
  }
]

const NightFishBundle: BundleItemBare[] = [
  {
    item: items.walleye
  },
  {
    item: items.bream
  },
  {
    item: items.eel
  }
]

const CrabPotBundle: BundleItemBare[] = [
  {
    item: items.lobster
  },
  {
    item: items.crayfish
  },
  {
    item: items.crab
  },
  {
    item: items.cockle
  },
  {
    item: items.mussel
  },
  {
    item: items.shrimp
  },
  {
    item: items.snail
  },
  {
    item: items.periwinkle
  },
  {
    item: items.oyster
  },
  {
    item: items.clam
  }
]

const SpecialtyFishBundle: BundleItemBare[] = [
  {
    item: items.pufferfish
  },
  {
    item: items.ghostfish
  },
  {
    item: items.sandfish
  },
  {
    item: items.woodskip
  }
]

const FishTankBundle: Bundle[] = [
  {
    name: 'River Fish Bundle',
    items: RiverFishBundle.map((item, index) => ({
      id: `riverFishBundle-${index}`,
      ...item
    }))
  },
  {
    name: 'Lake Fish Bundle',
    items: LakeFishBundle.map((item, index) => ({
      id: `lakeFishBundle-${index}`,
      ...item
    }))
  },
  {
    name: 'Ocean Fish Bundle',
    items: OceanFishBundle.map((item, index) => ({
      id: `oceanFishBundle-${index}`,
      ...item
    }))
  },
  {
    name: 'Night Fish Bundle',
    items: NightFishBundle.map((item, index) => ({
      id: `nightFishBundle-${index}`,
      ...item
    }))
  },
  {
    name: 'Crab Pot Bundle',
    items: CrabPotBundle.map((item, index) => ({
      id: `crabPotBundle-${index}`,
      ...item
    }))
  },
  {
    name: 'Specialty Fish Bundle',
    items: SpecialtyFishBundle.map((item, index) => ({
      id: `specialtyFishBundle-${index}`,
      ...item
    }))
  }
]

export const FishTank: Room = {
  name: 'Fish Tank',
  bundles: FishTankBundle,
  reward: RoomReward.GlitteringBoulderRemoved
}
