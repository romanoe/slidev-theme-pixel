import { onMounted } from 'vue'
import type { Ref } from 'vue'

type Pattern = [number, number][]
type StampFn = (pattern: Pattern, r0: number, c0: number) => void

const GLIDER_SE: Pattern = [[0,1],[1,2],[2,0],[2,1],[2,2]]
const GLIDER_SW: Pattern = [[0,1],[1,0],[2,0],[2,1],[2,2]]
const GLIDER_NE: Pattern = [[0,0],[0,1],[0,2],[1,2],[2,1]]
const GLIDER_NW: Pattern = [[0,0],[0,1],[0,2],[1,0],[2,1]]

const PULSAR: Pattern = [
  [0,2],[0,3],[0,4],[0,8],[0,9],[0,10],
  [2,0],[2,5],[2,7],[2,12],[3,0],[3,5],[3,7],[3,12],
  [4,0],[4,5],[4,7],[4,12],[5,2],[5,3],[5,4],[5,8],[5,9],[5,10],
  [7,2],[7,3],[7,4],[7,8],[7,9],[7,10],
  [8,0],[8,5],[8,7],[8,12],[9,0],[9,5],[9,7],[9,12],
  [10,0],[10,5],[10,7],[10,12],[12,2],[12,3],[12,4],[12,8],[12,9],[12,10],
]

const GGG: Pattern = [
  [0,24],[1,22],[1,24],
  [2,12],[2,13],[2,20],[2,21],[2,34],[2,35],
  [3,11],[3,15],[3,20],[3,21],[3,34],[3,35],
  [4,0],[4,1],[4,10],[4,16],[4,20],[4,21],
  [5,0],[5,1],[5,10],[5,14],[5,16],[5,17],[5,22],[5,24],
  [6,10],[6,16],[6,24],[7,11],[7,15],[8,12],[8,13],
]

const LWSS:   Pattern = [[0,1],[0,2],[0,3],[0,4],[1,0],[1,4],[2,4],[3,0],[3,3]]
const ACORN:  Pattern = [[0,1],[1,3],[2,0],[2,1],[2,4],[2,5],[2,6]]
const RPENT:  Pattern = [[0,1],[0,2],[1,0],[1,1],[2,1]]
const BEACON: Pattern = [[0,0],[0,1],[1,0],[2,3],[3,2],[3,3]]
const PENTA:  Pattern = [[0,1],[1,1],[2,0],[2,2],[3,1],[4,1],[5,1],[6,1],[7,0],[7,2],[8,1],[9,1]]

function stampFeaturedPatterns(stamp: StampFn, ROWS: number, COLS: number) {
  const R = (f: number) => Math.floor(ROWS * f)
  const C = (f: number) => Math.floor(COLS * f)
  stamp(GGG,       2,       2)
  stamp(PULSAR,    R(0.25), C(0.42))
  stamp(PULSAR,    R(0.55), C(0.68))
  stamp(PENTA,     R(0.1),  C(0.72))
  stamp(PENTA,     R(0.65), C(0.2))
  stamp(BEACON,    R(0.35), C(0.82))
  stamp(BEACON,    R(0.8),  C(0.55))
  stamp(ACORN,     R(0.45), C(0.52))
  stamp(ACORN,     R(0.7),  C(0.35))
  stamp(LWSS,      R(0.38), C(0.3))
  stamp(LWSS,      R(0.62), C(0.48))
  stamp(GLIDER_SE, R(0.05), C(0.6))
  stamp(GLIDER_SW, R(0.4),  C(0.95))
  stamp(GLIDER_NE, R(0.75), C(0.78))
  stamp(GLIDER_NW, R(0.6),  C(0.15))
  stamp(RPENT,     R(0.2),  C(0.88))
}

export function useGameOfLife(
  canvasRef: Ref<HTMLCanvasElement | null>,
  getColor: () => string,
  options: { density?: number; steps?: number; detailed?: boolean } = {}
) {
  const CELL = 8
  const density = options.density ?? 0.12
  const steps   = options.steps   ?? (options.detailed ? 18 : 20)

  let COLS = 0, ROWS = 0
  let grid: Uint8Array, next: Uint8Array
  let _ctx: CanvasRenderingContext2D | null = null

  function idx(r: number, c: number) { return r * COLS + c }

  function stamp(pattern: Pattern, r0: number, c0: number) {
    for (const [dr, dc] of pattern) {
      const r = r0 + dr, c = c0 + dc
      if (r >= 0 && r < ROWS && c >= 0 && c < COLS) grid[idx(r, c)] = 1
    }
  }

  function stepGrid() {
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
    if (!_ctx) return
    _ctx.clearRect(0, 0, COLS * CELL, ROWS * CELL)
    _ctx.fillStyle = getColor()
    for (let r = 0; r < ROWS; r++)
      for (let c = 0; c < COLS; c++)
        if (grid[idx(r, c)]) _ctx.fillRect(c * CELL, r * CELL, CELL - 1, CELL - 1)
  }

  onMounted(() => {
    const canvas = canvasRef.value
    if (!canvas) return
    const W = canvas.parentElement?.clientWidth  || 980
    const H = canvas.parentElement?.clientHeight || 552
    COLS = Math.floor(W / CELL)
    ROWS = Math.floor(H / CELL)
    canvas.width  = COLS * CELL
    canvas.height = ROWS * CELL
    _ctx  = canvas.getContext('2d')!
    grid  = new Uint8Array(COLS * ROWS)
    next  = new Uint8Array(COLS * ROWS)
    for (let i = 0; i < grid.length; i++) grid[i] = Math.random() < density ? 1 : 0
    if (options.detailed) stampFeaturedPatterns(stamp, ROWS, COLS)
    for (let i = 0; i < steps; i++) stepGrid()
    draw()
  })

  return { draw }
}
