<script setup lang="ts">
import { ref, watch } from 'vue'

const emit = defineEmits(['update:modelValue', 'keydown.enter'])

defineProps({
  modelValue: {
    type: String
  },
  placeholder: {
    type: String
  }
})

const inputText = ref('')

watch(inputText, (newValue) => {
  inputText.value = newValue
  emit('update:modelValue', newValue)
})
</script>

<template>
  <input
    v-model="inputText"
    :placeholder="placeholder"
    :class="[
      'p-2 h-8 border-0 bg-brown-75 pixel-sunken-shadow text-md text-brown-500 focus:outline-brown-700 !focus:rounded-none',
      !modelValue ? 'opacity-50' : ''
    ]"
    @keydown.enter="$emit('keydown.enter')"
  />
</template>

<style scoped></style>
