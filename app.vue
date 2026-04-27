<script setup>
import { getAeoPage, getCanonicalUrl, getJsonLdGraph, siteConfig } from '~/utils/aeo'

const route = useRoute()

const currentPage = computed(() => getAeoPage(route.path))
const canonicalUrl = computed(() => getCanonicalUrl(route.path))
const jsonLd = computed(() => getJsonLdGraph(route.path))

useSeoMeta(() => ({
  description: currentPage.value.seoDescription,
  ogTitle: currentPage.value.seoTitle,
  ogDescription: currentPage.value.seoDescription,
  ogUrl: canonicalUrl.value,
  ogImage: siteConfig.image,
  twitterTitle: currentPage.value.seoTitle,
  twitterDescription: currentPage.value.seoDescription,
  twitterImage: siteConfig.image,
}))

useHead(() => ({
  title: currentPage.value.seoTitle,
  link: [
    {
      rel: 'canonical',
      href: canonicalUrl.value,
    },
  ],
  script: [
    {
      key: 'aeo-jsonld',
      type: 'application/ld+json',
      children: jsonLd.value,
    },
  ],
}))
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.5s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(10px);
  transform: translateY(20px);
}
</style>
