<!-- components/AppCard.vue -->
<template>
  <div
    :class="`
      glass-card glass-card-hover group relative cursor-pointer overflow-hidden rounded-3xl p-6 flex flex-col justify-between
      ${horizontal ? 'w-[280px] shrink-0' : 'w-full'}
    `"
    @click="$emit('open-modal', app)"
  >
    <!-- Ranking Badge -->
    <div 
      v-if="index" 
      :class="[
        'absolute top-4 right-4 z-20 flex items-center justify-center font-black rounded-full border shadow-md transition-transform group-hover:scale-110 font-heading',
        index === 1 ? 'w-10 h-10 bg-linear-to-br from-amber-300 via-yellow-400 to-amber-500 text-slate-950 border-white text-sm shadow-amber-500/30' : 
        index === 2 ? 'w-9 h-9 bg-linear-to-br from-slate-200 via-slate-300 to-slate-400 text-slate-950 border-white text-xs shadow-slate-400/30' : 
        index === 3 ? 'w-9 h-9 bg-linear-to-br from-amber-600 via-orange-500 to-amber-700 text-white border-white text-xs shadow-orange-500/30' : 
        'px-2.5 py-1 bg-slate-900/80 dark:bg-slate-800/90 text-white dark:text-slate-200 text-xs border-slate-700/50 backdrop-blur-sm'
      ]"
    >
      <span v-if="index === 1" class="absolute -top-3 -right-2 text-lg drop-shadow-md rotate-12 origin-bottom-left animate-bounce" style="animation-duration: 2s;">👑</span>
      #{{ index }}
    </div>

    <!-- Horizontal Layout -->
    <div v-if="horizontal" class="text-center">
      <div
        :class="`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${getColorClasses(color).bg} text-white shadow-xl group-hover:scale-110 overflow-hidden`"
      >
        <NuxtImg v-if="isUrl(app.icon)" :src="app.icon" :alt="app.title" class="w-full h-full object-cover" format="webp" loading="lazy" referrerpolicy="no-referrer" />
        <span v-else class="text-4xl">{{ app.icon }}</span>
      </div>

      <div class="space-y-2">
        <h4
          class="text-lg font-bold font-heading text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1"
        >
          {{ app.title }}
        </h4>
        <p class="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed mb-3 font-light">
          {{ app.description }}
        </p>

        <!-- Metrics Row -->
        <div class="flex flex-wrap items-center justify-center gap-1.5">
          <span v-if="rating && rating !== '0.0'" class="flex items-center gap-1 text-[11px] px-2.5 py-0.5 bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 rounded-full font-bold">
            <Icon name="heroicons:star-solid" class="w-3 h-3 text-amber-500 fill-amber-500" /> {{ rating }}
          </span>
          <span v-if="installs" class="flex items-center gap-1 text-[11px] px-2.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded-full font-semibold">
            <Icon name="heroicons:arrow-down-tray" class="w-3 h-3 text-blue-500" /> {{ installs }}
          </span>
          <span v-if="size" class="text-[10px] px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full font-medium">
            {{ size }}
          </span>
        </div>
      </div>

      <!-- Store Links -->
      <div class="flex justify-center gap-2 mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800">
        <a
          v-if="app.iosId"
          :href="`https://apps.apple.com/app/id${app.iosId}`"
          target="_blank"
          @click.stop
          class="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 dark:bg-slate-800 text-white rounded-xl text-xs font-bold hover:bg-blue-600 dark:hover:bg-blue-600 transition"
        >
          <Icon name="simple-icons:appstore" class="w-3.5 h-3.5" />
          iOS
        </a>
        <a
          v-if="app.id"
          :href="`https://play.google.com/store/apps/details?id=com.pejoal.${app.id}`"
          target="_blank"
          @click.stop
          class="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-700 text-white rounded-xl text-xs font-bold hover:bg-emerald-600 transition"
        >
          <Icon name="simple-icons:googleplay" class="w-3.5 h-3.5" />
          Android
        </a>
      </div>
    </div>

    <!-- Vertical Standard Layout -->
    <div v-else class="flex flex-col h-full justify-between">
      <div>
        <div class="flex items-start space-x-4 mb-4">
          <!-- Icon Container -->
          <div
            :class="`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${getColorClasses(color).bg} text-white shadow-lg group-hover:scale-105 overflow-hidden border border-white/20`"
          >
            <NuxtImg v-if="isUrl(app.icon)" :src="app.icon" :alt="app.title" class="w-full h-full object-cover" format="webp" loading="lazy" referrerpolicy="no-referrer" />
            <span v-else class="text-3xl">{{ app.icon }}</span>
          </div>

          <!-- Title & Badges -->
          <div class="flex-1 min-w-0">
            <h4
              class="text-lg sm:text-xl font-bold font-heading text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1 mb-1 pr-12"
            >
              {{ app.title }}
            </h4>
            
            <!-- Metrics -->
            <div class="flex flex-wrap items-center gap-1.5">
              <span v-if="rating && rating !== '0.0'" class="flex items-center gap-1 text-xs px-2.5 py-0.5 bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 rounded-full font-bold">
                <Icon name="heroicons:star-solid" class="w-3.5 h-3.5 text-amber-500 fill-amber-500" /> {{ rating }}
              </span>
              <span v-if="installs" class="flex items-center gap-1 text-xs px-2.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 rounded-full font-semibold">
                <Icon name="heroicons:arrow-down-tray" class="w-3.5 h-3.5 text-blue-500" /> {{ installs }}
              </span>
            </div>
          </div>
        </div>

        <!-- Description -->
        <p class="text-slate-600 dark:text-slate-300 text-sm line-clamp-2 leading-relaxed font-light mb-4">
          {{ app.description }}
        </p>
      </div>

      <!-- Action Footer -->
      <div class="flex items-center justify-between pt-3 border-t border-slate-200/60 dark:border-slate-800/80 mt-auto">
        <div class="flex gap-2">
          <a
            v-if="app.iosId"
            :href="`https://apps.apple.com/app/id${app.iosId}`"
            target="_blank"
            @click.stop
            class="flex items-center gap-1 text-xs px-3 py-1.5 bg-slate-900 dark:bg-slate-800 text-white rounded-xl font-bold hover:bg-blue-600 dark:hover:bg-blue-600 transition"
          >
            <Icon name="simple-icons:apple" class="w-3.5 h-3.5" />
            {{ t('apps.ios') }}
          </a>
          <a
            v-if="app.id"
            :href="`https://play.google.com/store/apps/details?id=com.pejoal.${app.id}`"
            target="_blank"
            @click.stop
            class="flex items-center gap-1 text-xs px-3 py-1.5 bg-emerald-700 text-white rounded-xl font-bold hover:bg-emerald-600 transition"
          >
            <Icon name="simple-icons:googleplay" class="w-3.5 h-3.5" />
            {{ t('apps.android') }}
          </a>
        </div>

        <div class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 dark:group-hover:bg-blue-950 transition-colors">
          <Icon
            name="heroicons:arrow-up-right"
            class="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const { t } = useI18n();

const props = defineProps({
  app: Object,
  color: { type: String, default: 'blue' },
  horizontal: { type: Boolean, default: false },
  index: { type: Number, default: null },
});

defineEmits(['open-modal']);

const rating = computed(() => {
  if (props.app?.appStoreData?.score) return Number(props.app.appStoreData.score).toFixed(1);
  if (props.app?.playStoreData?.scoreText) return props.app.playStoreData.scoreText;
  return null;
});

const installs = computed(() => {
  if (props.app?.playStoreData?.installs) return props.app.playStoreData.installs;
  return null;
});

const size = computed(() => {
  if (props.app?.appStoreData?.size) return props.app.appStoreData.size;
  if (props.app?.playStoreData?.size) return props.app.playStoreData.size;
  return null;
});

const isUrl = (str) => {
  if (!str) return false;
  return str.startsWith('http') || str.startsWith('/') || str.startsWith('assets');
};

const getColorClasses = (color) => {
  const colors = {
    blue: { bg: 'bg-linear-to-br from-blue-500 to-cyan-500 shadow-blue-500/30' },
    indigo: { bg: 'bg-linear-to-br from-indigo-500 to-purple-500 shadow-indigo-500/30' },
    red: { bg: 'bg-linear-to-br from-red-500 to-rose-500 shadow-red-500/30' },
    green: { bg: 'bg-linear-to-br from-green-500 to-emerald-500 shadow-green-500/30' },
    purple: { bg: 'bg-linear-to-br from-purple-500 to-pink-500 shadow-purple-500/30' },
    emerald: { bg: 'bg-linear-to-br from-emerald-500 to-teal-500 shadow-emerald-500/30' },
    violet: { bg: 'bg-linear-to-br from-violet-500 to-fuchsia-500 shadow-violet-500/30' },
    pink: { bg: 'bg-linear-to-br from-pink-500 to-rose-400 shadow-pink-500/30' },
    orange: { bg: 'bg-linear-to-br from-orange-500 to-amber-500 shadow-orange-500/30' },
    yellow: { bg: 'bg-linear-to-br from-amber-400 to-yellow-500 shadow-amber-500/30' },
  };
  return colors[color] || colors.blue;
};
</script>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
