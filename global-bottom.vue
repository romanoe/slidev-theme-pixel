<template>
  <template v-if="show">
    <div v-if="references" class="ref" v-html="references" />
    <div class="breadcrumb">
      {{ courseLabel }}<template v-if="sectionLabel"> / {{ sectionLabel }}</template>
    </div>
    <div class="slidev-page-number">
      <SlideCurrentNo /> / <SlidesTotal />
    </div>
  </template>
</template>

<script setup lang="ts">
import { useNav, useDarkMode } from '@slidev/client'
import { computed, watchEffect } from 'vue'

const { currentSlideNo, currentLayout, slides } = useNav()
const { isDark } = useDarkMode()

const show = computed(() =>
  currentSlideNo.value > 1 && currentLayout.value !== 'end'
)

const rootFm = computed(() => (slides.value?.[0]?.meta?.slide as any)?.frontmatter ?? {})
const currentFm = computed(() => (slides.value?.[currentSlideNo.value - 1]?.meta?.slide as any)?.frontmatter ?? {})

watchEffect(() => {
  const cfg = rootFm.value.themeConfig ?? {}
  const dark = isDark.value
  document.documentElement.style.setProperty('--text',         cfg.primary ?? (dark ? '#f0f0f0' : '#000000'))
  document.documentElement.style.setProperty('--color-accent', cfg.accent  ?? '#e92528')
})

const references = computed(() => {
  const val = currentFm.value.references
  if (!val) return ''
  return Array.isArray(val) ? val.join(' · ') : val
})

const courseLabel = computed(() => {
  const raw = rootFm.value.title ?? ''
  return raw.replace(/^"(.*)"$/, '$1').toLowerCase().replace(/^(\d+)[.\s-]+/, '').replace(/"/g, '').trim()
})

const sectionLabel = computed(() => {
  const idx = currentSlideNo.value - 1
  for (let i = idx; i >= 0; i--) {
    const slide = slides.value?.[i]
    const meta = slide?.meta?.slide as any
    if (meta?.frontmatter?.layout === 'section') {
      const match = (meta?.content ?? '').match(/^#\s+(.+)$/m)
      if (match) return match[1].toLowerCase().replace(/[?!:]/g, '').trim()
    }
  }
  return ''
})
</script>
