<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  type?: 'note' | 'tip' | 'warning' | 'danger'
}>()

const colors: Record<string, string> = {
  note:    '#6b7280',
  tip:     '#16a34a',
  warning: '#d97706',
  danger:  '#e92528',
}

const color = computed(() => colors[props.type ?? 'note'])
</script>

<template>
  <div class="callout" :style="{ '--callout-color': color }">
    <span class="callout-label">{{ type ?? 'note' }}</span>
    <div class="callout-body"><slot /></div>
  </div>
</template>
