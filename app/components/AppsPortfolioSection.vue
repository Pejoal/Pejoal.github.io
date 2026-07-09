<template>
  <section id="apps" class="py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 mb-6 tracking-tight">Global Mobile Portfolio</h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
          An extensive showcase of published, high-impact mobile applications serving thousands of users worldwide.
        </p>
      </div>

      <!-- German Learning Apps -->
      <AppSection
        title="German Learning Apps"
        description="Comprehensive German language learning suite from A1 to C2 level"
        :apps="germanApps"
        color="blue"
        @open-modal="handleOpenModal"
      />

      <!-- English Learning Apps -->
      <AppSection
        title="English Learning Apps"
        description="Master English with our interactive learning platform"
        :apps="englishApps"
        color="indigo"
        @open-modal="handleOpenModal"
      />

      <!-- Spanish Learning Apps -->
      <AppSection
        title="Spanish Learning Apps"
        description="Learn Spanish effectively with our comprehensive course"
        :apps="spanishApps"
        color="red"
        @open-modal="handleOpenModal"
      />

      <AppSection
        title="French Learning Apps"
        description="Comprehensive French language learning suite from A1 to C2 level"
        :apps="frenchApps"
        color="yellow"
        @open-modal="handleOpenModal"
      />

      <!-- Italian Learning Apps -->
      <AppSection
        title="Italian Learning Apps"
        description="Discover the beauty of Italian language through interactive lessons"
        :apps="italianApps"
        color="green"
        @open-modal="handleOpenModal"
      />

      <!-- Arabic Learning Apps -->
      <AppSection
        title="Arabic Learning Apps"
        description="Discover the beauty of Arabic language through interactive lessons"
        :apps="arabicApps"
        color="orange"
        @open-modal="handleOpenModal"
      />

      <!-- Other Language Apps -->
      <AppSection
        title="Other Languages"
        description="Explore Russian and more languages"
        :apps="otherLanguageApps"
        color="purple"
        @open-modal="handleOpenModal"
      />

      <!-- Utility Apps -->
      <AppSection
        title="Utility Apps"
        description="Powerful tools for productivity and daily tasks"
        :apps="utilityApps"
        color="emerald"
        @open-modal="handleOpenModal"
      />

      <!-- Test & Assessment Apps -->
      <AppSection
        title="Tests & Assessments"
        description="Challenge yourself with IQ tests, personality assessments, and trivia"
        :apps="testApps"
        color="violet"
        @open-modal="handleOpenModal"
      />

      <!-- Games -->
      <AppSection
        title="Games"
        description="Fun and engaging puzzle games for entertainment"
        :apps="gameApps"
        color="pink"
        @open-modal="handleOpenModal"
      />

      <!-- Programming Apps -->
      <AppSection
        title="Programming"
        description="Learn programming languages and concepts with interactive tutorials"
        :apps="programmingApps"
        color="blue"
        @open-modal="handleOpenModal"
      />
    </div>

    <!-- App Detail Modal -->
    <AppDetailModal
      :is-open="isModalOpen"
      :app="selectedApp"
      @close="isModalOpen = false"
    />
  </section>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  germanApps: Array,
  frenchApps: Array,
  englishApps: Array,
  spanishApps: Array,
  italianApps: Array,
  arabicApps: Array,
  otherLanguageApps: Array,
  utilityApps: Array,
  testApps: Array,
  gameApps: Array,
  programmingApps: Array,
});

const isModalOpen = ref(false);
const selectedApp = ref(null);

const handleOpenModal = (app) => {
  selectedApp.value = app;
  isModalOpen.value = true;
};
</script>
