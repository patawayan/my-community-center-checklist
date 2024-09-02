<script setup lang="ts">
import { Sprites } from '@/data'
import ListItem from '../List/ListItem.vue'
import { useUserDataStore } from '@/stores/userData'

const userData = useUserDataStore()
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-col p-5 gap-3">
      <ListItem
        v-for="item in userData.checklist"
        :key="`${item.room}-${item.bundle}-${Sprites[item.item.spriteId] ? Sprites[item.item.spriteId].name : ''}`"
        :item="item"
      />
    </div>
  </div>
</template>

<style scoped></style>
