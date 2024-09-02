<script setup lang="ts">
import { onMounted, onUnmounted, ref, type PropType } from 'vue'

import { eventBus } from '@/utils/eventBus'
import { onClickOutside } from '@vueuse/core'
import type { DropdownOption } from './types'
import PixelText from '../PixelText.vue'

const isOpen = ref(false)

const emit = defineEmits(['update:selectValue'])
const props = defineProps({
  options: {
    type: Array as PropType<DropdownOption[]>,
    required: true
  },
  selected: {
    type: Array as PropType<String[]>,
    required: true
  },
  multiple: {
    type: Boolean,
    default: false
  }
})

const onSelect = (value: String) => {
  emit('update:selectValue', value)
  if (!props.multiple) {
    isOpen.value = false
  }
}

const dropdown = ref<Element>()
const dropDownStyle = ref({})

const onScroll = () => {
  isOpen.value = false

  const { bottom = 0, left = 0 } = dropdown?.value?.getBoundingClientRect() ?? {}
  const newBottom = bottom - 100 < 10 ? 100 : bottom - 100
  const newLeft = left - 100 < 10 ? 100 : left - 100
  dropDownStyle.value = {
    top: `${newBottom}px`,
    left: `${newLeft}px`
  }
}

onMounted(() => {
  onScroll()
  eventBus.on('listScroll', onScroll)
})

onUnmounted(() => {
  eventBus.off('listScroll', onScroll)
})

const dropdownOptions = ref<Element>()

//@ts-ignore
onClickOutside(dropdownOptions, () => (isOpen.value = false))
</script>

<template>
  <div class="flex gap-2 items-center w-full" @click="isOpen = true" ref="dropdown">
    <slot></slot>
  </div>
  <Teleport to="#dropdown">
    <div
      ref="dropdownOptions"
      v-if="isOpen"
      class="pixel-message-border bg-brown-100 text-brown-500 py-5 flex flex-col fixed z-[1000]"
      :style="dropDownStyle"
    >
      <div class="w-52 max-h-60 flex flex-col px-5 gap-2 overflow-scroll">
        <div
          v-for="(option, index) in options"
          :key="option.value"
          @click="onSelect(option.value)"
          @keydown.enter="onSelect(option.value)"
          :class="[
            'p-2 hover:cursor-pointer pixel-sunken-shadow option  ',
            selected.includes(option.value) ? 'bg-brown-200' : 'bg-brown-50 hover:bg-brown-75'
          ]"
          v-focus="index === 0"
        >
          <PixelText size="md">{{ option.label }}</PixelText>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.option:hover span {
  display: block;
  transform: translateX(3px);
}
</style>
