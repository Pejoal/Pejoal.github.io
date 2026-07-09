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
    <!-- Horizontal Layout -->
    <div v-if="horizontal" class="text-center">
      <div
        :class="`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${getColorClasses(color).bg} text-white shadow-lg group-hover:scale-110 overflow-hidden`"
      >
        <img v-if="isUrl(app.icon)" :src="app.icon" :alt="app.title" class="w-full h-full object-cover" />
        <span v-else class="text-4xl">{{ app.icon }}</span>
      </div>

      <div class="space-y-2">
        <h4
          class="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
        >
          {{ app.title }}
        </h4>
        <p class="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed">
          {{ app.description }}
        </p>
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
        <img v-if="isUrl(app.icon)" :src="app.icon" :alt="app.title" class="w-full h-full object-cover" />
        <span v-else class="text-3xl">{{ app.icon }}</span>
      </div>

      <div class="flex-1 min-w-0">
        <h4
          class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2"
        >
          {{ app.title }}
        </h4>
        <p class="text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
          {{ app.description }}
        </p>

        <div class="flex gap-2 mt-3">
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
defineProps({
  app: Object,
  color: { type: String, default: 'blue' },
  horizontal: { type: Boolean, default: false },
});

defineEmits(['open-modal']);

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
