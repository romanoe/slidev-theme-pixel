<script setup lang="ts">
defineProps<{
  src: string
  alt?: string
  caption?: string
  href?: string
}>()
</script>

<template>
  <figure class="m-0 flex flex-col">
    <a v-if="href" :href="href" target="_blank" rel="noopener">
      <img :src="src" :alt="alt ?? ''" class="w-full block" />
    </a>
    <img v-else :src="src" :alt="alt ?? ''" class="w-full block" />
    <figcaption v-if="caption" v-html="caption" />
  </figure>
</template>

<style scoped>
figcaption :deep(a) {
  color: var(--text-muted);
  text-decoration: underline;
  text-underline-offset: 2px;
  text-decoration-thickness: 1px;
  text-decoration-color: color-mix(in srgb, var(--text-muted) 50%, transparent);
}
</style>
