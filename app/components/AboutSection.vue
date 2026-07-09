<template>
  <section id="about" class="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
        <h2 class="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 mb-6 tracking-tight">Engineering with Purpose</h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed" data-aos="fade-up" data-aos-delay="200">
          I am driven by the intersection of sophisticated design and robust architecture. My core focus lies in architecting intuitive mobile ecosystems—particularly immersive educational platforms—while also engineering high-utility tools and interactive digital experiences.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        <!-- Background Ambient Glows -->
        <div class="absolute -top-10 -left-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-10 -right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <!-- Card 1: Mobile Development -->
        <div
          class="relative group text-center p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 z-10"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div class="absolute inset-0 rounded-3xl bg-linear-to-b from-blue-50/50 to-transparent dark:from-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="w-20 h-20 bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <Icon name="heroicons:device-phone-mobile" class="w-10 h-10 text-white" />
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">Mobile Architecture</h3>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed relative z-10">
            Expertly crafted native and cross-platform applications, optimized for performance, scalability, and seamless user interaction.
          </p>
        </div>

        <!-- Card 2: Language Learning -->
        <div
          class="relative group text-center p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 z-10"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div class="absolute inset-0 rounded-3xl bg-linear-to-b from-purple-50/50 to-transparent dark:from-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="w-20 h-20 bg-linear-to-br from-purple-500 to-fuchsia-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <Icon name="heroicons:language" class="w-10 h-10 text-white" />
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">EdTech Platforms</h3>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed relative z-10">
            Specialized in engineering immersive, comprehensive learning ecosystems that drive user retention and knowledge acquisition.
          </p>
        </div>

        <!-- Card 3: Utilities, Quizzes & Games -->
        <div
          class="relative group text-center p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 z-10"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div class="absolute inset-0 rounded-3xl bg-linear-to-b from-emerald-50/50 to-transparent dark:from-emerald-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="w-20 h-20 bg-linear-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <Icon name="heroicons:puzzle-piece" class="w-10 h-10 text-white" />
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">Interactive Utilities</h3>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed relative z-10">
            Developing sophisticated daily utility tools and engaging interactive experiences tailored to complex user needs.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No props needed for this standalone section
</script>

<style scoped>
.group:hover {
  transform: translateY(-8px);
}
</style>
