<template>
  <section id="about" class="relative pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
          <Icon name="heroicons:sparkles" class="w-4 h-4" /> {{ t('about.title') }}
        </div>
        <h2 class="text-4xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white mb-6 tracking-tight">
          {{ t('about.headingMain') }}<span class="gradient-text-primary">{{ t('about.headingGradient') }}</span>
        </h2>
        <p class="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
          {{ t('about.subtitle') }}
        </p>
      </div>

      <!-- Grid Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        <!-- Card 1: Mobile Development -->
        <div
          class="glass-card glass-card-hover relative group text-center p-8 rounded-3xl overflow-hidden flex flex-col items-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <!-- Accent Top Glow Border -->
          <div class="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-blue-500 to-cyan-500 opacity-80 group-hover:h-2 transition-all"></div>
          
          <div class="w-20 h-20 bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
            <Icon name="heroicons:device-phone-mobile" class="w-10 h-10 text-white" />
          </div>
          <h3 class="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-3">{{ t('about.card1Title') }}</h3>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed font-light text-sm sm:text-base">
            {{ t('about.card1Desc') }}
          </p>
        </div>

        <!-- Card 2: Language Learning -->
        <div
          class="glass-card glass-card-hover relative group text-center p-8 rounded-3xl overflow-hidden flex flex-col items-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <!-- Accent Top Glow Border -->
          <div class="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-purple-500 to-pink-500 opacity-80 group-hover:h-2 transition-all"></div>
          
          <div class="w-20 h-20 bg-linear-to-br from-purple-500 to-fuchsia-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
            <Icon name="heroicons:language" class="w-10 h-10 text-white" />
          </div>
          <h3 class="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-3">{{ t('about.card2Title') }}</h3>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed font-light text-sm sm:text-base">
            {{ t('about.card2Desc') }}
          </p>
        </div>

        <!-- Card 3: Utilities, Quizzes & Games -->
        <div
          class="glass-card glass-card-hover relative group text-center p-8 rounded-3xl overflow-hidden flex flex-col items-center"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <!-- Accent Top Glow Border -->
          <div class="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-emerald-500 to-teal-500 opacity-80 group-hover:h-2 transition-all"></div>
          
          <div class="w-20 h-20 bg-linear-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
            <Icon name="heroicons:puzzle-piece" class="w-10 h-10 text-white" />
          </div>
          <h3 class="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-3">{{ t('about.card3Title') }}</h3>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed font-light text-sm sm:text-base">
            {{ t('about.card3Desc') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n();
</script>
