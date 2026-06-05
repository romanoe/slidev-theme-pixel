<template>
  <template v-if="show">
    <div class="breadcrumb">
      {{ courseLabel }}<template v-if="sectionLabel"> / {{ sectionLabel }}</template>
    </div>
    <div class="slidev-page-number">
      <SlideCurrentNo /> / <SlidesTotal />
    </div>
  </template>
</template>

<script setup lang="ts">
import { useNav } from '@slidev/client'
import { computed } from 'vue'

const { currentSlideNo, currentLayout, slides } = useNav()

const show = computed(() =>
  currentSlideNo.value > 1 && currentLayout.value !== 'end'
)

const courseLabel = computed(() => {
  const fm = (slides.value?.[0]?.meta?.slide as any)?.frontmatter ?? {}
  const raw = fm.title ?? ''
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
