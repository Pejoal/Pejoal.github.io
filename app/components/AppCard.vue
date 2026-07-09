<!-- components/AppCard.vue -->
<template>
  <div
    :class="`
      group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4)] relative cursor-pointer
      ${horizontal ? 'w-[280px] shrink-0' : 'w-full'}
      bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl border border-gray-200/50 dark:border-gray-700/50
      p-6 shadow-lg hover:border-blue-300 dark:hover:border-blue-700
    `"
    @click="$emit('open-modal', app)"
  >
    <!-- Ranking Badge -->
    <div 
      v-if="index" 
      :class="[
        'absolute z-20 flex items-center justify-center font-black rounded-full shadow-lg border-2 transition-transform group-hover:scale-110 group-hover:rotate-3',
        index === 1 ? '-top-4 -left-4 w-12 h-12 bg-linear-to-br from-yellow-400 to-amber-500 text-white border-yellow-100 text-xl shadow-yellow-500/50 ring-4 ring-yellow-400/30' : 
        index === 2 ? '-top-3 -left-3 w-10 h-10 bg-linear-to-br from-gray-300 to-gray-500 text-white border-white text-lg shadow-gray-400/50 ring-4 ring-gray-300/30' : 
        index === 3 ? '-top-3 -left-3 w-10 h-10 bg-linear-to-br from-orange-400 to-orange-700 text-white border-orange-100 text-lg shadow-orange-500/50 ring-4 ring-orange-500/30' : 
        '-top-3 -left-3 w-9 h-9 bg-linear-to-br from-gray-900 to-gray-800 dark:from-white dark:to-gray-200 text-white dark:text-black text-sm border-white dark:border-gray-800'
      ]"
    >
      <span v-if="index === 1" class="absolute -top-4 -right-3 text-2xl drop-shadow-md rotate-12 origin-bottom-left animate-bounce" style="animation-duration: 2s;">👑</span>
      #{{ index }}
    </div>

    <!-- Horizontal Layout -->
    <div v-if="horizontal" class="text-center">
      <div
        :class="`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${getColorClasses(color).bg} text-white shadow-lg group-hover:scale-110 overflow-hidden`"
      >
        <NuxtImg v-if="isUrl(app.icon)" :src="app.icon" :alt="app.title" class="w-full h-full object-cover" format="webp" loading="lazy" referrerpolicy="no-referrer" />
        <span v-else class="text-4xl">{{ app.icon }}</span>
      </div>

      <div class="space-y-2">
        <h4
          class="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
        >
          {{ app.title }}
        </h4>
        <p class="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed mb-3">
          {{ app.description }}
        </p>

        <!-- Metrics -->
        <div class="flex flex-wrap items-center justify-center gap-2">
          <span v-if="rating && rating !== '0.0'" class="flex items-center gap-1 text-[10px] px-2 py-0.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded font-medium">
            <Icon name="heroicons:star-solid" class="w-3 h-3" /> {{ rating }}
          </span>
          <span v-if="installs" class="flex items-center gap-1 text-[10px] px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded font-medium">
            <Icon name="heroicons:arrow-down-tray" class="w-3 h-3" /> {{ installs }}
          </span>
          <span v-if="size" class="text-[10px] px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded font-medium">
            {{ size }}
          </span>
        </div>
      </div>

      <!-- Store Links -->
      <div class="flex justify-center gap-3 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
        <a
          v-if="app.iosId"
          :href="`https://apps.apple.com/app/id${app.iosId}`"
          target="_blank"
          class="flex items-center gap-1.5 px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition"
        >
          <Icon name="simple-icons:appstore" class="w-4 h-4" />
          iOS
        </a>
        <a
          v-if="app.id"
          :href="`https://play.google.com/store/apps/details?id=com.pejoal.${app.id}`"
          target="_blank"
          class="flex items-center gap-1.5 px-3 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg text-xs font-medium hover:bg-green-200 dark:hover:bg-green-800 transition"
        >
          <Icon name="simple-icons:googleplay" class="w-4 h-4" />
          Android
        </a>
      </div>
    </div>

    <!-- Vertical Layout -->
    <div v-else class="flex items-center space-x-4">
      <div
        :class="`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${getColorClasses(color).bg} text-white shadow-lg group-hover:scale-110 overflow-hidden`"
      >
        <NuxtImg v-if="isUrl(app.icon)" :src="app.icon" :alt="app.title" class="w-full h-full object-cover" format="webp" loading="lazy" referrerpolicy="no-referrer" />
        <span v-else class="text-3xl">{{ app.icon }}</span>
      </div>

      <div class="flex-1 min-w-0">
        <h4
          class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2"
        >
          {{ app.title }}
        </h4>
        <p class="text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed mb-3">
          {{ app.description }}
        </p>

        <!-- Metrics -->
        <div class="flex flex-wrap items-center gap-2 mb-3">
          <span v-if="rating && rating !== '0.0'" class="flex items-center gap-1 text-xs px-2 py-0.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded font-medium">
            <Icon name="heroicons:star-solid" class="w-3 h-3" /> {{ rating }}
          </span>
          <span v-if="installs" class="flex items-center gap-1 text-xs px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded font-medium">
            <Icon name="heroicons:arrow-down-tray" class="w-3 h-3" /> {{ installs }}
          </span>
          <span v-if="size" class="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded font-medium">
            {{ size }}
          </span>
        </div>

        <div class="flex gap-2">
          <a
            v-if="app.iosId"
            :href="`https://apps.apple.com/app/id${app.iosId}`"
            target="_blank"
            class="flex items-center gap-1 text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded hover:bg-blue-200 dark:hover:bg-blue-800 transition"
          >
            <Icon name="simple-icons:appstore" class="w-3.5 h-3.5" />
            iOS
          </a>
          <a
            v-if="app.id"
            :href="`https://play.google.com/store/apps/details?id=com.pejoal.${app.id}`"
            target="_blank"
            class="flex items-center gap-1 text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded hover:bg-green-200 dark:hover:bg-green-800 transition"
          >
            <Icon name="simple-icons:googleplay" class="w-3.5 h-3.5" />
            Android
          </a>
        </div>
      </div>

      <Icon
        name="heroicons:arrow-top-right-on-square"
        class="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors"
      />
    </div>

    <div
      class="absolute inset-0 bg-linear-to-r from-blue-600/10 to-indigo-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
    ></div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  app: Object,
  color: { type: String, default: 'blue' },
  horizontal: { type: Boolean, default: false },
  index: { type: Number, default: null },
});

const emit = defineEmits(['open-modal']);

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
    blue: { bg: 'bg-linear-to-br from-blue-500 to-cyan-400 shadow-blue-500/30' },
    indigo: { bg: 'bg-linear-to-br from-indigo-500 to-purple-400 shadow-indigo-500/30' },
    red: { bg: 'bg-linear-to-br from-red-500 to-orange-400 shadow-red-500/30' },
    green: { bg: 'bg-linear-to-br from-green-500 to-emerald-400 shadow-green-500/30' },
    purple: { bg: 'bg-linear-to-br from-purple-500 to-pink-400 shadow-purple-500/30' },
    emerald: { bg: 'bg-linear-to-br from-emerald-500 to-teal-400 shadow-emerald-500/30' },
    violet: { bg: 'bg-linear-to-br from-violet-500 to-fuchsia-400 shadow-violet-500/30' },
    pink: { bg: 'bg-linear-to-br from-pink-500 to-rose-400 shadow-pink-500/30' },
    orange: { bg: 'bg-linear-to-br from-orange-500 to-yellow-400 shadow-orange-500/30' },
    yellow: { bg: 'bg-linear-to-br from-yellow-500 to-amber-400 shadow-yellow-500/30' },
  };
  return colors[color] || colors.blue;
};
</script>

<style scoped>
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
