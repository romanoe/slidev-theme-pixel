<script setup lang="ts">
defineProps<{
  tag?: string
  title?: string
  footer?: string
}>()
</script>

<template>
  <div class="card">
    <span v-if="tag" class="card-tag">{{ tag }}</span>
    <p v-if="title" class="card-title">{{ title }}</p>
    <div class="card-body">
      <slot />
    </div>
    <div v-if="footer" class="card-footer">{{ footer }}</div>
  </div>
</template>
