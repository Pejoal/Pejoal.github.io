<template>
  <!-- Navigation -->
  <AppNavigation :is-dark="isDark" @toggle-dark-mode="toggleDarkMode" />

  <HeroSection />

  <AboutSection />

  <ServicesSection />

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
  AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-out-cubic',
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
  title: 'Pejoal Hanna — Full-Stack Developer & Mobile App Engineer',
  ogTitle: 'Pejoal Hanna — Full-Stack Developer & Mobile App Engineer',
  description:
    'Official portfolio of Pejoal Hanna, Full-Stack Developer & Mobile Application Engineer specializing in cross-platform iOS & Android apps, Web systems, React Native, Vue/Nuxt, and Node.js with 48+ published store applications.',
  ogDescription:
    'Explore 48+ published production mobile applications and full-stack web projects built by Pejoal Hanna.',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Pejoal Hanna — Mobile & Web Software Engineer',
  twitterDescription:
    'Explore 48+ published production mobile apps and full-stack web platforms serving thousands of users globally.',
  ogType: 'website',
  ogUrl: 'https://pejoal.github.io/',
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
            '@type': 'Person',
            '@id': 'https://pejoal.github.io/#person',
            name: 'Pejoal Hanna',
            jobTitle: 'Full-Stack Developer & Mobile App Engineer',
            url: 'https://pejoal.github.io/',
            sameAs: [
              'https://play.google.com/store/apps/dev?id=7584224843331524823',
              'https://github.com/Pejoal',
            ],
            worksFor: {
              '@type': 'Organization',
              name: 'Pejoal Dev Studio',
            },
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
            '@id': 'https://pejoal.github.io/#website',
            url: 'https://pejoal.github.io/',
            name: 'Pejoal Hanna - Global Mobile Portfolio',
            publisher: {
              '@id': 'https://pejoal.github.io/#person',
            },
            inLanguage: ['en', 'de'],
          },
          {
            '@type': 'ItemList',
            name: 'Featured Published Mobile Applications',
            description: 'Production mobile applications published on Google Play and Apple App Store by Pejoal Dev Studio',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                item: {
                  '@type': 'SoftwareApplication',
                  name: 'AutoScribe: AI Voice Scribe',
                  applicationCategory: 'BusinessApplication',
                  operatingSystem: 'ANDROID, IOS',
                  url: 'https://pejoal.github.io/?app=autoscribe.chat',
                  author: { '@id': 'https://pejoal.github.io/#person' },
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
                  url: 'https://pejoal.github.io/?app=myapp',
                  author: { '@id': 'https://pejoal.github.io/#person' },
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
                  url: 'https://pejoal.github.io/?app=arabic_master',
                  author: { '@id': 'https://pejoal.github.io/#person' },
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
