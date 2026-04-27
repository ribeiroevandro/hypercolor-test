<script setup>
const siteUrl = 'https://hypercolor-test.vercel.app'
const siteTitle = 'Tailwind CSS Gradients and Generators | Hypercolor'
const siteDescription = 'Browse 87 ready-made Tailwind CSS gradients, 38 flag palettes, and interactive mesh, grainy, and standard generators with 201 color options.'

const routeSchemas = {
  '/': {
    name: siteTitle,
    description: siteDescription,
  },
  '/flags': {
    name: 'World Flags',
    description: 'Documentation for the flag-inspired gradient gallery route.',
  },
  '/generator': {
    name: 'Gradient Generator',
    description: 'Documentation for the standard Tailwind CSS gradient generator route.',
  },
  '/grainy': {
    name: 'Grainy Gradient Generator',
    description: 'Documentation for the grainy gradient generator route.',
  },
  '/mesh': {
    name: 'Mesh Gradient Generator',
    description: 'Documentation for the mesh gradient generator route.',
  },
}

const route = useRoute()

function normalizePath(pathname) {
  return pathname.replace(/\/+$/, '') || '/'
}

function buildBreadcrumbSchema(pathname) {
  if (pathname === '/')
    return null

  const currentRoute = routeSchemas[pathname]

  if (!currentRoute)
    return null

  return {
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': `${siteUrl}/`,
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': currentRoute.name,
        'item': `${siteUrl}${pathname}`,
      },
    ],
  }
}

const jsonLd = computed(() => {
  const pathname = normalizePath(route.path)
  const currentRoute = routeSchemas[pathname] || routeSchemas['/']
  const graph = [
    {
      '@type': 'WebSite',
      'name': siteTitle,
      'description': siteDescription,
      'url': siteUrl,
    },
    {
      '@type': 'Organization',
      'name': 'Hypercolor',
      'url': siteUrl,
      'logo': `${siteUrl}/social.png`,
      'sameAs': ['https://github.com/ribeiroevandro/hypercolor-test'],
    },
    {
      '@type': 'WebPage',
      'name': currentRoute.name,
      'description': currentRoute.description,
      'url': pathname === '/' ? siteUrl : `${siteUrl}${pathname}`,
      'isPartOf': {
        '@type': 'WebSite',
        'name': siteTitle,
        'url': siteUrl,
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'Hypercolor',
      },
    },
  ]

  const breadcrumbSchema = buildBreadcrumbSchema(pathname)

  if (breadcrumbSchema)
    graph.push(breadcrumbSchema)

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': graph,
  })
})

useHead(() => ({
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
