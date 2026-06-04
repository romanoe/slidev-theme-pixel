<script setup lang="ts">
import GolBackground from '../components/GolBackground.vue'

defineProps<{ class?: string; layoutClass?: string }>()
</script>

<template>
  <div class="slidev-layout two-columns w-full h-full grid grid-cols-2" :class="$props.layoutClass">
    <GolBackground />
    <div class="col-left" :class="$props.class">
      <slot />
      <slot name="left" />
    </div>
    <div class="col-right" :class="$props.class">
      <slot name="right" />
    </div>
  </div>
</template>
