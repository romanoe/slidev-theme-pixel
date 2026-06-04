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
