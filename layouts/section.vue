<script setup lang="ts">
import { useDarkMode } from '@slidev/client'
import GolBackground from '../components/GolBackground.vue'

const { isDark } = useDarkMode()
</script>

<template>
  <div class="slidev-layout section">
    <GolBackground class="gol-section" :detailed="true" :color="isDark ? '#000' : '#fff'" />
    <div class="section-content">
      <slot />
    </div>
  </div>
</template>
