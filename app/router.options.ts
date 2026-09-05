import type { RouterConfig } from '@nuxt/schema';

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    // If navigation has a saved position (like browser back/forward), restore it
    if (savedPosition) {
      return savedPosition;
    }

    // If navigating to an anchor hash on the page
    if (to.hash) {
      return {
        el: to.hash,
        top: 80,
        behavior: 'smooth',
      };
    }

    // If staying on the same path (e.g. query changes like ?app=...), do NOT scroll
    if (to.path === from.path) {
      return false;
    }

    // On new page transitions, scroll to top
    return { top: 0, left: 0 };
  },
};
