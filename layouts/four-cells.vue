<!--
  Grille 4 cellules : texte + résultat (ligne haute) / code gauche + code droit (ligne basse).

  Usage :
  ---
  layout: four-cells
  ---

  # Titre
  Description (haut-gauche)

  ::result::
  Résultat visuel — SVG ou HTML (haut-droite)

  ::left::
  **Vanilla JS** (bas-gauche)

  ::right::
  **D3** (bas-droite)
-->

<script setup lang="ts">
import GolBackground from '../components/GolBackground.vue'

const props = defineProps<{
  class?: string
  layoutClass?: string
}>()
</script>

<template>
  <div class="slidev-layout four-cells w-full h-full" :class="layoutClass">
    <GolBackground />
    <div class="cell-text" :class="props.class">
      <slot />
    </div>
    <div class="cell-result" :class="props.class">
      <slot name="result" />
    </div>
    <div class="cell-left" :class="props.class">
      <slot name="left" />
    </div>
    <div class="cell-right" :class="props.class">
      <slot name="right" />
    </div>
  </div>
</template>
