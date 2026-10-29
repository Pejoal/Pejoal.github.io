<template>
  <section id="horizon" class="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-900 text-white">
    <!-- Ambient Tech Glow -->
    <div class="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
    <div
      class="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"
    ></div>
    <div
      class="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"
    ></div>

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
        <div
          class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-md"
        >
          <Icon name="heroicons:sparkles" class="w-4 h-4 text-blue-400" />
          <span>{{ t('horizon.badge') }}</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black font-heading tracking-tight mb-4">
          {{ t('horizon.headingMain') }}<span class="gradient-text-primary">{{ t('horizon.headingGradient') }}</span>
        </h2>
        <p class="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
          {{ t('horizon.subtitle') }}
        </p>
      </div>

      <!-- Main Showcase Container: Screenshot Viewer + Core Highlights -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        <!-- Interactive Screenshot Viewer (7 cols) -->
        <div
          class="lg:col-span-7 bg-slate-950/80 border border-slate-800 rounded-3xl p-4 sm:p-6 shadow-2xl backdrop-blur-xl"
          data-aos="fade-right"
        >
          <!-- Window Header Bar -->
          <div class="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-4">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span class="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span class="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span class="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">appops.pejoal.internal</span>
            </div>
            <div
              class="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 flex items-center gap-1.5"
            >
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>{{ activeTab.label }}</span>
            </div>
          </div>

          <!-- Main High-Res Image Display with Touch Swipe & Carousel Navigation -->
          <div
            tabindex="0"
            role="region"
            aria-label="Screenshots Carousel"
            class="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/80 aspect-16/10 shadow-inner group cursor-pointer select-none focus:outline-hidden focus:ring-2 focus:ring-blue-500/50"
            @click="openModal(activeImageIndex)"
            @keydown.left.prevent="prevImage"
            @keydown.right.prevent="nextImage"
            @touchstart.passive="handleTouchStart"
            @touchend.passive="handleTouchEnd"
          >
            <img
              :src="activeTab.src"
              :alt="activeTab.title"
              class="w-full h-full object-contain bg-slate-950 transition-all duration-300 group-hover:scale-102"
              draggable="false"
            />

            <!-- Prev / Next Carousel Arrow Buttons -->
            <button
              type="button"
              @click.stop.prevent="prevImage"
              class="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-slate-950/70 hover:bg-slate-900 border border-slate-700/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all backdrop-blur-md shadow-lg hover:scale-110 active:scale-95"
              aria-label="Previous screenshot"
            >
              <Icon name="heroicons:chevron-left" class="w-5 h-5" />
            </button>
            <button
              type="button"
              @click.stop.prevent="nextImage"
              class="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-slate-950/70 hover:bg-slate-900 border border-slate-700/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all backdrop-blur-md shadow-lg hover:scale-110 active:scale-95"
              aria-label="Next screenshot"
            >
              <Icon name="heroicons:chevron-right" class="w-5 h-5" />
            </button>

            <!-- Bottom Gradient Info Bar -->
            <div
              class="absolute inset-0 bg-linear-to-t from-slate-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4 pointer-events-none"
            >
              <span class="text-xs sm:text-sm font-medium text-slate-200">{{ activeTab.description }}</span>
              <span
                class="text-xs px-2.5 py-1 bg-white/20 backdrop-blur-md rounded-lg text-white font-semibold flex items-center gap-1"
              >
                <Icon name="heroicons:arrows-pointing-out" class="w-3.5 h-3.5" /> {{ t('horizon.expand') }}
              </span>
            </div>
          </div>

          <!-- Thumbnail Navigation Bar -->
          <div class="flex items-center gap-2 sm:gap-2.5 mt-4 overflow-x-auto pb-2 scrollbar-thin">
            <button
              v-for="(item, idx) in screenshots"
              :key="idx"
              type="button"
              @click="activeImageIndex = idx"
              class="relative rounded-xl overflow-hidden border-2 transition-all p-1 group flex flex-col text-left shrink-0 w-20 sm:w-24"
              :class="
                activeImageIndex === idx
                  ? 'border-blue-500 bg-blue-500/10 ring-2 ring-blue-500/30'
                  : 'border-slate-800 hover:border-slate-700 bg-slate-900/60'
              "
            >
              <div class="aspect-16/10 rounded-lg overflow-hidden bg-slate-950 mb-1">
                <img
                  :src="item.src"
                  :alt="item.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <span
                class="text-[9px] sm:text-[11px] font-bold truncate block px-0.5 text-center"
                :class="activeImageIndex === idx ? 'text-blue-400' : 'text-slate-400'"
              >
                {{ item.tab }}
              </span>
            </button>
          </div>
        </div>

        <!-- System Overview & Key Capabilities (5 cols) -->
        <div class="lg:col-span-5 flex flex-col justify-between space-y-6" data-aos="fade-left">
          <div class="space-y-6">
            <div class="space-y-2">
              <span class="text-xs uppercase tracking-widest font-extrabold text-blue-400">{{
                t('horizon.capBadge')
              }}</span>
              <h3 class="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                {{ t('horizon.capTitle') }}
              </h3>
              <p class="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                {{ t('horizon.capDesc') }}
              </p>
            </div>

            <!-- Feature Bullet Cards -->
            <div class="space-y-3.5">
              <div
                v-for="(feat, fIdx) in keyFeatures"
                :key="fIdx"
                class="p-3.5 sm:p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-blue-500/40 transition-colors flex items-start gap-3.5"
              >
                <div
                  class="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 text-blue-400 mt-0.5"
                >
                  <Icon :name="feat.icon" class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="text-sm font-bold text-white mb-0.5">{{ feat.title }}</h4>
                  <p class="text-xs text-slate-300 leading-relaxed font-light">{{ feat.desc }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- CTAs & Status -->
          <div class="pt-4 flex flex-wrap items-center gap-3">
            <button
              type="button"
              @click="openModal(activeImageIndex)"
              class="flex items-center gap-2.5 px-6 py-3 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-sm rounded-xl hover:opacity-95 shadow-lg shadow-blue-500/30 transition-all hover:scale-102"
            >
              <Icon name="heroicons:photo" class="w-5 h-5 text-white" />
              <span>{{ t('horizon.viewScreenshots') }}</span>
            </button>
            <div class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-slate-300 text-xs font-semibold">
              <span class="w-2 h-2 rounded-full bg-indigo-400"></span>
              <span>{{ t('horizon.internalBadge') }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Feature Grid: 4 Core Modules -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-slate-800/80">
        <div
          v-for="(mod, mIdx) in deepModules"
          :key="mIdx"
          class="p-6 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 transition group flex flex-col justify-between"
          data-aos="fade-up"
          :data-aos-delay="mIdx * 100"
        >
          <div>
            <div
              class="w-10 h-10 rounded-xl bg-linear-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform"
            >
              <Icon :name="mod.icon" class="w-5 h-5" />
            </div>
            <h4 class="text-base font-bold text-white mb-2">{{ mod.title }}</h4>
            <p class="text-xs text-slate-400 leading-relaxed font-light mb-4">{{ mod.desc }}</p>
          </div>
          <div class="pt-3 border-t border-slate-800/60 flex flex-wrap gap-1.5">
            <span
              v-for="(tag, tIdx) in mod.tags"
              :key="tIdx"
              class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Fullscreen High-Res Lightbox Modal -->
    <Teleport to="body">
      <div
        v-if="modalOpen"
        class="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8"
        @click.self="modalOpen = false"
      >
        <!-- Modal Controls -->
        <div class="w-full max-w-6xl flex items-center justify-between pb-4 text-white">
          <div class="flex items-center gap-3">
            <span class="text-sm sm:text-base font-bold">{{ screenshots[modalIndex].title }}</span>
            <span class="text-xs text-slate-400">({{ modalIndex + 1 }} / {{ screenshots.length }})</span>
          </div>
          <div class="flex items-center gap-3">
            <button
              type="button"
              @click="prevModal"
              class="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 transition"
              aria-label="Previous"
            >
              <Icon name="heroicons:chevron-left" class="w-5 h-5" />
            </button>
            <button
              type="button"
              @click="nextModal"
              class="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 transition"
              aria-label="Next"
            >
              <Icon name="heroicons:chevron-right" class="w-5 h-5" />
            </button>
            <button
              type="button"
              @click="modalOpen = false"
              class="p-2 rounded-xl bg-rose-600/80 hover:bg-rose-600 text-white transition ml-2"
              aria-label="Close"
            >
              <Icon name="heroicons:x-mark" class="w-5 h-5" />
            </button>
          </div>
        </div>

        <!-- Modal Image Container with Touch Swipe & Keyboard Nav -->
        <div
          class="relative w-full max-w-6xl max-h-[80vh] flex items-center justify-center overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 select-none group"
          @touchstart.passive="handleModalTouchStart"
          @touchend.passive="handleModalTouchEnd"
        >
          <button
            type="button"
            @click.stop="prevModal"
            class="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-white flex items-center justify-center backdrop-blur-md shadow-xl transition-transform hover:scale-110 active:scale-95"
            aria-label="Previous"
          >
            <Icon name="heroicons:chevron-left" class="w-6 h-6" />
          </button>
          <button
            type="button"
            @click.stop="nextModal"
            class="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-white flex items-center justify-center backdrop-blur-md shadow-xl transition-transform hover:scale-110 active:scale-95"
            aria-label="Next"
          >
            <Icon name="heroicons:chevron-right" class="w-6 h-6" />
          </button>

          <img
            :src="screenshots[modalIndex].src"
            :alt="screenshots[modalIndex].title"
            class="max-w-full max-h-[80vh] object-contain shadow-2xl transition-all duration-300"
            draggable="false"
          />
        </div>

        <p class="text-xs sm:text-sm text-slate-400 mt-4 max-w-2xl text-center">
          {{ screenshots[modalIndex].description }}
        </p>
      </div>
    </Teleport>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue';

const { t } = useI18n();

const activeImageIndex = ref(0);
const modalOpen = ref(false);
const modalIndex = ref(0);

const screenshots = [
  {
    src: '/assets/1.png',
    tab: 'Analytics',
    label: 'Executive KPI Dashboard',
    title: 'Pejoal AppOps — Executive Analytics Dashboard',
    description:
      'Cross-platform installs, net device growth, ISO weekly/monthly aggregation, eCPM monetization, and real-time anomaly detection.',
  },
  {
    src: '/assets/7.png',
    tab: 'Trends',
    label: 'Installation & Revenue Trajectory',
    title: 'Pejoal AppOps — Installation & Monetization Trends',
    description:
      'Quarterly growth curves tracking installation volume alongside monetization earnings, impressions, and active user velocity.',
  },
  {
    src: '/assets/6.png',
    tab: 'Platforms',
    label: 'Android vs. iOS Ecosystem Split',
    title: 'Pejoal AppOps — Platform Share & Update Trends',
    description:
      'Side-by-side ecosystem comparison of Google Play vs. Apple App Store installs, quarterly update cadence, and market share distribution.',
  },
  {
    src: '/assets/5.png',
    tab: 'Categories',
    label: 'Portfolio Revenue by Category',
    title: 'Pejoal AppOps — Category Monetization Breakdown',
    description:
      'Proportional revenue and install contribution across all 12 portfolio categories (EdTech, Utility, Cognitive Tests, Programming, etc.).',
  },
  {
    src: '/assets/2.png',
    tab: 'Reviews',
    label: 'Customer Feedback & AI Reply Suite',
    title: 'Pejoal AppOps — Customer Reviews & AI Reply Engine',
    description:
      'Consolidated review feed from Google Play & App Store Connect with automated AI-assisted reply drafting and single-click approval.',
  },
  {
    src: '/assets/3.png',
    tab: 'ASO & Metadata',
    label: 'Multi-Lingual Store Listing Automation',
    title: 'Pejoal AppOps — Multi-Lingual Store Listings & ASO Hub',
    description:
      'Centralized database-backed metadata repository across 50+ languages, questionnaires automation, live store diffing, and direct API deployment.',
  },
  {
    src: '/assets/4.png',
    tab: 'Monetization',
    label: 'Ad Mediation & Geo-Intelligence',
    title: 'Pejoal AppOps — CAS.AI Mediation & Country Attribution',
    description:
      'Format breakdown (Banner, Interstitial, Rewarded, Native), network-level yield analysis, and interactive country breakdown for 220+ territories.',
  },
];

const activeTab = computed(() => screenshots[activeImageIndex.value]);

const keyFeatures = computed(() => [
  {
    icon: 'heroicons:arrow-trending-up',
    title: t('horizon.f1Title'),
    desc: t('horizon.f1Desc'),
  },
  {
    icon: 'heroicons:chat-bubble-bottom-center-text',
    title: t('horizon.f2Title'),
    desc: t('horizon.f2Desc'),
  },
  {
    icon: 'heroicons:language',
    title: t('horizon.f3Title'),
    desc: t('horizon.f3Desc'),
  },
  {
    icon: 'heroicons:circle-stack',
    title: t('horizon.f4Title'),
    desc: t('horizon.f4Desc'),
  },
  {
    icon: 'heroicons:chart-bar-square',
    title: t('horizon.f5Title'),
    desc: t('horizon.f5Desc'),
  },
]);

const deepModules = computed(() => [
  {
    icon: 'heroicons:server-stack',
    title: t('horizon.m1Title'),
    desc: t('horizon.m1Desc'),
    tags: ['GCS Storage', 'App Store REST', 'CAS.AI API', 'Crontab'],
  },
  {
    icon: 'heroicons:bell-alert',
    title: t('horizon.m2Title'),
    desc: t('horizon.m2Desc'),
    tags: ['Spike Alerts', 'Retention Churn', 'eCPM Drops', 'Threshold Engine'],
  },
  {
    icon: 'heroicons:sparkles',
    title: t('horizon.m3Title'),
    desc: t('horizon.m3Desc'),
    tags: ['Azure OpenAI', 'DeepSeek', 'Heuristic Fallback', '1-Click Post'],
  },
  {
    icon: 'heroicons:document-duplicate',
    title: t('horizon.m4Title'),
    desc: t('horizon.m4Desc'),
    tags: ['50+ Locales', 'Questionnaires Auto-Fill', 'Live Diff Engine'],
  },
]);

function openModal(idx) {
  modalIndex.value = idx;
  modalOpen.value = true;
}

function nextModal() {
  modalIndex.value = (modalIndex.value + 1) % screenshots.length;
}

function prevModal() {
  modalIndex.value = (modalIndex.value - 1 + screenshots.length) % screenshots.length;
}

function nextImage() {
  activeImageIndex.value = (activeImageIndex.value + 1) % screenshots.length;
}

function prevImage() {
  activeImageIndex.value = (activeImageIndex.value - 1 + screenshots.length) % screenshots.length;
}

// Touch swipe logic for the main inline carousel
let touchStartX = 0;
let touchStartY = 0;

function handleTouchStart(e) {
  if (e.touches && e.touches.length > 0) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }
}

function handleTouchEnd(e) {
  if (e.changedTouches && e.changedTouches.length > 0) {
    const diffX = e.changedTouches[0].clientX - touchStartX;
    const diffY = e.changedTouches[0].clientY - touchStartY;
    // Check horizontal swipe with threshold of 40px and dominant horizontal movement
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX < 0) {
        nextImage();
      } else {
        prevImage();
      }
    }
  }
}

// Touch swipe logic for the modal lightbox
let modalTouchStartX = 0;
let modalTouchStartY = 0;

function handleModalTouchStart(e) {
  if (e.touches && e.touches.length > 0) {
    modalTouchStartX = e.touches[0].clientX;
    modalTouchStartY = e.touches[0].clientY;
  }
}

function handleModalTouchEnd(e) {
  if (e.changedTouches && e.changedTouches.length > 0) {
    const diffX = e.changedTouches[0].clientX - modalTouchStartX;
    const diffY = e.changedTouches[0].clientY - modalTouchStartY;
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX < 0) {
        nextModal();
      } else {
        prevModal();
      }
    }
  }
}

// Global keyboard navigation (ArrowLeft, ArrowRight, Escape)
function handleGlobalKeydown(e) {
  if (modalOpen.value) {
    if (e.key === 'ArrowRight') {
      nextModal();
    } else if (e.key === 'ArrowLeft') {
      prevModal();
    } else if (e.key === 'Escape') {
      modalOpen.value = false;
    }
  }
}

onMounted(() => {
  if (process.client) {
    window.addEventListener('keydown', handleGlobalKeydown);
  }
});

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('keydown', handleGlobalKeydown);
  }
});
</script>
