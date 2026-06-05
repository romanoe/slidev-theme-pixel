<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '@slidev/client'
import GolBackground from '../components/GolBackground.vue'

const props = defineProps<{
  image?: string
  backgroundSize?: string
  caption?: string
  href?: string
}>()

const style = computed(() => handleBackground(props.image, false, props.backgroundSize ?? 'cover'))
</script>

<template>
  <div class="slidev-layout w-full h-full" :style="style">
    <GolBackground />
    <slot />
    <component
      v-if="props.caption"
      :is="props.href ? 'a' : 'div'"
      :href="props.href"
      :target="props.href ? '_blank' : undefined"
      class="image-caption"
      v-html="props.caption"
    />
  </div>
</template>
