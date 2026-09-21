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
  const primary = cfg.primary ?? (dark ? '#f0f0f0' : '#000000')
  document.documentElement.style.setProperty('--text', primary)
  document.documentElement.style.setProperty('--slidev-theme-primary', cfg.primary ?? '#000000')
})

const references = computed(() => {
  const val = currentFm.value.references
  if (!val) return ''
  return Array.isArray(val) ? val.join(' · ') : val
})

const clean = (raw: string) => raw
  .replace(/<[^>]*>/g, ' ')
  .replace(/^"(.*)"$/, '$1')
  .replace(/"/g, '')
  .replace(/[?!:]/g, '')
  .replace(/\s+/g, ' ')
  .toLowerCase()
  .trim()

// Le fil d'Ariane nomme le deck, pas le cours : « introduction / entités ».
const courseLabel = computed(() => {
  const raw = rootFm.value.title ?? ''
  return clean(String(raw)).replace(/^(\d+)[.\s\u00b7-]+/, '')
})

// `meta.slide.content` est vide dans un build de production : le titre de la
// slide de section se lit sur `meta.slide.title`, seul champ présent des deux côtés.
const sectionLabel = computed(() => {
  const idx = currentSlideNo.value - 1
  for (let i = idx; i >= 0; i--) {
    const meta = slides.value?.[i]?.meta?.slide as any
    if (meta?.frontmatter?.layout !== 'section') continue
    const title = meta?.title ?? (meta?.content ?? '').match(/^#\s+(.+)$/m)?.[1] ?? ''
    const label = clean(String(title))
    if (label) return label
  }
  return ''
})
</script>
