<!-- components/AppFooter.vue -->
<template>
  <footer class="py-12 px-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
    <div class="max-w-7xl mx-auto text-center space-y-6">
      <!-- Logo -->
      <div class="flex items-center justify-center gap-2">
        <div class="w-8 h-8 bg-linear-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
          <span class="text-white font-bold text-sm">P</span>
        </div>
        <span class="font-bold text-xl text-gray-900 dark:text-white">Pejoal</span>
      </div>

      <p class="text-gray-600 dark:text-gray-300">{{ t('hero.bio') }}</p>

      <!-- Legal Links -->
      <div class="flex justify-center gap-6 text-sm">
        <NuxtLink
          to="/terms"
          class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          {{ t('footer.terms') }}
        </NuxtLink>
        <NuxtLink
          to="/privacy-policy"
          class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          {{ t('footer.privacy') }}
        </NuxtLink>
        <NuxtLink
          to="/imprint"
          class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          {{ t('footer.imprint') }}
        </NuxtLink>
      </div>

      <p class="text-xs text-gray-500 dark:text-gray-400">
        © {{ new Date().getFullYear() }} {{ t('footer.copyright') }}
      </p>
    </div>
  </footer>
</template>

<script setup>
const { t } = useI18n();
</script>
