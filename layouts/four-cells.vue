<script setup lang="ts">
import GolBackground from '../components/GolBackground.vue'
</script>

<template>
  <div class="slidev-layout w-full h-full grid grid-cols-2 grid-rows-2">
    <GolBackground />
    <div class="slide-cell pr-8">
      <slot />
    </div>
    <div class="slide-cell border-l border-theme pl-8 flex items-center justify-center">
      <slot name="result" />
    </div>
    <div class="slide-cell border-t border-theme pt-4 pr-8 flex flex-col">
      <slot name="left" />
    </div>
    <div class="slide-cell border-t border-l border-theme pt-4 pl-8 flex flex-col">
      <slot name="right" />
    </div>
  </div>
</template>
