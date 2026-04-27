<script setup>
import { normalizeAeoPath, routeAeoContent } from '~/utils/aeo'

const route = useRoute()
const currentAeoPage = computed(() => routeAeoContent[normalizeAeoPath(route.path)] || null)
</script>

<template>
  <div class="flex min-h-screen flex-col justify-between bg-gray-900">
    <GlobalHeader />

    <main>
      <slot />
      <AeoPageContent v-if="currentAeoPage" :page-data="currentAeoPage" />
    </main>

    <GlobalFooter />
  </div>
</template>
