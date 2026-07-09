<template>
  <section id="home" class="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="text-center">
        <div
          class="relative w-32 h-32 mx-auto mb-10 flex items-center justify-center"
          data-aos="zoom-in"
        >
          <div class="absolute inset-0 bg-linear-to-br from-blue-600 to-indigo-600 rounded-full blur-xl opacity-40 animate-pulse"></div>
          <div class="relative w-full h-full bg-linear-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl border border-white/10 dark:border-white/5">
            <span class="text-white font-bold text-5xl tracking-tight">PH</span>
          </div>
        </div>

        <h1 
          class="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight leading-[1.1]"
          data-aos="fade-up" 
          data-aos-delay="100"
        >
          Crafting Exceptional<br class="hidden sm:block" />
          <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-500 to-indigo-600">
            Digital Experiences
          </span>
        </h1>

        <p 
          class="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          I am <span class="font-semibold text-gray-900 dark:text-white">Pejoal Hanna</span>, a Senior Full-Stack Engineer specializing in scalable web systems and high-performance cross-platform mobile applications. I transform complex requirements into elegant, user-centric solutions.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16" data-aos="fade-up" data-aos-delay="300">
          <a
            href="https://apps.apple.com/developer/pejoal-hanna/id1848573493"
            target="_blank"
            class="relative group w-full sm:w-auto px-8 py-4 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div class="absolute inset-0 bg-linear-to-b from-gray-800 to-black dark:from-gray-700 dark:to-gray-900 transition-transform duration-300 group-hover:scale-105"></div>
            <div class="absolute inset-0 opacity-0 group-hover:opacity-20 bg-linear-to-r from-blue-400 to-purple-400 blur-xl transition-opacity duration-300"></div>
            <div class="relative flex items-center justify-center gap-3 text-white">
              <Icon name="simple-icons:apple" class="w-7 h-7" />
              <div class="text-left">
                <div class="text-[10px] uppercase font-medium tracking-wider opacity-80 mb-0.5">Download on the</div>
                <div class="font-bold text-lg leading-none">App Store</div>
              </div>
            </div>
          </a>

          <a
            href="https://play.google.com/store/apps/dev?id=8062598971207894089"
            target="_blank"
            class="relative group w-full sm:w-auto px-8 py-4 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div class="absolute inset-0 bg-linear-to-b from-emerald-600 to-teal-800 transition-transform duration-300 group-hover:scale-105"></div>
            <div class="absolute inset-0 opacity-0 group-hover:opacity-30 bg-linear-to-r from-emerald-300 to-cyan-300 blur-xl transition-opacity duration-300"></div>
            <div class="relative flex items-center justify-center gap-3 text-white">
              <Icon name="simple-icons:googleplay" class="w-6 h-6" />
              <div class="text-left">
                <div class="text-[10px] uppercase font-medium tracking-wider opacity-90 mb-0.5">GET IT ON</div>
                <div class="font-bold text-lg leading-none tracking-wide">Google Play</div>
              </div>
            </div>
          </a>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto pt-8 border-t border-gray-200 dark:border-gray-800" data-aos="fade-up" data-aos-delay="400">
          <div class="text-center group">
            <div class="text-4xl font-black text-transparent bg-clip-text bg-linear-to-br from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 mb-1 group-hover:scale-110 transition-transform">{{ totalApps }}+</div>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest">Published Apps</div>
          </div>
          <div class="text-center group">
            <div class="text-4xl font-black text-transparent bg-clip-text bg-linear-to-br from-blue-600 to-indigo-500 mb-1 group-hover:scale-110 transition-transform">{{ totalDownloads }}</div>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest">Global Downloads</div>
          </div>
          <div class="text-center group">
            <div class="flex items-center justify-center gap-1 text-4xl font-black text-transparent bg-clip-text bg-linear-to-br from-yellow-500 to-orange-400 mb-1 group-hover:scale-110 transition-transform">
              {{ averageRating }} <Icon name="heroicons:star-solid" class="w-8 h-8 text-yellow-400" />
            </div>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest">Average Rating</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import appsData from '~/app/data/appsData.json';

const totalApps = computed(() => {
  let count = 0;
  Object.values(appsData).forEach(category => {
    count += category.length;
  });
  return count;
});

const totalDownloads = computed(() => {
  let count = 0;
  Object.values(appsData).forEach(category => {
    category.forEach(app => {
      if (app.playStoreData?.maxInstalls) count += app.playStoreData.maxInstalls;
    });
  });
  
  if (count >= 1000000) return (count / 1000000).toFixed(1).replace(/\.0$/, '') + 'M+';
  if (count >= 1000) return (count / 1000).toFixed(1).replace(/\.0$/, '') + 'K+';
  return count + '+';
});

const averageRating = computed(() => {
  let totalScore = 0;
  let scoreCount = 0;
  
  Object.values(appsData).forEach(category => {
    category.forEach(app => {
      const score = app.appStoreData?.score || app.playStoreData?.score;
      if (score && score > 0) {
        totalScore += Number(score);
        scoreCount++;
      }
    });
  });
  
  return scoreCount > 0 ? (totalScore / scoreCount).toFixed(1) : '0.0';
});
</script>
