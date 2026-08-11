<template>
  <div class="glass-card p-6 sm:p-8 rounded-3xl space-y-6">
    <!-- Category Header -->
    <div class="flex items-center gap-3 mb-6" data-aos="fade-up">
      <div :class="`w-12 h-12 rounded-2xl bg-linear-to-r ${color} flex items-center justify-center shadow-lg`">
        <Icon :name="icon" class="w-6 h-6 text-white" />
      </div>
      <h3 class="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">{{ title }}</h3>
    </div>

    <!-- Skills Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div
        v-for="(skill, i) in skills"
        :key="skill.name"
        class="space-y-2.5"
        :data-aos="i % 2 === 0 ? 'fade-right' : 'fade-left'"
        :data-aos-delay="i * 80"
      >
        <div class="flex justify-between items-center text-sm font-semibold">
          <div class="flex items-center gap-2.5">
            <Icon :name="skill.icon" class="w-5 h-5 text-blue-500" />
            <span class="text-slate-800 dark:text-slate-200">{{ skill.name }}</span>
          </div>
          <span class="px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold">{{ skill.level }}%</span>
        </div>
        
        <!-- Animated Multi-Tone Progress Bar Container -->
        <div class="h-3 bg-slate-200/80 dark:bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-200/50 dark:border-slate-700/50">
          <div
            :ref="
              (el) => {
                if (el) progressRef[i] = el;
              }
            "
            :class="`h-full bg-linear-to-r ${color} rounded-full transition-all duration-1400 ease-out shadow-sm`"
            :style="{ width: '0%' }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  icon: String,
  color: String,
  skills: Array,
  progressRef: {
    type: Array,
    required: true,
  },
});
</script>
