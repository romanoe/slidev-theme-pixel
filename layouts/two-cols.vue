<script setup lang="ts">
import GolBackground from '../components/GolBackground.vue'
</script>

<template>
  <div class="slidev-layout w-full h-full grid grid-cols-2">
    <GolBackground />
    <div class="slide-cell">
      <slot />
    </div>
    <div class="slide-cell border-l border-theme pl-8">
      <slot name="right" />
    </div>
  </div>
</template>
