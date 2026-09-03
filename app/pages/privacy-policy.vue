<!-- pages/privacy-policy.vue -->
<template>
  <div
    class="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 pt-24 px-4 pb-16"
  >
    <div class="max-w-4xl mx-auto">
      <NuxtLink to="/" class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8 font-medium">
        <Icon name="heroicons:arrow-left" class="w-5 h-5" />
        {{ t('legal.backToPortfolio') }}
      </NuxtLink>

      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">{{ t('privacy.title') }}</h1>
      <p class="text-sm text-gray-500 dark:text-gray-400 mb-8">
        {{ t('legal.lastUpdated', { date: locale === 'de' ? '07. Juli 2026' : 'July 07, 2026' }) }}
      </p>

      <div class="max-w-none space-y-7 prose prose-lg dark:prose-invert">
        <p class="dark:text-gray-300">
          {{ t('privacy.intro') }}
        </p>

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
          <p class="text-sm text-blue-800 dark:text-blue-200 m-0">
            <strong>{{ t('privacy.noticeTitle') }}</strong> {{ t('privacy.noticeText') }}
          </p>
        </div>

        <!-- 1. Personal Data -->
        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-3">{{ t('privacy.s1Title') }}</h2>
          <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>{{ t('privacy.s1Item1') }}</li>
            <li>{{ t('privacy.s1Item2') }}</li>
            <li>{{ t('privacy.s1Item3') }}</li>
            <li>{{ t('privacy.s1Item4') }}</li>
          </ul>
        </section>

        <!-- 2. Connectivity -->
        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-3">{{ t('privacy.s2Title') }}</h2>
          <p class="dark:text-gray-300">
            {{ t('privacy.s2Text') }}
          </p>
        </section>

        <!-- 3. Permissions -->
        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-3">{{ t('privacy.s3Title') }}</h2>
          <p class="dark:text-gray-300">
            {{ t('privacy.s3Text') }}
          </p>
          <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-6">
            <li>{{ t('privacy.s3Item1') }}</li>
            <li>{{ t('privacy.s3Item2') }}</li>
            <li>{{ t('privacy.s3Item3') }}</li>
            <li>{{ t('privacy.s3Item4') }}</li>
            <li>{{ t('privacy.s3Item5') }}</li>
          </ul>
        </section>

        <!-- 4. Ads & Analytics -->
        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-3">{{ t('privacy.s4Title') }}</h2>
          <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              {{ t('privacy.s4Item1') }}
            </li>
            <li>
              {{ t('privacy.s4Item2') }}
            </li>
          </ul>
        </section>

        <!-- 5. Children -->
        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-3">{{ t('privacy.s5Title') }}</h2>
          <p class="dark:text-gray-300">
            {{ t('privacy.s5Text') }}
          </p>
        </section>

        <!-- 6. Contact -->
        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-3">{{ t('privacy.s6Title') }}</h2>
          <p class="dark:text-gray-300">
            {{ t('privacy.s6Text') }}<br />
            <a href="mailto:business@pejoal.com" class="text-blue-600 hover:underline font-medium">
              business@pejoal.com
            </a>
          </p>
        </section>
      </div>

      <div class="mt-12 pb-4 text-center space-x-4">
        <NuxtLink
          to="/terms"
          class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm"
        >
          {{ t('footer.terms') }}
        </NuxtLink>
        <span class="text-gray-400">|</span>
        <NuxtLink
          to="/imprint"
          class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm"
        >
          {{ t('footer.imprint') }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const { t, locale } = useI18n();

useSeoMeta({
  title: computed(() => t('privacy.seoTitle')),
  description: computed(() => t('privacy.seoDescription')),
});
</script>
