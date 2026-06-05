<script setup lang="ts">
defineProps<{
  src: string
  alt?: string
  caption?: string
  href?: string
}>()
</script>

<template>
  <figure>
    <a v-if="href" :href="href" target="_blank" rel="noopener">
      <img :src="src" :alt="alt ?? ''" />
    </a>
    <img v-else :src="src" :alt="alt ?? ''" />
    <figcaption v-if="caption" v-html="caption" />
  </figure>
</template>

<style scoped>
figure {
  margin: 0;
  display: flex;
  flex-direction: column;
}

figure img {
  width: 100%;
  display: block;
}

figcaption {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-top: 0.25rem;
  line-height: 1.3;
}

figcaption :deep(a) {
  color: var(--text-muted);
  text-decoration: underline;
  text-underline-offset: 2px;
  text-decoration-thickness: 1px;
  text-decoration-color: color-mix(in srgb, var(--text-muted) 50%, transparent);
}
</style>
