<script lang="ts">
export default {}
</script>

<script setup lang="ts">
import AnimalProductsSource from '@/components/source/AnimalProductsSource.vue'
import SeasonTag from './SeasonTag.vue'
import { Seasons, SourceType, type SourceDetail } from '@/data/types'
import ArtisanGoodsSource from '@/components/source/ArtisanGoodsSource.vue'
import BuyingSource from '@/components/source/BuyingSource.vue'
import CombatSource from '@/components/source/CombatSource.vue'
import CookingSource from '@/components/source/CookingSource.vue'
import CrabPotSource from '@/components/source/CrabPotSource.vue'
import FarmingSource from '@/components/source/FarmingSource.vue'
import FishingSource from '@/components/source/FishingSource.vue'
import ForagingSource from '@/components/source/ForagingSource.vue'
import MiningSource from '@/components/source/MiningSource.vue'
import OtherSource from '@/components/source/OtherSource.vue'

defineProps({
  detail: {
    type: Object as () => SourceDetail,
    required: true
  }
})
</script>

<template>
  <div class="relative pt-5">
    <div class="pt-9 pb-3 px-6 bg-brown-75 pixel-sunken-shadow gap-3 flex">
      <div
        v-for="source in detail.sources"
        :key="source.__typename"
        :class="[
          detail.seasons.length === 3 ? 'min-w-36' : '',
          detail.seasons.length === 2 ? 'min-w-24' : ''
        ]"
      >
        <AnimalProductsSource
          v-if="source.__typename === SourceType.AnimalProducts"
          :detail="source"
        />
        <ArtisanGoodsSource v-if="source.__typename === SourceType.ArtisanGoods" :detail="source" />
        <BuyingSource v-if="source.__typename === SourceType.Buying" :detail="source" />
        <CombatSource v-if="source.__typename === SourceType.Combat" :detail="source" />
        <CookingSource v-if="source.__typename === SourceType.Cooking" :detail="source" />
        <CrabPotSource v-if="source.__typename === SourceType.CrabPot" :detail="source" />
        <FarmingSource v-if="source.__typename === SourceType.Farming" :detail="source" />
        <FishingSource v-if="source.__typename === SourceType.Fishing" :detail="source" />
        <ForagingSource v-if="source.__typename === SourceType.Foraging" :detail="source" />
        <MiningSource v-if="source.__typename === SourceType.Mining" :detail="source" />
        <OtherSource v-if="source.__typename === SourceType.Other" :detail="source" />
      </div>
    </div>
    <div class="flex gap-2 absolute top-0 left-0 w-full justify-center">
      <SeasonTag v-if="detail?.seasons?.length === 4" :season="Seasons.AllSeasons" />
      <SeasonTag v-else v-for="season in detail.seasons" :season="season" :key="season" />
    </div>
  </div>
</template>

<style scoped></style>
