<!-- error.vue -->
<template>
  <!-- 404: friendly page-not-found UI -->
  <div v-if="error.statusCode === 404"
    class="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 flex items-center justify-center px-4"
  >
    <div class="max-w-md w-full text-center">
      <div class="mb-8">
        <div class="text-9xl font-bold text-gray-200 dark:text-gray-700 select-none">
          4<span class="inline-block animate-bounce">0</span>4
        </div>
      </div>
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Page Not Found</h1>
      <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink
          to="/"
          class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
        >
          <Icon name="heroicons:home" class="w-5 h-5" />
          Back to Home
        </NuxtLink>
        <button
          @click="handleError"
          class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          <Icon name="heroicons:arrow-left" class="w-5 h-5" />
          Go Back
        </button>
      </div>
      <p class="mt-12 text-sm text-gray-500 dark:text-gray-400">
        <em>Maybe try searching or check the URL?</em>
      </p>
    </div>
  </div>

  <!-- Other errors: generic UI -->
  <div
    v-else
    class="min-h-screen bg-linear-to-br from-red-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4"
  >
    <div class="max-w-md w-full text-center">
      <div class="text-8xl font-bold text-red-200 dark:text-red-800 mb-6">
        <Icon name="heroicons:exclamation-triangle" class="w-32 h-32 mx-auto" />
      </div>
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">{{ error.statusCode }} Error</h1>
      <p class="text-gray-600 dark:text-gray-300 mb-6">
        {{ error.message || 'Something went wrong.' }}
      </p>
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition"
      >
        <Icon name="heroicons:home" class="w-5 h-5" />
        Go Home
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object,
});

const handleError = () => {
  clearError({ redirect: '/' });
};
</script>

<style scoped>
.animate-bounce {
  animation: bounce 2s infinite;
}
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
</style>

