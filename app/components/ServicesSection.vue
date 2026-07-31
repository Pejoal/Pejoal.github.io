<template>
  <section id="services" class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-20" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 mb-6 tracking-tight">{{ t('services.title') }}</h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
          {{ t('services.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <!-- Service 1 -->
        <div
          class="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-[2rem] p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="absolute inset-0 bg-linear-to-br from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
          <div class="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-500/30 group-hover:scale-150 transition-all duration-700"></div>

          <div class="relative z-10">
            <div class="w-16 h-16 bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:-translate-y-2 transition-transform duration-300">
              <Icon name="heroicons:device-phone-mobile" class="w-8 h-8 text-white" />
            </div>

            <h3 class="text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">{{ t('services.s1Title') }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-light text-lg">
              {{ t('services.s1Desc') }}
            </p>
          </div>
        </div>

        <!-- Service 2 -->
        <div
          class="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-[2rem] p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="absolute inset-0 bg-linear-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
          <div class="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl group-hover:bg-purple-500/30 group-hover:scale-150 transition-all duration-700"></div>

          <div class="relative z-10">
            <div class="w-16 h-16 bg-linear-to-br from-purple-600 to-pink-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:-translate-y-2 transition-transform duration-300">
              <Icon name="heroicons:computer-desktop" class="w-8 h-8 text-white" />
            </div>

            <h3 class="text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">{{ t('services.s2Title') }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-light text-lg">
              {{ t('services.s2Desc') }}
            </p>
          </div>
        </div>

        <!-- Service 3 -->
        <div
          class="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-[2rem] p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div class="absolute inset-0 bg-linear-to-br from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
          <div class="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl group-hover:bg-emerald-500/30 group-hover:scale-150 transition-all duration-700"></div>

          <div class="relative z-10">
            <div class="w-16 h-16 bg-linear-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:-translate-y-2 transition-transform duration-300">
              <Icon name="heroicons:arrow-path-rounded-square" class="w-8 h-8 text-white" />
            </div>

            <h3 class="text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">{{ t('services.s3Title') }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-light text-lg">
              {{ t('services.s3Desc') }}
            </p>
          </div>
        </div>

        <!-- Service 4 -->
        <div
          class="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-[2rem] p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div class="absolute inset-0 bg-linear-to-br from-amber-500 to-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
          <div class="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl group-hover:bg-amber-500/30 group-hover:scale-150 transition-all duration-700"></div>

          <div class="relative z-10">
            <div class="w-16 h-16 bg-linear-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:-translate-y-2 transition-transform duration-300">
              <Icon name="heroicons:cpu-chip" class="w-8 h-8 text-white" />
            </div>

            <h3 class="text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">{{ t('services.s4Title') }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-light text-lg">
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
