<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useUserDataStore } from './stores/userData'

const userData = useUserDataStore()

userData.loadData()
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
