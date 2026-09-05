<!-- components/AppDetailModal.vue -->
<template>
  <ClientOnly>
    <transition name="fade">
      <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" @click.self="close">
        <div class="absolute inset-0 bg-slate-950/80 backdrop-blur-xl transition-opacity" @click="close"></div>
        
        <transition name="scale">
          <div 
            v-if="isOpen"
            class="relative glass-card border border-white/20 dark:border-white/10 rounded-[2.5rem] shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col transform transition-all z-10"
            role="dialog" 
            aria-modal="true"
          >
            <!-- Header / Hero Banner Section -->
            <div class="relative shrink-0 border-b border-slate-200/60 dark:border-slate-800">
              <button 
                @click="close"
                class="absolute cursor-pointer top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
              >
                <Icon name="heroicons:x-mark" class="w-6 h-6" />
              </button>
              
              <div class="p-6 sm:p-8 flex flex-col sm:flex-row gap-5 sm:gap-6 bg-linear-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10">
                <!-- App Icon -->
                <div class="flex flex-row gap-4 items-center sm:items-start w-full sm:w-auto">
                  <div class="w-20 h-20 sm:w-32 sm:h-32 shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-white/40 dark:border-slate-700 bg-white dark:bg-slate-900">
                    <NuxtImg v-if="isUrl(app?.icon)" :src="app?.icon" :alt="app?.title" class="w-full h-full object-cover" format="webp" referrerpolicy="no-referrer" />
                    <span v-else class="w-full h-full flex items-center justify-center text-4xl sm:text-5xl">{{ app?.icon }}</span>
                  </div>
                  
                  <div class="flex-1 sm:hidden">
                    <h2 class="text-lg font-bold font-heading text-slate-900 dark:text-white leading-tight mb-1 line-clamp-2">{{ app?.title }}</h2>
                    <p class="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 font-light">{{ app?.description }}</p>
                  </div>
                </div>
                
                <div class="flex-1 space-y-2 sm:space-y-3 flex flex-col justify-center min-w-0">
                  <div class="hidden sm:block">
                    <h2 class="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white mb-1.5">{{ app?.title }}</h2>
                    <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed">{{ app?.description }}</p>
                  </div>
                  
                  <!-- Metadata Badges -->
                  <div class="flex sm:flex-wrap overflow-x-auto sm:overflow-visible items-center gap-2 pt-1 pb-2 sm:pb-0 hide-scrollbar-touch w-full">
                    <span v-if="rating" class="shrink-0 flex items-center gap-1 px-3 py-1 bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 rounded-full text-xs font-bold">
                      <Icon name="heroicons:star-solid" class="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      {{ rating }}
                    </span>
                    <span v-if="downloads" class="shrink-0 flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded-full text-xs font-semibold">
                      <Icon name="heroicons:arrow-down-tray" class="w-3.5 h-3.5 text-blue-500" />
                      {{ downloads }}
                    </span>
                    <span v-if="version" class="shrink-0 px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium">
                      v{{ version }}
                    </span>
                    <span v-if="size" class="shrink-0 px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium">
                      {{ size }}
                    </span>
                    <span v-if="updatedDate" class="shrink-0 px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium">
                      {{ t('modal.updated') }} {{ updatedDate }}
                    </span>
                    <span v-if="releasedDate" class="shrink-0 px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium">
                      {{ t('modal.released') }} {{ releasedDate }}
                    </span>
                    <span v-if="adSupported === true" class="shrink-0 flex items-center gap-1 px-3 py-1 bg-rose-100 dark:bg-rose-900/40 text-rose-800 dark:text-rose-300 rounded-full text-xs font-semibold">
                      <Icon name="heroicons:speaker-wave" class="w-3.5 h-3.5" /> {{ t('modal.ads') }}
                    </span>
                    <span v-if="adSupported === false" class="shrink-0 flex items-center gap-1 px-3 py-1 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 rounded-full text-xs font-semibold">
                      <Icon name="heroicons:shield-check" class="w-3.5 h-3.5" /> {{ t('modal.adFree') }}
                    </span>
                  </div>
                </div>
                
                <!-- Store Action Download Buttons -->
                <div class="flex flex-row sm:flex-col gap-2.5 shrink-0 w-full sm:w-auto mt-2 sm:mt-0 justify-center">
                  <a
                    v-if="app?.webUrl"
                    :href="app?.webUrl"
                    target="_blank"
                    class="flex-1 sm:flex-none flex items-center justify-center gap-2.5 px-5 py-3 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-2xl hover:scale-105 transition shadow-lg shadow-blue-500/25 font-heading"
                  >
                    <Icon name="heroicons:globe-alt" class="w-5 h-5 sm:w-6 sm:h-6" />
                    <div class="flex flex-col items-start leading-none">
                      <span class="text-[9px] uppercase font-bold opacity-90">{{ t('modal.webPortal') }}</span>
                      <span class="font-extrabold text-xs sm:text-sm tracking-wide">{{ t('modal.openPortal') }}</span>
                    </div>
                  </a>
                  <a
                    v-if="app?.iosId"
                    :href="`https://apps.apple.com/app/id${app.iosId.match(/id(\d+)/) ? app.iosId.match(/id(\d+)/)[1] : app.iosId}`"
                    target="_blank"
                    class="flex-1 sm:flex-none flex items-center justify-center gap-2.5 px-5 py-3 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-2xl hover:scale-105 transition shadow-lg font-heading"
                  >
                    <Icon name="simple-icons:apple" class="w-5 h-5 sm:w-6 sm:h-6" />
                    <div class="flex flex-col items-start leading-none">
                      <span class="text-[9px] uppercase font-bold opacity-75">Download</span>
                      <span class="font-extrabold text-xs sm:text-sm">{{ t('modal.downloadAppStore') }}</span>
                    </div>
                  </a>
                  <a
                    v-if="app?.id"
                    :href="`https://play.google.com/store/apps/details?id=com.pejoal.${app.id}`"
                    target="_blank"
                    class="flex-1 sm:flex-none flex items-center justify-center gap-2.5 px-5 py-3 bg-emerald-700 text-white rounded-2xl hover:scale-105 transition shadow-lg font-heading"
                  >
                    <Icon name="simple-icons:googleplay" class="w-4 h-4 sm:w-5 sm:h-5" />
                    <div class="flex flex-col items-start leading-none">
                      <span class="text-[9px] uppercase font-bold opacity-90">GET IT ON</span>
                      <span class="font-extrabold text-xs sm:text-sm tracking-wide">{{ t('modal.getItOnGooglePlay') }}</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            
            <!-- Modal Body Scroll Area -->
            <div class="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 custom-scrollbar">
              <!-- Feature Graphic Banner -->
              <div v-if="featureGraphic" class="rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 relative">
                <img 
                  :src="featureGraphic" 
                  alt="Feature Graphic" 
                  class="w-full h-auto aspect-[1024/500] object-cover"
                  loading="lazy"
                  referrerpolicy="no-referrer"
                />
              </div>

              <!-- Screenshots Slider -->
              <div v-if="screenshots && screenshots.length > 0">
                <h3 class="text-lg sm:text-xl font-bold font-heading text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <Icon name="heroicons:photo" class="w-5 h-5 text-blue-500" />
                  {{ t('modal.screenshots') }}
                </h3>
                <div class="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory custom-scrollbar hide-scrollbar-touch">
                  <img 
                    v-for="(img, idx) in screenshots" 
                    :key="idx" 
                    :src="img" 
                    alt="Screenshot" 
                    class="h-64 sm:h-80 object-cover rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-md snap-center shrink-0 hover:scale-[1.02] transition-transform"
                    loading="lazy"
                    referrerpolicy="no-referrer"
                  />
                </div>
              </div>
    
              <!-- Detailed Description -->
              <div v-if="longDescription">
                <h3 class="text-lg sm:text-xl font-bold font-heading text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <Icon name="heroicons:information-circle" class="w-5 h-5 text-blue-500" />
                  {{ t('modal.aboutThisApp') }}
                </h3>
                <div 
                  class="prose prose-blue dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base whitespace-pre-wrap font-light"
                  v-html="longDescription"
                ></div>
              </div>
              
              <!-- What's New / Recent Changes -->
              <div v-if="recentChanges">
                <h3 class="text-lg sm:text-xl font-bold font-heading text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <Icon name="heroicons:sparkles" class="w-5 h-5 text-blue-500" />
                  {{ t('modal.whatsNew') }}
                </h3>
                <div class="p-4 sm:p-5 bg-blue-50/50 dark:bg-slate-800/60 rounded-2xl border border-blue-100 dark:border-slate-700">
                  <p class="text-slate-600 dark:text-slate-300 text-xs sm:text-sm whitespace-pre-wrap leading-relaxed">{{ recentChanges }}</p>
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

const { t } = useI18n();

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
  if (playData.value?.maxInstalls) {
    const total = Math.floor(playData.value.maxInstalls * 1.1);
    return total.toLocaleString();
  }
  if (playData.value?.installs) return playData.value.installs;
  return null;
});

const updatedDate = computed(() => {
  const playTime = playData.value?.updated ? new Date(playData.value.updated).getTime() : 0;
  const appTime = appStoreData.value?.updated ? new Date(appStoreData.value.updated).getTime() : 0;
  const maxTime = Math.max(playTime, appTime);
  
  if (maxTime === 0) return null;
  const date = new Date(maxTime);
  return isNaN(date.getTime()) ? null : date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
});

const releasedDate = computed(() => {
  return playData.value?.released || null;
});

const adSupported = computed(() => {
  if (playData.value && typeof playData.value.adSupported === 'boolean') {
    return playData.value.adSupported;
  }
  return null;
});

const recentChanges = computed(() => {
  if (appStoreData.value?.recentChanges) return appStoreData.value.recentChanges;
  if (playData.value?.recentChanges) return playData.value.recentChanges;
  return null;
});

let savedScrollY = 0;

watch(() => props.isOpen, (newVal) => {
  if (process.client) {
    if (newVal) {
      savedScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      const currentScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      if (currentScrollY !== savedScrollY) {
        window.scrollTo({ top: savedScrollY, behavior: 'instant' });
      }
    }
  }
});

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
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(10px);
}
</style>
