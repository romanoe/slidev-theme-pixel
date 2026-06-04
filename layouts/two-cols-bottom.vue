<!--
  Deux colonnes en haut + contenu pleine largeur en bas.

  Usage :
  ---
  layout: two-cols-bottom
  ---

  # Titre
  Colonne gauche (texte)

  ::right::
  Colonne droite (code)

  ::bottom::
  Contenu pleine largeur (image, SVG...)
-->

<script setup lang="ts">
import GolBackground from '../components/GolBackground.vue'

const props = defineProps<{
  class?: string
  layoutClass?: string
}>()
</script>

<template>
  <div class="slidev-layout two-cols-bottom w-full h-full" :class="layoutClass">
    <GolBackground />
    <div class="col-left" :class="props.class">
      <slot />
    </div>
    <div class="col-right" :class="props.class">
      <slot name="right" />
    </div>
    <div class="col-bottom" :class="props.class">
      <slot name="bottom" />
    </div>
  </div>
</template>
