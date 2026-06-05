<script setup lang="ts">
const props = defineProps<{
  images: Array<{ src: string; caption?: string; href?: string }>
}>()

function randomSpan(total: number) {
  const r = Math.random()
  if (total <= 6) {
    if (r < 0.15) return { col: 2, row: 2 }
    if (r < 0.40) return { col: 2, row: 1 }
    if (r < 0.60) return { col: 1, row: 2 }
  } else {
    if (r < 0.30) return { col: 2, row: 1 }
    if (r < 0.50) return { col: 1, row: 2 }
  }
  return { col: 1, row: 1 }
}

// Computed once — stable for the component's lifetime
const spans = props.images.length >= 5
  ? props.images.map(() => randomSpan(props.images.length))
  : null
</script>

<template>
  <div :class="['photo-wall', `photo-wall-${images.length}`]">
    <figure
      v-for="(img, i) in images"
      :key="i"
      :class="`photo-wall-item-${i + 1}`"
      :style="spans ? { gridColumn: `span ${spans[i].col}`, gridRow: `span ${spans[i].row}` } : undefined"
    >
      <a v-if="img.href" :href="img.href" target="_blank" rel="noopener">
        <img :src="img.src" :alt="img.caption ?? ''" />
      </a>
      <img v-else :src="img.src" :alt="img.caption ?? ''" />
      <figcaption v-if="img.caption" v-html="img.caption" />
    </figure>
  </div>
</template>

<style scoped>
.photo-wall {
  position: absolute;
  inset: 0;
  display: grid;
  gap: 2px;
  background: #000;
  overflow: hidden;
}

.photo-wall-2 { grid-template-columns: 1fr 1fr; }
.photo-wall-3 { grid-template-columns: 1fr 1fr 1fr; }

.photo-wall-4 {
  grid-template-columns: 1fr 1fr 2fr;
  grid-template-rows: 1fr 1fr;
}
.photo-wall-4 .photo-wall-item-1 { grid-column: 1; grid-row: 1 / span 2; }
.photo-wall-4 .photo-wall-item-2 { grid-column: 2; grid-row: 1 / span 2; }
.photo-wall-4 .photo-wall-item-3 { grid-column: 3; grid-row: 1; }
.photo-wall-4 .photo-wall-item-4 { grid-column: 3; grid-row: 2; }

/* 5–6: 3-column grid, random spans via inline style */
.photo-wall-5,
.photo-wall-6 {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-auto-flow: dense;
}

/* 7–9: 4-column grid, random spans via inline style */
.photo-wall-7,
.photo-wall-8,
.photo-wall-9 {
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-auto-flow: dense;
}

.photo-wall figure { margin: 0; position: relative; overflow: hidden; }
.photo-wall a { display: block; width: 100%; height: 100%; }
.photo-wall img { width: 100%; height: 100%; object-fit: cover; display: block; }

.photo-wall figcaption {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.75), transparent);
  color: #fff;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  padding: 1.5rem 0.75rem 0.4rem;
  line-height: 1.4;
}
</style>
