<script lang="ts">
const buttonSizes: Record<string, textSizes> = {
  md: 'xl',
  sm: 'md'
}

type textSizes = 'xl' | 'md' | 'sm' | '2xl' | 'xs'

const buttonType: Record<string, string> = {
  primary: 'bg-brown-400 text-brown-500',
  secondary: 'bg-brown-100 text-brown-500',
  danger: 'bg-red-200 text-white'
}

export default {}
</script>

<script setup lang="ts">
import PixelText from '@/components/common/PixelText.vue'
defineEmits(['click'])
defineProps({
  size: {
    type: String,
    default: 'md',
    validator(value: string) {
      return Object.keys(buttonSizes).includes(value)
    }
  },
  type: {
    type: String,
    default: 'primary',
    validator(value: string) {
      return Object.keys(buttonType).includes(value)
    }
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button
    @click="$emit('click')"
    @keydown.enter="$emit('click')"
    :class="[
      'p-2 text-2 pixel-shadow',
      buttonType[type],
      disabled ? 'cursor-default' : 'cursor-pointer active'
    ]"
    :disabled="disabled"
  >
    <PixelText :size="buttonSizes[size]"><slot></slot></PixelText>
  </button>
</template>

<style scoped>
button.pixel-shadow.active:active {
  filter: unset;
  box-shadow:
    inset 3px -3px 0px 0px #ffffff80,
    inset -3px 3px 0px 0px #00000040;
}

button.pixel-shadow.active:active > span {
  display: block;
  transform: translateX(3px);
}
</style>
