<script setup lang="ts">
import { useSlots } from 'vue'
import GolBackground from '../components/GolBackground.vue'

const slots = useSlots()
</script>

<template>
  <div class="slidev-layout w-full h-full grid grid-cols-2 gap-12"
       :class="slots.title ? 'rows-title-content' : ''">
    <GolBackground />
    <div v-if="slots.title" class="col-span-full slide-cell">
      <slot name="title" />
    </div>
    <div class="slide-cell">
      <slot name="left" /><slot v-if="!slots.left" />
    </div>
    <div class="slide-cell">
      <slot name="right" />
    </div>
  </div>
</template>
