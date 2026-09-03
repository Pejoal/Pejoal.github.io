<!-- pages/imprint.vue -->
<template>
  <div
    class="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 pt-24 px-4 pb-16"
  >
    <div class="max-w-4xl mx-auto">
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-8 font-medium"
      >
        <Icon name="heroicons:arrow-left" class="w-5 h-5" />
        {{ t('legal.backToPortfolio') }}
      </NuxtLink>

      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">{{ t('imprint.title') }}</h1>
      <p class="text-sm text-gray-500 dark:text-gray-400 mb-10">
        {{ t('legal.lastUpdated', { date: locale === 'de' ? '07. Juli 2026' : 'July 07, 2026' }) }}
      </p>

      <div class="max-w-none space-y-8 prose prose-lg dark:prose-invert">
        <section>
          <div class="dark:text-gray-300">
            <p class="mb-2"><strong>Pejoal Dev Studio</strong></p>
            <p class="mb-2">{{ t('imprint.owner') }}</p>
            <p class="mb-2">
              {{ t('imprint.addressLabel') }}<br />
              Menia <br />
              {{ t('terms.s10Egypt') }}
            </p>
            <p class="mb-2">
              {{ t('imprint.contactLabel') }}
              <a href="mailto:business@pejoal.com" class="text-blue-600 hover:underline"> business@pejoal.com </a>
            </p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
            {{ t('imprint.productDocTitle') }}
          </h2>
          <p class="dark:text-gray-300">
            {{ t('imprint.productDocText') }}
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
          to="/privacy-policy"
          class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm"
        >
          {{ t('footer.privacy') }}
        </NuxtLink>
      </div>
    </div>
  </div>
  <ContactSection />
</template>

<script setup>
import { computed } from 'vue';
import ContactSection from '~/components/ContactSection.vue';

const { t, locale } = useI18n();

useSeoMeta({
  title: computed(() => t('imprint.seoTitle')),
  description: computed(() => t('imprint.seoDescription')),
  robots: 'noindex',
});
</script>
