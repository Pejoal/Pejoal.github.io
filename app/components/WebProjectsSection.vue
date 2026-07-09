<template>
  <section id="web-projects" class="py-20 px-4 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16" data-aos="fade-up">
        <div
          class="inline-flex items-center gap-3 bg-linear-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full mb-8 shadow-lg shadow-purple-500/30"
        >
          <Icon name="heroicons:code-bracket" class="w-5 h-5" />
          <span class="font-bold tracking-wide uppercase text-sm">Featured Work</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 mb-6 tracking-tight">Enterprise Web Systems</h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
          Architecting robust, scalable, and responsive web applications for diverse industries.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(proj, index) in projects"
          :key="proj.title"
          class="group bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 hover:-translate-y-2 flex flex-col"
          data-aos="zoom-in"
          :data-aos-delay="(index + 1) * 100"
        >
          <div class="h-56 relative overflow-hidden shrink-0">
            <!-- Badges -->
            <div class="absolute top-4 left-4 z-20 flex flex-col gap-2">
              <span
                v-if="proj?.isSpecial"
                class="bg-linear-to-r from-purple-500 to-indigo-500 text-white text-[10px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-full shadow-lg backdrop-blur-sm"
              >
                Featured
              </span>
            </div>
            
            <span
              v-if="proj.isNew"
              class="absolute top-4 right-4 bg-linear-to-r from-emerald-400 to-teal-500 text-white text-[10px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-full z-20 shadow-lg backdrop-blur-sm"
            >
              Latest
            </span>

            <img
              :src="proj.image"
              :alt="proj.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            
            <!-- Hover Overlay -->
            <div
              class="absolute inset-0 bg-linear-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]"
            ></div>
          </div>
          <div class="p-8 flex-1 flex flex-col">
            <h3
              class="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
            >
              {{ proj.title }}
            </h3>

            <p class="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed flex-1" v-html="proj.description"></p>

            <div class="flex gap-4 pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
              <a
                v-if="proj.live"
                :href="proj.live"
                target="_blank"
                class="flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
              >
                <Icon name="heroicons:globe-alt" class="w-5 h-5" /> Live Deployment
              </a>
              <a
                v-if="proj.github"
                :href="proj.github"
                target="_blank"
                class="flex items-center gap-1.5 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Icon name="simple-icons:github" class="w-5 h-5" /> Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const projects = ref([
  {
    title: 'Enterprise Payroll & ERP',
    description:
      'A comprehensive ERP architecture developed with Laravel and Vue 3. Features highly secure role-based access, automated payroll processing, and deep analytics.<br /><br /><span class="text-xs opacity-70">Note: Cold-start deployment may take ~1 min.<br />Admin Credentials: <strong>pejoal</strong> / <strong>password</strong></span>',
    live: 'https://project-manager-tvrw.onrender.com/payroll/dashboard',
    image: '/assets/erp.png',
    isNew: true,
    isSpecial: true,
  },
  {
    title: 'Modern E-Commerce Engine',
    description:
      'A scalable e-commerce platform built with Vue.js and Laravel. Engineered for high conversion with real-time cart synchronization, secure payment gateways, and a comprehensive admin inventory management panel.',
    github: 'https://github.com/Pejoal/ecommerce',
    image: '/assets/Screenshot2.png',
    isNew: true,
  },
  {
    title: 'Automated Scheduling App',
    description:
      'A streamlined appointment coordination system designed specifically for educational institutions. Reduces administrative overhead by synchronizing instructor availability with student bookings in real-time.',
    github: 'https://github.com/Pejoal/Termin',
    image: '/assets/appointments.png',
  },
  {
    title: 'Real-Time Multiplayer Hub',
    description:
      'A highly concurrent multiplayer environment utilizing Laravel, Inertia, Vue 3, and WebSockets. Features sophisticated state-management for real-time card shuffling, dealing, and responsive animations across devices.',
    github: 'https://github.com/Pejoal/Game',
    image: '/assets/game1.png',
  },
  {
    title: 'Social Connectivity Platform',
    description:
      'A fully-featured social media ecosystem. Implements real-time messaging, dynamic news feeds, and intricate relational databases to support complex friend networking and content engagement.',
    github: 'https://github.com/Pejoal/Social-Media-Platform',
    image: '/assets/social_media_logo.png',
  },
]);
</script>
