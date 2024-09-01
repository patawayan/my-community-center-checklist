import type { SpriteKeyType } from './sprites'

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never
}
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
}

export type Animal = {
  __typename?: 'Animal'
  location: Scalars['String']['output']
  spriteId: SpriteKeyType
}

export type AnimalProducts = {
  __typename?: 'AnimalProducts'
  animals: Array<Animal>
}

export type ArtisanGoods = {
  __typename?: 'ArtisanGoods'
  requirements: Array<EquipmentMaterialSource>
}

export type Bundle = {
  __typename?: 'Bundle'
  items: Array<BundleItem>
  name: Scalars['String']['output']
}

export type BundleItem = {
  __typename?: 'BundleItem'
  id: Scalars['ID']['output']
  item: Item
  quality?: Maybe<Quality>
  quantity?: Maybe<Scalars['Int']['output']>
}

export type Buying = {
  __typename?: 'Buying'
  locations?: Maybe<Array<StoreLocation>>
}

export type CaveLocation = {
  __typename?: 'CaveLocation'
  floors?: Maybe<LocationFloors>
  name: CaveLocationCaves
}

export enum CaveLocationCaves {
  Mines = 'Mines',
  QuarryMine = 'Quarry Mine',
  SkullCavern = 'Skull Cavern'
}

export type Combat = {
  __typename?: 'Combat'
  info?: Maybe<Scalars['String']['output']>
  locations: Array<MobLocation>
}

export type Cooking = {
  __typename?: 'Cooking'
  ingredients: Array<Scalars['String']['output']>
}

export type CrabPot = {
  __typename?: 'CrabPot'
  location: CrabPotSource
}

export enum CrabPotSource {
  Freshwater = 'Freshwater',
  Ocean = 'Ocean'
}

export type EquipmentMaterialSource = {
  __typename?: 'EquipmentMaterialSource'
  any?: Maybe<Scalars['String']['output']>
  equipment: Scalars['String']['output']
  material?: Maybe<Array<Scalars['String']['output']>>
}

export type Farming = {
  __typename?: 'Farming'
  info?: Maybe<Scalars['String']['output']>
}

export type Fishing = {
  __typename?: 'Fishing'
  locations: Array<FishingLocation>
  time?: Maybe<Time>
  weather?: Maybe<Weather>
}

export enum FishingLocation {
  Desert = 'Desert',
  ForestPond = 'Forest Pond',
  Mines = 'Mines',
  MountainLake = 'Mountain Lake',
  Ocean = 'Ocean',
  River = 'River',
  SecretWoods = 'Secret Woods',
  Sewer = 'Sewer',
  WitchsSwamp = 'Witchs Swamp'
}

export type Foraging = {
  __typename?: 'Foraging'
  info?: Maybe<Scalars['String']['output']>
  locations?: Maybe<Array<ForagingLocations>>
}

export enum ForagingLocations {
  Beach = 'Beach',
  BeachFarm = 'Beach Farm',
  Desert = 'Desert',
  ForestFarm = 'Forest Farm',
  FruitBatFarmCave = 'Fruit Bat Farm Cave',
  GreenRain = 'Green Rain',
  Mines = 'Mines',
  MushroomFarmCave = 'Mushroom Farm Cave',
  Normal = 'Normal',
  SecretWoods = 'Secret Woods',
  SkullCavern = 'Skull Cavern'
}

export type Item = {
  __typename?: 'Item'
  isNeverSoldTravelCart?: Maybe<Scalars['Boolean']['output']>
  sourceDetails: Array<SourceDetail>
  spriteId: SpriteKeyType
}

export type LocationFloors = {
  __typename?: 'LocationFloors'
  ending?: Maybe<Scalars['Int']['output']>
  starting: Scalars['Int']['output']
}

export type Mining = {
  __typename?: 'Mining'
  locations: Array<CaveLocation>
}

export type Mob = {
  __typename?: 'Mob'
  id: Scalars['String']['output']
  locations: Array<MobCaveLocation>
}

export type MobCaveLocation = {
  __typename?: 'MobCaveLocation'
  floor?: Maybe<LocationFloors>
  location: CaveLocationCaves
}

export type MobFloorChance = {
  __typename?: 'MobFloorChance'
  chance?: Maybe<Scalars['Int']['output']>
  mobId: SpriteKeyType
}

export type MobLocation = {
  __typename?: 'MobLocation'
  location: CaveLocationCaves
  mobFloor?: Maybe<Array<MobFloorChance>>
}

export type Other = {
  __typename?: 'Other'
  info?: Maybe<Scalars['String']['output']>
}

export enum Quality {
  Gold = 'Gold',
  Iridium = 'Iridium',
  Normal = 'Normal',
  Silver = 'Silver'
}

export type Room = {
  __typename?: 'Room'
  bundles: Array<Bundle>
  name: Scalars['String']['output']
  reward: RoomReward
}

export enum RoomReward {
  BridgeRepair = 'Bridge Repair',
  BusRepair = 'Bus Repair',
  Friendship = 'Friendship',
  GlitteringBoulderRemoved = 'Glittering Boulder Removed',
  Greenhouse = 'Greenhouse',
  MinecartsRepaired = 'Minecarts Repaired',
  MovieTheater = 'Movie Theater'
}

export enum Seasons {
  AllSeasons = 'All Seasons',
  Fall = 'Fall',
  Spring = 'Spring',
  Summer = 'Summer',
  Winter = 'Winter'
}

export type SourceDetail = {
  __typename?: 'SourceDetail'
  seasons: Array<Seasons>
  sources: Array<Sources>
}

export enum SourceType {
  AnimalProducts = 'AnimalProducts',
  ArtisanGoods = 'ArtisanGoods',
  Buying = 'Buying',
  Combat = 'Combat',
  Cooking = 'Cooking',
  CrabPot = 'CrabPot',
  Farming = 'Farming',
  Fishing = 'Fishing',
  Foraging = 'Foraging',
  Mining = 'Mining',
  Other = 'Other'
}

export type Sources =
  | AnimalProducts
  | ArtisanGoods
  | Buying
  | Combat
  | Cooking
  | CrabPot
  | Farming
  | Fishing
  | Foraging
  | Mining
  | Other

export type Sprite = {
  __typename?: 'Sprite'
  id: Scalars['String']['output']
  image: Scalars['String']['output']
  name: Scalars['String']['output']
}

export enum StoreLocation {
  CarpentersShop = "Carpenter's Shop",
  DesertTrader = 'Desert Trader',
  Krobus = 'Krobus',
  MarnieRanch = "Marnie's Ranch",
  Oasis = 'Oasis',
  PierreFlowerDance = 'Pierre Flower Dance'
}

export type Time = {
  __typename?: 'Time'
  ending?: Maybe<Scalars['Int']['output']>
  starting: Scalars['Int']['output']
}

export enum Weather {
  Any = 'Any',
  Rainy = 'Rainy',
  Sunny = 'Sunny'
}
