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
    <div class="card-header" aria-hidden="true">
      <span class="card-dots" />
      <span v-if="tag" class="card-tag">{{ tag }}</span>
    </div>
    <div class="card-content">
      <p v-if="title" class="card-title">{{ title }}</p>
      <div class="card-body">
        <slot />
      </div>
      <div v-if="footer" class="card-footer">{{ footer }}</div>
    </div>
  </div>
</template>

<style scoped>
.card {
  --card-color: var(--text-muted);
  --_border: color-mix(in srgb, var(--card-color) 30%, var(--color-border));
  --_header:  color-mix(in srgb, var(--card-color) 10%, var(--bg-subtle));

  display: flex;
  flex-direction: column;
  align-self: start;
  background: var(--bg);
  border: 1px solid var(--_border);
  border-radius: 4px;
  overflow: hidden;
  margin: 0.3rem;
}

.card-header {
  display: flex;
  align-items: center;
  padding: 0.35rem 0.75rem;
  background: var(--_header);
  border-bottom: 1px solid var(--_border);
}

.card-dots {
  display: inline-block;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background: var(--card-color);
  box-shadow: 0.6rem 0 0 var(--card-color), 1.2rem 0 0 var(--card-color);
  flex-shrink: 0;
  margin-right: 1.5rem;
}

.card-tag {
  font-family: var(--font-mono);
  font-size: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--card-color);
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding: 1rem;
  flex: 1;
}

.card-title {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text);
  line-height: 1.3;
  margin: 0;
}

.card-body {
  font-family: var(--font-sans);
  font-size: 0.8rem;
  flex: 1;
  color: var(--text-subtle);
  line-height: 1.6;
}

.card-footer {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--text-muted);
  padding-top: 0.5rem;
  border-top: 1px solid var(--color-border);
}
</style>
