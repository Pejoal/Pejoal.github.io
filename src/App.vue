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
import { faGlobe, faMobile, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
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
  faMobile
);

// Dark mode toggle
const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  localStorage.setItem('darkMode', isDarkMode.value.toString());
  document.documentElement.classList.toggle('dark', isDarkMode.value);
};

onMounted(() => {
  const savedDarkMode = localStorage.getItem('darkMode');
  if (savedDarkMode !== null) {
    isDarkMode.value = savedDarkMode === 'true';
  } else {
    isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  document.documentElement.classList.toggle('dark', isDarkMode.value);
});

const skills = ref({
  Frontend: [
    { name: 'HTML 5', icon: faHtml5 },
    { name: 'CSS 3', icon: faCss3Alt },
    { name: 'Sass', icon: faSass },
    { name: 'Bootstrap 5', icon: faBootstrap },
    { name: 'Tailwind CSS' },
    { name: 'JavaScript', icon: faJs },
    { name: 'React.js', icon: faReact },
    { name: 'Vue 3', icon: faVuejs },
    { name: 'Inertia.js' },
    { name: 'Cypress' },
    { name: 'TypeScript' },
  ],
  Backend: [
    { name: 'PHP 8', icon: faPhp },
    { name: 'Node.js', icon: faNodeJs },
    { name: 'Laravel 11', icon: faLaravel },
    { name: 'MySQL - MariaDB' },
    { name: 'MongoDB' },
    { name: 'PostgreSQL' },
  ],
  Other: [
    { name: 'Git', icon: faGit },
    { name: 'GitHub', icon: faGithub },
    { name: 'Docker', icon: faDocker },
    { name: 'Linux', icon: faLinux },
    { name: 'AWS' },
    { name: 'Google Cloud' },
  ],
});

const softSkills = ref({
  'Soft Skills': ['Communication', 'Teamwork', 'Problem-solving'],
});

AOS.init();

const projects = ref([
  {
    title: 'E-Commerce',
    description:
      'This is an E-commerce project that I developed using Vue.js and Laravel. It features a user-friendly interface with a responsive design that works well on both desktop and mobile devices. The application includes features such as user authentication, product listing, shopping cart functionality, and secure payment processing. It also has an admin panel for managing products, orders, and users.',
    link: 'https://github.com/Pejoal/ecommerce',
    liveLink: 'https://pejoal.live/home',
    image: 'assets/Screenshot2.png',
  },
  {
    title: 'Appointments App',
    description:
      'This app was designed to streamline appointment scheduling and coordination for a driving school. It aimed to enhance efficiency and provide a seamless experience for both instructors and students',
    link: 'https://github.com/Pejoal/Termin',
    liveLink: 'https://pejoal.live',
    image: 'assets/appointments.png',
  },
  {
    title: 'Cards Game',
    description:
      'A multiplayer card game with features such as card deck management (shuffling, dealing, etc.), animations for card movements, responsive design for different devices, and real-time playing. Developed using Laravel, Inertia, Vue 3, TailwindCSS, Docker, and MySQL.',
    link: 'https://github.com/Pejoal/Game',
    liveLink: 'https://pejoal.live',
    image: 'assets/game1.png',
  },
  {
    title: 'Social Media App',
    description:
      'A social media application developed using Vue.js and Laravel. The app includes features like user authentication, real-time chat, post creation and management, likes, comments, and a friend system. It also includes a responsive design for both desktop and mobile devices.',
    link: 'https://github.com/Pejoal/Social-Media-Platform',
    liveLink: 'https://pejaol.live',
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

// const jobs = ref([
//   {
//     id: 1,
//     title: 'Full Stack Developer',
//     company: 'SMEXPAND',
//     startDate: 'March 2023',
//     endDate: 'December 2023',
//     description:
//       'Developed an Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) system. The ERP module streamlined business processes and operations, including sales, HR, and inventory management. The CRM module improved customer service, marketing, and communication strategies. Technologies used include Vue.js for the frontend, Laravel for the backend, and MySQL for the database.',
//   },
//   {
//     id: 2,
//     title: 'Full Stack Developer',
//     company: 'Freelancer.com',
//     startDate: 'January 2020',
//     description:
//       'Worked on various projects across different domains, primarily focusing on web development and design.',
//   },
//   {
//     id: 3,
//     title: 'Full Stack Developer',
//     company: 'Upwork',
//     startDate: 'January 2021',
//     description:
//       'Assisted in the development of several small to medium scale projects, gaining experience in multiple technologies.',
//   },
//   {
//     id: 4,
//     title: 'Full Stack Developer',
//     company: 'Improov',
//     startDate: 'Sep 2022',
//     endDate: 'Feb 2023',
//     description:
//       'As a Full Stack Developer at E-State, I was responsible for developing and maintaining web applications using a variety of technologies including Vue.js, Laravel, and MariaDB. I worked closely with the product team to design and implement new features, and with the QA team to identify and fix bugs. I also played a key role in migrating legacy systems to modern architectures, improving performance and scalability. During my tenure, I contributed to several major projects, including the development of a property management system and an online booking platform.',
//   },
// ]);

const certificates = ref([
  {
    id: 1,
    name: 'German Language B1 - Goethe',
    place: 'Cairo',
    date: 'April 2022',
  },
]);
</script>

<template>
  <section
    class="min-h-screen transition-colors duration-300 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col justify-center items-center overflow-x-hidden relative"
  >
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute -top-10 -left-10 w-72 h-72 bg-gradient-to-r from-blue-300 to-purple-300 dark:from-blue-900 dark:to-purple-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-30 animate-pulse"
      ></div>
      <div
        class="absolute top-1/2 -right-10 w-96 h-96 bg-gradient-to-r from-yellow-300 to-pink-300 dark:from-yellow-900 dark:to-pink-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-30 animate-pulse animation-delay-2000"
      ></div>
      <div
        class="absolute -bottom-10 left-1/3 w-80 h-80 bg-gradient-to-r from-green-300 to-blue-300 dark:from-green-900 dark:to-blue-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-30 animate-pulse animation-delay-4000"
      ></div>
    </div>

    <!-- Dark mode toggle -->
    <button
      @click="toggleDarkMode"
      class="fixed top-4 right-4 z-50 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:scale-110"
      data-aos="zoom-in"
    >
      <FontAwesomeIcon :icon="isDarkMode ? faSun : faMoon" class="text-xl text-gray-600 dark:text-gray-300" />
    </button>

    <div
      class="bg-white dark:bg-gray-800 shadow-2xl rounded-3xl w-full sm:max-w-4xl p-6 m-4 transition-colors duration-300 relative z-10"
    >
      <!-- Header Section -->
      <section
        class="p-6 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 text-white shadow-lg rounded-2xl mb-6"
        data-aos="zoom-out-left"
      >
        <h1 class="font-bold text-4xl mb-4 animate-bounce">Pejoal Hanna (22)</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p class="text-lg font-semibold mb-2">🚀 Full Stack Developer</p>
            <p class="text-sm mb-2">📍 Rees, Germany</p>
            <p class="text-sm mb-2">🗣️ Languages: English, German, Arabic</p>
            <p class="text-sm mb-2">🎯 Hobbies: Coding, Reading, Traveling</p>
          </div>
          <div class="flex items-center justify-center md:justify-end">
            <div class="text-center">
              <p class="text-lg font-bold">📧 Contact me at</p>
              <a
                href="mailto:pejoal.business@gmail.com"
                class="text-yellow-300 hover:text-yellow-100 transition-colors duration-300 text-lg font-semibold underline"
              >
                pejoal.business@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Mobile Apps Section -->
      <section class="mb-8">
        <div class="flex items-center mb-6">
          <FontAwesomeIcon :icon="faMobile" class="text-3xl text-blue-500 dark:text-blue-400 mr-3" />
          <h2 class="font-bold text-3xl text-gray-800 dark:text-white">Mobile Apps</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="app in mobileApps"
            :key="app.id"
            class="bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-200 dark:border-gray-600 hover:scale-105"
            data-aos="flip-up"
            data-aos-duration="600"
          >
            <div class="text-center mb-4">
              <div class="text-4xl mb-3">{{ app.icon }}</div>
              <h3 class="font-bold text-lg text-gray-800 dark:text-white mb-2">{{ app.name }}</h3>
              <span
                class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
              >
                {{ app.category }}
              </span>
            </div>
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">{{ app.description }}</p>
            <div class="space-y-2">
              <a
                :href="`https://play.google.com/store/apps/details?id=${app.id}`"
                class="flex items-center justify-center w-full px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-300"
                target="_blank"
              >
                <FontAwesomeIcon :icon="faGooglePlay" class="mr-2" />
                Google Play
              </a>
              <div class="flex space-x-2">
                <div
                  class="flex-1 px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-lg text-center cursor-not-allowed"
                >
                  <FontAwesomeIcon :icon="faApple" class="mr-2" />
                  Coming Soon
                </div>
                <div
                  class="flex-1 px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-lg text-center cursor-not-allowed"
                >
                  <FontAwesomeIcon :icon="faGlobe" class="mr-2" />
                  Coming Soon
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section class="mb-8">
        <h2 class="font-bold text-3xl mb-6 text-gray-800 dark:text-white">🌐 Web Projects</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <section
            v-for="project in projects"
            :key="project.title"
            class="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-easing="linear"
          >
            <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-blue-500 dark:text-blue-400 text-xl font-bold mb-3">
                {{ project.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2">
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
                  class="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300"
                  target="_blank"
                >
                  🔗 Live Demo
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>

      <!-- Skills Section -->
      <hr class="h-px my-8 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent border-0" />

      <section class="mb-8">
        <h2 class="font-bold text-3xl mb-6 text-gray-800 dark:text-white">💻 Technical Skills</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="(skillGroup, groupName) in skills"
            :key="groupName"
            class="bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-600"
            data-aos="zoom-out"
            data-aos-duration="500"
            data-aos-easing="linear"
          >
            <h3 class="text-blue-500 dark:text-blue-400 font-bold text-xl mb-4">
              {{ groupName }}
            </h3>
            <ul class="space-y-2">
              <li
                v-for="skill in skillGroup"
                :key="skill.name"
                class="flex items-center text-gray-700 dark:text-gray-300"
              >
                <FontAwesomeIcon
                  v-if="skill.icon"
                  :icon="skill.icon"
                  class="mr-3 text-lg text-blue-500 dark:text-blue-400"
                />
                <span v-else class="mr-6"></span>
                {{ skill.name }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Soft Skills Section -->
      <section
        class="mb-8 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-xl shadow-lg p-6"
        data-aos="zoom-in"
      >
        <div v-for="(skillGroup, groupName) in softSkills" :key="groupName">
          <h3 class="text-purple-600 dark:text-purple-300 font-bold text-xl mb-4">🎯 {{ groupName }}</h3>
          <ul class="flex flex-wrap gap-3">
            <li
              v-for="skill in skillGroup"
              :key="skill"
              class="px-4 py-2 bg-white dark:bg-gray-700 rounded-full shadow-md text-gray-700 dark:text-gray-300 font-medium"
            >
              {{ skill }}
            </li>
          </ul>
        </div>
      </section>

      <!-- Languages Section -->
      <hr class="h-px my-8 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent border-0" />
      <section
        class="mb-8 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 rounded-xl shadow-lg p-6"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="500"
      >
        <h2 class="font-bold text-2xl mb-4 text-gray-800 dark:text-white">🗣️ Languages</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            v-for="language in languages"
            :key="language.language"
            class="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md border-l-4 border-green-500"
          >
            <p class="font-bold text-gray-800 dark:text-white">{{ language.language }}</p>
            <p class="text-gray-600 dark:text-gray-300">{{ language.proficiency }}</p>
          </div>
        </div>
      </section>

      <!-- Jobs Section -->
      <!-- <hr class="h-px my-8 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent border-0" />
      <section class="mb-8">
        <h2 class="font-bold text-3xl mb-6 text-gray-800 dark:text-white">💼 Professional Experience</h2>
        <div class="space-y-6">
          <div
            v-for="job in jobs"
            :key="job.id"
            class="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <h3 class="text-xl font-bold text-gray-800 dark:text-white">{{ job.title }}</h3>
            <p class="text-blue-500 dark:text-blue-400 font-semibold">{{ job.company }}</p>
            <p class="text-gray-500 dark:text-gray-400 mb-3">
              {{ job.startDate }} - {{ job.endDate || 'Present' }}
            </p>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">{{ job.description }}</p>
          </div>
        </div>
      </section> -->

      <!-- Certificates Section -->
      <section
        class="mb-8 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900 dark:to-orange-900 rounded-xl shadow-lg p-6"
        data-aos="fade-up"
      >
        <h2 class="font-bold text-2xl mb-4 text-gray-800 dark:text-white">🏆 Certificates</h2>
        <div class="space-y-4">
          <div
            v-for="certificate in certificates"
            :key="certificate.id"
            class="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md border-l-4 border-yellow-500"
          >
            <h3 class="text-lg font-bold text-yellow-600 dark:text-yellow-400">
              {{ certificate.name }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300">{{ certificate.place }} - {{ certificate.date }}</p>
          </div>
        </div>
      </section>

      <!-- CV Section -->
      <div class="text-center">
        <a
          href="Pejoal CV.pdf"
          download
          class="inline-block px-8 py-3 text-sm font-bold leading-6 text-center text-white uppercase transition bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 duration-300"
        >
          📄 Download CV
        </a>
        <iframe
          src="Pejoal CV.pdf"
          class="h-96 w-full mt-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600"
          frameborder="0"
        ></iframe>
      </div>
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
