export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
      script: [{ src: 'https://media.ethicalads.io/media/client/ethicalads.min.js', async: true }],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  routeRules: {
    '/flags.md': { redirect: { to: '/docs/flags.md', statusCode: 308 } },
    '/generator.md': { redirect: { to: '/docs/generator.md', statusCode: 308 } },
    '/grainy.md': { redirect: { to: '/docs/grainy.md', statusCode: 308 } },
    '/index.md': { redirect: { to: '/docs/index.md', statusCode: 308 } },
    '/mesh.md': { redirect: { to: '/docs/mesh.md', statusCode: 308 } },
  },
  css: ['~/assets/css/tailwind.css'],
  modules: ['@nuxtjs/tailwindcss', 'aeo.js/nuxt'],
  aeo: {
    title: 'Tailwind CSS Gradients and Generators | Hypercolor',
    url: 'https://hypercolor-test.vercel.app',
    description: 'Browse 87 ready-made Tailwind CSS gradients, 38 flag palettes, and interactive mesh, grainy, and standard generators with 201 color options.',
    generators: {
      robotsTxt: true,
      llmsTxt: true,
      llmsFullTxt: true,
      rawMarkdown: true,
      sitemap: true,
      aiIndex: true,
      schema: true,
    },
    schema: {
      enabled: true,
      organization: {
        name: 'Hypercolor',
        url: 'https://hypercolor-test.vercel.app',
        logo: 'https://hypercolor-test.vercel.app/social.png',
        sameAs: [
          'https://github.com/ribeiroevandro/hypercolor-test'
        ],
      },
      defaultType: 'WebPage',
    },
    og: {
      enabled: true,
      image: 'https://hypercolor-test.vercel.app/social.png',
      twitterHandle: '@hypercolor',
      type: 'website',
    },
    widget: {
      enabled: true,
      position: 'bottom-right',
      size: 'small',
      showBadge: true,
      theme: {
        background: '#111827',
        text: '#C0C0C5',
        accent: '#E8E8EA',
        badge: '#4ADE80',
      },
    }
  },
})
