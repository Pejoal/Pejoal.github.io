<template>
  <!-- Navigation -->
  <AppNavigation :is-dark="isDark" @toggle-dark-mode="toggleDarkMode" />

  <HeroSection />

  <AboutSection />

  <ServicesSection />

  <AppsPortfolioSection
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

// SEO
useSeoMeta({
  title: 'Pejoal Hanna - Full Stack Developer',
  ogTitle: 'Pejoal Hanna - Full Stack Developer',
  description:
    'Professional full-stack developer specializing in cross-platform mobile applications and web systems/apps. Experienced in CSS, React Native, Expo, PHP, Laravel, MongoDB, MariaDB/MySQL, and Node.js with published apps on major app stores.',
  ogDescription:
    'Professional full-stack developer specializing in cross-platform mobile applications and web systems/apps. Experienced in CSS, React Native, Expo, PHP, Laravel, MongoDB, MariaDB/MySQL, and Node.js with published apps on major app stores.',
  // ogImage: '/og-image.png',
  twitterCard: 'summary_large_image',
  'facebook-domain-verification': 'cwfbsf6is7ynmsykzih3z7m4mwf21c',
});
</script>
