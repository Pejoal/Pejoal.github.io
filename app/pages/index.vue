<template>
  <!-- Navigation -->
  <AppNavigation :is-dark="isDark" @toggle-dark-mode="toggleDarkMode" />

  <HeroSection />

  <AboutSection />

  <ServicesSection />

  <HorizonShowcaseSection />

  <AppsPortfolioSection
    :ai-apps="aiApps"
    :german-apps="germanApps"
    :english-apps="englishApps"
    :spanish-apps="spanishApps"
    :french-apps="frenchApps"
    :italian-apps="italianApps"
    :arabic-apps="arabicApps"
    :other-language-apps="otherLanguageApps"
    :utility-apps="utilityApps"
    :test-apps="testApps"
    :game-apps="gameApps"
    :programming-apps="programmingApps"
  />

  <WebProjectsSection />
  <SkillsSection />
</template>

<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useAppData, useDarkMode } from '~/composables/useApp';

const { isDark, toggleDarkMode } = useDarkMode();

onMounted(() => {
  // Defer AOS init until after first paint so PerformanceObserver entries
  // are populated — prevents "Cannot read properties of undefined (reading 'startTime')"
  requestAnimationFrame(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  });
});

// Use composables for app data and dark mode
const {
  aiApps,
  germanApps,
  frenchApps,
  englishApps,
  spanishApps,
  italianApps,
  arabicApps,
  otherLanguageApps,
  utilityApps,
  testApps,
  gameApps,
  programmingApps,
} = useAppData();

// SEO Meta & Structured Data
useSeoMeta({
  title: 'Pejoal Dev Studio — Mobile Apps & Web Engineering',
  ogTitle: 'Pejoal Dev Studio — Mobile Apps & Web Engineering',
  ogSiteName: 'Pejoal Dev Studio',
  description:
    'Official portfolio of Pejoal Dev Studio, specializing in high-performance cross-platform iOS & Android apps, scalable web systems, React Native, Vue/Nuxt, and Node.js with 50+ published store applications.',
  ogDescription:
    'Explore 50+ published production mobile applications and full-stack web projects built by Pejoal Dev Studio.',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Pejoal Dev Studio — Mobile & Web Engineering',
  twitterDescription:
    'Explore 50+ published production mobile apps and full-stack web platforms serving thousands of users globally.',
  ogType: 'website',
  ogUrl: 'https://pejoal.com/',
});

// JSON-LD Structured Data for Search Engines
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': 'https://pejoal.com/#organization',
            name: 'Pejoal Dev Studio',
            url: 'https://pejoal.com/',
            logo: 'https://pejoal.com/logo.jpg',
            sameAs: [
              'https://play.google.com/store/apps/dev?id=8062598971207894089',
              'https://apps.apple.com/developer/nagy-solaiman/id6809016106',
              'https://github.com/Pejoal',
            ],
            knowsAbout: [
              'Mobile Application Development',
              'Cross-Platform Apps',
              'React Native',
              'Vue.js',
              'Nuxt.js',
              'Node.js',
              'TypeScript',
              'Artificial Intelligence Applications',
            ],
          },
          {
            '@type': 'WebSite',
            '@id': 'https://pejoal.com/#website',
            url: 'https://pejoal.com/',
            name: 'Pejoal Dev Studio',
            publisher: {
              '@id': 'https://pejoal.com/#organization',
            },
            inLanguage: ['en', 'de'],
          },
          {
            '@type': 'ItemList',
            name: 'Featured Published Mobile Applications',
            description:
              'Production mobile applications published on Google Play and Apple App Store by Pejoal Dev Studio',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                item: {
                  '@type': 'SoftwareApplication',
                  name: 'AutoScribe: AI Voice Scribe',
                  applicationCategory: 'BusinessApplication',
                  operatingSystem: 'ANDROID, IOS',
                  url: 'https://pejoal.com/?app=autoscribe.chat',
                  author: { '@id': 'https://pejoal.com/#organization' },
                },
              },
              {
                '@type': 'ListItem',
                position: 2,
                item: {
                  '@type': 'SoftwareApplication',
                  name: 'Learn German offline beginners',
                  applicationCategory: 'EducationalApplication',
                  operatingSystem: 'ANDROID, IOS',
                  url: 'https://pejoal.com/?app=myapp',
                  author: { '@id': 'https://pejoal.com/#organization' },
                },
              },
              {
                '@type': 'ListItem',
                position: 3,
                item: {
                  '@type': 'SoftwareApplication',
                  name: 'Learn Arabic offline',
                  applicationCategory: 'EducationalApplication',
                  operatingSystem: 'ANDROID, IOS',
                  url: 'https://pejoal.com/?app=arabic_master',
                  author: { '@id': 'https://pejoal.com/#organization' },
                },
              },
            ],
          },
        ],
      }),
    },
  ],
});
</script>
