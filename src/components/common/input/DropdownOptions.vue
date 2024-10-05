<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch, type PropType } from 'vue'

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
  },
  disabled: {
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

const dropdownOptions = ref<Element>()

const clickPosition = ref({ x: 0, y: 0 })
const dropdownSize = ref({ width: 0, height: 0 })

const onScroll = () => {
  isOpen.value = false
}

const onClick = (event: MouseEvent) => {
  if (!props.disabled) {
    clickPosition.value = { x: event.clientX, y: event.clientY }
    isOpen.value = true
  }
}

onMounted(() => {
  eventBus.on('listScroll', onScroll)
})

onUnmounted(() => {
  eventBus.off('listScroll', onScroll)
})

watch(dropdownOptions, () => {
  dropdownSize.value = {
    width: dropdownOptions.value?.clientWidth || 0,
    height: dropdownOptions.value?.clientHeight || 0
  }
})

const dropDownStyle = computed(() => {
  return {
    top: `${clickPosition.value.y + dropdownSize.value.height > window.innerHeight ? window.innerHeight - dropdownSize.value.height - 10 : clickPosition.value.y}px`,
    left: `${clickPosition.value.x - dropdownSize.value.width < 10 ? 10 : clickPosition.value.x - dropdownSize.value.width}px`
  }
})

//@ts-ignore
onClickOutside(dropdownOptions, () => {
  isOpen.value = false
})
</script>

<template>
  <div class="flex gap-2 items-center w-auto justify-end" @click="onClick">
    <slot></slot>
  </div>
  <Teleport to="#dropdown">
    <div
      ref="dropdownOptions"
      v-if="isOpen"
      class="pixel-message-border bg-brown-100 text-brown-500 py-5 flex flex-col fixed z-[1000]"
      :style="dropDownStyle"
    >
      <div class="w-52 max-h-52 flex flex-col px-5 gap-2 overflow-scroll no-scrollbar">
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
