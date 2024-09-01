<script setup lang="ts">
import HomeList from '../components/Home/HomeList.vue'
import HomeHeader from '../components/Home/HomeHeader.vue'
</script>

<template>
  <main class="flex flex-col max-h-full">
    <HomeHeader />
    <HomeList class="flex-grow overflow-scroll" />
  </main>
</template>
