import { spriteKeys, type SpriteKeyType } from './sprites'
import { CaveLocationCaves, type Mob } from './types'

export const mobs: Partial<Record<SpriteKeyType, Mob>> = {
  bat: {
    id: spriteKeys.bat,
    locations: [
      {
        location: CaveLocationCaves.Mines,
        floor: {
          starting: 31,
          ending: 39
        }
      }
    ]
  },
  blueSlime: {
    id: spriteKeys.blueSlime,
    locations: [
      {
        location: CaveLocationCaves.Mines,
        floor: {
          starting: 41,
          ending: 79
        }
      }
    ]
  },
  duggy: {
    id: spriteKeys.duggy,
    locations: [
      {
        location: CaveLocationCaves.Mines,
        floor: {
          starting: 6,
          ending: 29
        }
      }
    ]
  },
  dustSprite: {
    id: spriteKeys.dustSprite,
    locations: [
      {
        location: CaveLocationCaves.Mines,
        floor: {
          starting: 41,
          ending: 79
        }
      }
    ]
  },
  frostBat: {
    id: spriteKeys.frostBat,
    locations: [
      {
        location: CaveLocationCaves.Mines,
        floor: {
          starting: 41,
          ending: 79
        }
      }
    ]
  },
  ghost: {
    id: spriteKeys.ghost,
    locations: [
      {
        location: CaveLocationCaves.Mines,
        floor: {
          starting: 51,
          ending: 79
        }
      }
    ]
  },
  hauntedSkull: {
    id: spriteKeys.hauntedSkull,
    locations: [
      {
        location: CaveLocationCaves.Mines
      }
    ]
  },
  iridiumBat: {
    id: spriteKeys.iridiumBat,
    locations: [
      {
        location: CaveLocationCaves.SkullCavern,
        floor: {
          starting: 51
        }
      }
    ]
  },
  lavaBat: {
    id: spriteKeys.lavaBat,
    locations: [
      {
        location: CaveLocationCaves.Mines,
        floor: {
          starting: 81,
          ending: 119
        }
      },
      {
        location: CaveLocationCaves.SkullCavern,
        floor: {
          starting: 20,
          ending: 40
        }
      }
    ]
  },
  lavaCrab: {
    id: spriteKeys.lavaCrab,
    locations: [
      {
        location: CaveLocationCaves.Mines,
        floor: {
          starting: 81,
          ending: 119
        }
      }
    ]
  },
  metalHead: {
    id: spriteKeys.metalHead,
    locations: [
      {
        location: CaveLocationCaves.Mines,
        floor: {
          starting: 80,
          ending: 119
        }
      }
    ]
  },
  mummy: {
    id: spriteKeys.mummy,
    locations: [
      {
        location: CaveLocationCaves.SkullCavern
      }
    ]
  },
  purpleSlime: {
    id: spriteKeys.purpleSlime,
    locations: [
      {
        location: CaveLocationCaves.SkullCavern
      }
    ]
  },
  rockCrab: {
    id: spriteKeys.rockCrab,
    locations: [
      {
        location: CaveLocationCaves.Mines,
        floor: {
          starting: 1,
          ending: 29
        }
      }
    ]
  },
  serpent: {
    id: spriteKeys.serpent,
    locations: [
      {
        location: CaveLocationCaves.SkullCavern
      }
    ]
  },
  shadowBrute: {
    id: spriteKeys.shadowBrute,
    locations: [
      {
        location: CaveLocationCaves.Mines,
        floor: {
          starting: 81,
          ending: 119
        }
      }
    ]
  },
  shadowShaman: {
    id: spriteKeys.shadowShaman,
    locations: [
      {
        location: CaveLocationCaves.Mines,
        floor: {
          starting: 81,
          ending: 119
        }
      }
    ]
  },
  slime: {
    id: spriteKeys.slimeMob,
    locations: [
      {
        location: CaveLocationCaves.Mines
      }
    ]
  },
  squidKid: {
    id: spriteKeys.squidKid,
    locations: [
      {
        location: CaveLocationCaves.Mines,
        floor: {
          starting: 91,
          ending: 119
        }
      }
    ]
  }
}

export type MobKeyType = keyof typeof mobs

export const mobKeys = Object.keys(mobs).reduce(
  (acc, key) => ({
    ...acc,
    [key]: key
  }),
  {} as Record<MobKeyType, MobKeyType>
)
