<script setup lang="ts">
import { useDarkMode } from '@slidev/client'
import { ref, watch } from 'vue'
import { useGameOfLife } from '../composables/useGameOfLife'

const props = defineProps<{ detailed?: boolean; color?: string }>()
const { isDark } = useDarkMode()
const canvasRef = ref<HTMLCanvasElement | null>(null)

const { draw } = useGameOfLife(
  canvasRef,
  () => props.color ?? (isDark.value ? '#fff' : '#000'),
  { detailed: props.detailed }
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

/* cover and section variants need z-index: 0 so cells render above their dark backgrounds */
.gol-bg.gol-cover   { opacity: 0.04; z-index: 0; }
.gol-bg.gol-section { opacity: 0.07;  z-index: 0; }

@media (prefers-reduced-motion: reduce) {
  .gol-bg { display: none; }
}
</style>
