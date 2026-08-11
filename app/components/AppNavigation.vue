<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-nav shadow-xs"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 sm:h-20">
        <!-- Logo -->
        <NuxtLink to="#home" class="flex items-center gap-3 group">
          <div class="w-10 h-10 bg-linear-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform duration-300">
            <span class="text-white font-black text-lg tracking-wider">P</span>
          </div>
          <div class="flex flex-col">
            <span class="font-bold text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Pejoal</span>
            <span class="text-[10px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-400 -mt-1">Dev Studio</span>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation Links -->
        <div class="hidden md:flex items-center gap-1 lg:gap-2 bg-slate-100/70 dark:bg-slate-800/60 p-1.5 rounded-full border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-md">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            :class="[
              'px-4 py-2 text-xs lg:text-sm font-semibold rounded-full transition-all duration-300 cursor-pointer',
              activeSection === link.to 
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30' 
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-700/50'
            ]"
            @click.prevent="
              scrollToSection(link.to);
              activeSection = link.to;
            "
          >
            {{ link.label }}
          </NuxtLink>
        </div>

        <!-- Right Action Controls (i18n + Theme) -->
        <div class="hidden md:flex items-center gap-3">
          <ClientOnly>
            <div class="flex items-center gap-2">
              <LanguageSwitcher />
              <button
                @click="$emit('toggle-dark-mode')"
                class="p-2.5 cursor-pointer rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-slate-700 dark:hover:text-blue-400 border border-slate-200/80 dark:border-slate-700/80 transition-all duration-300 shadow-xs active:scale-95"
                aria-label="Toggle dark mode"
              >
                <svg
                  v-if="isDark"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-5 h-5 text-amber-400 animate-pulse"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-6.364-.386 1.591-1.591M3 12h2.25m.386-6.364 1.591 1.591M12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                  />
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-5 h-5 text-slate-700"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              </button>
            </div>
          </ClientOnly>
        </div>

        <!-- Animated Hamburger Button -->
        <button
          @click="mobileOpen = !mobileOpen"
          class="md:hidden cursor-pointer p-2 w-10 h-10 relative focus:outline-none rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center z-50"
          aria-label="Toggle menu"
        >
          <div class="w-6 h-6 relative flex items-center justify-center">
            <!-- Top bar -->
            <span
              aria-hidden="true"
              class="block absolute h-0.5 w-5 bg-slate-900 dark:bg-slate-100 transform transition duration-300 ease-in-out"
              :class="{ 'rotate-45': mobileOpen, 'top-1': !mobileOpen, 'top-1/2 -translate-y-1/2': mobileOpen }"
            ></span>
            <!-- Middle bar -->
            <span
              aria-hidden="true"
              class="block absolute h-0.5 w-5 bg-slate-900 dark:bg-slate-100 transform transition duration-300 ease-in-out top-1/2 -translate-y-1/2"
              :class="{ 'opacity-0': mobileOpen }"
            ></span>
            <!-- Bottom bar -->
            <span
              aria-hidden="true"
              class="block absolute h-0.5 w-5 bg-slate-900 dark:bg-slate-100 transform transition duration-300 ease-in-out"
              :class="{ '-rotate-45': mobileOpen, 'bottom-1': !mobileOpen, 'top-1/2 -translate-y-1/2': mobileOpen }"
            ></span>
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Drawer -->
    <transition name="slide-fade">
      <div v-if="mobileOpen" class="md:hidden glass-nav border-t border-slate-200/80 dark:border-slate-800">
        <div class="px-4 py-4 space-y-2 max-h-[80vh] overflow-y-auto">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            :class="[
              'block px-4 py-3 rounded-xl font-semibold text-sm transition-all',
              activeSection === link.to 
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30' 
                : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
            ]"
            @click.prevent="
              scrollToSection(link.to);
              activeSection = link.to;
              mobileOpen = false;
            "
          >
            {{ link.label }}
          </NuxtLink>
          <ClientOnly>
            <div class="pt-3 mt-2 flex items-center justify-between border-t border-slate-200/80 dark:border-slate-800">
              <LanguageSwitcher />
              <button
                @click="
                  $emit('toggle-dark-mode');
                  mobileOpen = false;
                "
                class="cursor-pointer py-2 px-4 rounded-xl flex items-center gap-2 text-sm font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 transition"
              >
                <svg
                  v-if="isDark"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-4 h-4 text-amber-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-6.364-.386 1.591-1.591M3 12h2.25m.386-6.364 1.591 1.591M12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                  />
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
                {{ isDark ? 'Light Mode' : 'Dark Mode' }}
              </button>
            </div>
          </ClientOnly>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const { t } = useI18n();

defineProps({
  isDark: Boolean,
});
defineEmits(['toggle-dark-mode']);

const mobileOpen = ref(false);
const activeSection = ref('#home');

const navLinks = computed(() => [
  { label: t('nav.home'), to: '#home' },
  { label: t('nav.about'), to: '#about' },
  { label: t('nav.services'), to: '#services' },
  { label: t('nav.apps'), to: '#apps' },
  { label: t('nav.webProjects'), to: '#web-projects' },
  { label: t('nav.skills'), to: '#skills' },
  { label: t('nav.contact'), to: '#contact' },
]);

onMounted(() => {
  if (process.client) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = '#' + entry.target.id;
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    setTimeout(() => {
      navLinks.value.forEach((link) => {
        const targetId = link.to.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
          observer.observe(element);
        }
      });
    }, 100);
  }
});

const scrollToSection = (to) => {
  if (to.startsWith('#')) {
    const targetId = to.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navHeight = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else {
      const el = document.querySelector(to);
      if (el) {
        const navHeight = 80;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  }
};
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
