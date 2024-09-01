import { items, type BundleItemBare } from '../items'
import { RoomReward, type Bundle, type Room } from '../types'

const g2500Bundle: BundleItemBare[] = [
  {
    item: items['2500g']
  }
]

const g5000Bundle: BundleItemBare[] = [
  {
    item: items['5000g']
  }
]

const g10000Bundle: BundleItemBare[] = [
  {
    item: items['10000g']
  }
]

const g25000Bundle: BundleItemBare[] = [
  {
    item: items['25000g']
  }
]

const VaultBundle: Bundle[] = [
  {
    name: '2,500 Bundle',
    items: g2500Bundle.map((item, index) => ({
      id: `2500GBundle-${index}`,
      ...item
    }))
  },
  {
    name: '5,000 Bundle',
    items: g5000Bundle.map((item, index) => ({
      id: `5000GBundle-${index}`,
      ...item
    }))
  },
  {
    name: '10,000 Bundle',
    items: g10000Bundle.map((item, index) => ({
      id: `10000GBundle-${index}`,
      ...item
    }))
  },
  {
    name: '25,000 Bundle',
    items: g25000Bundle.map((item, index) => ({
      id: `25000GBundle-${index}`,
      ...item
    }))
  }
]

export const Vault: Room = {
  name: 'Vault',
  bundles: VaultBundle,
  reward: RoomReward.MinecartsRepaired
}
