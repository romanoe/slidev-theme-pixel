<script setup lang="ts">
const props = defineProps<{
  cols?: number | string
  variant?: string
}>()
</script>

<template>
  <div class="slidev-layout grid-layout" :class="{ book: props.variant === 'book' }" :style="`--cols: ${props.cols ?? 3}`">
    <slot />
  </div>
</template>
