import { onMounted } from 'vue'
import type { Ref } from 'vue'

export function useGameOfLife(
  canvasRef: Ref<HTMLCanvasElement | null>,
  getColor: () => string,
  options: { density?: number; steps?: number } = {}
) {
  const CELL    = 8
  const density = options.density ?? 0.12
  const steps   = options.steps   ?? 20

  let drawFn: (() => void) | undefined

  onMounted(() => {
    const canvas = canvasRef.value
    if (!canvas) return

    const W    = canvas.parentElement?.clientWidth  || 980
    const H    = canvas.parentElement?.clientHeight || 552
    const COLS = Math.floor(W / CELL)
    const ROWS = Math.floor(H / CELL)
    canvas.width  = COLS * CELL
    canvas.height = ROWS * CELL

    const idx = (r: number, c: number) => r * COLS + c
    let grid = new Uint8Array(COLS * ROWS)
    let next = new Uint8Array(COLS * ROWS)

    for (let i = 0; i < grid.length; i++)
      grid[i] = Math.random() < density ? 1 : 0

    for (let s = 0; s < steps; s++) {
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

    const ctx = canvas.getContext('2d')!

    drawFn = () => {
      ctx.clearRect(0, 0, COLS * CELL, ROWS * CELL)
      ctx.fillStyle = getColor()
      for (let r = 0; r < ROWS; r++)
        for (let c = 0; c < COLS; c++)
          if (grid[idx(r, c)]) ctx.fillRect(c * CELL, r * CELL, CELL - 1, CELL - 1)
    }

    drawFn()
  })

  return { draw: () => drawFn?.() }
}
