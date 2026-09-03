<template>
  <div
    class="relative min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-500"
  >
    <!-- Dynamic Ambient Background Mesh Glows -->
    <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <!-- Top Right Violet Blob -->
      <div
        class="absolute -top-40 -right-40 w-96 h-96 sm:w-[500px] sm:h-[500px] rounded-full bg-linear-to-br from-indigo-500/15 via-purple-500/15 to-pink-500/10 dark:from-indigo-600/20 dark:via-purple-600/20 dark:to-blue-600/15 blur-3xl animate-float"
      ></div>
      <!-- Middle Left Blue Blob -->
      <div
        class="absolute top-1/3 -left-40 w-96 h-96 sm:w-[600px] sm:h-[600px] rounded-full bg-linear-to-tr from-blue-500/15 via-cyan-500/10 to-teal-500/10 dark:from-blue-600/20 dark:via-cyan-600/15 dark:to-teal-600/15 blur-3xl animate-float"
        style="animation-delay: -3s"
      ></div>
      <!-- Bottom Right Cyan/Purple Blob -->
      <div
        class="absolute -bottom-20 -right-20 w-80 h-80 sm:w-[500px] sm:h-[500px] rounded-full bg-linear-to-tl from-purple-500/15 via-indigo-500/15 to-cyan-500/10 dark:from-purple-700/20 dark:via-indigo-600/20 dark:to-cyan-600/15 blur-3xl animate-float"
        style="animation-delay: -1.5s"
      ></div>
    </div>

    <!-- Main Content Flow -->
    <div class="relative z-10 flex flex-col min-h-screen">
      <NuxtRouteAnnouncer />

      <main class="grow">
        <NuxtPage />
      </main>

      <!-- Connect Section -->
      <ContactSection />

      <!-- Global Footer: rendered once across all pages -->
      <AppFooter />
    </div>
  </div>
</template>

<script setup></script>
