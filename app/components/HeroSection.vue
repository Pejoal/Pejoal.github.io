<template>
  <section id="home" class="relative pt-32 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <div class="max-w-7xl mx-auto relative z-10">
      <div class="text-center">
        <!-- Top Status Pill -->
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-blue-500/20 text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 mb-8 shadow-sm"
          data-aos="fade-down"
        >
          <span class="relative flex h-2.5 w-2.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
          </span>
          <span class="tracking-wide uppercase text-[11px] font-bold">{{
            t('hero.topBadge', { count: totalApps })
          }}</span>
        </div>

        <!-- Profile Logo Badge with Multi-Layer Glow -->
        <div class="relative w-36 h-36 mx-auto mb-10 flex items-center justify-center group" data-aos="zoom-in">
          <div
            class="absolute inset-0 bg-linear-to-tr from-blue-600 via-indigo-600 to-purple-600 rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 animate-pulse-glow"
          ></div>
          <div
            class="relative w-full h-full bg-linear-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/80 dark:border-slate-800 transition-transform duration-500 group-hover:scale-105"
          >
            <span class="text-white font-black text-6xl tracking-tighter drop-shadow-md">PH</span>
          </div>
        </div>

        <!-- Main Headline -->
        <h1
          class="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {{ t('hero.greeting') }}<br class="hidden sm:block" />
          <span class="gradient-text-primary font-heading">
            {{ t('hero.name') }}
          </span>
        </h1>

        <!-- Bio Paragraph -->
        <p
          class="text-lg sm:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span class="font-bold text-slate-900 dark:text-white">{{ t('hero.role') }}</span> — {{ t('hero.bio') }}
        </p>

        <!-- CTA App Store Buttons -->
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <a
            href="https://apps.apple.com/developer/nagy-solaiman/id1848573493"
            target="_blank"
            class="sheen-effect group relative w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-950 dark:bg-slate-900 text-white shadow-xl shadow-slate-900/20 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 border border-slate-800 dark:border-slate-700"
          >
            <div class="relative flex items-center justify-center gap-3.5">
              <Icon name="simple-icons:apple" class="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
              <div class="text-left">
                <div class="text-[10px] uppercase font-medium tracking-widest text-slate-400 mb-0.5">
                  {{ t('hero.downloadOnThe') }}
                </div>
                <div class="font-extrabold text-lg leading-none font-heading">App Store</div>
              </div>
            </div>
          </a>

          <a
            href="https://play.google.com/store/apps/dev?id=8062598971207894089"
            target="_blank"
            class="sheen-effect group relative w-full sm:w-auto px-8 py-4 rounded-2xl bg-linear-to-r from-emerald-600 to-teal-700 text-white shadow-xl shadow-emerald-600/20 hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-1 border border-emerald-500/30"
          >
            <div class="relative flex items-center justify-center gap-3.5">
              <Icon
                name="simple-icons:googleplay"
                class="w-7 h-7 text-white group-hover:scale-110 transition-transform"
              />
              <div class="text-left">
                <div class="text-[10px] uppercase font-medium tracking-widest text-emerald-100 mb-0.5">
                  {{ t('hero.getItOn') }}
                </div>
                <div class="font-extrabold text-lg leading-none font-heading tracking-wide">Google Play</div>
              </div>
            </div>
          </a>
        </div>

        <!-- Metrics & Stats Grid -->
        <div
          class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8 border-t border-slate-200/80 dark:border-slate-800"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div class="glass-card glass-card-hover p-6 rounded-3xl text-center group">
            <div
              class="text-4xl sm:text-5xl font-black font-heading text-slate-900 dark:text-white mb-2 group-hover:scale-105 transition-transform"
            >
              {{ totalApps }}+
            </div>
            <div class="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
              {{ t('hero.appsPublished') }}
            </div>
          </div>

          <div class="glass-card glass-card-hover p-6 rounded-3xl text-center group">
            <div
              class="text-4xl sm:text-5xl font-black font-heading gradient-text-primary mb-2 group-hover:scale-105 transition-transform"
            >
              {{ totalDownloads }}
            </div>
            <div class="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
              {{ t('hero.totalDownloads') }}
            </div>
          </div>

          <div class="glass-card glass-card-hover p-6 rounded-3xl text-center group">
            <div
              class="flex items-center justify-center gap-1.5 text-4xl sm:text-5xl font-black font-heading text-amber-500 mb-2 group-hover:scale-105 transition-transform"
            >
              {{ averageRating }}
              <Icon
                name="heroicons:star-solid"
                class="w-8 h-8 sm:w-10 sm:h-10 text-amber-400 fill-amber-400 drop-shadow-md"
              />
            </div>
            <div class="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
              {{ t('hero.averageRating') }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import appsData from '../data/appsData.json';

const { t } = useI18n();

const totalApps = computed(() => {
  return appsData.length;
});

const totalDownloads = computed(() => {
  let count = 0;
  appsData.forEach((app) => {
    if (app.playStoreData?.maxInstalls) {
      count += Math.floor(app.playStoreData.maxInstalls * 1.1);
    }
  });

  if (count >= 1000000) return (count / 1000000).toFixed(1).replace(/\.0$/, '') + 'M+';
  if (count >= 1000) return (count / 1000).toFixed(1).replace(/\.0$/, '') + 'K+';
  return count + '+';
});

const averageRating = computed(() => {
  let totalScore = 0;
  let scoreCount = 0;

  appsData.forEach((app) => {
    const score = app.appStoreData?.score || app.playStoreData?.score;
    if (score && score > 0) {
      totalScore += Number(score);
      scoreCount++;
    }
  });

  return scoreCount > 0 ? (totalScore / scoreCount).toFixed(1) : '0.0';
});
</script>
