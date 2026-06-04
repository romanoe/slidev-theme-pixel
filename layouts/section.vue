<script setup lang="ts">
import GolBackground from '../components/GolBackground.vue'
</script>

<template>
  <div class="slidev-layout section">
    <GolBackground class="gol-section" :detailed="true" />
    <div class="section-content">
      <slot />
    </div>
  </div>
</template>
