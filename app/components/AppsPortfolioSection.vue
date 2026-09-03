<template>
  <section id="apps" class="relative pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-12" data-aos="fade-up">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
          <Icon name="heroicons:squares-2x2" class="w-4 h-4" /> {{ t('apps.badge') }}
        </div>
        <h2 class="text-4xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white mb-6 tracking-tight">
          {{ t('apps.headingMain') }}<span class="gradient-text-primary">{{ t('apps.headingGradient') }}</span>
        </h2>
        <p class="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-light leading-relaxed mb-8">
          {{ t('apps.subtitle') }}
        </p>

        <!-- Search and Sort Controls Bar -->
        <div class="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto mb-8">
          <!-- Search Input -->
          <div class="relative flex-1">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <Icon name="heroicons:magnifying-glass" class="w-5 h-5" />
            </div>
            <input 
              v-model="searchQuery" 
              type="text" 
              class="block w-full pl-11 pr-10 py-3.5 rounded-2xl glass-card text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all outline-none text-sm sm:text-base" 
              :placeholder="t('apps.searchPlaceholder')" 
            />
            <button 
              v-if="searchQuery" 
              @click="searchQuery = ''" 
              class="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-white"
            >
              <Icon name="heroicons:x-mark" class="w-5 h-5" />
            </button>
          </div>

          <!-- Sort Select Dropdown -->
          <div class="relative w-full md:w-56 shrink-0">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <Icon name="heroicons:arrows-up-down" class="w-5 h-5" />
            </div>
            <select 
              v-model="sortOrder"
              class="block w-full pl-11 pr-10 py-3.5 rounded-2xl glass-card text-slate-900 dark:text-white transition-all outline-none appearance-none cursor-pointer text-sm font-semibold focus:ring-2 focus:ring-blue-500/50"
            >
              <option value="relevance" class="bg-slate-900 text-white">{{ t('apps.relevance') }}</option>
              <option value="installs" class="bg-slate-900 text-white">{{ t('apps.installs') }}</option>
              <option value="rating" class="bg-slate-900 text-white">{{ t('apps.rating') }}</option>
              <option value="released" class="bg-slate-900 text-white">{{ t('apps.released') }}</option>
              <option value="updated" class="bg-slate-900 text-white">{{ t('apps.updated') }}</option>
            </select>
            <div class="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400">
              <Icon name="heroicons:chevron-down" class="w-4 h-4" />
            </div>
          </div>

          <!-- Ad Free Toggle Button -->
          <button 
            @click="filterNoAds = !filterNoAds"
            :class="[
              'cursor-pointer shrink-0 px-5 py-3.5 rounded-2xl font-bold transition-all duration-300 shadow-xs flex items-center justify-center gap-2 text-sm border', 
              filterNoAds 
                ? 'bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-600/30' 
                : 'glass-card text-slate-600 dark:text-slate-300 hover:border-emerald-500/50'
            ]"
          >
            <Icon name="heroicons:shield-check" class="w-5 h-5" />
            {{ t('apps.adFreeOnly') }}
          </button>
        </div>

        <!-- Filter Category Pills -->
        <div class="flex flex-wrap justify-center gap-2.5 pb-2">
          <button
            v-for="cat in categories"
            :key="cat.id"
            @click="activeCategory = cat.id"
            :class="[
              'cursor-pointer px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 shadow-xs flex items-center gap-1.5 border',
              activeCategory === cat.id 
                ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/30 scale-105' 
                : 'glass-card text-slate-600 dark:text-slate-300 hover:border-blue-400/50'
            ]"
          >
            <span>{{ cat.name }}</span>
            <span 
              :class="[
                'px-1.5 py-0.5 rounded-full text-[10px] font-extrabold',
                activeCategory === cat.id ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
              ]"
            >
              {{ cat.id === 'All' ? allApps.length : cat.apps.length }}
            </span>
          </button>
        </div>

        <!-- Active Filter Summary Count -->
        <div class="mt-4 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          {{ t('apps.showingApps', { count: filteredApps.length }) }}
        </div>
      </div>

      <!-- App Grid -->
      <transition-group name="list" tag="div" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative min-h-[400px]">
        <AppCard
          v-for="(app, idx) in filteredApps"
          :key="app.id || app.iosId || app.title || `app-card-${idx}`"
          :app="app"
          :index="idx + 1"
          :color="app.color"
          @open-modal="handleOpenModal"
        />
      </transition-group>

      <!-- Empty State -->
      <div v-if="filteredApps.length === 0" class="glass-card text-center py-16 px-6 rounded-3xl max-w-lg mx-auto my-10">
        <Icon name="heroicons:magnifying-glass" class="w-16 h-16 text-slate-400 mx-auto mb-4 animate-bounce" />
        <h3 class="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-2">{{ t('apps.noAppsFound') }}</h3>
        <p class="text-slate-500 dark:text-slate-400 text-sm mb-6">Try adjusting your search keywords or active category filters.</p>
        <button 
          @click="searchQuery = ''; activeCategory = 'All'; filterNoAds = false" 
          class="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-600/30"
        >
          {{ t('apps.clearFilters') }}
        </button>
      </div>
    </div>

    <!-- App Detail Modal -->
    <AppDetailModal
      :is-open="isModalOpen"
      :app="selectedApp"
      @close="handleCloseModal"
    />
  </section>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const { t } = useI18n();

const props = defineProps({
  aiApps: Array,
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

const route = useRoute();
const router = useRouter();

const isModalOpen = ref(false);
const selectedApp = ref(null);

const handleOpenModal = (app) => {
  selectedApp.value = app;
  isModalOpen.value = true;
  if (route.query.app !== app.id && route.query.id !== app.id && route.query.appId !== app.id) {
    router.replace({ query: { ...route.query, app: app.id } });
  }
};

const handleCloseModal = () => {
  isModalOpen.value = false;
  if (route.query.app || route.query.id || route.query.appId) {
    const newQuery = { ...route.query };
    delete newQuery.app;
    delete newQuery.id;
    delete newQuery.appId;
    router.replace({ query: newQuery });
  }
};

const searchQuery = ref('');
const activeCategory = ref('All');
const filterNoAds = ref(false);
const sortOrder = ref('installs');

const categories = computed(() => {
  return [
    { id: 'All', name: t('apps.allApps'), color: 'blue' },
    { id: 'AI', name: 'AI Apps', apps: props.aiApps || [], color: 'purple' },
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
  const seen = new Set();
  const all = [];
  categories.value.forEach(cat => {
    if (cat.id !== 'All') {
      cat.apps.forEach((app, appIdx) => {
        const appId = app.id || app.iosId || app.title || `app-${cat.id}-${appIdx}`;
        if (!seen.has(appId)) {
          seen.add(appId);
          all.push({
            ...app,
            id: appId,
            category: cat.id,
            color: cat.color,
          });
        }
      });
    }
  });
  return all;
});

const checkUrlParam = () => {
  const targetId = String(route.query.app || route.query.id || route.query.appId || '').toLowerCase().trim();
  if (targetId && allApps.value.length > 0) {
    const found = allApps.value.find(app => 
      app.id.toLowerCase() === targetId || 
      (app.iosId && app.iosId.toLowerCase() === targetId) ||
      app.id.toLowerCase().replace(/\.chat$/, '') === targetId ||
      targetId.includes(app.id.toLowerCase())
    );
    if (found) {
      selectedApp.value = found;
      isModalOpen.value = true;
    }
  }
};

onMounted(() => {
  checkUrlParam();
});

watch(
  () => [route.query.app, route.query.id, route.query.appId],
  () => {
    checkUrlParam();
  }
);

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

  if (filterNoAds.value) {
    result = result.filter(app => {
      if (app.playStoreData && typeof app.playStoreData.adSupported === 'boolean') {
        return !app.playStoreData.adSupported;
      }
      return true;
    });
  }

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
  } else if (sortOrder.value === 'released') {
    result.sort((a, b) => {
      const getReleaseDate = (app) => {
        if (app.playStoreData?.released) return new Date(app.playStoreData.released).getTime();
        return 0;
      };
      return getReleaseDate(b) - getReleaseDate(a);
    });
  } else if (sortOrder.value === 'updated') {
    result.sort((a, b) => {
      const getTimestamp = (app) => {
        const pDate = app.playStoreData?.updated ? new Date(app.playStoreData.updated).getTime() : 0;
        const aDate = app.appStoreData?.updated ? new Date(app.appStoreData.updated).getTime() : 0;
        return Math.max(pDate, aDate);
      };
      return getTimestamp(b) - getTimestamp(a);
    });
  }
  
  return result;
});
</script>

<style scoped>
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
