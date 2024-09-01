import type { Room } from '../types'
import { AbandonedJojaMart } from './abandonedJojaMart'
import { BoilerRoom } from './boilerRoom'
import { BulletinBoard } from './bulletinBoard'
import { CraftsRoom } from './craftsRoom'
import { FishTank } from './fishTank'
import { Pantry } from './pantry'
import { Vault } from './vault'

export const Rooms: Room[] = [
  CraftsRoom,
  Pantry,
  FishTank,
  BoilerRoom,
  BulletinBoard,
  Vault,
  AbandonedJojaMart
]
