<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'

const props = defineProps<{
  tag?: string
  title?: string
  footer?: string
  color?: string
  at?: number
}>()

const { clicks } = useNav()
const isActive = computed(() => props.at === undefined || clicks.value === props.at)
</script>

<template>
  <div class="card" :style="color ? { '--card-color': color } : {}"
       :class="{ 'is-inactive': at !== undefined && !isActive }">
    <div class="header flex items-center px-3 py-[0.35rem]" aria-hidden="true">
      <span class="dots inline-block w-[0.4rem] h-[0.4rem] rounded-full shrink-0 mr-6" />
      <span v-if="tag" class="tag mono uppercase tracking-[0.1em] text-[0.5rem]">{{ tag }}</span>
    </div>
    <div class="flex flex-col gap-[0.1rem] p-4">
      <p v-if="title" class="title mono uppercase font-700 text-[0.9rem] leading-tight m-0">
        <span class="prompt">$</span> {{ title }}
      </p>
      <div class="text-[0.8rem] leading-relaxed">
        <slot />
      </div>
      <div v-if="footer" class="footer mono text-[0.65rem] pt-2">{{ footer }}</div>
    </div>
  </div>
</template>

<style scoped>
.card {
  --card-color: var(--text-body);
  --_border: color-mix(in srgb, var(--card-color) 35%, var(--color-border));
  --_header: color-mix(in srgb, var(--card-color) 12%, var(--bg-subtle));

  display: flex;
  flex-direction: column;
  align-self: start;
  background: var(--bg);
  border: 1px solid var(--_border);
  border-radius: 4px;
  overflow: hidden;
  margin: 0.3rem;

  .header {
    background: var(--_header);
    border-bottom: 1px solid var(--_border);
  }

  .dots {
    background: var(--card-color);
    box-shadow: 0.6rem 0 0 var(--card-color), 1.2rem 0 0 var(--card-color);
  }

  font-family: var(--font-mono);

  .tag    { color: var(--card-color); }
  .title  { color: var(--card-color); }
  .prompt { color: color-mix(in srgb, var(--card-color) 20%, var(--bg-subtle)); font-weight: 200; }
  .footer {
    color: color-mix(in srgb, var(--text-body) 40%, var(--bg));
    border-top: 1px solid var(--_border);
  }
}

.card :deep(p) { margin-top: 0; margin-bottom: 0; }

.card { transition: opacity 0.4s; }
.card.is-inactive { opacity: 0.25; }
</style>
