<!-- components/AppDetailModal.vue -->
<template>
  <ClientOnly>
    <transition name="fade">
      <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" @click.self="close">
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" @click="close"></div>
        
        <transition name="scale">
          <div 
            v-if="isOpen"
            class="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col transform transition-all"
            role="dialog" 
            aria-modal="true"
          >
            <!-- Header / Hero Section -->
            <div class="relative shrink-0 border-b border-gray-100 dark:border-gray-800">
              <button 
                @click="close"
                class="absolute cursor-pointer top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100/80 dark:bg-gray-800/80 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                <Icon name="heroicons:x-mark" class="w-6 h-6" />
              </button>
              
              <div class="p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center bg-linear-to-r from-blue-50/50 to-indigo-50/50 dark:from-blue-900/10 dark:to-indigo-900/10">
                <div class="w-24 h-24 sm:w-32 sm:h-32 shrink-0 rounded-3xl overflow-hidden shadow-lg border border-gray-200/50 dark:border-gray-700/50 bg-white dark:bg-gray-800">
                  <img v-if="isUrl(app.icon)" :src="app.icon" :alt="app.title" class="w-full h-full object-cover" referrerpolicy="no-referrer" />
                  <span v-else class="w-full h-full flex items-center justify-center text-5xl">{{ app.icon }}</span>
                </div>
                
                <div class="flex-1 space-y-3">
                  <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{{ app.title }}</h2>
                  <p class="text-lg text-gray-600 dark:text-gray-300">{{ app.description }}</p>
                  
                  <div class="flex flex-wrap items-center gap-3 pt-2">
                    <span v-if="rating" class="flex items-center gap-1.5 px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-full text-sm font-semibold">
                      <Icon name="heroicons:star-solid" class="w-4 h-4" />
                      {{ rating }}
                    </span>
                    <span v-if="downloads" class="flex items-center gap-1.5 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium">
                      <Icon name="heroicons:arrow-down-tray" class="w-4 h-4" />
                      {{ downloads }}
                    </span>
                    <span v-if="version" class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-sm font-medium">
                      v{{ version }}
                    </span>
                    <span v-if="size" class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-sm font-medium">
                      {{ size }}
                    </span>
                    <span v-if="updatedDate" class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-sm font-medium">
                      Updated {{ updatedDate }}
                    </span>
                  </div>
                </div>
                
                <!-- Badges -->
                <div class="flex flex-row sm:flex-col gap-3 shrink-0 mt-4 sm:mt-0 w-full sm:w-auto">
                   <a
                    v-if="app.iosId"
                    :href="`https://apps.apple.com/app/id${app.iosId.match(/id(\d+)/) ? app.iosId.match(/id(\d+)/)[1] : app.iosId}`"
                    target="_blank"
                    class="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl hover:scale-105 transition shadow-md"
                  >
                    <Icon name="simple-icons:apple" class="w-6 h-6" />
                    <div class="flex flex-col items-start leading-none">
                      <span class="text-[10px] uppercase font-medium opacity-80">Download on the</span>
                      <span class="font-bold">App Store</span>
                    </div>
                  </a>
                  <a
                    v-if="app.id"
                    :href="`https://play.google.com/store/apps/details?id=com.pejoal.${app.id}`"
                    target="_blank"
                    class="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-[#01875F] text-white rounded-xl hover:scale-105 transition shadow-md"
                  >
                    <Icon name="simple-icons:googleplay" class="w-5 h-5" />
                    <div class="flex flex-col items-start leading-none">
                      <span class="text-[10px] uppercase font-medium opacity-90">GET IT ON</span>
                      <span class="font-bold tracking-wide">Google Play</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            
            <!-- Content Scroll Area -->
            <div class="flex-1 overflow-y-auto p-6 sm:p-8 custom-scrollbar">
              <!-- Feature Graphic -->
              <div v-if="featureGraphic" class="mb-10 rounded-2xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 relative">
                <img 
                  :src="featureGraphic" 
                  alt="Feature Graphic" 
                  class="w-full h-auto aspect-[1024/500] object-cover"
                  referrerpolicy="no-referrer"
                />
              </div>

              <!-- Screenshots -->
              <div v-if="screenshots && screenshots.length > 0" class="mb-10">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Icon name="heroicons:photo" class="w-6 h-6 text-blue-500" />
                  Screenshots
                </h3>
                <div class="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory custom-scrollbar hide-scrollbar-touch">
                  <img 
                    v-for="(img, idx) in screenshots" 
                    :key="idx" 
                    :src="img" 
                    alt="Screenshot" 
                    class="h-64 sm:h-80 object-cover rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xs snap-center shrink-0"
                    referrerpolicy="no-referrer"
                  />
                </div>
              </div>
    
              <!-- Description -->
              <div v-if="longDescription" class="mb-10">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Icon name="heroicons:information-circle" class="w-6 h-6 text-blue-500" />
                  About this app
                </h3>
                <div 
                  class="prose prose-blue dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base whitespace-pre-wrap"
                  v-html="longDescription"
                ></div>
              </div>
              
              <!-- Recent Changes -->
              <div v-if="recentChanges" class="mb-6">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Icon name="heroicons:sparkles" class="w-6 h-6 text-blue-500" />
                  What's New
                </h3>
                <div class="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-800">
                  <p class="text-gray-600 dark:text-gray-300 text-sm whitespace-pre-wrap">{{ recentChanges }}</p>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </ClientOnly>
</template>

<script setup>
import { computed, watch, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  isOpen: Boolean,
  app: Object,
});

const emit = defineEmits(['close']);

const close = () => {
  emit('close');
};

const isUrl = (str) => {
  if (!str) return false;
  return str.startsWith('http') || str.startsWith('/') || str.startsWith('assets');
};

// Computed properties for the merged store data
const playData = computed(() => props.app?.playStoreData);
const appStoreData = computed(() => props.app?.appStoreData);

const screenshots = computed(() => {
  if (appStoreData.value?.screenshots?.length) return appStoreData.value.screenshots;
  if (playData.value?.screenshots?.length) return playData.value.screenshots;
  return [];
});

const featureGraphic = computed(() => {
  if (playData.value?.headerImage) return playData.value.headerImage;
  return null;
});

const longDescription = computed(() => {
  if (playData.value?.descriptionHTML) return playData.value.descriptionHTML;
  if (appStoreData.value?.description) return appStoreData.value.description;
  return props.app?.description;
});

const rating = computed(() => {
  if (appStoreData.value?.score) return Number(appStoreData.value.score).toFixed(1);
  if (playData.value?.scoreText) return playData.value.scoreText;
  return null;
});

const version = computed(() => {
  if (appStoreData.value?.version) return appStoreData.value.version;
  if (playData.value?.version) return playData.value.version;
  return null;
});

const size = computed(() => {
  if (appStoreData.value?.size) return appStoreData.value.size;
  if (playData.value?.size) return playData.value.size;
  return null;
});

const downloads = computed(() => {
  if (playData.value?.installs) return playData.value.installs;
  return null;
});

const updatedDate = computed(() => {
  const timestamp = appStoreData.value?.updated || playData.value?.updated;
  if (!timestamp) return null;
  const date = new Date(timestamp);
  return isNaN(date.getTime()) ? null : date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
});

const recentChanges = computed(() => {
  if (appStoreData.value?.recentChanges) return appStoreData.value.recentChanges;
  if (playData.value?.recentChanges) return playData.value.recentChanges;
  return null;
});

// Prevent background scrolling when modal is open
watch(() => props.isOpen, (newVal) => {
  if (process.client) {
    if (newVal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
});

// Close on escape key
const handleKeydown = (e) => {
  if (e.key === 'Escape' && props.isOpen) {
    close();
  }
};

onMounted(() => {
  if (process.client) {
    window.addEventListener('keydown', handleKeydown);
  }
});

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('keydown', handleKeydown);
    document.body.style.overflow = '';
  }
});
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 10px;
}
.dark .custom-scrollbar::-webkit-scrollbar-thumb {
  background: #334155;
}

@media (hover: none) and (pointer: coarse) {
  .hide-scrollbar-touch::-webkit-scrollbar {
    display: none;
  }
}

/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.3s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
