<script setup lang="ts">
import dropdownArrow from '@/assets/images/dropdown_arrow.png'
import DropdownOptions from '@/components/common/input/DropdownOptions.vue'
import PixelText from '../PixelText.vue'
import PixelButton from '../PixelButton.vue'
import type { DropdownOption } from './types'
import { computed, type PropType } from 'vue'

const emit = defineEmits(['update:modelValue', 'afterChange', 'subclick'])

const props = defineProps({
  modelValue: {
    type: Array as () => string[]
  },
  options: {
    type: Array as PropType<DropdownOption[]>,
    required: true
  },
  selectAll: {
    type: String
  },
  placeholder: {
    type: String,
    default: 'Select an option'
  },
  multiple: {
    type: Boolean,
    default: false
  },
  disableUnselect: {
    type: Boolean,
    default: false
  },
  textOnHover: {
    type: Boolean,
    default: false
  }
})

const isMultiple = computed(() => !!props.selectAll || props.multiple)

const isAllSelected = computed(() => {
  return props.selectAll && props.modelValue && props.modelValue.length === props.options.length - 1
})

const setSelectedOption = (value: string) => {
  if (isMultiple.value) {
    let newModelValue = props.modelValue ? [...props.modelValue] : []
    if (props.selectAll && value === props.selectAll) {
      newModelValue = isAllSelected.value
        ? []
        : props.options.filter((opt) => opt.value !== props.selectAll).map((option) => option.value)
    } else if (newModelValue.includes(value)) {
      if (!props.disableUnselect) {
        newModelValue = newModelValue.filter((modVal) => modVal !== value)
      }
    } else {
      newModelValue.push(value)
    }

    emit('update:modelValue', newModelValue)
  } else if (props.modelValue && value === props.modelValue[0] && !props.disableUnselect) {
    emit('update:modelValue', [])
  } else {
    emit('update:modelValue', [value])
  }
  emit('afterChange')
}

const optionLabels = computed(() => {
  return props.options.reduce(
    (acc, option) => ({ ...acc, [option.value]: option.label }),
    {} as Record<string, string>
  )
})

const valueLabels = computed(
  () => props.modelValue?.map((val) => optionLabels.value[val] ?? val) ?? []
)
</script>

<template>
  <DropdownOptions
    :options="options"
    @update:select-value="setSelectedOption"
    :selected="isAllSelected ? props.options.map((opt) => opt.value) : (modelValue ?? [])"
    :multiple="isMultiple"
  >
    <div class="flex hover:cursor-pointer w-full">
      <div
        :class="[
          'flex gap-2 pixel-sunken-shadow bg-brown-400 p-1 px-2 flex-grow justify-center text-center',
          textOnHover ? 'hover:cursor-text' : ''
        ]"
        @click="(event) => $emit('subclick', event)"
      >
        <PixelText v-if="modelValue && modelValue.length" class="text-ellipsis">
          {{ isAllSelected ? selectAll : valueLabels.join(', ') }}
        </PixelText>
        <PixelText v-else class="opacity-40 w-max">{{ placeholder }}</PixelText>
      </div>
      <PixelButton class="min-w-8 px-2 py-1 rounded-e-full">
        <img :src="dropdownArrow" alt="checkbox x" class="w-full" />
      </PixelButton>
    </div>
  </DropdownOptions>
</template>

<style scoped></style>
