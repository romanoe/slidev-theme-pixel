<script setup lang="ts">
const props = defineProps<{ cols?: number | string; rows?: string; align?: string; justify?: string }>()

const isCustom = typeof props.cols === 'string' && isNaN(Number(props.cols))
const gridStyle = {
  gridTemplateColumns: isCustom ? props.cols : `repeat(${props.cols ?? 3}, 1fr)`,
  ...(props.rows ? { gridTemplateRows: props.rows } : {}),
  ...(props.align ? { alignItems: props.align } : {}),
  ...(props.justify ? { justifyItems: props.justify } : {}),
}
</script>

<template>
  <div class="slidev-layout grid-layout" :style="gridStyle">
    <slot />
  </div>
</template>
