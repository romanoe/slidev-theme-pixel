<script setup lang="ts">
const props = defineProps<{ cols?: number | string; rows?: string; align?: string; justify?: string; content?: string }>()

const isCustom = typeof props.cols === 'string' && isNaN(Number(props.cols))
const gridStyle = {
  gridTemplateColumns: isCustom ? props.cols : `repeat(${props.cols ?? 3}, 1fr)`,
  ...(props.rows ? { gridTemplateRows: props.rows } : {}),
  ...(props.align ? { alignItems: props.align } : {}),
  ...(props.justify ? { justifyItems: props.justify } : {}),
  // `content: center` passe par une classe : il doit laisser le titre en haut,
  // ce qu'un simple align-content ne sait pas faire.
  ...(props.content && props.content !== 'center' ? { alignContent: props.content } : {}),
}
</script>

<template>
  <div
    class="slidev-layout grid-layout"
    :class="{
      'cards-stretch': props.align === 'stretch',
      'content-centered': props.content === 'center',
    }"
    :style="gridStyle"
  >
    <slot />
  </div>
</template>
