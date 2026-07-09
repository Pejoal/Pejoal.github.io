import { computed, onUnmounted, ref } from 'vue';

import appsData from '../data/appsData.json';

export const useAppData = () => {
  // Apps data now loaded from auto-generated JSON which includes scraped data
  const allApps = ref(appsData);

  // Computed properties for filtered apps
  const germanApps = computed(() => allApps.value.filter((app) => app.category === 'german'));
  const frenchApps = computed(() => allApps.value.filter((app) => app.category === 'french'));
  const englishApps = computed(() => allApps.value.filter((app) => app.category === 'english'));
  const spanishApps = computed(() => allApps.value.filter((app) => app.category === 'spanish'));
  const italianApps = computed(() => allApps.value.filter((app) => app.category === 'italian'));
  const arabicApps = computed(() => allApps.value.filter((app) => app.category === 'arabic'));
  const otherLanguageApps = computed(() => allApps.value.filter((app) => app.category === 'other'));
  const utilityApps = computed(() => allApps.value.filter((app) => app.category === 'utility'));
  const testApps = computed(() => allApps.value.filter((app) => app.category === 'test'));
  const gameApps = computed(() => allApps.value.filter((app) => app.category === 'game'));
  const programmingApps = computed(() => allApps.value.filter((app) => app.category === 'programming'));

  return {
    allApps,
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
  };
};

export const useDarkMode = () => {
  const isDark = ref(false);

  // Initialize dark mode with proper SSR handling
  const initializeDarkMode = () => {
    if (process.client) {
      // Check for saved preference or system preference
      const savedTheme = localStorage.getItem('darkMode');
      if (savedTheme !== null) {
        isDark.value = savedTheme === 'true';
      } else {
        // Use system preference
        isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }

      // Apply the theme immediately
      document.documentElement.classList.toggle('dark', isDark.value);
    }
  };

  const toggleDarkMode = () => {
    isDark.value = !isDark.value;

    if (process.client) {
      // Update DOM
      document.documentElement.classList.toggle('dark', isDark.value);

      // Save preference
      localStorage.setItem('darkMode', isDark.value.toString());
    }
  };

  // Initialize on client side
  if (process.client) {
    initializeDarkMode();

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e) => {
      // Only update if no manual preference is saved
      if (localStorage.getItem('darkMode') === null) {
        isDark.value = e.matches;
        document.documentElement.classList.toggle('dark', isDark.value);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);

    // Cleanup listener when component unmounts
    onUnmounted(() => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    });
  }

  return {
    isDark,
    toggleDarkMode,
  };
};
