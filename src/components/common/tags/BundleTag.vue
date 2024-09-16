<script setup lang="ts">
import { type PropType } from 'vue'
import PixelText from '../PixelText.vue'
import {
  AbandonedJojaMartBundles,
  BoilerRoomBundles,
  BulletinBoardBundles,
  type BundleTypes,
  CraftsRoomBundles,
  FishTankBundles,
  PantryBundles,
  VaultBundles
} from '@/data/types'

defineProps({
  bundle: {
    type: String as PropType<BundleTypes>,
    required: true
  }
})

const BackgroundColor: Record<BundleTypes, string> = {
  [CraftsRoomBundles.SpringForagingBundle]: 'bg-green-100',
  [CraftsRoomBundles.SummerForagingBundle]: 'bg-yellow-100',
  [CraftsRoomBundles.FallForagingBundle]: 'bg-orange-100',
  [CraftsRoomBundles.WinterForagingBundle]: 'bg-ice-100',
  [CraftsRoomBundles.ConstructionBundle]: 'bg-red-100',
  [CraftsRoomBundles.ExoticForagingBundle]: 'bg-purple-100',
  [PantryBundles.SpringCropsBundle]: 'bg-green-100',
  [PantryBundles.SummerCropsBundle]: 'bg-yellow-100',
  [PantryBundles.FallCropsBundle]: 'bg-orange-100',
  [PantryBundles.QualityCropsBundle]: 'bg-ice-100',
  [PantryBundles.AnimalBundle]: 'bg-red-100',
  [PantryBundles.ArtisanBundle]: 'bg-purple-100',
  [FishTankBundles.RiverFishBundle]: 'bg-ice-100',
  [FishTankBundles.LakeFishBundle]: 'bg-green-100',
  [FishTankBundles.OceanFishBundle]: 'bg-blue-100',
  [FishTankBundles.NightFishBundle]: 'bg-purple-100',
  [FishTankBundles.CrabPotBundle]: 'bg-purple-100',
  [FishTankBundles.SpecialtyFishBundle]: 'bg-red-100',
  [BoilerRoomBundles.BlacksmithsBundle]: 'bg-orange-100',
  [BoilerRoomBundles.GeologistsBundle]: 'bg-purple-100',
  [BoilerRoomBundles.AdventurersBundle]: 'bg-purple-100',
  [BulletinBoardBundles.ChefsBundle]: 'bg-red-100',
  [BulletinBoardBundles.DyeBundle]: 'bg-ice-100',
  [BulletinBoardBundles.FieldResearchBundle]: 'bg-blue-100',
  [BulletinBoardBundles.FodderBundle]: 'bg-yellow-100',
  [BulletinBoardBundles.EnchantersBundle]: 'bg-purple-100',
  [VaultBundles['2,500 Bundle']]: 'bg-red-100',
  [VaultBundles['5,000 Bundle']]: 'bg-orange-100',
  [VaultBundles['10,000 Bundle']]: 'bg-yellow-100',
  [VaultBundles['25,000 Bundle']]: 'bg-purple-100',
  [AbandonedJojaMartBundles.TheMissingBundle]: 'bg-purple-100'
}
</script>

<template>
  <div :class="['p-2 pixel-shadow', BackgroundColor[bundle]]">
    <PixelText size="tag">{{ bundle }}</PixelText>
  </div>
</template>

<style scoped></style>
