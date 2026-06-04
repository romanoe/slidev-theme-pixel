<script setup lang="ts">
import GolBackground from '../components/GolBackground.vue'
</script>

<template>
  <div class="slidev-layout fact">
    <GolBackground />
    <div class="my-auto">
      <slot />
    </div>
  </div>
</template>
