<!-- pages/privacy-policy.vue -->
<template>
  <div
    class="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 pt-24 px-4"
  >
    <div class="max-w-4xl mx-auto">
      <NuxtLink to="/" class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8">
        <Icon name="heroicons:arrow-left" class="w-5 h-5" />
        Back to Portfolio
      </NuxtLink>

      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">Privacy Policy</h1>
      <p class="text-sm text-gray-500 dark:text-gray-400 mb-8">Last updated: February 14, 2026</p>

      <div class="max-w-none space-y-7 prose prose-lg dark:prose-invert">
        <p class="dark:text-gray-300">
          This Privacy Policy applies to <strong>all apps</strong> developed by
          <strong>Pejoal Dev Studio</strong> ("we", "us", "our").
        </p>

        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
          <p class="text-sm text-blue-800 dark:text-blue-200 m-0">
            <strong>Standard Privacy Commitment:</strong> This document outlines our baseline privacy practices. Because
            our portfolio includes diverse tools, certain applications may require specific data handling disclosures.
            For the most accurate information regarding a particular app's data usage, please refer to the
            <strong>"Data Safety" section on its official store listing page</strong>.
          </p>
        </div>

        <!-- 1. Personal Data -->
        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-3">1. Personal Data</h2>
          <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>No personal data is collected, stored, or shared</strong>.</li>
            <li><strong>No login or registration is required</strong>.</li>
            <li>We do <strong>not collect</strong> names, email addresses, device IDs, or any unique identifiers.</li>
            <li>User activity is <strong>not tracked or monitored</strong>.</li>
          </ul>
        </section>

        <!-- 2. Internet Access -->
        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-3">2. Connectivity</h2>
          <p class="dark:text-gray-300">
            While many of our applications operate <strong>entirely offline</strong>, some may require internet
            connectivity for core features. Any such requirement, including the nature of the connection, is detailed
            within the app's technical specifications in the store listing.
          </p>
        </section>

        <!-- 3. Permissions -->
        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-3">3. Permissions</h2>
          <p class="dark:text-gray-300">
            Our apps <strong>do not request access</strong> to sensitive device features such as:
          </p>
          <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-6">
            <li>Camera</li>
            <li>Microphone</li>
            <li>Location</li>
            <li>Contacts</li>
            <li>Storage</li>
          </ul>
        </section>

        <!-- 4. Ads & Analytics -->
        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-3">4. Advertising and Analytics</h2>
          <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              We prioritize an ad-free experience; however, some apps may utilize
              <strong>third-party advertising networks or basic analytics</strong> to support development.
            </li>
            <li>
              If an app uses these services, they are <strong>explicitly listed in the store listing</strong> under the
              "Data Collection" or "Ads" labels.
            </li>
          </ul>
        </section>

        <!-- 5. Children -->
        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-3">5. Children</h2>
          <p class="dark:text-gray-300">
            Our apps are designed to be safe for all ages, including children under 13. Since
            <strong>no personal data is collected by default</strong>, no parental consent is required.
          </p>
        </section>

        <!-- 6. Contact -->
        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-3">6. Contact</h2>
          <p class="dark:text-gray-300">
            Have questions about this policy or a specific app?<br />
            Contact <strong>Pejoal Dev Studio</strong> at:
            <a href="mailto:business@pejoal.dpdns.org" class="text-blue-600 hover:underline font-medium">
              business@pejoal.dpdns.org
            </a>
          </p>
        </section>
      </div>

      <div class="mt-10 pb-4 text-center space-x-4">
        <NuxtLink
          to="/terms"
          class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
        >
          Terms and Conditions
        </NuxtLink>
        <span class="text-gray-400">|</span>
        <NuxtLink
          to="/impressum"
          class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
        >
          Impressum
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Privacy Policy - Pejoal Dev Studio, Owner: Pejoal Hanna',
  description: 'No data collection by default. Fully offline. Safe for all ages. Flexible per-app disclosures.',
});
</script>
