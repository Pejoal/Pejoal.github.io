<script setup>
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faApple,
  faBootstrap,
  faCss3Alt,
  faDocker,
  faGit,
  faGithub,
  faGooglePlay,
  faHtml5,
  faJs,
  faLaravel,
  faLinux,
  faNodeJs,
  faPhp,
  faReact,
  faSass,
  faVuejs,
} from '@fortawesome/free-brands-svg-icons';
import { faCode, faGlobe, faMobile, faMoon, faStar, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { onMounted, ref } from 'vue';

library.add(
  faGithub,
  faHtml5,
  faCss3Alt,
  faJs,
  faNodeJs,
  faSass,
  faBootstrap,
  faVuejs,
  faReact,
  faPhp,
  faLaravel,
  faGit,
  faDocker,
  faLinux,
  faGooglePlay,
  faApple,
  faSun,
  faMoon,
  faGlobe,
  faMobile,
  faStar,
  faCode
);

// Dark mode toggle
const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  localStorage.setItem('darkMode', isDarkMode.value);
  document.documentElement.classList.toggle('dark', isDarkMode.value);
};

onMounted(() => {
  const savedDarkMode = localStorage.getItem('darkMode');
  isDarkMode.value = savedDarkMode
    ? savedDarkMode === 'true'
    : window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.classList.toggle('dark', isDarkMode.value);
  AOS.init({ duration: 800, easing: 'ease-out-cubic' });
});

const skills = ref({
  Frontend: [
    { name: 'HTML 5', icon: faHtml5, proficiency: 95 },
    { name: 'CSS 3', icon: faCss3Alt, proficiency: 90 },
    { name: 'Sass', icon: faSass, proficiency: 85 },
    { name: 'Bootstrap 5', icon: faBootstrap, proficiency: 80 },
    { name: 'Tailwind CSS', proficiency: 90 },
    { name: 'JavaScript', icon: faJs, proficiency: 85 },
    { name: 'React.js', icon: faReact, proficiency: 80 },
    { name: 'Vue 3', icon: faVuejs, proficiency: 90 },
    { name: 'Inertia.js', proficiency: 75 },
    { name: 'Cypress', proficiency: 70 },
    { name: 'TypeScript', proficiency: 70 },
  ],
  Backend: [
    { name: 'PHP 8', icon: faPhp, proficiency: 85 },
    { name: 'Node.js', icon: faNodeJs, proficiency: 80 },
    { name: 'Laravel 11', icon: faLaravel, proficiency: 90 },
    { name: 'MySQL - MariaDB', proficiency: 85 },
    { name: 'MongoDB', proficiency: 75 },
    { name: 'PostgreSQL', proficiency: 70 },
  ],
  Other: [
    { name: 'Git', icon: faGit, proficiency: 90 },
    { name: 'GitHub', icon: faGithub, proficiency: 90 },
    { name: 'Docker', icon: faDocker, proficiency: 80 },
    { name: 'Linux', icon: faLinux, proficiency: 85 },
    { name: 'AWS', proficiency: 70 },
    { name: 'Google Cloud', proficiency: 65 },
  ],
});

const softSkills = ref({
  'Soft Skills': ['Communication', 'Teamwork', 'Problem-solving', 'Adaptability', 'Time Management'],
});

const projects = ref([
  {
    title: 'E-Commerce',
    description:
      'This is an E-commerce project developed using Vue.js and Laravel. It features a user-friendly interface with a responsive design that works well on both desktop and mobile devices. The application includes user authentication, product listing, shopping cart functionality, and secure payment processing. It also has an admin panel for managing products, orders, and users.',
    link: 'https://github.com/Pejoal/ecommerce',
    liveLink: '#',
    image: 'assets/Screenshot2.png',
  },
  {
    title: 'Appointments App',
    description:
      'This app was designed to streamline appointment scheduling and coordination for a driving school. It aimed to enhance efficiency and provide a seamless experience for both instructors and students.',
    link: 'https://github.com/Pejoal/Termin',
    liveLink: '#',
    image: 'assets/appointments.png',
  },
  {
    title: 'Cards Game',
    description:
      'A multiplayer card game with features such as card deck management (shuffling, dealing, etc.), animations for card movements, responsive design for different devices, and real-time playing. Developed using Laravel, Inertia, Vue 3, TailwindCSS, Docker, and MySQL.',
    link: 'https://github.com/Pejoal/Game',
    liveLink: '#',
    image: 'assets/game1.png',
  },
  {
    title: 'Social Media App',
    description:
      'A social media application developed using Vue.js and Laravel. The app includes features like user authentication, real-time chat, post creation and management, likes, comments, and a friend system. It also includes a responsive design for both desktop and mobile devices.',
    link: 'https://github.com/Pejoal/Social-Media-Platform',
    liveLink: '#',
    image: 'assets/social_media_logo.png',
  },
]);

const mobileApps = ref([
  {
    id: 'com.pejoal.myapp',
    name: 'German Learning App',
    description:
      'Comprehensive German language learning app with interactive lessons, vocabulary building, and pronunciation practice.',
    icon: '🇩🇪',
    category: 'Education',
  },
  {
    id: 'com.pejoal.learn_english_app',
    name: 'English Learning App',
    description: 'Master English with engaging lessons, grammar exercises, and real-world conversation practice.',
    icon: '🇺🇸',
    category: 'Education',
  },
  {
    id: 'com.pejoal.learn_french_app',
    name: 'French Learning App',
    description: 'Learn French from basics to advanced with cultural insights and pronunciation guides.',
    icon: '🇫🇷',
    category: 'Education',
  },
  {
    id: 'com.pejoal.learn_spanish_app',
    name: 'Spanish Learning App',
    description: 'Dive into Spanish language and culture with interactive content and speech recognition.',
    icon: '🇪🇸',
    category: 'Education',
  },
  {
    id: 'com.pejoal.learn_italian_app',
    name: 'Italian Learning App',
    description: 'Experience the beauty of Italian language through immersive learning modules.',
    icon: '🇮🇹',
    category: 'Education',
  },
  {
    id: 'com.pejoal.learn_russian',
    name: 'Russian Learning App',
    description: 'Master Cyrillic script and Russian language with step-by-step progression.',
    icon: '🇷🇺',
    category: 'Education',
  },
  {
    id: 'com.pejoal.iq_test',
    name: 'IQ Test Pro',
    description: 'Challenge your mind with comprehensive IQ tests and cognitive assessments.',
    icon: '🧠',
    category: 'Entertainment',
  },
  {
    id: 'com.pejoal.german_for_nurses',
    name: 'German for Nurses',
    description: 'Specialized German language app designed for healthcare professionals and nursing students.',
    icon: '👩‍⚕️',
    category: 'Medical',
  },
  {
    id: 'com.pejoal.videoplayer',
    name: 'Advanced Video Player',
    description:
      'Feature-rich video player with subtitle support, playback controls, and multiple format compatibility.',
    icon: '🎬',
    category: 'Media',
  },
]);

const languages = ref([
  { language: 'Arabic', proficiency: 'Mother Tongue' },
  { language: 'English', proficiency: 'Fluent' },
  { language: 'German', proficiency: 'Conversational' },
]);

const jobs = ref([
  // {
  //   id: 1,
  //   title: 'Full Stack Developer',
  //   company: 'SMEXPAND',
  //   startDate: 'March 2023',
  //   endDate: 'December 2023',
  //   description:
  //     'Developed an Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) system. The ERP module streamlined business processes and operations, including sales, HR, and inventory management. The CRM module improved customer service, marketing, and communication strategies. Technologies used include Vue.js for the frontend, Laravel for the backend, and MySQL for the database.',
  // },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'Freelancer.com',
    startDate: 'January 2020',
    description:
      'Worked on various projects across different domains, primarily focusing on web development and design.',
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    company: 'Upwork',
    startDate: 'January 2021',
    description:
      'Assisted in the development of several small to medium scale projects, gaining experience in multiple technologies.',
  },
  // {
  //   id: 4,
  //   title: 'Full Stack Developer',
  //   company: 'Improov',
  //   startDate: 'Sep 2022',
  //   endDate: 'Feb 2023',
  //   description:
  //     'As a Full Stack Developer at E-State, I was responsible for developing and maintaining web applications using a variety of technologies including Vue.js, Laravel, and MariaDB. I worked closely with the product team to design and implement new features, and with the QA team to identify and fix bugs. I also played a key role in migrating legacy systems to modern architectures, improving performance and scalability. During my tenure, I contributed to several major projects, including the development of a property management system and an online booking platform.',
  // },
]);

const certificates = ref([
  {
    id: 1,
    name: 'German Language B1 - Goethe',
    place: 'Cairo',
    date: 'April 2022',
  },
  {
    id: 2,
    name: 'German B2 TELC DTB',
    place: 'VHS Wesel',
    date: 'August 2025',
  },
]);
</script>

<template>
  <section
    class="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-gray-50 dark:from-gray-900 dark:via-teal-900 dark:to-gray-800 flex flex-col justify-center items-center py-12 px-4 transition-colors duration-300"
  >
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute -top-10 -left-10 w-72 h-72 bg-gradient-to-r from-teal-200 to-blue-200 dark:from-teal-800 dark:to-blue-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-20 animate-pulse"
      ></div>
      <div
        class="absolute top-1/2 -right-10 w-96 h-96 bg-gradient-to-r from-blue-200 to-teal-200 dark:from-blue-800 dark:to-teal-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-20 animate-pulse animation-delay-2000"
      ></div>
      <div
        class="absolute -bottom-10 left-1/3 w-80 h-80 bg-gradient-to-r from-teal-200 to-gray-200 dark:from-teal-800 dark:to-gray-800 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-20 animate-pulse animation-delay-4000"
      ></div>
    </div>

    <!-- Dark mode toggle -->
    <button
      @click="toggleDarkMode"
      aria-label="Toggle dark mode"
      class="fixed top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600 hover:scale-110"
      data-aos="zoom-in"
    >
      <FontAwesomeIcon :icon="isDarkMode ? faSun : faMoon" class="text-xl text-teal-600 dark:text-teal-400" />
    </button>

    <div
      class="bg-white dark:bg-gray-800 shadow-2xl rounded-3xl w-full max-w-6xl p-8 transition-colors duration-300 relative z-10"
    >
      <!-- Header Section -->
      <section
        class="p-8 bg-gradient-to-r from-teal-500 to-blue-600 dark:from-teal-600 dark:to-blue-700 text-white shadow-lg rounded-2xl mb-12"
        data-aos="zoom-out-left"
      >
        <h1 class="font-extrabold text-4xl mb-6">Pejoal Hanna (22)</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p class="text-lg font-semibold mb-3">🚀 Full Stack Developer</p>
            <p class="text-sm mb-3">📍 Rees, Germany</p>
            <p class="text-sm mb-3">🗣️ Languages: English, German, Arabic</p>
            <p class="text-sm mb-3">🎯 Hobbies: Coding, Reading, Traveling</p>
          </div>
          <div class="flex items-center justify-center md:justify-end">
            <div class="text-center">
              <p class="text-lg font-bold">📧 Contact me at</p>
              <a
                href="mailto:pejoal.business@gmail.com"
                class="text-teal-200 hover:text-teal-100 transition-colors duration-300 text-lg font-semibold underline"
              >
                pejoal.business@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Google Play Developer Profile Section -->
      <section class="my-12" data-aos="fade-up">
        <div class="flex items-center justify-center mb-8">
          <FontAwesomeIcon :icon="faGooglePlay" class="w-8 h-8 text-teal-500 dark:text-teal-400 mr-3" />
          <h2 class="font-extrabold text-4xl text-gray-800 dark:text-white relative">
            Google Play Developer Profile
            <span class="absolute -bottom-2 left-0 w-16 h-1 bg-teal-500 rounded"></span>
          </h2>
        </div>
        <div
          class="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900 dark:to-blue-900 rounded-xl shadow-lg p-6 text-center border border-teal-200 dark:border-teal-800"
        >
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Explore all my mobile apps on my Google Play Developer profile.
          </p>
          <a
            href="https://play.google.com/store/apps/dev?id=7584224843331524823"
            class="inline-flex items-center px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-colors duration-300"
            target="_blank"
          >
            <FontAwesomeIcon :icon="faGooglePlay" class="mr-2" />
            Visit Google Play Profile
          </a>
        </div>
      </section>

      <!-- Section Divider -->
      <div class="flex items-center justify-center my-12">
        <div class="flex-1 h-px bg-gradient-to-r from-transparent via-teal-300 dark:via-teal-600 to-transparent"></div>
        <FontAwesomeIcon :icon="faStar" class="mx-4 text-teal-500 dark:text-teal-400" />
        <div class="flex-1 h-px bg-gradient-to-r from-teal-300 dark:via-teal-600 to-transparent"></div>
      </div>

      <!-- Mobile Apps Section -->
      <section class="my-12">
        <div class="flex items-center justify-center mb-8">
          <FontAwesomeIcon :icon="faMobile" class="w-8 h-8 text-teal-500 dark:text-teal-400 mr-3" />
          <h2 class="font-extrabold text-4xl text-gray-800 dark:text-white relative">
            Mobile Apps
            <span class="absolute -bottom-2 left-0 w-16 h-1 bg-teal-500 rounded"></span>
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="app in mobileApps"
            :key="app.id"
            class="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900 dark:to-blue-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-teal-200 dark:border-teal-800 hover:scale-105"
            data-aos="flip-up"
            data-aos-duration="600"
          >
            <div class="text-center mb-4">
              <div class="text-4xl mb-3">{{ app.icon }}</div>
              <h3 class="font-bold text-xl text-gray-800 dark:text-white mb-2">{{ app.name }}</h3>
              <span
                class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-teal-100 dark:bg-teal-800 text-teal-800 dark:text-teal-200"
              >
                {{ app.category }}
              </span>
            </div>
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">{{ app.description }}</p>
            <div class="space-y-2">
              <a
                :href="`https://play.google.com/store/apps/details?id=${app.id}`"
                class="flex items-center justify-center w-full px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-colors duration-300"
                target="_blank"
              >
                <FontAwesomeIcon :icon="faGooglePlay" class="mr-2" />
                Google Play
              </a>
              <div class="flex space-x-2">
                <div
                  class="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-lg text-center cursor-not-allowed"
                >
                  <FontAwesomeIcon :icon="faApple" class="mr-2" />
                  Coming Soon
                </div>
                <div
                  class="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-lg text-center cursor-not-allowed"
                >
                  <FontAwesomeIcon :icon="faGlobe" class="mr-2" />
                  Coming Soon
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Divider -->
      <div class="flex items-center justify-center my-12">
        <div class="flex-1 h-px bg-gradient-to-r from-transparent via-teal-300 dark:via-teal-600 to-transparent"></div>
        <FontAwesomeIcon :icon="faCode" class="mx-4 text-teal-500 dark:text-teal-400" />
        <div class="flex-1 h-px bg-gradient-to-r from-teal-300 dark:via-teal-600 to-transparent"></div>
      </div>

      <!-- Projects Section -->
      <section class="my-12">
        <div class="flex items-center justify-center mb-8">
          <FontAwesomeIcon :icon="faGlobe" class="w-8 h-8 text-teal-500 dark:text-teal-400 mr-3" />
          <h2 class="font-extrabold text-4xl text-gray-800 dark:text-white relative">
            Web Projects
            <span class="absolute -bottom-2 left-0 w-16 h-1 bg-teal-500 rounded"></span>
          </h2>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section
            v-for="project in projects"
            :key="project.title"
            class="bg-white dark:bg-gray-700 border border-teal-200 dark:border-teal-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-105"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <img
              :src="project.image"
              :alt="`Screenshot of ${project.title} project`"
              class="w-full h-48 object-cover"
              loading="lazy"
            />
            <div class="p-6">
              <h3 class="text-teal-500 dark:text-teal-400 text-xl font-bold mb-3">
                {{ project.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{{ project.description }}</p>
              <div class="flex flex-wrap gap-3">
                <a
                  :href="project.link"
                  class="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-600 hover:bg-gray-900 dark:hover:bg-gray-500 text-white rounded-lg transition-colors duration-300"
                  target="_blank"
                >
                  <FontAwesomeIcon :icon="faGithub" class="mr-2" />
                  GitHub
                </a>
                <a
                  :href="project.liveLink"
                  class="inline-flex items-center px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-colors duration-300"
                  target="_blank"
                >
                  <FontAwesomeIcon :icon="faGlobe" class="mr-2" />
                  Live Demo
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>

      <!-- Section Divider -->
      <div class="flex items-center justify-center my-12">
        <div class="flex-1 h-px bg-gradient-to-r from-transparent via-teal-300 dark:via-teal-600 to-transparent"></div>
        <FontAwesomeIcon :icon="faStar" class="mx-4 text-teal-500 dark:text-teal-400" />
        <div class="flex-1 h-px bg-gradient-to-r from-teal-300 dark:via-teal-600 to-transparent"></div>
      </div>

      <!-- Skills Section -->
      <section class="my-12">
        <div class="flex items-center justify-center mb-8">
          <FontAwesomeIcon :icon="faCode" class="w-8 h-8 text-teal-500 dark:text-teal-400 mr-3" />
          <h2 class="font-extrabold text-4xl text-gray-800 dark:text-white relative">
            Technical Skills
            <span class="absolute -bottom-2 left-0 w-16 h-1 bg-teal-500 rounded"></span>
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(skillGroup, groupName) in skills"
            :key="groupName"
            class="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900 dark:to-blue-900 rounded-xl shadow-lg p-6 border border-teal-200 dark:border-teal-800"
            data-aos="zoom-out"
            data-aos-duration="600"
          >
            <h3 class="text-teal-500 dark:text-teal-400 font-bold text-xl mb-4">
              {{ groupName }}
            </h3>
            <ul class="space-y-4">
              <li v-for="skill in skillGroup" :key="skill.name" class="flex flex-col text-gray-700 dark:text-gray-300">
                <div class="flex items-center mb-1">
                  <FontAwesomeIcon
                    v-if="skill.icon"
                    :icon="skill.icon"
                    class="mr-3 text-lg text-teal-500 dark:text-teal-400"
                  />
                  <span v-else class="mr-6"></span>
                  <span class="font-medium">{{ skill.name }}</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                  <div
                    class="bg-teal-500 h-2.5 rounded-full transition-all duration-500"
                    :style="{ width: `${skill.proficiency}%` }"
                  ></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Soft Skills Section -->
      <section
        class="my-12 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900 dark:to-blue-900 rounded-xl shadow-lg p-6"
        data-aos="zoom-in"
      >
        <div class="flex items-center justify-center mb-8">
          <FontAwesomeIcon :icon="faStar" class="w-8 h-8 text-teal-500 dark:text-teal-400 mr-3" />
          <h2 class="font-extrabold text-4xl text-gray-800 dark:text-white relative">
            Soft Skills
            <span class="absolute -bottom-2 left-0 w-16 h-1 bg-teal-500 rounded"></span>
          </h2>
        </div>
        <div v-for="(skillGroup, groupName) in softSkills" :key="groupName">
          <ul class="flex flex-wrap gap-4 justify-center">
            <li
              v-for="skill in skillGroup"
              :key="skill"
              class="px-4 py-2 bg-white dark:bg-gray-700 rounded-full shadow-md text-gray-700 dark:text-gray-300 font-medium hover:bg-teal-100 dark:hover:bg-teal-800 transition-colors duration-300"
            >
              {{ skill }}
            </li>
          </ul>
        </div>
      </section>

      <!-- Section Divider -->
      <div class="flex items-center justify-center my-12">
        <div class="flex-1 h-px bg-gradient-to-r from-transparent via-teal-300 dark:via-teal-600 to-transparent"></div>
        <FontAwesomeIcon :icon="faCode" class="mx-4 text-teal-500 dark:text-teal-400" />
        <div class="flex-1 h-px bg-gradient-to-r from-teal-300 dark:via-teal-600 to-transparent"></div>
      </div>

      <!-- Professional Experience Section -->
      <section class="my-12">
        <div class="flex items-center justify-center mb-8">
          <svg
            class="w-8 h-8 text-teal-500 dark:text-teal-400 mr-3"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M20 6h-3V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM9 4h6v2H9V4zm11 15H4V8h3v2h2V8h6v2h2V8h3v11z"
            />
          </svg>
          <h2 class="font-extrabold text-4xl text-gray-800 dark:text-white relative">
            Professional Experience
            <span class="absolute -bottom-2 left-0 w-16 h-1 bg-teal-500 rounded"></span>
          </h2>
        </div>
        <div class="relative border-l-4 border-teal-500 pl-8">
          <div v-for="job in jobs" :key="job.id" class="mb-8 relative" data-aos="fade-right" data-aos-duration="600">
            <div class="absolute w-4 h-4 bg-teal-500 rounded-full -left-2 mt-2"></div>
            <div class="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 border border-teal-200 dark:border-teal-800">
              <h3 class="text-xl font-bold text-gray-800 dark:text-white">{{ job.title }}</h3>
              <p class="text-teal-500 dark:text-teal-400 font-semibold">{{ job.company }}</p>
              <p class="text-gray-600 dark:text-gray-400 mb-3">{{ job.startDate }} - {{ job.endDate || 'Present' }}</p>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">{{ job.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Divider -->
      <div class="flex items-center justify-center my-12">
        <div class="flex-1 h-px bg-gradient-to-r from-transparent via-teal-300 dark:via-teal-600 to-transparent"></div>
        <FontAwesomeIcon :icon="faStar" class="mx-4 text-teal-500 dark:text-teal-400" />
        <div class="flex-1 h-px bg-gradient-to-r from-teal-300 dark:via-teal-600 to-transparent"></div>
      </div>

      <!-- Languages Section -->
      <section
        class="my-12 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900 dark:to-blue-900 rounded-xl shadow-lg p-6"
        data-aos="flip-left"
      >
        <div class="flex items-center justify-center mb-8">
          <svg
            class="w-8 h-8 text-teal-500 dark:text-teal-400 mr-3"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.22-1.79L9 14v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
            />
          </svg>
          <h2 class="font-extrabold text-4xl text-gray-800 dark:text-white relative">
            Languages
            <span class="absolute -bottom-2 left-0 w-16 h-1 bg-teal-500 rounded"></span>
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="language in languages"
            :key="language.language"
            class="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md border-l-4 border-teal-500"
          >
            <p class="font-bold text-gray-800 dark:text-white">{{ language.language }}</p>
            <p class="text-gray-600 dark:text-gray-300">{{ language.proficiency }}</p>
          </div>
        </div>
      </section>

      <!-- Section Divider -->
      <div class="flex items-center justify-center my-12">
        <div class="flex-1 h-px bg-gradient-to-r from-transparent via-teal-300 dark:via-teal-600 to-transparent"></div>
        <FontAwesomeIcon :icon="faCode" class="mx-4 text-teal-500 dark:text-teal-400" />
        <div class="flex-1 h-px bg-gradient-to-r from-teal-300 dark:via-teal-600 to-transparent"></div>
      </div>

      <!-- Certificates Section -->
      <section
        class="my-12 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900 dark:to-blue-900 rounded-xl shadow-lg p-6"
        data-aos="fade-up"
      >
        <div class="flex items-center justify-center mb-8">
          <svg
            class="w-8 h-8 text-teal-500 dark:text-teal-400 mr-3"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9v-2H4V8l8 5 8-5v5h2V6c0-1.1-.9-2-2-2zm-8 7L4 6h16l-8 5zm7 4h2v4h-2v-4zm-3 5h6v2h-6v-2z"
            />
          </svg>
          <h2 class="font-extrabold text-4xl text-gray-800 dark:text-white relative">
            Certificates
            <span class="absolute -bottom-2 left-0 w-16 h-1 bg-teal-500 rounded"></span>
          </h2>
        </div>
        <div class="space-y-6">
          <div
            v-for="certificate in certificates"
            :key="certificate.id"
            class="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md border-l-4 border-teal-500"
          >
            <h3 class="text-lg font-bold text-teal-500 dark:text-teal-400">
              {{ certificate.name }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300">{{ certificate.place }} - {{ certificate.date }}</p>
          </div>
        </div>
      </section>

      <!-- Section Divider -->
      <div class="flex items-center justify-center my-12">
        <div class="flex-1 h-px bg-gradient-to-r from-transparent via-teal-300 dark:via-teal-600 to-transparent"></div>
        <FontAwesomeIcon :icon="faStar" class="mx-4 text-teal-500 dark:text-teal-400" />
        <div class="flex-1 h-px bg-gradient-to-r from-teal-300 dark:via-teal-600 to-transparent"></div>
      </div>

      <!-- CV Section -->
      <section class="my-12 text-center">
        <div class="flex items-center justify-center mb-8">
          <svg
            class="w-8 h-8 text-teal-500 dark:text-teal-400 mr-3"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 16h8v2H8v-2zm0-4h8v2H8v-2z"
            />
            <text x="8" y="10" font-size="6" fill="currentColor">PDF</text>
          </svg>
          <h2 class="font-extrabold text-4xl text-gray-800 dark:text-white relative">
            Curriculum Vitae
            <span class="absolute -bottom-2 left-0 w-16 h-1 bg-teal-500 rounded"></span>
          </h2>
        </div>
        <div>
          <a
            href="Pejoal CV.pdf"
            download
            class="mt-2 inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
          >
            Download CV
          </a>
          <iframe src="Pejoal CV.pdf" class="h-[400px] w-full" frameborder="1"></iframe>
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
