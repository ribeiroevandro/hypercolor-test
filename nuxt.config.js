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
  css: ['~/assets/css/tailwind.css'],
  modules: ['@nuxtjs/tailwindcss', 'aeo.js/nuxt'],
  aeo: {
    title: 'Gradients for Tailwind CSS | Hypercolor',
    url: 'https://hypercolor-test.vercel.app',
    description: 'A curated collection of beautiful Tailwind CSS gradients using the full range of Tailwind CSS colors. Easily copy and paste the class names, CSS or even save the gradients as an image.',
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
