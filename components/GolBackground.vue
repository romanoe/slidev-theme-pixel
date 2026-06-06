<script setup lang="ts">
import { ref, watch } from 'vue'
import { useDarkMode } from '@slidev/client'
import { useGameOfLife } from '../composables/useGameOfLife'

const props = defineProps<{ color?: string; invert?: boolean }>()
const canvasRef = ref<HTMLCanvasElement | null>(null)
const { isDark } = useDarkMode()

const { draw } = useGameOfLife(
  canvasRef,
  () => {
    if (props.color) return props.color
    const v = props.invert ? '--bg' : '--text'
    return getComputedStyle(document.documentElement).getPropertyValue(v).trim() || (props.invert ? '#fff' : '#000')
  },
)

watch(isDark, draw)
</script>

<template>
  <canvas ref="canvasRef" class="gol-bg" aria-hidden="true" />
</template>

<style scoped>
.gol-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  opacity: 0.028;
  image-rendering: pixelated;
}

.gol-bg.gol-cover   { opacity: 0.04; z-index: 0; }
.gol-bg.gol-section { opacity: 0.07; z-index: 0; }

@media (prefers-reduced-motion: reduce) {
  .gol-bg { display: none; }
}
</style>
