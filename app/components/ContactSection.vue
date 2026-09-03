<template>
  <section id="contact" class="relative pt-4 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
          <Icon name="heroicons:envelope" class="w-4 h-4" /> {{ t('contact.badge') }}
        </div>
        <h2 class="text-4xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white mb-6 tracking-tight">
          {{ t('contact.headingMain') }}<span class="gradient-text-primary">{{ t('contact.headingGradient') }}</span>
        </h2>
        <p class="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          {{ t('contact.subtitle') }}
        </p>
      </div>

      <!-- Action Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        <!-- App Store Card -->
        <a
          href="https://apps.apple.com/developer/pejoal-hanna/id1848573493"
          target="_blank"
          class="glass-card glass-card-hover flex items-center gap-4 p-6 rounded-3xl group"
        >
          <div class="w-14 h-14 rounded-2xl bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <Icon name="simple-icons:appstore" class="w-7 h-7" />
          </div>
          <div>
            <div class="font-bold font-heading text-slate-900 dark:text-white text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">App Store</div>
            <div class="text-xs text-slate-500 dark:text-slate-400 font-medium">{{ t('contact.iosDevProfile') }}</div>
          </div>
        </a>

        <!-- Google Play Card -->
        <a
          href="https://play.google.com/store/apps/dev?id=8062598971207894089"
          target="_blank"
          class="glass-card glass-card-hover flex items-center gap-4 p-6 rounded-3xl group"
        >
          <div class="w-14 h-14 rounded-2xl bg-emerald-600/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <Icon name="simple-icons:googleplay" class="w-7 h-7" />
          </div>
          <div>
            <div class="font-bold font-heading text-slate-900 dark:text-white text-base group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Google Play</div>
            <div class="text-xs text-slate-500 dark:text-slate-400 font-medium">{{ t('contact.androidAppsProfile') }}</div>
          </div>
        </a>

        <!-- GitHub Card -->
        <a
          href="https://github.com/pejoal"
          target="_blank"
          class="glass-card glass-card-hover flex items-center gap-4 p-6 rounded-3xl group"
        >
          <div class="w-14 h-14 rounded-2xl bg-slate-900/10 dark:bg-slate-100/10 text-slate-900 dark:text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <Icon name="simple-icons:github" class="w-7 h-7" />
          </div>
          <div>
            <div class="font-bold font-heading text-slate-900 dark:text-white text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">GitHub</div>
            <div class="text-xs text-slate-500 dark:text-slate-400 font-medium">{{ t('contact.openSourceCode') }}</div>
          </div>
        </a>

        <!-- Portfolio Website Card -->
        <a
          href="https://pejoal.com/"
          target="_blank"
          class="glass-card glass-card-hover flex items-center gap-4 p-6 rounded-3xl group"
        >
          <div class="w-14 h-14 rounded-2xl bg-indigo-600/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <Icon name="heroicons:globe-alt" class="w-7 h-7" />
          </div>
          <div>
            <div class="font-bold font-heading text-slate-900 dark:text-white text-base group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Website</div>
            <div class="text-xs text-slate-500 dark:text-slate-400 font-medium">{{ t('contact.officialHub') }}</div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n();
</script>
