<script setup lang="ts">
import { useDarkMode } from '@slidev/client'
import { ref, onMounted, watch } from 'vue'

const { isDark } = useDarkMode()
const canvasRef = ref<HTMLCanvasElement | null>(null)

const CELL = 8
let COLS = 0, ROWS = 0
let grid: Uint8Array, next: Uint8Array
let ctx: CanvasRenderingContext2D | null = null

function idx(r: number, c: number) { return r * COLS + c }

function step() {
  for (let r = 0; r < ROWS; r++)
    for (let c = 0; c < COLS; c++) {
      let n = 0
      for (let dr = -1; dr <= 1; dr++)
        for (let dc = -1; dc <= 1; dc++) {
          if (!dr && !dc) continue
          n += grid[idx((r + dr + ROWS) % ROWS, (c + dc + COLS) % COLS)]
        }
      const alive = grid[idx(r, c)]
      next[idx(r, c)] = alive ? (n === 2 || n === 3 ? 1 : 0) : (n === 3 ? 1 : 0)
    }
  ;[grid, next] = [next, grid]
}

function draw() {
  if (!ctx) return
  ctx.clearRect(0, 0, COLS * CELL, ROWS * CELL)
  ctx.fillStyle = isDark.value ? '#fff' : '#000'
  for (let r = 0; r < ROWS; r++)
    for (let c = 0; c < COLS; c++)
      if (grid[idx(r, c)]) ctx.fillRect(c * CELL, r * CELL, CELL - 1, CELL - 1)
}

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  const W = 980
  const H = 552
  COLS = Math.floor(W / CELL)
  ROWS = Math.floor(H / CELL)
  canvas.width = COLS * CELL
  canvas.height = ROWS * CELL
  ctx = canvas.getContext('2d')!
  grid = new Uint8Array(COLS * ROWS)
  next = new Uint8Array(COLS * ROWS)
  for (let i = 0; i < grid.length; i++) grid[i] = Math.random() < 0.12 ? 1 : 0
  for (let i = 0; i < 20; i++) step()
  draw()
})

watch(isDark, draw)
</script>

<template>
  <canvas ref="canvasRef" class="gol-bg" aria-hidden="true" />
</template>
