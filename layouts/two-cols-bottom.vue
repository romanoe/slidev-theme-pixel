<script setup lang="ts">
import { useSlots } from 'vue'
import GolBackground from '../components/GolBackground.vue'

const slots = useSlots()
</script>

<template>
  <div class="slidev-layout w-full h-full grid grid-cols-2"
       :class="slots.title ? 'rows-title-main-bottom' : 'rows-main-bottom'">
    <GolBackground />
    <div v-if="slots.title" class="col-span-full slide-cell border-b border-theme pb-4">
      <slot name="title" />
    </div>
    <div class="slide-cell">
      <slot />
    </div>
    <div class="slide-cell">
      <slot name="right" />
    </div>
    <div class="slide-cell col-span-full border-t border-theme pt-3 flex items-center justify-center">
      <slot name="bottom" />
    </div>
  </div>
</template>
