<!-- components/AppFooter.vue -->
<template>
  <footer class="relative py-12 px-4 glass-nav border-t border-slate-200/80 dark:border-slate-800">
    <div class="max-w-7xl mx-auto text-center space-y-6">
      <!-- Brand Logo -->
      <div class="flex items-center justify-center gap-3">
        <div class="w-9 h-9 bg-linear-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md shadow-blue-500/20">
          <span class="text-white font-black text-base tracking-wider">P</span>
        </div>
        <span class="font-bold font-heading text-xl text-slate-900 dark:text-white">Pejoal</span>
      </div>

      <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto font-light leading-relaxed">{{ t('hero.bio') }}</p>

      <!-- Legal Links -->
      <div class="flex justify-center gap-6 text-xs sm:text-sm font-semibold">
        <NuxtLink
          to="/terms"
          class="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          {{ t('footer.terms') }}
        </NuxtLink>
        <NuxtLink
          to="/privacy-policy"
          class="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          {{ t('footer.privacy') }}
        </NuxtLink>
        <NuxtLink
          to="/imprint"
          class="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          {{ t('footer.imprint') }}
        </NuxtLink>
      </div>

      <p class="text-xs text-slate-400 dark:text-slate-500 font-medium">
        © {{ new Date().getFullYear() }} {{ t('footer.copyright') }}
      </p>
    </div>
  </footer>
</template>

<script setup>
const { t } = useI18n();
</script>
