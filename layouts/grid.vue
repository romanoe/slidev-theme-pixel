<script setup lang="ts">
const props = defineProps<{ cols?: number | string }>()
</script>

<template>
  <div class="slidev-layout grid-layout" :style="`--cols: ${props.cols ?? 3}`">
    <slot />
  </div>
</template>
