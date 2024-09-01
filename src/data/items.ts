import { spriteKeys, type SpriteKeyType } from './sprites'
import {
  type BundleItem,
  type Item,
  CaveLocationCaves,
  CrabPotSource,
  FishingLocation,
  ForagingLocations,
  Seasons,
  StoreLocation,
  Weather
} from './types'

export type BundleItemBare = Omit<BundleItem, 'id'>

console.log('ssssppprrrr', spriteKeys)

export const items = {
  '2500g': {
    spriteId: spriteKeys['2500g'],
    sourceDetails: [
      {
        seasons: [Seasons.Spring, Seasons.Summer, Seasons.Fall, Seasons.Winter],
        sources: [
          {
            __typename: 'Other'
          }
        ]
      }
    ]
  },
  '5000g': {
    spriteId: spriteKeys['5000g'],
    sourceDetails: [
      {
        seasons: [Seasons.Spring, Seasons.Summer, Seasons.Fall, Seasons.Winter],
        sources: [
          {
            __typename: 'Other'
          }
        ]
      }
    ]
  },
  '10000g': {
    spriteId: spriteKeys['10000g'],
    sourceDetails: [
      {
        seasons: [Seasons.Spring, Seasons.Summer, Seasons.Fall, Seasons.Winter],
        sources: [
          {
            __typename: 'Other'
          }
        ]
      }
    ]
  },
  '25000g': {
    spriteId: spriteKeys['25000g'],
    sourceDetails: [
      {
        seasons: [Seasons.Spring, Seasons.Summer, Seasons.Fall, Seasons.Winter],
        sources: [
          {
            __typename: 'Other'
          }
        ]
      }
    ]
  },
  ancientFruit: {
    spriteId: spriteKeys.ancientFruit,
    isNeverSoldTravelCart: true,
    sourceDetails: [
      {
        seasons: [Seasons.Spring, Seasons.Summer, Seasons.Fall],
        sources: [
          {
            __typename: 'Farming'
          }
        ]
      }
    ]
  },
  apple: {
    spriteId: spriteKeys.apple,
    sourceDetails: [
      {
        seasons: [Seasons.Fall],
        sources: [
          {
            __typename: 'Farming',
            info: 'Plant before Fall to harvest by Fall.'
          }
        ]
      },
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Foraging',
            locations: [ForagingLocations.FruitBatFarmCave]
          }
        ]
      }
    ]
  },
  apricot: {
    spriteId: spriteKeys.apricot,
    sourceDetails: [
      {
        seasons: [Seasons.Spring],
        sources: [
          {
            __typename: 'Farming',
            info: 'Plant before Spring to harvest by Spring.'
          }
        ]
      },
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Foraging',
            locations: [ForagingLocations.FruitBatFarmCave]
          }
        ]
      }
    ]
  },
  aquamarine: {
    spriteId: spriteKeys.aquamarine,
    isNeverSoldTravelCart: true,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Mining',
            locations: [
              {
                name: CaveLocationCaves.Mines,
                floors: {
                  starting: 40
                }
              }
            ]
          }
        ]
      }
    ]
  },
  batwing: {
    spriteId: spriteKeys.batwing,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Combat',
            locations: [
              {
                location: CaveLocationCaves.Mines,
                mobFloor: [
                  {
                    mobId: spriteKeys.bat,
                    chance: 0.94
                  },
                  {
                    mobId: spriteKeys.frostBat,
                    chance: 0.95
                  },
                  {
                    mobId: spriteKeys.lavaBat,
                    chance: 0.97
                  }
                ]
              },
              {
                location: CaveLocationCaves.SkullCavern,
                mobFloor: [
                  {
                    mobId: spriteKeys.lavaBat,
                    chance: 0.97
                  }
                ]
              }
            ]
          },
          {
            __typename: 'Buying',
            locations: [StoreLocation.Krobus]
          }
        ]
      }
    ]
  },
  blackberry: {
    spriteId: spriteKeys.blackberry,
    sourceDetails: [
      {
        seasons: [Seasons.Fall],
        sources: [
          {
            __typename: 'Foraging'
          }
        ]
      },
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Foraging',
            locations: [ForagingLocations.FruitBatFarmCave]
          }
        ]
      }
    ]
  },
  blueberry: {
    spriteId: spriteKeys.blueberry,
    sourceDetails: [
      {
        seasons: [Seasons.Summer],
        sources: [
          {
            __typename: 'Farming'
          }
        ]
      }
    ]
  },
  bream: {
    spriteId: spriteKeys.bream,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Fishing',
            locations: [FishingLocation.River],
            time: {
              starting: 18
            }
          }
        ]
      }
    ]
  },
  bullhead: {
    spriteId: spriteKeys.bullhead,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Fishing',
            locations: [FishingLocation.MountainLake]
          }
        ]
      }
    ]
  },
  cactusFruit: {
    spriteId: spriteKeys.cactusFruit,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Foraging',
            locations: [ForagingLocations.Desert]
          },
          {
            __typename: 'Buying',
            locations: [StoreLocation.Oasis]
          }
        ]
      }
    ]
  },
  carp: {
    spriteId: spriteKeys.carp,
    sourceDetails: [
      {
        seasons: [Seasons.Spring, Seasons.Summer, Seasons.Fall],
        sources: [
          {
            __typename: 'Fishing',
            locations: [FishingLocation.MountainLake]
          }
        ]
      },
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Fishing',
            locations: [FishingLocation.SecretWoods, FishingLocation.Sewer]
          }
        ]
      }
    ]
  },
  catfish: {
    spriteId: spriteKeys.catfish,
    sourceDetails: [
      {
        seasons: [Seasons.Spring, Seasons.Fall],
        sources: [
          {
            __typename: 'Fishing',
            locations: [
              FishingLocation.River,
              FishingLocation.SecretWoods,
              FishingLocation.WitchsSwamp
            ],
            time: {
              starting: 18,
              ending: 0
            },
            weather: Weather.Rainy
          }
        ]
      },
      {
        seasons: [Seasons.Summer],
        sources: [
          {
            __typename: 'Fishing',
            locations: [FishingLocation.SecretWoods, FishingLocation.WitchsSwamp],
            time: {
              starting: 18,
              ending: 0
            },
            weather: Weather.Rainy
          }
        ]
      }
    ]
  },
  cauliflower: {
    spriteId: spriteKeys.cauliflower,
    sourceDetails: [
      {
        seasons: [Seasons.Spring],
        sources: [
          {
            __typename: 'Farming'
          }
        ]
      }
    ]
  },
  caveCarrot: {
    spriteId: spriteKeys.caveCarrot,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Foraging',
            locations: [ForagingLocations.Mines]
          }
        ]
      }
    ]
  },
  caviar: {
    spriteId: spriteKeys.caviar,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'ArtisanGoods',
            requirements: [
              {
                equipment: spriteKeys.preservesJar,
                material: [spriteKeys.sturgeon]
              }
            ]
          }
        ]
      }
    ]
  },
  cheese: {
    spriteId: spriteKeys.cheese,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'ArtisanGoods',
            requirements: [
              {
                equipment: spriteKeys.cheesePress,
                material: [spriteKeys.milk, spriteKeys.largeMilk]
              }
            ]
          },
          {
            __typename: 'Buying',
            locations: [StoreLocation.DesertTrader]
          }
        ]
      }
    ]
  },
  cherry: {
    spriteId: spriteKeys.cherry,
    sourceDetails: [
      {
        seasons: [Seasons.Spring],
        sources: [
          {
            __typename: 'Farming',
            info: 'Plant before Spring to harvest by Spring.'
          }
        ]
      },
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Foraging',
            locations: [ForagingLocations.FruitBatFarmCave]
          }
        ]
      }
    ]
  },
  chub: {
    spriteId: spriteKeys.chub,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Fishing',
            locations: [FishingLocation.River, FishingLocation.MountainLake]
          }
        ]
      }
    ]
  },
  clam: {
    spriteId: spriteKeys.clam,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'CrabPot',
            location: CrabPotSource.Ocean
          },
          {
            __typename: 'Foraging',
            locations: [ForagingLocations.Beach]
          }
        ]
      }
    ]
  },
  cloth: {
    spriteId: spriteKeys.cloth,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'ArtisanGoods',
            requirements: [
              {
                equipment: spriteKeys.loom,
                material: [spriteKeys.wool]
              },
              {
                equipment: spriteKeys.recyclingMachine,
                material: [spriteKeys.soggyNewspaper]
              }
            ]
          },
          {
            __typename: 'Buying',
            locations: [StoreLocation.DesertTrader]
          },
          {
            __typename: 'Combat',
            locations: [
              {
                location: CaveLocationCaves.SkullCavern,
                mobFloor: [
                  {
                    mobId: spriteKeys.mummy,
                    chance: 0.2
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  cockle: {
    spriteId: spriteKeys.cockle,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'CrabPot',
            location: CrabPotSource.Ocean
          },
          {
            __typename: 'Foraging',
            locations: [ForagingLocations.Beach]
          }
        ]
      }
    ]
  },
  coconut: {
    spriteId: spriteKeys.coconut,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Foraging',
            locations: [ForagingLocations.Desert]
          },
          {
            __typename: 'Buying',
            locations: [StoreLocation.Oasis]
          }
        ]
      }
    ]
  },
  commonMushroom: {
    spriteId: spriteKeys.commonMushroom,
    sourceDetails: [
      {
        seasons: [Seasons.Fall],
        sources: [
          {
            __typename: 'Foraging'
          }
        ]
      },
      {
        seasons: [Seasons.Spring, Seasons.Fall],
        sources: [
          {
            __typename: 'Foraging',
            locations: [ForagingLocations.SecretWoods]
          }
        ]
      },
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Foraging',
            locations: [ForagingLocations.MushroomFarmCave]
          }
        ]
      }
    ]
  },
  copperBar: {
    spriteId: spriteKeys.copperBar,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'ArtisanGoods',
            requirements: [
              {
                equipment: spriteKeys.furnace,
                material: [spriteKeys.copperOre]
              }
            ]
          }
        ]
      }
    ]
  },
  corn: {
    spriteId: spriteKeys.corn,
    sourceDetails: [
      {
        seasons: [Seasons.Summer, Seasons.Fall],
        sources: [
          {
            __typename: 'Farming'
          }
        ]
      }
    ]
  },
  crab: {
    spriteId: spriteKeys.crab,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'CrabPot',
            location: CrabPotSource.Ocean
          },
          {
            __typename: 'Combat',
            locations: [
              {
                location: CaveLocationCaves.Mines,
                mobFloor: [
                  {
                    mobId: spriteKeys.rockCrab,
                    chance: 0.15
                  },
                  {
                    mobId: spriteKeys.lavaCrab,
                    chance: 0.25
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  crayfish: {
    spriteId: spriteKeys.crayfish,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'CrabPot',
            location: CrabPotSource.Freshwater
          }
        ]
      }
    ]
  },
  crocus: {
    spriteId: spriteKeys.crocus,
    sourceDetails: [
      {
        seasons: [Seasons.Winter],
        sources: [
          {
            __typename: 'Foraging'
          }
        ]
      }
    ]
  },
  crystalFruit: {
    spriteId: spriteKeys.crystalFruit,
    sourceDetails: [
      {
        seasons: [Seasons.Winter],
        sources: [
          {
            __typename: 'Foraging'
          }
        ]
      },
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Combat',
            locations: [
              {
                location: CaveLocationCaves.Mines,
                mobFloor: [
                  {
                    mobId: spriteKeys.dustSprite,
                    chance: 0.02
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  daffodil: {
    spriteId: spriteKeys.daffodil,
    sourceDetails: [
      {
        seasons: [Seasons.Spring],
        sources: [
          {
            __typename: 'Foraging'
          },
          {
            __typename: 'Buying',
            locations: [StoreLocation.PierreFlowerDance]
          }
        ]
      }
    ]
  },
  dandelion: {
    spriteId: spriteKeys.dandelion,
    sourceDetails: [
      {
        seasons: [Seasons.Spring],
        sources: [
          {
            __typename: 'Foraging'
          },
          {
            __typename: 'Buying',
            locations: [StoreLocation.PierreFlowerDance]
          }
        ]
      }
    ]
  },
  dinosaurMayonnaise: {
    spriteId: spriteKeys.dinosaurMayonnaise,
    isNeverSoldTravelCart: true,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'ArtisanGoods',
            requirements: [
              {
                equipment: spriteKeys.mayonnaiseMachine,
                material: [spriteKeys.dinosaurEgg]
              }
            ]
          }
        ]
      }
    ]
  },
  duckEgg: {
    spriteId: spriteKeys.duckEgg,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'AnimalProducts',
            animals: [
              {
                spriteId: spriteKeys.duck,
                location: spriteKeys.bigCoop
              }
            ]
          }
        ]
      }
    ]
  },
  duckFeather: {
    spriteId: spriteKeys.duckFeather,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'AnimalProducts',
            animals: [
              {
                spriteId: spriteKeys.duck,
                location: spriteKeys.bigCoop
              }
            ]
          }
        ]
      }
    ]
  },
  earthCrystal: {
    spriteId: spriteKeys.earthCrystal,
    isNeverSoldTravelCart: true,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Mining',
            locations: [
              {
                name: CaveLocationCaves.Mines,
                floors: {
                  starting: 1,
                  ending: 39
                }
              }
            ]
          },
          {
            __typename: 'Combat',
            locations: [
              {
                location: CaveLocationCaves.Mines,
                mobFloor: [
                  {
                    mobId: spriteKeys.duggy,
                    chance: 0.1
                  },
                  {
                    mobId: spriteKeys.hauntedSkull,
                    chance: 0.013
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  eel: {
    spriteId: spriteKeys.eel,
    sourceDetails: [
      {
        seasons: [Seasons.Spring, Seasons.Fall],
        sources: [
          {
            __typename: 'Fishing',
            locations: [FishingLocation.Ocean],
            time: {
              starting: 16,
              ending: 2
            },
            weather: Weather.Rainy
          }
        ]
      }
    ]
  },
  eggplant: {
    spriteId: spriteKeys.eggplant,
    sourceDetails: [
      {
        seasons: [Seasons.Fall],
        sources: [
          {
            __typename: 'Farming'
          }
        ]
      }
    ]
  },
  fiddleheadFern: {
    spriteId: spriteKeys.fiddleheadFern,
    sourceDetails: [
      {
        seasons: [Seasons.Summer],
        sources: [
          {
            __typename: 'Foraging',
            locations: [ForagingLocations.SecretWoods]
          }
        ]
      },
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Foraging',
            locations: [ForagingLocations.SkullCavern, ForagingLocations.GreenRain]
          }
        ]
      }
    ]
  },
  fireQuartz: {
    spriteId: spriteKeys.fireQuartz,
    isNeverSoldTravelCart: true,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Mining',
            locations: [
              {
                name: CaveLocationCaves.Mines,
                floors: {
                  starting: 81,
                  ending: 119
                }
              }
            ]
          }
        ]
      }
    ]
  },
  hay: {
    spriteId: spriteKeys.hay,
    isNeverSoldTravelCart: true,
    sourceDetails: [
      {
        seasons: [Seasons.Summer, Seasons.Fall],
        sources: [
          {
            __typename: 'Farming',
            info: 'Harvested from wheat with a scythe.'
          }
        ]
      },
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Foraging',
            info: 'Construct a silo to cut grass for hay.'
          },
          {
            __typename: 'Buying',
            locations: [StoreLocation.DesertTrader, StoreLocation.MarnieRanch]
          }
        ]
      }
    ]
  },
  wheat: {
    spriteId: spriteKeys.wheat,
    sourceDetails: [
      {
        seasons: [Seasons.Summer, Seasons.Fall],
        sources: [
          {
            __typename: 'Farming'
          }
        ]
      }
    ]
  },
  friedEgg: {
    spriteId: spriteKeys.friedEgg,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Cooking',
            ingredients: [spriteKeys.egg]
          }
        ]
      }
    ]
  },
  frozenGeode: {
    spriteId: spriteKeys.frozenGeode,
    isNeverSoldTravelCart: true,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Mining',
            locations: [
              {
                name: CaveLocationCaves.Mines,
                floors: {
                  starting: 41,
                  ending: 79
                }
              }
            ]
          }
        ]
      }
    ]
  },
  frozenTear: {
    spriteId: spriteKeys.frozenTear,
    isNeverSoldTravelCart: true,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Foraging',
            locations: [ForagingLocations.Mines]
          },
          {
            __typename: 'Combat',
            locations: [
              {
                location: CaveLocationCaves.Mines,
                mobFloor: [
                  {
                    mobId: spriteKeys.dustSprite,
                    chance: 0.02
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  ghostfish: {
    spriteId: spriteKeys.ghostfish,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Fishing',
            locations: [FishingLocation.Mines]
          },
          {
            __typename: 'Combat',
            locations: [
              {
                location: CaveLocationCaves.Mines,
                mobFloor: [
                  {
                    mobId: spriteKeys.ghost,
                    chance: 0.08
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  goatCheese: {
    spriteId: spriteKeys.goatCheese,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'ArtisanGoods',
            requirements: [
              {
                equipment: spriteKeys.cheesePress,
                material: [spriteKeys.goatMilk, spriteKeys.largeGoatMilk]
              }
            ]
          }
        ]
      }
    ]
  },
  grape: {
    spriteId: spriteKeys.grape,
    sourceDetails: [
      {
        seasons: [Seasons.Summer],
        sources: [
          {
            __typename: 'Foraging'
          }
        ]
      },
      {
        seasons: [Seasons.Fall],
        sources: [
          {
            __typename: 'Farming'
          }
        ]
      }
    ]
  },
  greenBean: {
    spriteId: spriteKeys.greenBean,
    sourceDetails: [
      {
        seasons: [Seasons.Spring],
        sources: [
          {
            __typename: 'Farming'
          }
        ]
      }
    ]
  },
  goldBar: {
    spriteId: spriteKeys.goldBar,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'ArtisanGoods',
            requirements: [
              {
                equipment: spriteKeys.furnace,
                material: [spriteKeys.goldOre]
              }
            ]
          }
        ]
      }
    ]
  },
  hardwood: {
    spriteId: spriteKeys.hardwood,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Foraging',
            locations: [
              ForagingLocations.Normal,
              ForagingLocations.SecretWoods,
              ForagingLocations.Mines
            ]
          }
        ]
      }
    ]
  },
  hazelnut: {
    spriteId: spriteKeys.hazelnut,
    sourceDetails: [
      {
        seasons: [Seasons.Fall],
        sources: [
          {
            __typename: 'Foraging'
          }
        ]
      }
    ]
  },
  honey: {
    spriteId: spriteKeys.honey,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'ArtisanGoods',
            requirements: [
              {
                equipment: spriteKeys.beeHouse,
                material: [spriteKeys.anyFlower]
              }
            ]
          }
        ]
      }
    ]
  },
  hotPepper: {
    spriteId: spriteKeys.hotPepper,
    sourceDetails: [
      {
        seasons: [Seasons.Summer],
        sources: [
          {
            __typename: 'Farming'
          }
        ]
      }
    ]
  },
  ironBar: {
    spriteId: spriteKeys.ironBar,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'ArtisanGoods',
            requirements: [
              {
                equipment: spriteKeys.furnace,
                material: [spriteKeys.ironOre]
              }
            ]
          }
        ]
      }
    ]
  },
  jelly: {
    spriteId: spriteKeys.jelly,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'ArtisanGoods',
            requirements: [
              {
                equipment: spriteKeys.preservesJar,
                material: [spriteKeys.anyFruit]
              }
            ]
          }
        ]
      }
    ]
  },
  largeEgg: {
    spriteId: spriteKeys.largeEgg,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'AnimalProducts',
            animals: [
              {
                spriteId: spriteKeys.chicken,
                location: spriteKeys.coop
              }
            ]
          }
        ]
      }
    ]
  },
  largeEggBrown: {
    spriteId: spriteKeys.largeEggBrown,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'AnimalProducts',
            animals: [
              {
                spriteId: spriteKeys.brownChicken,
                location: spriteKeys.barn
              }
            ]
          }
        ]
      }
    ]
  },
  largeGoatMilk: {
    spriteId: spriteKeys.largeGoatMilk,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'AnimalProducts',
            animals: [
              {
                spriteId: spriteKeys.goat,
                location: spriteKeys.bigBarn
              }
            ]
          }
        ]
      }
    ]
  },
  largeMilk: {
    spriteId: spriteKeys.largeMilk,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'AnimalProducts',
            animals: [
              {
                spriteId: spriteKeys.cow,
                location: spriteKeys.barn
              }
            ]
          }
        ]
      }
    ]
  },
  largemouthBass: {
    spriteId: spriteKeys.largemouthBass,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Fishing',
            locations: [FishingLocation.MountainLake],
            time: {
              starting: 6,
              ending: 19
            }
          }
        ]
      }
    ]
  },
  leek: {
    spriteId: spriteKeys.leek,
    sourceDetails: [
      {
        seasons: [Seasons.Spring],
        sources: [
          {
            __typename: 'Foraging'
          }
        ]
      }
    ]
  },
  lobster: {
    spriteId: spriteKeys.lobster,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'CrabPot',
            location: CrabPotSource.Ocean
          }
        ]
      }
    ]
  },
  makiRoll: {
    spriteId: spriteKeys.makiRoll,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Cooking',
            ingredients: [spriteKeys.anyFish, spriteKeys.seaweed, spriteKeys.rice]
          }
        ]
      }
    ]
  },
  mapleSyrup: {
    spriteId: spriteKeys.mapleSyrup,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'ArtisanGoods',
            requirements: [
              {
                equipment: spriteKeys.tapper,
                material: [spriteKeys.mapleTree]
              }
            ]
          }
        ]
      }
    ]
  },
  melon: {
    spriteId: spriteKeys.melon,
    sourceDetails: [
      {
        seasons: [Seasons.Summer],
        sources: [
          {
            __typename: 'Farming'
          }
        ]
      }
    ]
  },
  morel: {
    spriteId: spriteKeys.morel,
    sourceDetails: [
      {
        seasons: [Seasons.Spring],
        sources: [
          {
            __typename: 'Foraging',
            locations: [ForagingLocations.SecretWoods]
          }
        ]
      },
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Foraging',
            locations: [ForagingLocations.MushroomFarmCave]
          }
        ]
      }
    ]
  },
  mussel: {
    spriteId: spriteKeys.mussel,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'CrabPot',
            location: CrabPotSource.Ocean
          },
          {
            __typename: 'Foraging',
            locations: [ForagingLocations.Beach]
          }
        ]
      }
    ]
  },
  nautilusShell: {
    spriteId: spriteKeys.nautilusShell,
    sourceDetails: [
      {
        seasons: [Seasons.Winter],
        sources: [
          {
            __typename: 'Foraging',
            locations: [ForagingLocations.Beach]
          }
        ]
      }
    ]
  },
  oakResin: {
    spriteId: spriteKeys.oakResin,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'ArtisanGoods',
            requirements: [
              {
                equipment: spriteKeys.tapper,
                material: [spriteKeys.oakTree]
              }
            ]
          },
          {
            __typename: 'Combat',
            locations: [
              {
                location: CaveLocationCaves.Mines,
                mobFloor: [
                  {
                    mobId: spriteKeys.hauntedSkull,
                    chance: 0.013
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  orange: {
    spriteId: spriteKeys.orange,
    sourceDetails: [
      {
        seasons: [Seasons.Summer],
        sources: [
          {
            __typename: 'Farming',
            info: 'Plant before Summer to harvest by Summer.'
          }
        ]
      },
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Foraging',
            locations: [ForagingLocations.FruitBatFarmCave]
          }
        ]
      }
    ]
  },
  oyster: {
    spriteId: spriteKeys.oyster,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'CrabPot',
            location: CrabPotSource.Ocean
          },
          {
            __typename: 'Foraging',
            locations: [ForagingLocations.Beach]
          }
        ]
      }
    ]
  },
  parsnip: {
    spriteId: spriteKeys.parsnip,
    sourceDetails: [
      {
        seasons: [Seasons.Spring],
        sources: [
          {
            __typename: 'Farming'
          }
        ]
      }
    ]
  },
  peach: {
    spriteId: spriteKeys.peach,
    sourceDetails: [
      {
        seasons: [Seasons.Summer],
        sources: [
          {
            __typename: 'Farming',
            info: 'Plant before Summer to harvest by Summer.'
          }
        ]
      },
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Foraging',
            locations: [ForagingLocations.FruitBatFarmCave]
          }
        ]
      }
    ]
  },
  periwinkle: {
    spriteId: spriteKeys.periwinkle,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'CrabPot',
            location: CrabPotSource.Freshwater
          }
        ]
      }
    ]
  },
  pineTar: {
    spriteId: spriteKeys.pineTar,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'ArtisanGoods',
            requirements: [
              {
                equipment: spriteKeys.tapper,
                material: [spriteKeys.pineTree]
              }
            ]
          }
        ]
      }
    ]
  },
  pomegranate: {
    spriteId: spriteKeys.pomegranate,
    sourceDetails: [
      {
        seasons: [Seasons.Fall],
        sources: [
          {
            __typename: 'Farming',
            info: 'Plant before Fall to harvest by Fall.'
          }
        ]
      },
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Foraging',
            locations: [ForagingLocations.FruitBatFarmCave]
          }
        ]
      }
    ]
  },
  poppy: {
    spriteId: spriteKeys.poppy,
    sourceDetails: [
      {
        seasons: [Seasons.Summer],
        sources: [
          {
            __typename: 'Farming'
          }
        ]
      }
    ]
  },
  potato: {
    spriteId: spriteKeys.potato,
    sourceDetails: [
      {
        seasons: [Seasons.Spring],
        sources: [
          {
            __typename: 'Farming'
          }
        ]
      }
    ]
  },
  prismaticShard: {
    spriteId: spriteKeys.prismaticShard,
    isNeverSoldTravelCart: true,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Mining',
            locations: [
              {
                name: CaveLocationCaves.Mines,
                floors: {
                  starting: 100
                }
              },
              {
                name: CaveLocationCaves.SkullCavern
              }
            ]
          },
          {
            __typename: 'Combat',
            locations: [
              {
                location: CaveLocationCaves.Mines,
                mobFloor: [
                  {
                    mobId: spriteKeys.shadowBrute,
                    chance: 0.0005
                  },
                  {
                    mobId: spriteKeys.shadowShaman,
                    chance: 0.0005
                  }
                ]
              },
              {
                location: CaveLocationCaves.SkullCavern,
                mobFloor: [
                  {
                    mobId: spriteKeys.mummy,
                    chance: 0.001
                  },
                  {
                    mobId: spriteKeys.serpent,
                    chance: 0.001
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  pufferfish: {
    spriteId: spriteKeys.pufferfish,
    sourceDetails: [
      {
        seasons: [Seasons.Summer],
        sources: [
          {
            __typename: 'Fishing',
            locations: [FishingLocation.Ocean],
            time: {
              starting: 12,
              ending: 16
            },
            weather: Weather.Sunny
          }
        ]
      }
    ]
  },
  pumpkin: {
    spriteId: spriteKeys.pumpkin,
    sourceDetails: [
      {
        seasons: [Seasons.Fall],
        sources: [
          {
            __typename: 'Farming'
          }
        ]
      }
    ]
  },
  purpleMushroom: {
    spriteId: spriteKeys.purpleMushroom,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Foraging',
            locations: [ForagingLocations.Mines, ForagingLocations.MushroomFarmCave]
          }
        ]
      }
    ]
  },
  quartz: {
    spriteId: spriteKeys.quartz,
    isNeverSoldTravelCart: true,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Mining',
            locations: [
              {
                name: CaveLocationCaves.Mines
              }
            ]
          }
        ]
      }
    ]
  },
  rabbitsFoot: {
    spriteId: spriteKeys.rabbitsFoot,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'AnimalProducts',
            animals: [
              {
                spriteId: spriteKeys.rabbit,
                location: spriteKeys.deluxeCoop
              }
            ]
          },
          {
            __typename: 'Combat',
            locations: [
              {
                location: CaveLocationCaves.Mines,
                mobFloor: [
                  {
                    mobId: spriteKeys.serpent,
                    chance: 0.008
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  redCabbage: {
    spriteId: spriteKeys.redCabbage,
    sourceDetails: [
      {
        seasons: [Seasons.Summer],
        sources: [
          {
            __typename: 'Farming',
            info: 'Seeds are available in the General Store in Year 2+.'
          }
        ]
      },
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Combat',
            info: 'They drop the seeds, not the actual crop.',
            locations: [
              {
                location: CaveLocationCaves.SkullCavern,
                mobFloor: [
                  {
                    mobId: spriteKeys.mummy,
                    chance: 0.002
                  },
                  {
                    mobId: spriteKeys.purpleSlime,
                    chance: 0.00125
                  },
                  {
                    mobId: spriteKeys.serpent,
                    chance: 0.002
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  redMushroom: {
    spriteId: spriteKeys.redMushroom,
    sourceDetails: [
      {
        seasons: [Seasons.Summer, Seasons.Fall],
        sources: [
          {
            __typename: 'Foraging',
            locations: [ForagingLocations.SecretWoods]
          }
        ]
      },
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Foraging',
            locations: [ForagingLocations.Mines, ForagingLocations.MushroomFarmCave]
          }
        ]
      }
    ]
  },
  redSnapper: {
    spriteId: spriteKeys.redSnapper,
    sourceDetails: [
      {
        seasons: [Seasons.Summer, Seasons.Fall],
        sources: [
          {
            __typename: 'Fishing',
            locations: [FishingLocation.Ocean],
            time: {
              starting: 6,
              ending: 19
            },
            weather: Weather.Rainy
          }
        ]
      }
    ]
  },
  sandfish: {
    spriteId: spriteKeys.sandfish,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Fishing',
            locations: [FishingLocation.Desert],
            time: {
              starting: 6,
              ending: 20
            }
          }
        ]
      }
    ]
  },
  sardine: {
    spriteId: spriteKeys.sardine,
    sourceDetails: [
      {
        seasons: [Seasons.Spring, Seasons.Fall, Seasons.Winter],
        sources: [
          {
            __typename: 'Fishing',
            locations: [FishingLocation.Ocean],
            time: {
              starting: 6,
              ending: 19
            }
          }
        ]
      }
    ]
  },
  seaUrchin: {
    spriteId: spriteKeys.seaUrchin,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Foraging',
            locations: [ForagingLocations.Beach],
            info: 'Fix the bridge in the beach to access this area OR wait for crab mating season '
          }
        ]
      }
    ]
  },
  shad: {
    spriteId: spriteKeys.shad,
    sourceDetails: [
      {
        seasons: [Seasons.Spring, Seasons.Summer, Seasons.Fall],
        sources: [
          {
            __typename: 'Fishing',
            locations: [FishingLocation.River],
            time: {
              starting: 9,
              ending: 2
            },
            weather: Weather.Rainy
          }
        ]
      }
    ]
  },
  shrimp: {
    spriteId: spriteKeys.shrimp,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Fishing',
            locations: [FishingLocation.Ocean]
          }
        ]
      }
    ]
  },
  slime: {
    spriteId: spriteKeys.slime,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Combat',
            locations: [
              {
                location: CaveLocationCaves.Mines,
                mobFloor: [
                  {
                    mobId: spriteKeys.slime
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  snail: {
    spriteId: spriteKeys.snail,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'CrabPot',
            location: CrabPotSource.Freshwater
          }
        ]
      }
    ]
  },
  snowYam: {
    spriteId: spriteKeys.snowYam,
    sourceDetails: [
      {
        seasons: [Seasons.Winter],
        sources: [
          {
            __typename: 'Foraging'
          }
        ]
      }
    ]
  },
  solarEssence: {
    spriteId: spriteKeys.solarEssence,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Combat',
            locations: [
              {
                location: CaveLocationCaves.Mines,
                mobFloor: [
                  {
                    mobId: spriteKeys.ghost,
                    chance: 0.95
                  },
                  {
                    mobId: spriteKeys.squidKid,
                    chance: 0.75
                  },
                  {
                    mobId: spriteKeys.metalHead,
                    chance: 0.65
                  }
                ]
              },
              {
                location: CaveLocationCaves.SkullCavern,
                mobFloor: [
                  {
                    mobId: spriteKeys.mummy,
                    chance: 0.99
                  },
                  {
                    mobId: spriteKeys.iridiumBat,
                    chance: 0.5
                  }
                ]
              }
            ]
          },
          {
            __typename: 'Buying',
            locations: [StoreLocation.Krobus]
          }
        ]
      }
    ]
  },
  spiceBerry: {
    spriteId: spriteKeys.spiceBerry,
    sourceDetails: [
      {
        seasons: [Seasons.Summer],
        sources: [
          {
            __typename: 'Foraging'
          }
        ]
      },
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Foraging',
            locations: [ForagingLocations.FruitBatFarmCave]
          }
        ]
      }
    ]
  },
  stone: {
    spriteId: spriteKeys.stone,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Foraging'
          },
          {
            __typename: 'Buying',
            locations: [StoreLocation.CarpentersShop]
          }
        ]
      }
    ]
  },
  sturgeon: {
    spriteId: spriteKeys.sturgeon,
    sourceDetails: [
      {
        seasons: [Seasons.Summer, Seasons.Winter],
        sources: [
          {
            __typename: 'Fishing',
            locations: [FishingLocation.MountainLake],
            time: {
              starting: 6,
              ending: 19
            }
          }
        ]
      }
    ]
  },
  sunfish: {
    spriteId: spriteKeys.sunfish,
    sourceDetails: [
      {
        seasons: [Seasons.Spring, Seasons.Summer],
        sources: [
          {
            __typename: 'Fishing',
            locations: [FishingLocation.River],
            weather: Weather.Sunny,
            time: {
              starting: 6,
              ending: 19
            }
          }
        ]
      }
    ]
  },
  sunflower: {
    spriteId: spriteKeys.sunflower,
    sourceDetails: [
      {
        seasons: [Seasons.Summer, Seasons.Fall],
        sources: [
          {
            __typename: 'Farming'
          }
        ]
      }
    ]
  },
  sweetPea: {
    spriteId: spriteKeys.sweetPea,
    sourceDetails: [
      {
        seasons: [Seasons.Summer],
        sources: [
          {
            __typename: 'Foraging'
          }
        ]
      }
    ]
  },
  tigerTrout: {
    spriteId: spriteKeys.tigerTrout,
    sourceDetails: [
      {
        seasons: [Seasons.Fall, Seasons.Winter],
        sources: [
          {
            __typename: 'Fishing',
            locations: [FishingLocation.River],
            time: {
              starting: 6,
              ending: 19
            }
          }
        ]
      }
    ]
  },
  tilapia: {
    spriteId: spriteKeys.tilapia,
    sourceDetails: [
      {
        seasons: [Seasons.Summer, Seasons.Fall],
        sources: [
          {
            __typename: 'Fishing',
            locations: [FishingLocation.Ocean],
            time: {
              starting: 6,
              ending: 14
            }
          }
        ]
      }
    ]
  },
  tomato: {
    spriteId: spriteKeys.tomato,
    sourceDetails: [
      {
        seasons: [Seasons.Summer],
        sources: [
          {
            __typename: 'Farming'
          }
        ]
      }
    ]
  },
  truffle: {
    spriteId: spriteKeys.truffle,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'AnimalProducts',
            animals: [
              {
                spriteId: spriteKeys.pig,
                location: spriteKeys.deluxeBarn
              }
            ]
          }
        ]
      }
    ]
  },
  truffleOil: {
    spriteId: spriteKeys.truffleOil,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'ArtisanGoods',
            requirements: [
              {
                equipment: spriteKeys.oilMaker,
                material: [spriteKeys.truffle]
              }
            ]
          }
        ]
      }
    ]
  },
  tuna: {
    spriteId: spriteKeys.tuna,
    sourceDetails: [
      {
        seasons: [Seasons.Summer, Seasons.Winter],
        sources: [
          {
            __typename: 'Fishing',
            locations: [FishingLocation.Ocean],
            time: {
              starting: 6,
              ending: 19
            }
          }
        ]
      }
    ]
  },
  voidEssence: {
    spriteId: spriteKeys.voidEssence,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Combat',
            locations: [
              {
                location: CaveLocationCaves.Mines,
                mobFloor: [
                  {
                    mobId: spriteKeys.shadowBrute,
                    chance: 0.75
                  },
                  {
                    mobId: spriteKeys.shadowShaman,
                    chance: 0.75
                  }
                ]
              },
              {
                location: CaveLocationCaves.SkullCavern,
                mobFloor: [
                  {
                    mobId: spriteKeys.serpent,
                    chance: 0.99
                  }
                ]
              }
            ]
          },
          {
            __typename: 'Buying',
            locations: [StoreLocation.Krobus]
          }
        ]
      }
    ]
  },
  voidSalmon: {
    spriteId: spriteKeys.voidSalmon,
    isNeverSoldTravelCart: true,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Fishing',
            locations: [FishingLocation.WitchsSwamp]
          }
        ]
      }
    ]
  },
  walleye: {
    spriteId: spriteKeys.walleye,
    sourceDetails: [
      {
        seasons: [Seasons.Fall, Seasons.Winter],
        sources: [
          {
            __typename: 'Fishing',
            locations: [
              FishingLocation.River,
              FishingLocation.MountainLake,
              FishingLocation.ForestPond
            ],
            time: {
              starting: 12,
              ending: 2
            },
            weather: Weather.Rainy
          }
        ]
      }
    ]
  },
  wildHorseradish: {
    spriteId: spriteKeys.wildHorseradish,
    sourceDetails: [
      {
        seasons: [Seasons.Spring],
        sources: [
          {
            __typename: 'Foraging'
          }
        ]
      }
    ]
  },
  wildPlum: {
    spriteId: spriteKeys.wildPlum,
    sourceDetails: [
      {
        seasons: [Seasons.Fall],
        sources: [
          {
            __typename: 'Foraging'
          }
        ]
      },
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Foraging',
            locations: [ForagingLocations.FruitBatFarmCave]
          }
        ]
      }
    ]
  },
  wine: {
    spriteId: spriteKeys.wine,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'ArtisanGoods',
            requirements: [
              {
                equipment: spriteKeys.keg,
                material: [spriteKeys.anyFruit]
              },
              {
                equipment: spriteKeys.cask
              }
            ]
          }
        ]
      }
    ]
  },
  winterRoot: {
    spriteId: spriteKeys.winterRoot,
    sourceDetails: [
      {
        seasons: [Seasons.Winter],
        sources: [
          {
            __typename: 'Foraging'
          }
        ]
      },
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Combat',
            locations: [
              {
                location: CaveLocationCaves.Mines,
                mobFloor: [
                  {
                    mobId: spriteKeys.blueSlime,
                    chance: 0.08
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  wood: {
    spriteId: spriteKeys.wood,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Foraging'
          },
          {
            __typename: 'Buying',
            locations: [StoreLocation.CarpentersShop]
          }
        ]
      }
    ]
  },
  woodskip: {
    spriteId: spriteKeys.woodskip,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Fishing',
            locations: [FishingLocation.SecretWoods]
          }
        ]
      }
    ]
  },
  wool: {
    spriteId: spriteKeys.wool,
    sourceDetails: [
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'AnimalProducts',
            animals: [
              {
                spriteId: spriteKeys.sheep,
                location: spriteKeys.deluxeBarn
              },
              {
                spriteId: spriteKeys.rabbit,
                location: spriteKeys.deluxeCoop
              }
            ]
          }
        ]
      }
    ]
  },
  yam: {
    spriteId: spriteKeys.yam,
    sourceDetails: [
      {
        seasons: [Seasons.Fall],
        sources: [
          {
            __typename: 'Farming'
          }
        ]
      },
      {
        seasons: [Seasons.AllSeasons],
        sources: [
          {
            __typename: 'Combat',
            locations: [
              {
                location: CaveLocationCaves.Mines,
                mobFloor: [
                  {
                    mobId: spriteKeys.duggy,
                    chance: 0.03
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
} satisfies Partial<Record<SpriteKeyType, Item>>
