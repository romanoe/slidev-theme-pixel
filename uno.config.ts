import { defineConfig } from 'unocss'

export default defineConfig({
  shortcuts: [
    // Dynamic grid shortcuts — cards-2, cards-3, cards-4…
    [/^cards-(\d+)$/, ([, n]) => `grid grid-cols-${n} gap-4 items-start`],
    ['cards', 'grid gap-4 items-start'],

    // Dynamic mosaic shortcuts — mosaic-2, mosaic-3, mosaic-4…
    [/^mosaic-(\d+)$/, ([, n]) => `grid grid-cols-${n} gap-2`],

    // Base cell for multi-zone layouts
    ['slide-cell', 'min-h-0 overflow-hidden'],
  ],

  rules: [
    // Border using theme CSS variable
    ['border-theme', { 'border-color': 'var(--color-border)' }],
    // Grid row templates (not in UnoCSS preset)
    ['rows-main-bottom',        { 'grid-template-rows': '1fr auto' }],
    ['rows-title-content',      { 'grid-template-rows': 'auto 1fr' }],
    ['rows-title-2col',         { 'grid-template-rows': 'auto 1fr 1fr' }],
    ['rows-title-main-bottom',  { 'grid-template-rows': 'auto 1fr auto' }],
  ],

  safelist: [
    // Ensure dynamic classes used in templates are always generated
    ...Array.from({ length: 6 }, (_, i) => `cards-${i + 1}`),
    ...Array.from({ length: 4 }, (_, i) => `mosaic-${i + 2}`),
    ...Array.from({ length: 6 }, (_, i) => `grid-cols-${i + 1}`),
    'col-span-full',
    'border-theme',
    'rows-main-bottom',
    'slide-cell',
  ],
})
