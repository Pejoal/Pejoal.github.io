<template>
  <section id="services" class="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-4">
          <Icon name="heroicons:cog-6-tooth" class="w-4 h-4" /> {{ t('services.title') }}
        </div>
        <h2 class="text-4xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white mb-6 tracking-tight">
          {{ t('services.headingMain') }}<span class="gradient-text-primary">{{ t('services.headingGradient') }}</span>
        </h2>
        <p class="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          {{ t('services.subtitle') }}
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        <!-- Service 1 -->
        <div
          class="glass-card glass-card-hover group relative rounded-[2.5rem] p-8 sm:p-10 transition-all duration-500 overflow-hidden flex flex-col justify-between"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

          <div class="relative z-10">
            <div class="w-16 h-16 bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/30 group-hover:-translate-y-2 transition-transform duration-300">
              <Icon name="heroicons:device-phone-mobile" class="w-8 h-8 text-white" />
            </div>

            <h3 class="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white mb-4 tracking-tight">{{ t('services.s1Title') }}</h3>
            <p class="text-slate-600 dark:text-slate-300 leading-relaxed font-light text-base sm:text-lg">
              {{ t('services.s1Desc') }}
            </p>
          </div>
        </div>

        <!-- Service 2 -->
        <div
          class="glass-card glass-card-hover group relative rounded-[2.5rem] p-8 sm:p-10 transition-all duration-500 overflow-hidden flex flex-col justify-between"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

          <div class="relative z-10">
            <div class="w-16 h-16 bg-linear-to-br from-purple-600 to-pink-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-purple-500/30 group-hover:-translate-y-2 transition-transform duration-300">
              <Icon name="heroicons:computer-desktop" class="w-8 h-8 text-white" />
            </div>

            <h3 class="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white mb-4 tracking-tight">{{ t('services.s2Title') }}</h3>
            <p class="text-slate-600 dark:text-slate-300 leading-relaxed font-light text-base sm:text-lg">
              {{ t('services.s2Desc') }}
            </p>
          </div>
        </div>

        <!-- Service 3 -->
        <div
          class="glass-card glass-card-hover group relative rounded-[2.5rem] p-8 sm:p-10 transition-all duration-500 overflow-hidden flex flex-col justify-between"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div class="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

          <div class="relative z-10">
            <div class="w-16 h-16 bg-linear-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-emerald-500/30 group-hover:-translate-y-2 transition-transform duration-300">
              <Icon name="heroicons:arrow-path-rounded-square" class="w-8 h-8 text-white" />
            </div>

            <h3 class="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white mb-4 tracking-tight">{{ t('services.s3Title') }}</h3>
            <p class="text-slate-600 dark:text-slate-300 leading-relaxed font-light text-base sm:text-lg">
              {{ t('services.s3Desc') }}
            </p>
          </div>
        </div>

        <!-- Service 4 -->
        <div
          class="glass-card glass-card-hover group relative rounded-[2.5rem] p-8 sm:p-10 transition-all duration-500 overflow-hidden flex flex-col justify-between"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div class="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

          <div class="relative z-10">
            <div class="w-16 h-16 bg-linear-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-amber-500/30 group-hover:-translate-y-2 transition-transform duration-300">
              <Icon name="heroicons:cpu-chip" class="w-8 h-8 text-white" />
            </div>

            <h3 class="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white mb-4 tracking-tight">{{ t('services.s4Title') }}</h3>
            <p class="text-slate-600 dark:text-slate-300 leading-relaxed font-light text-base sm:text-lg">
              {{ t('services.s4Desc') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n();
</script>
