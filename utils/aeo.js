export const siteConfig = {
  url: 'https://hypercolor-test.vercel.app',
  title: 'Tailwind CSS Gradients and Generators | Hypercolor',
  description: 'Browse 87 ready-made Tailwind CSS gradients, 38 flag palettes, and interactive mesh, grainy, and standard generators with 201 color options.',
  image: 'https://hypercolor-test.vercel.app/social.png',
  organization: {
    name: 'Hypercolor',
    url: 'https://hypercolor-test.vercel.app',
    logo: 'https://hypercolor-test.vercel.app/social.png',
    sameAs: ['https://github.com/ribeiroevandro/hypercolor-test'],
  },
}

export const routeAeoContent = {
  '/': {
    seoTitle: 'Tailwind CSS Gradient Gallery | Hypercolor',
    seoDescription: 'Browse 87 curated Tailwind CSS gradients, 38 flag palettes, and 201 color options with copy, CSS, and image export tools.',
    pageName: 'Tailwind CSS Gradient Gallery',
    pageDescription: 'Hypercolor is a gradient gallery and playground with export-friendly Tailwind CSS presets and generators.',
    stats: [
      { value: '87', label: 'curated gradients ready to copy' },
      { value: '38', label: 'flag-inspired palettes to browse' },
      { value: '201', label: 'Tailwind color options across generators' },
    ],
    keyPoints: [
      'Browse curated gradients without leaving the homepage.',
      'Change gradient direction directly on gallery cards.',
      'Copy Tailwind classes, copy CSS, or download an image from each card.',
    ],
    faqs: [
      {
        question: 'How many gradients can visitors browse on Hypercolor?',
        answer: 'Visitors can browse 87 ready-made gradients on Hypercolor before moving into the custom generators.',
      },
      {
        question: 'What can visitors export from the homepage?',
        answer: 'Each homepage card supports Tailwind class copy, CSS copy, and image download for quick reuse in design or code workflows.',
      },
      {
        question: 'Why does the homepage matter for AEO discovery?',
        answer: 'The homepage summarizes the gallery, highlights the number of gradients and colors available, and links users to the generator, mesh, grainy, and flag routes.',
      },
    ],
  },
  '/flags': {
    seoTitle: 'World Flag Gradients | Hypercolor',
    seoDescription: 'Explore 38 world flag-inspired Tailwind CSS gradients with fast copy, CSS export, and image download actions.',
    pageName: 'World Flag Gradients',
    pageDescription: 'Hypercolor turns recognizable flag palettes into reusable Tailwind CSS gradients for quick exploration and export.',
    stats: [
      { value: '38', label: 'flag-inspired palettes available' },
      { value: '3', label: 'export actions on every flag card' },
      { value: '1', label: 'gallery route focused on browsing, not editing' },
    ],
    keyPoints: [
      'Use the route as a browse-first reference library for flag palettes.',
      'Keep the original composition while still exporting classes, CSS, and images.',
      'Compare multiple flag gradients quickly in a single grid.',
    ],
    faqs: [
      {
        question: 'How many flag-inspired palettes are included?',
        answer: 'The flag gallery currently includes 38 palettes based on country and regional flag color combinations.',
      },
      {
        question: 'Can visitors customize the flag gradients on this route?',
        answer: 'No. The flags route is optimized for browsing preset compositions, while the generator, mesh, and grainy routes handle customization.',
      },
      {
        question: 'What can users export from a flag card?',
        answer: 'Users can copy the Tailwind class string, copy the CSS output, and download the visual as an image from each card.',
      },
    ],
  },
  '/generator': {
    seoTitle: 'Tailwind CSS Gradient Generator | Hypercolor',
    seoDescription: 'Build Tailwind CSS gradients with 1 direction selector, 3 color stops, 201 colors, and instant class, CSS, and image export.',
    pageName: 'Tailwind CSS Gradient Generator',
    pageDescription: 'The standard generator combines direction presets and three Tailwind color stops for fast custom gradients.',
    stats: [
      { value: '3', label: 'color stops in every standard gradient' },
      { value: '1', label: 'direction selector controlling orientation' },
      { value: '201', label: 'Tailwind color options across stop pickers' },
    ],
    keyPoints: [
      'Pick a direction and three color stops to build a gradient.',
      'Randomize the full setup when you need quick inspiration.',
      'Export the result as Tailwind classes, raw CSS, or an image.',
    ],
    howTo: [
      {
        name: 'Choose a direction preset',
        text: 'Start with the direction selector to define whether the gradient flows left, right, top, bottom, or along one of the diagonal options.',
      },
      {
        name: 'Pick the from, via, and to colors',
        text: 'Use the three stop selectors to build a balanced Tailwind CSS gradient from the available 201 color options.',
      },
      {
        name: 'Export the finished gradient',
        text: 'Copy the Tailwind classes, copy the CSS background output, or download an image once the preview matches the look you want.',
      },
    ],
    faqs: [
      {
        question: 'How many color stops does the standard generator use?',
        answer: 'The standard generator uses three stops: from, via, and to, which makes it easy to produce layered Tailwind gradients.',
      },
      {
        question: 'Can visitors export both code and assets from the generator?',
        answer: 'Yes. The standard generator supports Tailwind class copy, CSS copy, and image download from the same route.',
      },
      {
        question: 'Why does the generator include a randomize action?',
        answer: 'Randomization helps users discover combinations quickly when they want inspiration without manually testing direction and color permutations.',
      },
    ],
  },
  '/grainy': {
    seoTitle: 'Grainy Gradient Generator | Hypercolor',
    seoDescription: 'Create textured Tailwind CSS gradients with 3 color stops, a direction selector, 201 colors, and wallpaper-ready image export.',
    pageName: 'Grainy Gradient Generator',
    pageDescription: 'The grainy generator adds a textured noise overlay to a standard three-stop Tailwind CSS gradient.',
    stats: [
      { value: '3', label: 'gradient stops behind the grain effect' },
      { value: '1', label: 'noise overlay applied over the preview' },
      { value: '201', label: 'Tailwind color options available to mix' },
    ],
    keyPoints: [
      'Start from the same direction and color controls used in the standard generator.',
      'Preview the textured version immediately with the grain overlay applied.',
      'Download wallpaper-ready images when the atmosphere feels right.',
    ],
    howTo: [
      {
        name: 'Choose the gradient direction',
        text: 'Select a direction preset first so the grain effect is applied over the exact gradient orientation you need.',
      },
      {
        name: 'Mix three Tailwind color stops',
        text: 'Set the from, via, and to colors to create the underlying blend that will be visible under the textured layer.',
      },
      {
        name: 'Export the textured result',
        text: 'Use the preview to judge the atmosphere and then download the final grainy gradient as an image.',
      },
    ],
    faqs: [
      {
        question: 'How is the grainy generator different from the standard generator?',
        answer: 'The grainy generator uses the same basic gradient controls but adds a visible noise texture, making it better for wallpapers and atmospheric backgrounds.',
      },
      {
        question: 'Can users still control the underlying colors?',
        answer: 'Yes. The grain effect sits on top of the same three-stop Tailwind gradient model, so direction and color choices still matter.',
      },
      {
        question: 'What export option is available on the grainy route?',
        answer: 'The grainy route is optimized for image export, which makes it a good fit for wallpaper-style assets.',
      },
    ],
  },
  '/mesh': {
    seoTitle: 'Mesh Gradient Generator | Hypercolor',
    seoDescription: 'Design mesh gradients with 6 default stops, draggable controls, 201 Tailwind colors, CSS export, and image download.',
    pageName: 'Mesh Gradient Generator',
    pageDescription: 'The mesh generator composes a background color and multiple radial stops into a richer gradient field.',
    stats: [
      { value: '6', label: 'default mesh stops on first load' },
      { value: '100%', label: 'drag-based control over stop positions' },
      { value: '201', label: 'Tailwind-derived background colors available' },
    ],
    keyPoints: [
      'Start with six generated stops and refine the composition manually.',
      'Drag stops on the canvas or edit values in the control panel.',
      'Export the final mesh as CSS or an image for design handoff.',
    ],
    howTo: [
      {
        name: 'Set the background color',
        text: 'Choose the base background color first so the mesh has a stable foundation before you begin shaping the radial stops.',
      },
      {
        name: 'Adjust the mesh stops',
        text: 'Move each stop, tweak its size, and change its color until the gradients blend into the composition you want.',
      },
      {
        name: 'Export the composed background',
        text: 'Copy the generated CSS or download the mesh as an image once the layout and colors feel balanced.',
      },
    ],
    faqs: [
      {
        question: 'How many stops does the mesh generator create by default?',
        answer: 'The mesh generator starts with six stops so users can begin with a rich composition instead of an empty canvas.',
      },
      {
        question: 'Can users move mesh stops directly on the preview?',
        answer: 'Yes. When controls are visible, the preview exposes draggable handles so positions can be changed on-canvas.',
      },
      {
        question: 'Why does the mesh route export CSS instead of Tailwind classes?',
        answer: 'Mesh gradients are composed from generated radial layers, so the output is better represented as inline CSS than as a single Tailwind utility string.',
      },
    ],
  },
}

export function normalizeAeoPath(pathname) {
  return pathname.replace(/\/+$/, '') || '/'
}

export function getAeoPage(pathname) {
  const normalizedPath = normalizeAeoPath(pathname)

  return routeAeoContent[normalizedPath] || routeAeoContent['/']
}

export function getCanonicalUrl(pathname) {
  const normalizedPath = normalizeAeoPath(pathname)

  return normalizedPath === '/'
    ? siteConfig.url
    : `${siteConfig.url}${normalizedPath}`
}

export function getJsonLdGraph(pathname) {
  const normalizedPath = normalizeAeoPath(pathname)
  const page = getAeoPage(normalizedPath)
  const pageUrl = getCanonicalUrl(normalizedPath)
  const graph = [
    {
      '@type': 'WebSite',
      'name': siteConfig.title,
      'description': siteConfig.description,
      'url': siteConfig.url,
    },
    {
      '@type': 'Organization',
      'name': siteConfig.organization.name,
      'url': siteConfig.organization.url,
      'logo': siteConfig.organization.logo,
      'sameAs': siteConfig.organization.sameAs,
    },
    {
      '@type': 'WebPage',
      'name': page.pageName,
      'description': page.seoDescription,
      'url': pageUrl,
      'isPartOf': {
        '@type': 'WebSite',
        'name': siteConfig.title,
        'url': siteConfig.url,
      },
      'publisher': {
        '@type': 'Organization',
        'name': siteConfig.organization.name,
      },
    },
  ]

  if (normalizedPath !== '/') {
    graph.push({
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': `${siteConfig.url}/`,
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': page.pageName,
          'item': pageUrl,
        },
      ],
    })
  }

  if (page.faqs?.length) {
    graph.push({
      '@type': 'FAQPage',
      'mainEntity': page.faqs.map(({ question, answer }) => ({
        '@type': 'Question',
        'name': question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': answer,
        },
      })),
    })
  }

  if (page.howTo?.length) {
    graph.push({
      '@type': 'HowTo',
      'name': page.pageName,
      'step': page.howTo.map((step, index) => ({
        '@type': 'HowToStep',
        'position': index + 1,
        'name': step.name,
        'text': step.text,
      })),
    })
  }

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': graph,
  })
}
