<script lang="ts">
const statusColor: Record<CheckListStatus, string> = {
  [CheckListStatus.ToDo]: 'text-brown-700',
  [CheckListStatus.Acquired]: 'text-blue-400',
  [CheckListStatus.InProgress]: 'text-brown-400',
  [CheckListStatus.Submitted]: 'text-green-400'
}
</script>

<script setup lang="ts">
import { CheckListStatus } from '@/types'
import type { PropType } from 'vue'
import dropdownArrow from '@/assets/images/dropdown_arrow.png'
import PixelTitle from '../PixelTitle.vue'
import DropdownOptions from './DropdownOptions.vue'

defineEmits(['update:modelValue'])
defineProps({
  modelValue: {
    type: String as PropType<CheckListStatus>,
    default: CheckListStatus.ToDo
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <DropdownOptions
    :options="
      Object.values(CheckListStatus).map((status) => ({
        label: status,
        value: status
      }))
    "
    :selected="[modelValue]"
    :disabled="disabled"
    @update:select-value="(value) => $emit('update:modelValue', value)"
  >
    <div :class="['flex gap-2 items-center ', disabled ? 'opacity-50' : 'hover:cursor-pointer']">
      <PixelTitle size="xl" :class="[statusColor[modelValue]]" :no-shadow="true">{{
        modelValue
      }}</PixelTitle>
      <img :src="dropdownArrow" alt="dropdown arrow" class="w-4 h-2" />
    </div>
  </DropdownOptions>
</template>

<style scoped></style>
