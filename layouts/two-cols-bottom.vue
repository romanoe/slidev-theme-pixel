<script setup lang="ts">
import GolBackground from '../components/GolBackground.vue'
</script>

<template>
  <div class="slidev-layout w-full h-full grid grid-cols-2 rows-main-bottom">
    <GolBackground />
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
