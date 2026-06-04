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
