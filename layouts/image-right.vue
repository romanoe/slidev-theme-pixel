<script setup lang="ts">
import { computed } from 'vue'
import GolBackground from '../components/GolBackground.vue'

const props = defineProps<{
  image?: string
  class?: string
  backgroundSize?: string
  caption?: string
}>()

const slots = defineSlots<{ default(): unknown; caption?(): unknown }>()

const imgClass = computed(() =>
  props.backgroundSize === 'contain' ? 'object-contain' : 'object-cover'
)
</script>

<template>
  <div class="grid grid-cols-2 w-full h-full">
    <div class="slidev-layout default" :class="props.class">
      <GolBackground />
      <slot />
    </div>
    <div class="image-right-col">
      <img v-if="image" :src="image" class="image-right-img" :class="imgClass" />
      <figcaption v-if="slots.caption || caption" class="px-3 pt-1">
        <slot name="caption"><span v-html="caption" /></slot>
      </figcaption>
    </div>
  </div>
</template>
