import { computed, onUnmounted, ref } from 'vue';

export const useAppData = () => {
  // Apps data based on your React Native code
  const allApps = ref([
    // AI
    // {
    //   id: 'autoscribe.chat',
    //   iosId: null,
    //   title: 'AutoScribe',
    //   description: 'AI-powered transcription and note-taking app',
    //   icon: 'https://play-lh.googleusercontent.com/3V7mvPWiBa7He7Py049qyggabyha4SaobU_DKsCa02sZ2J1jTcMlQ21Ao3tEa45NYZ_5bXdkx60RCT2Ql2_oSg=w480-h960-rw',
    //   category: 'AI',
    // },
    {
      id: 'learn_arabic_app',
      iosId: null,
      title: 'Learn Arabic A1-C2 Offline',
      description: 'Master Arabic with comprehensive offline lessons',
      icon: 'https://play-lh.googleusercontent.com/_xR7I4X8tIzSmcP4AjM7nj3VwNcOm3iVpsOa292nfkGpar1WpZ-feNxKethWIhfT7_rOswGR9TLzmMSTDwRTxNA=w480-h960-rw',
      category: 'arabic',
    },
    {
      id: 'arabic_master',
      iosId: null,
      title: 'Master arabic',
      description: 'Comprehensive arabic learning app with offline support',
      icon: 'https://play-lh.googleusercontent.com/ThsOBiAssmzNjuuF7O2jgck7ArW9hmJfO_oEY7sU-yRqdabsqJssltH6-zVVWKz-1BYjaln8g8GFU5_fNTvITQ=w480-h960-rw',
      category: 'arabic',
    },
    // German Learning Apps
    {
      id: 'german_master',
      iosId: null,
      title: 'Master German',
      description: 'Master German with comprehensive offline lessons',
      icon: 'https://play-lh.googleusercontent.com/vVt6kkHdwgj_X33_3vS5RjgK4xwrdaAuEYb63qLG64JZfFIhFWOYaKpjofUn4uWLF33BVnlwZ_NqtOwKIA3c=w480-h960-rw',
      category: 'german',
    },
    {
      id: 'myapp',
      iosId: 'deutschlernen-a1-c2-offline/id6754511381',
      title: 'Learn German A1-C2',
      description: 'Comprehensive German learning app with offline support',
      icon: 'https://lh3.googleusercontent.com/mk-Rg5AL9gFj7LoVTS3WECQiDnRuFlulrPpGDBEY7R8JO8jnHGZDWafnZYUI0ddfwK0WuoCwXCuEsehXsz1-',
      category: 'german',
    },
    {
      id: 'a1_a2_german_grammar',
      iosId: 'a1-a2-german-grammar-trainer/id6754821464',
      title: 'A1-A2 German Grammar',
      description: 'Master German grammar fundamentals',
      icon: 'https://play-lh.googleusercontent.com/gXuYsnuQeR4p92gxaOyDU09MeqAerKDp0vUS-awevahqwHFI8lHakPEhkHom9T6lFTA6kuJbagkm6wATzZzb4Hk=w480-h960-rw',
      category: 'german',
    },
    {
      id: 'german_for_nurses',
      iosId: 'german-for-nurses/id6756078684',
      title: 'German for Nurses',
      description: 'Specialized German course for healthcare professionals',
      icon: 'https://play-lh.googleusercontent.com/zl3uC30SnfKJlxAXGbn4-gm5NWTQwfWQOTRw17FqUBADnErYWfp16SZXlO_ja4n6SBIzQm2CCCJDkdi7K_5Iqg=w480-h960-rw',
      category: 'german',
    },
    {
      id: 'learn_german_from_stories',
      iosId: 'deutsch-lernen-mit-geschichten/id6754534408',
      title: 'German Stories',
      description: 'Learn German through engaging stories',
      icon: 'https://play-lh.googleusercontent.com/kKaYxO8ads0_4VCsyQ7-KMWvaOyOwOuuPVLRNdIwgTxnR6U2YZVz6gLdlZzuge7T5N61BTiEZHduZR9-dOdZ4Qw=w480-h960-rw',
      category: 'german',
    },
    {
      id: 'einbuergerungstest',
      iosId: 'einbürgerungstest-2026/id6757009848',
      title: 'Einbürgerungstest Trainer',
      description: 'Prepare for the German naturalization test',
      icon: 'https://play-lh.googleusercontent.com/WwkfRo7VfrVPy-oVvGU_sENVDFFc_3xmDdXZuznYTRdwmn-a-8d2z7eglihmuorOxNZJMSyU4NFXtafI5ebiybg=w480-h960-rw',
      category: 'german',
    },
    // English Learning Apps
    {
      id: 'english_master',
      iosId: null,
      title: 'English Master',
      description: 'All-in-one English learning app',
      icon: 'https://play-lh.googleusercontent.com/5wGsQAGHTGGh5oyGSDr-ytVUKf9hGuqRclKrJE5D-Lq4jpp8YtWPlZgX3FkvyVlgilNAio995608-opjJBH8JZM=w480-h960-rw',
      category: 'english',
    },
    {
      id: 'learn_english_app',
      iosId: 'learn-english-a1-c2/id6754513056',
      title: 'Learn English A1-C2',
      description: 'Complete English learning course',
      icon: 'https://lh3.googleusercontent.com/QrxnSOK7rTmSIHPhkOs_MhaXn3rlxR1tehtJJLAmQ7R8lyWeEX4bDb-w_TVAe5BBp1JtxB4S3NeY8TQ3w9EYNQ',
      category: 'english',
    },
    {
      id: 'a1_a2_english_grammar',
      iosId: 'a1-a2-english-grammar/id6754511839',
      title: 'A1-A2 English Grammar',
      description: 'English grammar trainer for beginners',
      icon: 'https://play-lh.googleusercontent.com/5M8qhSvPY24uX0jGa7yNWYnWxg_a-KAaFDjmBDtzxeLZ0AFKWnb4bMxBtL66XSqfTVHCgidp5cSwU4qnJ9EcAFE=w480-h960-rw',
      category: 'english',
    },
    // Spanish Learning Apps
    {
      id: 'spanish_master',
      iosId: null,
      title: 'Master Spanish',
      description: 'Master Spanish with comprehensive offline lessons',
      icon: 'https://play-lh.googleusercontent.com/cod3BlejErCZSRFAaNExCRfdI2SzirJjaqS97k19IDd1agtwnmseCROCLAvi6buvNA8hjfAZRya-qFTIK5dFApI=w480-h960-rw',
      category: 'spanish',
    },
    {
      id: 'learn_spanish_app',
      iosId: 'تعلم-الإسبانية/id6754511440',
      title: 'Learn Spanish',
      description: 'Master Spanish with interactive lessons',
      icon: 'https://play-lh.googleusercontent.com/tlmFlmDOE9Oqg_NdJiC-9OHsvptRFIy3qgUu7Mdk_CTlJkDTgPa2YTATWuHlPohTVrpQD9eIuKdPq2174NifR-o=w480-h960-rw',
      category: 'spanish',
    },
    {
      id: 'a1_a2_spanish_grammar',
      iosId: 'a1-a2-spanish-grammar/id6754800627',
      title: 'A1-A2 Spanish Grammar',
      description: 'Spanish grammar fundamentals',
      icon: 'https://play-lh.googleusercontent.com/H6VC2opj0_aYspEvyTQ_j1KE6b8D1WbeQmkZgYYUqO3dAjwSWb-_NOwMsF7jxB6iqgBSusalcqI78t57TUSp=w480-h960-rw',
      category: 'spanish',
    },
    {
      id: 'learn_spanish_from_stories',
      iosId: 'learn-spanish-with-stories/id6754769339',
      title: 'Spanish Stories',
      description: 'Learn Spanish through captivating stories',
      icon: 'https://play-lh.googleusercontent.com/VWh3S-gzTYaYs4h-c0_5R98Hw_uBfUtfJmG9FUXwd5lDjD8I00WOh6WYvHOMDQZuEd-_gvGRu2KBFycYuQOxgA=w480-h960-rw',
      category: 'spanish',
    },
    // Italian Learning Apps
    {
      id: 'italian_master',
      iosId: null,
      title: 'Master Italian',
      description: 'Master Italian with comprehensive offline lessons',
      icon: 'https://play-lh.googleusercontent.com/T7w6t6WoQDRJ6rhX-A09MzH1sfh8XouXV9LRs-m6YwJhFHOvXCtGeTdijWwngxj0JkHE8eHuwCWNS93h_k1S=w480-h960-rw',
      category: 'italian',
    },
    {
      id: 'learn_italian_app',
      iosId: 'تعلم-الإيطالية/id6754513406',
      title: 'Learn Italian',
      description: 'Discover Italian language and culture',
      icon: 'https://play-lh.googleusercontent.com/AvvzUoDS1zwwtXIvXgXpuel3u5IcyNh_6RlO3fMemstsELqpmwrjilu08piOJBdv_nIgEkHXFAqsAsP6tYnK=w480-h960-rw',
      category: 'italian',
    },
    {
      id: 'a1_a2_italian_grammar',
      iosId: 'a1-a2-italian-grammar/id6754820225',
      title: 'A1-A2 Italian Grammar',
      description: 'Italian grammar essentials',
      icon: 'https://play-lh.googleusercontent.com/HRc3EIAc93VtDBgBdzhFWMjTe-cHC9wfcANtBM8CmhxRE62fu29YnvEmY_AWqgeN94WktGSriHjsbqOG9yAv=w480-h960-rw',
      category: 'italian',
    },
    {
      id: 'learn_italian_from_stories',
      iosId: 'learn-italian-with-stories/id6754609859',
      title: 'Italian Stories',
      description: 'Learn Italian with engaging stories',
      icon: 'https://play-lh.googleusercontent.com/JTqP5i8KW7mkG-UXtckhXU0ld5EgG-F3u9WBnTfdXhOTDYSu-5Lafu1RoGKjlII_THjgb4aojHBbwgHbBBP_hWo=w480-h960-rw',
      category: 'italian',
    },
    // Other Languages
    {
      id: 'french_master',
      iosId: null,
      title: 'Master French',
      description: 'Master French with comprehensive offline lessons',
      icon: 'https://play-lh.googleusercontent.com/w8v7NIoVPSbsI8XxBj4Dk59SRGqpMRdQOuFsd9wDpZZara0diX2SWCoRbUQay3AcXiR9tSBWsLrAR6IuA6NYHg=w480-h960-rw',
      category: 'french',
    },
    {
      id: 'learn_french_app',
      iosId: 'apprendre-le-français/id6754800257',
      title: 'Learn French',
      description: 'Master French language with ease',
      icon: 'https://play-lh.googleusercontent.com/FTg1fGLFqAQR0YbkHb03xubut-H5Fy5L92o36MJOVdrLpgVOmQXshPr2FnYdBpytg9djJxjIrUMfMKcf8c0-SdI=w480-h960-rw',
      category: 'french',
    },
    {
      id: 'learn_russian',
      iosId: 'تعلم-الروسية-بدون-نت/id6754518388',
      title: 'Learn Russian',
      description: 'Russian language course offline',
      icon: 'https://play-lh.googleusercontent.com/ecJrhMFEcyS7AASIPqRuHF390FHzEVKXjO5nT_YwK8EPV0F6UrwWK9vPsnrv7XMDkQxPSuRgKI84rul4hNEZR80=w480-h960-rw',
      category: 'other',
    },
    // Utility Apps
    {
      id: 'qr_manager',
      iosId: 'qr-manager-pro/id6754516032',
      title: 'QR Manager Pro',
      description: 'Advanced QR code scanner and generator',
      icon: 'https://play-lh.googleusercontent.com/8340moQriI1gjAyl9UCaXvzpjHTARQiHV1uQssaPjwBF_vTJLc0CGwx-tXTNerVR106SsJnTaQyJUMNaeRmvdQ=w480-h960-rw',
      category: 'utility',
    },
    {
      id: 'videoplayer',
      iosId: 'video-player-premium/id6754518521',
      title: 'Video Player Pro',
      description: 'Professional video player with advanced features',
      icon: 'https://play-lh.googleusercontent.com/5D0j0jDuEkJlupMVWmZD0ey7LD7sF_PR98lE8S1GUSeZhMqd1XQDefVJcwUgMmanfieRwPTqGnjE4CfjTSas=w480-h960-rw',
      category: 'utility',
    },
    {
      id: 'password_manager',
      iosId: 'password-manager-pro-offline/id6754517449',
      title: 'Password Manager Pro',
      description: 'Secure offline password management',
      icon: 'https://play-lh.googleusercontent.com/hArv1RwvUXVMK-xVObRI5hnem_vQkrFEYpklD5PJmPHyRK_T0lZzyB8g_YVcDo_THvRVCYJQ-dIeV2DwMasr=w480-h960-rw',
      category: 'utility',
    },
    // Test Apps
    {
      id: 'iq_test',
      iosId: 'iq-test-pro-brain-training/id6756730514',
      title: 'IQ Test Pro',
      description: 'Comprehensive IQ testing app',
      icon: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/10/d4/d4/10d4d4ad-3f33-cc91-f5e2-4682b0a02091/Placeholder.mill/200x200bb-75.webp',
      category: 'test',
    },
    {
      id: null,
      iosId: 'pro-iq-test/id6754533659',
      title: 'IQ Test',
      description: 'Professional IQ assessment tool',
      icon: 'https://play-lh.googleusercontent.com/oP1gSDk8iA_s_IFQ22s8hRLjd6F47bciCwEBq-ZumbgHbZY5UhnOLzNdk3kn64rYoU4u_rqiXTPxK43hJJSr6Q=w480-h960-rw',
      category: 'test',
    },
    {
      id: 'trivia_test',
      iosId: 'trivia-test-pro/id6754518491',
      title: 'Trivia Test Pro',
      description: 'Challenge your knowledge with trivia',
      icon: 'https://play-lh.googleusercontent.com/1sE7hQ1is8RUru02eC-jIu4T1gmcROZkXd-NfnrPIg5BSnfeS3C02bhWoyDv-IOXzdHQ4tiYkMIAqEiL2qbvLA=w480-h960-rw',
      category: 'test',
    },
    {
      id: 'personality_test',
      iosId: 'personality-test-offline/id6754801097',
      title: 'Personality Test',
      description: 'Discover your personality type',
      icon: 'https://play-lh.googleusercontent.com/GMXGBeAfthcNV2VCvZUcITNVQHIBZ3R8VvDRg_1txKpnKCaqn1d2xbOnLOLesYy1LR7zxdOwYxqYZ3dYxwVdCA=w480-h960-rw',
      category: 'test',
    },
    // Games
    {
      id: 'puzzle',
      iosId: 'slides-puzzle/id6754782354',
      title: 'Slides Puzzle',
      description: 'Classic sliding puzzle game',
      icon: 'https://play-lh.googleusercontent.com/f0iJrPUTgorot4CdqLFvew7E98NN5f_VAN4r5naAyxmxjUcuEdUlmVyouFi9yIlIJjfBhgMRfaUHfv-ZN-1N56Q=w480-h960-rw',
      category: 'game',
    },
    {
      id: 'drop_2048',
      iosId: 'drop-2048-tile-merge-puzzle/id6755253445',
      title: 'Drop 2048',
      description: 'Merge tiles to reach 2048',
      icon: 'https://play-lh.googleusercontent.com/XMLMrG4XKo0VLQPgVWKvodo--J_lLwkBQMoFk4gbQxS_0F5tm1WUmzPwnHg26_hDbgmMZahg8ien2BVcAIMq=w480-h960-rw',
      category: 'game',
    },
    {
      id: 'connect_2048',
      iosId: 'connect-merge-2048-puzzle/id6755743095',
      title: 'Connect 2048',
      description: 'Connect & Chain tiles to reach 2048',
      icon: 'https://play-lh.googleusercontent.com/Q27uTfFvmdvtQ3Hue3ZkrUofhiA9-6WvXcRmZC1yf0lWDXlvxh6BbUtWgwoPap7TnCHoBL4y076BIIu9lruHzA=w480-h960-rw',
      category: 'game',
    },
    {
      id: 'game',
      iosId: 'brick-bounce-paddle-smash/id6755907771',
      title: 'Brick Breaker',
      description: 'Break bricks with a ball and paddle',
      icon: 'https://lh3.googleusercontent.com/S4RBz0N559ezHQ0ifs4l_D-zAph2iSFpB_KXea7eNhASzHIAaXPl2uCw98d1d_qUiWj3ZSyEXJgeQg1ldkO7QQ',
      category: 'game',
    },
    {
      id: 'robot',
      iosId: 'the-crazy-robot/id6756072137',
      title: 'Crazy Robot',
      description: 'Control a robot to discover new worlds',
      icon: 'https://lh3.googleusercontent.com/CrRf5lllZFEkOk42Se_Dq9MFrobc78SZu3Kln-soflN6lC0E6iGMc5WrUWCKsC41rhLvvTTUBgWrIHKtqmfY',
      category: 'game',
    },

    {
      id: 'learn_programming',
      iosId: 'learn-programming-code/id6757622162',
      title: 'Learn Programming',
      description: 'Learn programming with interactive lessons',
      icon: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/3a/bd/43/3abd437a-de9d-bc46-5841-b6d180359c8a/Placeholder.mill/400x400bb-75.webp',
      category: 'programming',
    },
    {
      id: 'learn_html',
      iosId: 'learn-html-interactive-course/id6757127735',
      title: 'Learn HTML',
      description: 'Learn HTML with interactive lessons',
      icon: 'https://play-lh.googleusercontent.com/KHlgIeWhFe9TTY5iAzo0lcItjpCBQlz5a8sA-KKKt_Kl67RPnFsw26YlUi4PoTAUSTclceFlHhMHOT-2ZGiq=w480-h960-rw',
      category: 'programming',
    },
    {
      id: 'learn_css',
      iosId: 'learn-css-web-design/id6757161168',
      title: 'Learn CSS',
      description: 'Learn CSS with practical examples',
      icon: 'https://play-lh.googleusercontent.com/0c2nn_XAuT-A4_0rKuUEMVjQk34eTJhU5dJL9QePQYVkXEU4CEQno5XVJgeLDYoNL4BE_ceXVclZx2R1OySH=w480-h960-rw',
      category: 'programming',
    },
    {
      id: 'learn_js',
      iosId: 'learn-js/id6757395492',
      title: 'Learn JavaScript',
      description: 'Comprehensive JavaScript tutorials',
      icon: 'https://expo.dev/_next/image?url=https%3A%2F%2Fexpo.dev%2Fcdn-cgi%2Fimage%2Fwidth%3D160%2Fhttps%3A%2F%2Fstorage.googleapis.com%2Fprofile-image-storage-production%2F9e52c900-46a0-4db7-a7f7-66c65f32c370.png&w=256&q=75',
      category: 'programming',
    },
  ]);

  // Computed properties for filtered apps
  const germanApps = computed(() => allApps.value.filter((app) => app.category === 'german'));
  const frenchApps = computed(() => allApps.value.filter((app) => app.category === 'french'));
  const englishApps = computed(() => allApps.value.filter((app) => app.category === 'english'));
  const spanishApps = computed(() => allApps.value.filter((app) => app.category === 'spanish'));
  const italianApps = computed(() => allApps.value.filter((app) => app.category === 'italian'));
  const arabicApps = computed(() => allApps.value.filter((app) => app.category === 'arabic'));
  const otherLanguageApps = computed(() => allApps.value.filter((app) => app.category === 'other'));
  const utilityApps = computed(() => allApps.value.filter((app) => app.category === 'utility'));
  const testApps = computed(() => allApps.value.filter((app) => app.category === 'test'));
  const gameApps = computed(() => allApps.value.filter((app) => app.category === 'game'));
  const programmingApps = computed(() => allApps.value.filter((app) => app.category === 'programming'));

  return {
    allApps,
    germanApps,
    frenchApps,
    englishApps,
    spanishApps,
    italianApps,
    arabicApps,
    otherLanguageApps,
    utilityApps,
    testApps,
    gameApps,
    programmingApps,
  };
};

export const useDarkMode = () => {
  const isDark = ref(false);

  // Initialize dark mode with proper SSR handling
  const initializeDarkMode = () => {
    if (process.client) {
      // Check for saved preference or system preference
      const savedTheme = localStorage.getItem('darkMode');
      if (savedTheme !== null) {
        isDark.value = savedTheme === 'true';
      } else {
        // Use system preference
        isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }

      // Apply the theme immediately
      document.documentElement.classList.toggle('dark', isDark.value);
    }
  };

  const toggleDarkMode = () => {
    isDark.value = !isDark.value;

    if (process.client) {
      // Update DOM
      document.documentElement.classList.toggle('dark', isDark.value);

      // Save preference
      localStorage.setItem('darkMode', isDark.value.toString());
    }
  };

  // Initialize on client side
  if (process.client) {
    initializeDarkMode();

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e) => {
      // Only update if no manual preference is saved
      if (localStorage.getItem('darkMode') === null) {
        isDark.value = e.matches;
        document.documentElement.classList.toggle('dark', isDark.value);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);

    // Cleanup listener when component unmounts
    onUnmounted(() => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    });
  }

  return {
    isDark,
    toggleDarkMode,
  };
};
