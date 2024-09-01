import { items, type BundleItemBare } from '../items'
import { RoomReward, type Bundle, type Room } from '../types'

const ChefsBundle: BundleItemBare[] = [
  {
    item: items.mapleSyrup
  },
  {
    item: items.fiddleheadFern
  },
  {
    item: items.truffle
  },
  {
    item: items.poppy
  },
  {
    item: items.makiRoll
  },
  {
    item: items.friedEgg
  }
]

const DyeBundle: BundleItemBare[] = [
  {
    item: items.redMushroom
  },
  {
    item: items.seaUrchin
  },
  {
    item: items.sunflower
  },
  {
    item: items.duckFeather
  },
  {
    item: items.aquamarine
  },
  {
    item: items.redCabbage
  }
]

const FieldResearchBundle: BundleItemBare[] = [
  {
    item: items.purpleMushroom
  },
  {
    item: items.nautilusShell
  },
  {
    item: items.chub
  }
]

const FodderBundle: BundleItemBare[] = [
  {
    item: items.wheat,
    quantity: 10
  },
  {
    item: items.hay,
    quantity: 10
  },
  {
    item: items.apple,
    quantity: 3
  }
]

const EnchantersBundle: BundleItemBare[] = [
  {
    item: items.oakResin
  },
  {
    item: items.wine
  },
  {
    item: items.rabbitsFoot
  },
  {
    item: items.pomegranate
  }
]

const BulletinBoardBundle: Bundle[] = [
  {
    name: "Chef's Bundle",
    items: ChefsBundle.map((item, index) => ({
      id: `chefsBundle-${index}`,
      ...item
    }))
  },
  {
    name: 'Dye Bundle',
    items: DyeBundle.map((item, index) => ({
      id: `dyeBundle-${index}`,
      ...item
    }))
  },
  {
    name: 'Field Research Bundle',
    items: FieldResearchBundle.map((item, index) => ({
      id: `fieldResearchBundle-${index}`,
      ...item
    }))
  },
  {
    name: 'Fodder Bundle',
    items: FodderBundle.map((item, index) => ({
      id: `fodderBundle-${index}`,
      ...item
    }))
  },
  {
    name: "Enchanter's Bundle",
    items: EnchantersBundle.map((item, index) => ({
      id: `enchatnersBundle-${index}`,
      ...item
    }))
  }
]

export const BulletinBoard: Room = {
  name: 'Bulletin Board',
  bundles: BulletinBoardBundle,
  reward: RoomReward.Friendship
}
