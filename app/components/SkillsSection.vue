<template>
  <section id="skills" class="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
          <Icon name="heroicons:cpu-chip" class="w-4 h-4" /> {{ t('skills.badge') }}
        </div>
        <h2 class="text-4xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white mb-6 tracking-tight">
          {{ t('skills.headingMain') }}<span class="gradient-text-primary">{{ t('skills.headingGradient') }}</span>
        </h2>
        <p class="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-light max-w-2xl mx-auto">{{ t('skills.subtitle') }}</p>
      </div>

      <!-- TECHNICAL SKILLS CATEGORIES -->
      <div class="space-y-10 mb-20">
        <!-- Frontend -->
        <SkillCategory
          :title="t('skills.frontend')"
          icon="heroicons:code-bracket"
          color="from-fuchsia-500 via-purple-500 to-cyan-500"
          :skills="frontendSkills"
          :progress-ref="frontendProgress"
          data-aos="fade-right"
        />

        <!-- Mobile -->
        <SkillCategory
          :title="t('skills.mobile')"
          icon="heroicons:device-phone-mobile"
          color="from-indigo-500 via-purple-500 to-pink-500"
          :skills="mobileSkills"
          :progress-ref="mobileProgress"
          data-aos="fade-left"
        />

        <!-- Backend -->
        <SkillCategory
          :title="t('skills.backend')"
          icon="heroicons:server"
          color="from-blue-600 via-indigo-500 to-cyan-400"
          :skills="backendSkills"
          :progress-ref="backendProgress"
          data-aos="fade-right"
        />

        <!-- Database & DevOps -->
        <SkillCategory
          :title="t('skills.database')"
          icon="heroicons:cog-6-tooth"
          color="from-orange-500 via-amber-500 to-rose-500"
          :skills="dbDevOpsSkills"
          :progress-ref="dbDevOpsProgress"
          data-aos="fade-left"
        />

        <!-- Testing & Tools -->
        <SkillCategory
          :title="t('skills.testing')"
          icon="heroicons:beaker"
          color="from-emerald-400 via-teal-500 to-cyan-500"
          :skills="testingToolsSkills"
          :progress-ref="testingToolsProgress"
          data-aos="fade-right"
        />
      </div>

      <!-- SOFT SKILLS -->
      <div>
        <h3 class="text-3xl font-extrabold font-heading text-center text-slate-900 dark:text-white mb-12 tracking-tight" data-aos="fade-up">
          {{ t('skills.leadership') }}
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div
            v-for="(skill, i) in softSkills"
            :key="i"
            class="glass-card glass-card-hover flex flex-col items-center text-center p-8 rounded-3xl group"
            data-aos="zoom-in"
            :data-aos-delay="i * 100"
          >
            <div
              class="w-20 h-20 mb-6 rounded-2xl bg-linear-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center shadow-xl shadow-slate-900/20 group-hover:scale-110 transition-transform duration-300 relative"
            >
              <div class="absolute inset-0 rounded-2xl bg-linear-to-br from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-30 transition-opacity blur-md"></div>
              <Icon :name="skill.icon" class="w-10 h-10 text-white relative z-10" />
            </div>
            <h4 class="text-xl font-bold font-heading text-slate-900 dark:text-white mb-2">{{ skill.name }}</h4>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4 font-light leading-relaxed">{{ skill.desc }}</p>
            
            <div class="w-full h-2.5 bg-slate-200/80 dark:bg-slate-800 rounded-full overflow-hidden p-0.5">
              <div
                ref="softProgress"
                class="h-full bg-linear-to-r from-emerald-400 to-teal-500 rounded-full transition-all duration-1200 ease-out shadow-sm"
                :style="{ width: '0%' }"
              ></div>
            </div>
            <span class="mt-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">{{ skill.level }}% {{ t('skills.mastery') }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { nextTick, onMounted, ref, computed, watch } from 'vue';

const { t, locale } = useI18n();

const frontendSkills = [
  { name: 'Vue / Nuxt.js', level: 88, icon: 'simple-icons:nuxtdotjs' },
  { name: 'React', level: 92, icon: 'simple-icons:react' },
  { name: 'Next.js', level: 85, icon: 'simple-icons:nextdotjs' },
  { name: 'Svelte', level: 80, icon: 'simple-icons:svelte' },
  { name: 'Tailwind CSS', level: 96, icon: 'simple-icons:tailwindcss' },
  { name: 'HTML / CSS / JS', level: 98, icon: 'simple-icons:html5' },
  { name: 'TypeScript', level: 87, icon: 'simple-icons:typescript' },
];

const mobileSkills = [
  { name: 'React Native', level: 95, icon: 'simple-icons:react' },
  { name: 'Expo', level: 92, icon: 'simple-icons:expo' },
];

const backendSkills = [
  { name: 'Laravel / PHP', level: 85, icon: 'simple-icons:laravel' },
  { name: 'Node.js', level: 82, icon: 'simple-icons:nodedotjs' },
  { name: 'Express.js', level: 84, icon: 'simple-icons:express' },
  { name: 'GraphQL', level: 78, icon: 'simple-icons:graphql' },
  { name: 'REST APIs', level: 90, icon: 'heroicons:globe-alt' },
];

const dbDevOpsSkills = [
  { name: 'MongoDB', level: 87, icon: 'simple-icons:mongodb' },
  { name: 'MySQL / MariaDB', level: 90, icon: 'simple-icons:mysql' },
  { name: 'PostgreSQL', level: 80, icon: 'simple-icons:postgresql' },
  { name: 'Redis', level: 75, icon: 'simple-icons:redis' },
  { name: 'Docker', level: 88, icon: 'simple-icons:docker' },
  { name: 'Docker Compose', level: 86, icon: 'simple-icons:docker' },
  { name: 'CI/CD (GitHub Actions)', level: 82, icon: 'simple-icons:githubactions' },
  { name: 'AWS (EC2, S3)', level: 70, icon: 'simple-icons:amazonaws' },
];

const testingToolsSkills = [
  { name: 'Jest', level: 85, icon: 'simple-icons:jest' },
  { name: 'Cypress', level: 78, icon: 'simple-icons:cypress' },
  { name: 'Git & GitHub', level: 93, icon: 'simple-icons:git' },
  { name: 'Figma', level: 77, icon: 'simple-icons:figma' },
  { name: 'Postman', level: 90, icon: 'simple-icons:postman' },
];

const softSkills = computed(() => [
  { name: t('softSkills.s1Name'), level: 94, desc: t('softSkills.s1Desc'), icon: 'heroicons:puzzle-piece' },
  { name: t('softSkills.s2Name'), level: 90, desc: t('softSkills.s2Desc'), icon: 'heroicons:chat-bubble-left-right' },
  { name: t('softSkills.s3Name'), level: 88, desc: t('softSkills.s3Desc'), icon: 'heroicons:user-group' },
  { name: t('softSkills.s4Name'), level: 91, desc: t('softSkills.s4Desc'), icon: 'heroicons:clock' },
  { name: t('softSkills.s5Name'), level: 89, desc: t('softSkills.s5Desc'), icon: 'heroicons:arrows-up-down' },
  { name: t('softSkills.s6Name'), level: 87, desc: t('softSkills.s6Desc'), icon: 'heroicons:light-bulb' },
]);

const frontendProgress = ref([]);
const mobileProgress = ref([]);
const backendProgress = ref([]);
const dbDevOpsProgress = ref([]);
const testingToolsProgress = ref([]);
const softProgress = ref([]);

const animateProgress = (refArray, skills) => {
  nextTick(() => {
    refArray.value.forEach((el, i) => {
      if (el && skills[i]) {
        el.style.width = `${skills[i].level}%`;
      }
    });
  });
};

const runAllAnimations = (baseDelay = 0) => {
  setTimeout(() => animateProgress(frontendProgress, frontendSkills), baseDelay + 300);
  setTimeout(() => animateProgress(mobileProgress, mobileSkills), baseDelay + 400);
  setTimeout(() => animateProgress(backendProgress, backendSkills), baseDelay + 500);
  setTimeout(() => animateProgress(dbDevOpsProgress, dbDevOpsSkills), baseDelay + 600);
  setTimeout(() => animateProgress(testingToolsProgress, testingToolsSkills), baseDelay + 700);
  setTimeout(() => animateProgress(softProgress, softSkills.value), baseDelay + 800);
};

onMounted(() => runAllAnimations());

watch(locale, () => {
  nextTick(() => runAllAnimations(50));
});
</script>
