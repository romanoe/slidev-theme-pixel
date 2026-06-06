<script setup lang="ts">
import { handleBackground, useSlideContext } from '@slidev/client'
import { computed } from 'vue'
import GolBackground from '../components/GolBackground.vue'

const props = defineProps<{ background?: string }>()

const style = computed(() => handleBackground(props.background))
const { $frontmatter } = useSlideContext()

interface LogoItem { src: string; height?: string | number }
const normalize = (item: string | LogoItem): LogoItem => {
  if (typeof item === 'string') return { src: item }
  const h = item.height
  return { ...item, height: h !== undefined ? (typeof h === 'number' ? `${h}px` : h) : undefined }
}

const logos = computed<LogoItem[]>(() => {
  if (Array.isArray($frontmatter.logos)) return $frontmatter.logos.map(normalize)
  if ($frontmatter.logo) return [normalize($frontmatter.logo)]
  return []
})
const title    = computed(() => ($frontmatter.title ?? '').replace(/^"(.+)"$/, '$1'))
const subtitle = computed(() => $frontmatter.subtitle ?? '')
const author   = computed(() => $frontmatter.author ?? '')
const email    = computed(() => $frontmatter.email ?? '')
const github     = computed(() => $frontmatter.github ?? '')
const githubRepo = computed(() => github.value.split('/').filter(Boolean).pop() ?? '')
const license  = computed(() => $frontmatter.license ?? 'https://creativecommons.org/licenses/by/4.0/')
const date     = computed(() =>
  new Date().toLocaleDateString('en-CH', { day: '2-digit', month: '2-digit', year: 'numeric' })
)
</script>

<template>
  <div class="slidev-layout cover" :style="style">
    <GolBackground class="gol-cover" />
    <div class="absolute top-8 left-14 right-14 flex justify-between items-center">
      <img v-for="logo in logos" :key="logo.src" :src="logo.src" class="cover-logo" :style="{ '--logo-h': logo.height ?? '40px' }" />
    </div>
    <h1>{{ title }}</h1>
    <p v-if="subtitle" class="mono muted text-sm mt-1 tracking-wide">{{ subtitle }}</p>
    <div class="absolute bottom-8 left-16 right-14 flex justify-between items-end">
      <div class="flex flex-col gap-1">
        <span v-if="author" class="mono primary font-700 text-base">{{ author }}</span>
        <a v-if="email" :href="`mailto:${email}`" class="mono muted text-xs mb-4">{{ email }}</a>
        <span class="mono muted text-xs">{{ date }}</span>
      </div>
      <div class="flex items-center gap-3">
        <a v-if="github" :href="github" class="flex items-center gap-1.5 primary">
          <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16" aria-hidden="true">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          <span class="mono text-xs">{{ githubRepo }}</span>
        </a>
        <a :href="license">
          <img src="https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg" alt="CC BY 4.0" class="h-3.5" />
        </a>
      </div>
    </div>
    <slot />
  </div>
</template>
