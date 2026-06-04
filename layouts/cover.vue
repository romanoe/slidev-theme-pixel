<script setup lang="ts">
import { handleBackground, useSlideContext, useDarkMode } from '@slidev/client'
import { computed, ref, onMounted, watch } from 'vue'

const props = defineProps<{
  background?: string
}>()

const style = computed(() => handleBackground(props.background))
const { $frontmatter } = useSlideContext()
const { isDark } = useDarkMode()

interface LogoItem { src: string; height?: string }
const normalize = (item: string | LogoItem): LogoItem =>
  typeof item === 'string' ? { src: item } : item

const logos = computed<LogoItem[]>(() => {
  if (Array.isArray($frontmatter.logos)) return $frontmatter.logos.map(normalize)
  if ($frontmatter.logo) return [normalize($frontmatter.logo)]
  return []
})
const title    = computed(() => ($frontmatter.title ?? '').replace(/^"(.+)"$/, '$1'))
const subtitle = computed(() => $frontmatter.subtitle ?? '')
const author   = computed(() => $frontmatter.author ?? '')
const email    = computed(() => $frontmatter.email ?? '')
const github     = computed(() => $frontmatter.github ?? '')
const githubRepo = computed(() => github.value.split('/').filter(Boolean).pop() ?? '')
const license  = computed(() => $frontmatter.license ?? 'https://creativecommons.org/licenses/by/4.0/')
const date     = computed(() =>
  new Date().toLocaleDateString('en-CH', { day: '2-digit', month: '2-digit', year: 'numeric' })
)

// Conway's Game of Life — recognizable patterns
const canvasRef = ref<HTMLCanvasElement | null>(null)
const CELL = 8
let COLS = 0
let ROWS = 0
let grid: Uint8Array
let next: Uint8Array
let ctxRef: CanvasRenderingContext2D | null = null

type P = [number, number][]

const GLIDER_SE: P = [[0,1],[1,2],[2,0],[2,1],[2,2]]
const GLIDER_SW: P = [[0,1],[1,0],[2,0],[2,1],[2,2]]
const GLIDER_NE: P = [[0,0],[0,1],[0,2],[1,2],[2,1]]
const GLIDER_NW: P = [[0,0],[0,1],[0,2],[1,0],[2,1]]

const PULSAR: P = [
  [0,2],[0,3],[0,4],[0,8],[0,9],[0,10],
  [2,0],[2,5],[2,7],[2,12],[3,0],[3,5],[3,7],[3,12],
  [4,0],[4,5],[4,7],[4,12],[5,2],[5,3],[5,4],[5,8],[5,9],[5,10],
  [7,2],[7,3],[7,4],[7,8],[7,9],[7,10],
  [8,0],[8,5],[8,7],[8,12],[9,0],[9,5],[9,7],[9,12],
  [10,0],[10,5],[10,7],[10,12],[12,2],[12,3],[12,4],[12,8],[12,9],[12,10],
]

const GGG: P = [
  [0,24],[1,22],[1,24],
  [2,12],[2,13],[2,20],[2,21],[2,34],[2,35],
  [3,11],[3,15],[3,20],[3,21],[3,34],[3,35],
  [4,0],[4,1],[4,10],[4,16],[4,20],[4,21],
  [5,0],[5,1],[5,10],[5,14],[5,16],[5,17],[5,22],[5,24],
  [6,10],[6,16],[6,24],[7,11],[7,15],[8,12],[8,13],
]

const LWSS: P  = [[0,1],[0,2],[0,3],[0,4],[1,0],[1,4],[2,4],[3,0],[3,3]]
const ACORN: P = [[0,1],[1,3],[2,0],[2,1],[2,4],[2,5],[2,6]]
const BEACON: P = [[0,0],[0,1],[1,0],[2,3],[3,2],[3,3]]

const PENTA: P = [
  [0,1],[1,1],[2,0],[2,2],[3,1],[4,1],[5,1],[6,1],[7,0],[7,2],[8,1],[9,1],
]

function stamp(g: Uint8Array, pattern: P, r0: number, c0: number) {
  for (const [dr, dc] of pattern) {
    const r = r0 + dr, c = c0 + dc
    if (r >= 0 && r < ROWS && c >= 0 && c < COLS) g[r * COLS + c] = 1
  }
}

function idx(r: number, c: number) { return r * COLS + c }

function draw(ctx: CanvasRenderingContext2D) {
  ctx.clearRect(0, 0, COLS * CELL, ROWS * CELL)
  ctx.fillStyle = isDark.value ? '#fff' : '#000'
  for (let r = 0; r < ROWS; r++)
    for (let c = 0; c < COLS; c++)
      if (grid[idx(r, c)]) ctx.fillRect(c * CELL, r * CELL, CELL - 1, CELL - 1)
}

function step(ctx: CanvasRenderingContext2D) {
  for (let r = 0; r < ROWS; r++) {
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
  }
  ;[grid, next] = [next, grid]
  draw(ctx)
}

function stepSilent() {
  for (let r = 0; r < ROWS; r++) {
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
  }
  ;[grid, next] = [next, grid]
}

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  const w = canvas.parentElement!.clientWidth || 980
  const h = canvas.parentElement!.clientHeight || 560
  COLS = Math.floor(w / CELL)
  ROWS = Math.floor(h / CELL)
  canvas.width = COLS * CELL
  canvas.height = ROWS * CELL
  const ctx = canvas.getContext('2d')!
  ctxRef = ctx
  grid = new Uint8Array(COLS * ROWS)
  next = new Uint8Array(COLS * ROWS)

  for (let i = 0; i < grid.length; i++)
    grid[i] = Math.random() < 0.12 ? 1 : 0

  const R = (f: number) => Math.floor(ROWS * f)
  const C = (f: number) => Math.floor(COLS * f)

  stamp(grid, GGG,       2,       2)
  stamp(grid, PULSAR,    R(0.25), C(0.42))
  stamp(grid, PULSAR,    R(0.55), C(0.68))
  stamp(grid, PENTA,     R(0.1),  C(0.72))
  stamp(grid, PENTA,     R(0.65), C(0.2))
  stamp(grid, BEACON,    R(0.35), C(0.82))
  stamp(grid, BEACON,    R(0.8),  C(0.55))
  stamp(grid, ACORN,     R(0.45), C(0.52))
  stamp(grid, ACORN,     R(0.7),  C(0.35))
  stamp(grid, LWSS,      R(0.38), C(0.3))
  stamp(grid, LWSS,      R(0.62), C(0.48))
  stamp(grid, GLIDER_SE, R(0.05), C(0.6))
  stamp(grid, GLIDER_SW, R(0.4),  C(0.95))
  stamp(grid, GLIDER_NE, R(0.75), C(0.78))
  stamp(grid, GLIDER_NW, R(0.6),  C(0.15))

  for (let i = 0; i < 18; i++) stepSilent()
  step(ctx)
})

watch(isDark, () => { if (ctxRef) draw(ctxRef) })
</script>

<template>
  <div class="slidev-layout cover" :style="style">
    <canvas ref="canvasRef" class="cover-cells" :width="COLS * CELL" :height="ROWS * CELL" aria-hidden="true" />
    <div class="cover-logos">
      <img v-for="logo in logos" :key="logo.src" :src="logo.src" class="cover-logo" :style="logo.height ? { height: logo.height } : {}" />
    </div>
    <h1>{{ title }}</h1>
    <p v-if="subtitle" class="cover-subtitle">{{ subtitle }}</p>

    <div class="cover-content">
      <div class="cover-links">
        <a v-if="github" :href="github" class="cover-github">
          <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16" aria-hidden="true">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          <span>{{ githubRepo }}</span>
        </a>
        <a :href="license">
          <img src="https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg" alt="CC BY 4.0" />
        </a>
      </div>
    </div>
    <div class="cover-meta">
      <span v-if="author" class="cover-author">{{ author }}</span>
      <a v-if="email" :href="`mailto:${email}`" class="cover-email">{{ email }}</a>
      <span class="cover-date">{{ date }}</span>
    </div>
    <slot />
  </div>
</template>
