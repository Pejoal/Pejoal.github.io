// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
    css: {
      devSourcemap: false,
    },
  },

  // Enable static site generation for GitHub Pages
  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
      failOnError: false,
    },
  },

  // Configure SEO & Head for GitHub Pages deployment
  app: {
    baseURL: '/',
    buildAssetsDir: '/_nuxt/',
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Pejoal Dev Studio — Mobile Apps & Web Engineering',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=5' },
        {
          name: 'description',
          content:
            'Official portfolio of Pejoal Dev Studio, specializing in high-performance cross-platform iOS & Android apps, scalable web systems, React Native, Vue/Nuxt, and Node.js with 50+ published store applications.',
        },
        {
          name: 'keywords',
          content:
            'Pejoal Dev Studio, Pejoal, Mobile App Development, Cross-Platform Apps, React Native, Vue.js, Nuxt.js, Node.js, Android Apps, iOS Apps, Mobile Portfolio, Software Engineering, AutoScribe',
        },
        { name: 'author', content: 'Pejoal Dev Studio' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Pejoal Dev Studio' },
        { property: 'og:url', content: 'https://pejoal.com/' },
        { property: 'og:title', content: 'Pejoal Dev Studio — Mobile Apps & Web Engineering' },
        {
          property: 'og:description',
          content:
            'Explore 50+ published production mobile applications and web projects built with modern cross-platform technologies.',
        },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:locale:alternate', content: 'de_DE' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Pejoal Dev Studio — Mobile Apps & Web Engineering' },
        {
          name: 'twitter:description',
          content:
            'Explore 50+ published production mobile apps and full-stack web platforms serving thousands of users globally.',
        },

        // Verification
        { name: 'facebook-domain-verification', content: 'cwfbsf6is7ynmsykzih3z7m4mwf21c' },
      ],
      link: [
        { rel: 'canonical', href: 'https://pejoal.com/' },
        { rel: 'alternate', hreflang: 'en', href: 'https://pejoal.com/' },
        { rel: 'alternate', hreflang: 'de', href: 'https://pejoal.com/?lang=de' },
        { rel: 'alternate', hreflang: 'x-default', href: 'https://pejoal.com/' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap',
        },
      ],
      script: [
        {
          innerHTML: `
            // Prevent theme flash on page load
            (function() {
              const savedTheme = localStorage.getItem('darkMode');
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const isDark = savedTheme !== null ? savedTheme === 'true' : prefersDark;
              if (isDark) {
                document.documentElement.classList.add('dark');
              }

              // Suppress third-party / extension web-vitals observer errors (e.g. reportAllChanges startTime) on SPA navigations
              window.addEventListener('error', function(e) {
                if (e && e.message && (e.message.indexOf('startTime') !== -1 || e.message.indexOf('reportAllChanges') !== -1)) {
                  e.preventDefault();
                  e.stopImmediatePropagation();
                  return true;
                }
              }, true);
            })();
          `,
          type: 'text/javascript',
        },
      ],
    },
  },

  // Ensure proper static generation
  ssr: true,

  // GitHub Pages specific settings
  experimental: {
    payloadExtraction: false,
  },

  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/test-utils', '@nuxt/ui', '@nuxtjs/i18n'],

  // Internationalization i18n Configuration
  i18n: {
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'de', language: 'de-DE', name: 'Deutsch', file: 'de.json' },
    ],
    defaultLocale: 'en',
    lazy: false,
    langDir: 'locales',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },
});
