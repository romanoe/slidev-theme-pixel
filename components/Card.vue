<script setup lang="ts">
defineProps<{
  tag?: string
  title?: string
  footer?: string
  color?: string
}>()
</script>

<template>
  <div class="card" :style="color ? { '--card-color': color } : {}">
    <div class="header flex items-center px-3 py-[0.35rem]" aria-hidden="true">
      <span class="dots inline-block w-[0.4rem] h-[0.4rem] rounded-full shrink-0 mr-6" />
      <span v-if="tag" class="tag mono uppercase tracking-[0.1em] text-[0.5rem]">{{ tag }}</span>
    </div>
    <div class="flex flex-col gap-[0.35rem] p-4 flex-1">
      <p v-if="title" class="title mono font-700 text-[0.9rem] leading-tight m-0 primary">{{ title }}</p>
      <div class="body text-[0.8rem] flex-1 leading-relaxed">
        <slot />
      </div>
      <div v-if="footer" class="footer mono muted text-[0.65rem] pt-2">{{ footer }}</div>
    </div>
  </div>
</template>

<style scoped>
.card {
  --card-color: var(--text-muted);
  --_border: color-mix(in srgb, var(--card-color) 30%, var(--color-border));
  --_header: color-mix(in srgb, var(--card-color) 10%, var(--bg-subtle));

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

  .tag   { color: var(--card-color); }
  .body  { color: color-mix(in srgb, var(--text-body) 55%, var(--bg)); }
  .footer { border-top: 1px solid var(--color-border); }
}
</style>
