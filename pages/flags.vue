<script setup>
import { gradientsFlag } from '~/assets/data/gradientsFlag'

const gradientItems = computed(() => gradientsFlag)
</script>

<template>
  <div>
    <ContentBanner
      title="World Flags"
      subtitle="Flag Gradients with Tailwind CSS"
    >
      A collection of country flags created with Tailwind CSS.
    </ContentBanner>

    <GradientGrid :gradient-items="gradientItems" />
  </div>
</template>
