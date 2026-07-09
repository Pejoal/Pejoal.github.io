<template>
  <section id="apps" class="py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-10" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 mb-6 tracking-tight">Global Mobile Portfolio</h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-8">
          An extensive showcase of published, high-impact mobile applications serving thousands of users worldwide.
        </p>

        <!-- Search and Sort Bar -->
        <div class="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto mb-10">
          <div class="relative flex-1">
            <div class="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <Icon name="heroicons:magnifying-glass" class="w-6 h-6 text-gray-400" />
            </div>
            <input 
              v-model="searchQuery" 
              type="text" 
              class="block w-full pl-14 pr-4 py-4 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white transition-all outline-none" 
              placeholder="Search for apps, categories, or keywords..." 
            />
          </div>
          <div class="relative w-full md:w-56 shrink-0">
            <div class="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <Icon name="heroicons:arrows-up-down" class="w-5 h-5 text-gray-400" />
            </div>
            <select 
              v-model="sortOrder"
              class="block w-full pl-12 pr-10 py-4 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white transition-all outline-none appearance-none cursor-pointer text-sm font-medium"
            >
              <option value="relevance">Default (Relevance)</option>
              <option value="installs">Most Installs</option>
              <option value="rating">Highest Rated</option>
              <option value="updated">Recently Updated</option>
            </select>
            <div class="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none">
              <Icon name="heroicons:chevron-down" class="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>

        <!-- Filter Pills -->
        <div class="flex flex-wrap justify-center gap-3 pb-4">
          <button
            v-for="cat in categories"
            :key="cat.id"
            @click="activeCategory = cat.id"
            :class="[
              'px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-xs hover:shadow-md border',
              activeCategory === cat.id 
                ? 'bg-blue-600 text-white border-blue-600 dark:border-blue-500' 
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-gray-500'
            ]"
          >
            {{ cat.name }} <span v-if="cat.id !== 'All'" class="ml-1 opacity-70 text-xs">({{ cat.apps.length }})</span>
          </button>
        </div>
      </div>

      <!-- App Grid -->
      <transition-group name="list" tag="div" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative min-h-[400px]">
        <AppCard
          v-for="app in filteredApps"
          :key="app.id"
          :app="app"
          :color="app.color"
          @open-modal="handleOpenModal"
        />
      </transition-group>

      <!-- Empty State -->
      <div v-if="filteredApps.length === 0" class="text-center py-20">
        <Icon name="heroicons:magnifying-glass" class="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">No apps found</h3>
        <p class="text-gray-500 dark:text-gray-400">Try adjusting your search query or select a different category.</p>
        <button @click="searchQuery = ''; activeCategory = 'All'" class="mt-6 px-6 py-2.5 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition">Clear Filters</button>
      </div>
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
import { ref, computed } from 'vue';

const props = defineProps({
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

// Search and Filter State
const searchQuery = ref('');
const activeCategory = ref('All');
const sortOrder = ref('relevance');

const categories = computed(() => {
  return [
    { id: 'All', name: 'All Apps', color: 'blue' },
    { id: 'German', name: 'German', apps: props.germanApps || [], color: 'blue' },
    { id: 'English', name: 'English', apps: props.englishApps || [], color: 'indigo' },
    { id: 'Spanish', name: 'Spanish', apps: props.spanishApps || [], color: 'red' },
    { id: 'French', name: 'French', apps: props.frenchApps || [], color: 'yellow' },
    { id: 'Italian', name: 'Italian', apps: props.italianApps || [], color: 'green' },
    { id: 'Arabic', name: 'Arabic', apps: props.arabicApps || [], color: 'orange' },
    { id: 'Other', name: 'Other Languages', apps: props.otherLanguageApps || [], color: 'purple' },
    { id: 'Utility', name: 'Utilities', apps: props.utilityApps || [], color: 'emerald' },
    { id: 'Test', name: 'Assessments', apps: props.testApps || [], color: 'violet' },
    { id: 'Games', name: 'Games', apps: props.gameApps || [], color: 'pink' },
    { id: 'Programming', name: 'Programming', apps: props.programmingApps || [], color: 'blue' },
  ].filter(c => c.id === 'All' || c.apps.length > 0);
});

const allApps = computed(() => {
  const all = [];
  categories.value.forEach(cat => {
    if (cat.id !== 'All') {
      cat.apps.forEach(app => {
        all.push({ ...app, category: cat.id, color: cat.color });
      });
    }
  });
  return all;
});

const filteredApps = computed(() => {
  let result = [...allApps.value];
  
  if (activeCategory.value !== 'All') {
    result = result.filter(app => app.category === activeCategory.value);
  }
  
  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase();
    result = result.filter(app => 
      (app.title && app.title.toLowerCase().includes(q)) || 
      (app.description && app.description.toLowerCase().includes(q))
    );
  }

  // Sorting Logic
  if (sortOrder.value === 'installs') {
    result.sort((a, b) => {
      const aInstalls = a.playStoreData?.maxInstalls || 0;
      const bInstalls = b.playStoreData?.maxInstalls || 0;
      return bInstalls - aInstalls;
    });
  } else if (sortOrder.value === 'rating') {
    result.sort((a, b) => {
      const aScore = a.appStoreData?.score || a.playStoreData?.score || 0;
      const bScore = b.appStoreData?.score || b.playStoreData?.score || 0;
      return bScore - aScore;
    });
  } else if (sortOrder.value === 'updated') {
    result.sort((a, b) => {
      const getTimestamp = (app) => {
        if (app.playStoreData?.updated) return new Date(app.playStoreData.updated).getTime();
        if (app.appStoreData?.updated) return new Date(app.appStoreData.updated).getTime();
        return 0;
      };
      return getTimestamp(b) - getTimestamp(a);
    });
  }
  
  return result;
});
</script>

<style scoped>
/* App Grid Transitions */
.list-enter-active,
.list-leave-active,
.list-move {
  transition: all 0.4s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}
.list-leave-active {
  position: absolute;
  z-index: -1;
  visibility: hidden;
}
</style>
