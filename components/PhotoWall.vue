<script setup lang="ts">
defineProps<{
  images: Array<{ src: string; caption?: string; href?: string }>
}>()
</script>

<template>
  <div :class="['photo-wall', `photo-wall-${images.length}`]">
    <figure
      v-for="(img, i) in images"
      :key="i"
      :class="`photo-wall-item-${i + 1}`"
    >
      <a v-if="img.href" :href="img.href" target="_blank" rel="noopener">
        <img :src="img.src" :alt="img.caption ?? ''" />
      </a>
      <img v-else :src="img.src" :alt="img.caption ?? ''" />
      <figcaption v-if="img.caption" v-html="img.caption" />
    </figure>
  </div>
</template>
