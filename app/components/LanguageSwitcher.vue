<template>
  <div class="relative inline-block text-left" ref="dropdownRef">
    <button
      @click="isOpen = !isOpen"
      type="button"
      class="cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-semibold text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all shadow-xs"
      aria-haspopup="true"
      :aria-expanded="isOpen"
    >
      <span class="text-sm">{{ currentLocaleObj.flag }}</span>
      <span>{{ currentLocaleObj.name }}</span>
      <Icon name="heroicons:chevron-down" class="w-3.5 h-3.5 text-gray-400" />
    </button>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="absolute right-0 mt-2 w-36 rounded-2xl shadow-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 py-1 z-50 overflow-hidden"
      >
        <button
          v-for="loc in availableLocales"
          :key="loc.code"
          @click="selectLocale(loc.code)"
          :class="[
            'w-full cursor-pointer text-left px-4 py-2 text-xs font-medium flex items-center gap-2 transition-colors',
            locale === loc.code
              ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold'
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'
          ]"
        >
          <span class="text-sm">{{ loc.flag }}</span>
          <span>{{ loc.name }}</span>
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const isOpen = ref(false);
const dropdownRef = ref(null);

const { locale, setLocale } = useI18n();

const availableLocales = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
];

onMounted(() => {
  if (process.client) {
    document.addEventListener('click', handleClickOutside);
  }
});

onUnmounted(() => {
  if (process.client) {
    document.removeEventListener('click', handleClickOutside);
  }
});

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false;
  }
};

const currentLocaleObj = computed(() => {
  return availableLocales.find((l) => l.code === locale.value) || availableLocales[0];
});

const selectLocale = (code) => {
  setLocale(code);
  isOpen.value = false;
};
</script>
