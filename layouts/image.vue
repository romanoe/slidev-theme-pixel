<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '@slidev/client'
import GolBackground from '../components/GolBackground.vue'

const props = defineProps<{ image?: string; backgroundSize?: string }>()
const style = computed(() => handleBackground(props.image, false, props.backgroundSize ?? 'cover'))
</script>

<template>
  <div class="slidev-layout w-full h-full" :style="style">
    <GolBackground />
    <slot />
  </div>
</template>
