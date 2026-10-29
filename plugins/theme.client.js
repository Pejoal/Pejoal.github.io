// Client-side plugin to initialize dark mode properly
export default defineNuxtPlugin(() => {
  if (process.client) {
    // This ensures proper theme initialization after hydration
    const initializeTheme = () => {
      const savedTheme = localStorage.getItem('darkMode');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const isDark = savedTheme !== null ? savedTheme === 'true' : prefersDark;

      document.documentElement.classList.toggle('dark', isDark);
    };

    // Initialize immediately and also after DOM is ready
    initializeTheme();
    document.addEventListener('DOMContentLoaded', initializeTheme);

    // Guard against third-party / extension web-vitals observer errors (e.g. reportAllChanges startTime) on SPA navigations
    window.addEventListener('error', (event) => {
      if (
        event?.message?.includes("reading 'startTime'") ||
        event?.message?.includes('reportAllChanges')
      ) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    }, true);

    window.addEventListener('unhandledrejection', (event) => {
      if (
        event?.reason?.message?.includes("reading 'startTime'") ||
        event?.reason?.message?.includes('reportAllChanges')
      ) {
        event.preventDefault();
      }
    });
  }
});
