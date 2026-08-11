<template>
  <section id="web-projects" class="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <div
          class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider mb-4"
        >
          <Icon name="heroicons:code-bracket" class="w-4 h-4" />
          <span>{{ t('webProjects.badge') }}</span>
        </div>
        <h2 class="text-4xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white mb-6 tracking-tight">
          {{ t('webProjects.headingMain') }}<span class="gradient-text-primary">{{ t('webProjects.headingGradient') }}</span>
        </h2>
        <p class="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
          {{ t('webProjects.subtitle') }}
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(proj, index) in projects"
          :key="proj.title"
          class="glass-card glass-card-hover group rounded-3xl overflow-hidden flex flex-col justify-between"
          data-aos="zoom-in"
          :data-aos-delay="(index + 1) * 100"
        >
          <!-- Image Preview Header -->
          <div class="h-56 relative overflow-hidden shrink-0 border-b border-slate-200/60 dark:border-slate-800">
            <!-- Badges -->
            <div class="absolute top-4 left-4 z-20 flex flex-col gap-2">
              <span
                v-if="proj?.isSpecial"
                class="bg-linear-to-r from-purple-600 to-indigo-600 text-white text-[10px] uppercase tracking-widest font-extrabold px-3.5 py-1 rounded-full shadow-lg shadow-purple-600/30"
              >
                {{ t('webProjects.featuredBadge') }}
              </span>
            </div>
            
            <span
              v-if="proj.isNew"
              class="absolute top-4 right-4 bg-linear-to-r from-emerald-500 to-teal-600 text-white text-[10px] uppercase tracking-widest font-extrabold px-3.5 py-1 rounded-full z-20 shadow-lg shadow-emerald-500/30"
            >
              {{ t('webProjects.latestBadge') }}
            </span>

            <img
              :src="proj.image"
              :alt="proj.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            
            <!-- Gradient Hover Overlay -->
            <div
              class="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]"
            ></div>
          </div>

          <!-- Content Body -->
          <div class="p-6 sm:p-8 flex-1 flex flex-col justify-between">
            <div>
              <h3
                class="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
              >
                {{ proj.title }}
              </h3>

              <p class="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed font-light whitespace-pre-line">
                {{ proj.description }}
              </p>
            </div>

            <!-- Action Links Footer -->
            <div class="flex items-center gap-4 pt-4 border-t border-slate-200/60 dark:border-slate-800 mt-auto">
              <a
                v-if="proj.live"
                :href="proj.live"
                target="_blank"
                class="flex items-center gap-2 text-xs sm:text-sm font-bold px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition shadow-md shadow-blue-600/30"
              >
                <Icon name="heroicons:globe-alt" class="w-4 h-4" /> {{ t('webProjects.viewProject') }}
              </a>
              <a
                v-if="proj.github"
                :href="proj.github"
                target="_blank"
                class="flex items-center gap-2 text-xs sm:text-sm font-bold px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition"
              >
                <Icon name="simple-icons:github" class="w-4 h-4" /> {{ t('webProjects.sourceCode') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';

const { t } = useI18n();

const projects = computed(() => [
  {
    title: 'AutoScribe AI Web Portal',
    description: 'Online AI voice scribe & meeting note taker. Transcribe audio to structured summaries across 9 specialized workspaces.',
    live: 'https://autoscribe.pejoal.com',
    image: 'https://play-lh.googleusercontent.com/POH4otUdQHtxYbMYzGDULbUB6IFyawGP_cMPhIRm2r_eEe-AU2gNVSyHRnEqRDPF4Q6F_LxCPescAozkk6I2zQ',
    isNew: true,
    isSpecial: true,
  },
  {
    title: t('webProjects.p1Title'),
    description: t('webProjects.p1Desc'),
    live: 'https://project-manager-tvrw.onrender.com/payroll/dashboard',
    image: '/assets/erp.png',
    isNew: true,
    isSpecial: true,
  },
  {
    title: t('webProjects.p2Title'),
    description: t('webProjects.p2Desc'),
    github: 'https://github.com/Pejoal/ecommerce',
    image: '/assets/Screenshot2.png',
    isNew: true,
  },
  {
    title: t('webProjects.p3Title'),
    description: t('webProjects.p3Desc'),
    github: 'https://github.com/Pejoal/Termin',
    image: '/assets/appointments.png',
  },
  {
    title: t('webProjects.p4Title'),
    description: t('webProjects.p4Desc'),
    github: 'https://github.com/Pejoal/Game',
    image: '/assets/game1.png',
  },
  {
    title: t('webProjects.p5Title'),
    description: t('webProjects.p5Desc'),
    github: 'https://github.com/Pejoal/Social-Media-Platform',
    image: '/assets/social_media_logo.png',
  },
]);
</script>
