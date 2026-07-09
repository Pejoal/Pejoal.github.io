<template>
  <section id="skills" class="py-20 px-4 bg-linear-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 mb-6 tracking-tight">Technical Arsenal & Leadership</h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto">A comprehensive blend of modern engineering practices, cloud infrastructure, and strategic problem-solving.</p>
      </div>

      <!-- ==================== TECHNICAL SKILLS ==================== -->
      <div class="space-y-16 mb-20">
        <!-- Frontend -->
        <SkillCategory
          title="Frontend Architecture"
          icon="heroicons:code-bracket"
          color="from-fuchsia-500 to-cyan-500"
          :skills="frontendSkills"
          :progress-ref="frontendProgress"
          data-aos="fade-right"
        />

        <!-- Mobile -->
        <SkillCategory
          title="Mobile Ecosystems"
          icon="heroicons:device-phone-mobile"
          color="from-indigo-500 via-purple-500 to-pink-500"
          :skills="mobileSkills"
          :progress-ref="mobileProgress"
          data-aos="fade-left"
        />

        <!-- Backend -->
        <SkillCategory
          title="Backend Engineering"
          icon="heroicons:server"
          color="from-blue-600 to-cyan-400"
          :skills="backendSkills"
          :progress-ref="backendProgress"
          data-aos="fade-right"
        />

        <!-- Database & DevOps -->
        <SkillCategory
          title="Database & Cloud Infrastructure"
          icon="heroicons:cog-6-tooth"
          color="from-orange-500 to-rose-500"
          :skills="dbDevOpsSkills"
          :progress-ref="dbDevOpsProgress"
          data-aos="fade-left"
        />

        <!-- Testing & Tools -->
        <SkillCategory
          title="Testing & Dev Workflow"
          icon="heroicons:beaker"
          color="from-emerald-400 to-teal-500"
          :skills="testingToolsSkills"
          :progress-ref="testingToolsProgress"
          data-aos="fade-right"
        />
      </div>

      <!-- ==================== SOFT SKILLS ==================== -->
      <div>
        <h3 class="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-linear-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 mb-12 tracking-tight" data-aos="fade-up">
          Strategic Leadership
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div
            v-for="(skill, i) in softSkills"
            :key="skill.name"
            class="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            data-aos="zoom-in"
            :data-aos-delay="i * 100"
          >
            <div
              class="w-20 h-20 mb-6 rounded-2xl bg-linear-to-br from-gray-900 to-gray-800 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 relative"
            >
              <div class="absolute inset-0 rounded-2xl bg-linear-to-br from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-20 transition-opacity blur-md"></div>
              <Icon :name="skill.icon" class="w-10 h-10 text-white relative z-10" />
            </div>
            <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">{{ skill.name }}</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">{{ skill.desc }}</p>
            <div class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                ref="softProgress"
                class="h-full bg-linear-to-r from-emerald-400 to-teal-500 rounded-full transition-all duration-1200 ease-out"
                :style="{ width: '0%' }"
              ></div>
            </div>
            <span class="mt-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">{{ skill.level }}%</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue';

// ──────────────────────────────────────
// Technical Skills – Categorized
// ──────────────────────────────────────
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

// ──────────────────────────────────────
// Soft Skills
// ──────────────────────────────────────
const softSkills = [
  { name: 'Architectural Vision', level: 94, desc: 'Designing resilient, scalable systems from the ground up.', icon: 'heroicons:puzzle-piece' },
  { name: 'Executive Communication', level: 90, desc: 'Translating complex technical concepts for stakeholders.', icon: 'heroicons:chat-bubble-left-right' },
  { name: 'Cross-Functional Leadership', level: 88, desc: 'Driving alignment between product, design, and engineering.', icon: 'heroicons:user-group' },
  { name: 'Agile Delivery', level: 91, desc: 'Iterative, rapid shipping without compromising quality.', icon: 'heroicons:clock' },
  { name: 'Strategic Adaptability', level: 89, desc: 'Pivoting effectively in fast-paced tech environments.', icon: 'heroicons:arrows-up-down' },
  { name: 'UX-Driven Engineering', level: 87, desc: 'Engineering with a relentless focus on the end-user.', icon: 'heroicons:light-bulb' },
];

// ──────────────────────────────────────
// Progress Refs (one per category)
// ──────────────────────────────────────
const frontendProgress = ref([]);
const mobileProgress = ref([]);
const backendProgress = ref([]);
const dbDevOpsProgress = ref([]);
const testingToolsProgress = ref([]);
const softProgress = ref([]);

// ──────────────────────────────────────
// Animate All Progress Bars
// ──────────────────────────────────────
const animateProgress = (refArray, skills) => {
  nextTick(() => {
    refArray.value.forEach((el, i) => {
      if (el && skills[i]) {
        el.style.width = `${skills[i].level}%`;
      }
    });
  });
};

onMounted(() => {
  // Animate each category with slight delay
  setTimeout(() => animateProgress(frontendProgress, frontendSkills), 300);
  setTimeout(() => animateProgress(mobileProgress, mobileSkills), 400);
  setTimeout(() => animateProgress(backendProgress, backendSkills), 500);
  setTimeout(() => animateProgress(dbDevOpsProgress, dbDevOpsSkills), 600);
  setTimeout(() => animateProgress(testingToolsProgress, testingToolsSkills), 700);
  setTimeout(() => animateProgress(softProgress, softSkills), 800);
});
</script>
