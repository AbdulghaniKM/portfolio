<template>
  <div class="bg-mainBg text-white min-h-screen font-InterVar">
    <Hover />
    <div
      v-if="isLoading"
      class="fixed inset-0 z-50 flex items-center justify-center bg-mainBg"
    >
      <div
        class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-lightBlue"
      ></div>
    </div>
    <header
      class="z-30 fixed w-full top-0 sm:hidden backdrop-blur-sm bg-mainBg/80"
    >
      <div class="bg-mainBg text-center z-50">
        <ul
          class="flex flex-col xs:flex-row justify-center items-center space-x-8 py-2 text-header"
        >
          <li class="cursor-pointer z-50 focus:text-glow my-2 xs:my-0">
            <a
              href="#about"
              class="btn btn-ghost cursor-pointer z-50 hover:text-glow"
              >About</a
            >
          </li>
          <li class="my-2 xs:my-0">
            <a
              href="#projects"
              class="btn btn-ghost cursor-pointer z-50 hover:text-glow"
              >Projects</a
            >
          </li>
          <li class="my-2 xs:my-0">
            <a
              href="#resume"
              class="btn btn-ghost cursor-pointer z-50 hover:text-glow"
              >Resume</a
            >
          </li>
        </ul>
      </div>
    </header>
    <main class="bg-mainBg sm:-mt-[5rem]">
      <section
        id="about"
        class="min-h-screen flex flex-col items-center justify-center pt-12 px-8 transition-all duration-500 ease-in-out mt-[4rem] sm:top-0"
      >
        <div class="grid grid-cols-1 xs:grid-cols-2 gap-10 max-w-7xl mx-auto">
          <div class="text-center xs:text-left">
            <h1 class="text-4xl xs:text-5xl font-bold">Abdulghani Khalid</h1>
            <h2 class="mt-2 text-xl xs:text-2xl text-lightBlue">
              Junior Frontend Developer
            </h2>
            <p class="text-base xs:text-lg mt-4 text-mainTxt">
              Crafting elegant digital solutions<br />
              with precision and purpose.
            </p>
            <ul class="flex flex-row justify-center xs:justify-start">
              <li v-for="social in socials" 
                  :key="social.title" 
                  class="mt-4 first:ml-0 ml-4"
                  :style="`animation: fadeIn 0.5s ease-out ${index * 0.2}s both`"
                  :title="social.title">
                <a :href="social.link" target="_blank">
                  <component :is="social.icon" class="w-6 h-6 fill-mainTxt hover:fill-glow transition-colors" />
                </a>
              </li>
            </ul>
          </div>
          <div class="text-center xs:text-left sm:text-left">
            <h1
              class="hidden sm:block text-mainTxt text-3xl font-InterVar font-bold sm:text-center sm:mb-7"
            >
              About
            </h1>
            <p class="text-mainTxt">
              Commencing in 2023, I embarked on a journey of
              <span class="text-glow"> self-learning </span> within the realm of
              web development. During this time as a student, I garnered a
              wealth of knowledge while actively engaging in various projects.
              By early 2024, I witnessed significant
              <span class="text-glow">growth</span> in my skills, transitioning
              to collaborative work within a team environment on tangible
              projects for clients.
            </p>
            <br />
            <p class="text-mainTxt">
              My expertise lies in a structured understanding of
              <span class="text-glow">HTML</span>,
              <span class="text-glow">CSS</span>, and
              <span class="text-glow">JavaScript</span>. I leverage modern web
              frameworks to enhance both functionality and development efficiency.
              My tech stack includes frameworks like
              <span class="text-glow">Vue.js</span> and
              <span class="text-glow">Nuxt.js</span>, styled with
              <span class="text-glow">Tailwind CSS</span>. For rapid UI development,
              I work with component libraries such as
              <span class="text-glow">DaisyUI</span> and
              <span class="text-glow">PrimeVue</span>, while managing application state
              efficiently with <span class="text-glow">Pinia</span>. I maintain a
              growth mindset and consistently seek opportunities to expand my
              technical expertise.
            </p>
          </div>
        </div>
      </section>
      <section
        id="projects"
        class="min-h-screen flex flex-col items-center justify-center px-8 transition-all duration-500 ease-in-out mt-20 sm:mt-5"
      >
        <div class="max-w-7xl mx-auto w-full">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="project in projects"
              :key="project.id"
              class="card glass group hover:scale-105 transition-all duration-300 bg-transparent shadow-2xl hover:shadow-glow"
            >
              <figure class="relative overflow-hidden">
                <img
                  v-if="project.image"
                  :src="project.image"
                  class="rounded-t-xl w-full max-h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  :alt="project.name"
                />
                <p v-else class="text-mainTxt translate-y-1/2 text-center w-full h-48">
                  No Image Available
                </p>
                <div
                  class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                >
                  <a
                    :href="project.link"
                    target="_blank"
                    class="btn bg-glow text-mainBg hover:bg-mainBg hover:text-glow"
                  >
                    {{ project.link ? "View Project" : "Not Available" }}
                  </a>
                </div>
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title">
                  {{ project.name }}
                </h2>
                <p>
                  {{ project.description }}
                </p>
                <div class="flex justify-center items-center gap-4">
                  <div
                    v-if="project.tech && project.tech.length"
                    class="badge bg-mainBg text-glow sm:whitespace-nowrap"
                    v-for="(tech, index) in project.tech"
                    :key="index"
                  >
                    {{ tech }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="font-InterVar my-4 pb-7" id="resume">
        <div class="flex flex-col justify-center items-center mt-12 mb-0">
          <h2 class="text-2xl text-mainTxt font-bold">Download My Resume</h2>
          <p
            class="sm:whitespace-nowrap sm:max-w-screen sm:overflow-x-auto text-mainTxt font-InterVar text-center mb-2"
          >
            For more information about me,<br />
            check out my resume!
          </p>

          <div>
            <button
              class="btn bg-mainTxt text-mainBg hover:bg- hover:text-glow outline-none animate-pulse-slow"
            >
              <a
                href="/Abdulghani Khalid Mohsen - Resume.pdf"
                download="Abdulghani Khalid Mohsen - Resume.pdf"
              >
                Download
              </a>
            </button>
          </div>
        </div>
      </section>
      <div>
        <p
          class="sm:whitespace-nowrap sm:max-w-screen sm:overflow-x-auto text-mainTxt font-InterVar text-center mb-2"
        >
          Design inspired by: Brittany Chiang
        </p>
      </div>
    </main>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import LinkedInIcon from '../components/icons/LinkedInIcon.vue';
import GitHubIcon from '../components/icons/GitHubIcon.vue';

const isLoading = ref(true);
const projects = ref([
  {
    id: 1,
    name: "SWD XO Online",
    description: "A tic tac toe game for Ministry of Youth and Sports, Iraq.",
    image: "/assets/img/xo-online.png",
    link: "https://swd-xo2024.online/",
    tech: ["Nuxt.js", "Tailwind CSS", "Web Sockets"],
  },
  {
    id: 2,
    name: "To-Do List",
    description:
      "A to-do list application that allows users to create, edit, and delete to-do items.",
    image: "/assets/img/todo.jpg",
    link: "https://to-do-lsit-akmcode.netlify.app/",
    tech: ["Vue.js", "Tailwind CSS", "DaisyUI"],
  },
  {
    id: 3,
    name: "July Weather App",
    description:
      "A weather application that allows users to search for a city and view the current weather.",
    image: "/assets/img/Weather.png",
    link: "https://july-weather-app-akmcode.netlify.app/",
    tech: ["Tailwind CSS", "Vue.js"],
  },
  {
    id: 4,
    name: "Online Data Monitring System / By Al-Fakhar Co.",
    description:
      "An online system that shows data from water/weather stations, made for the Ministry of Environment/ Ministry of Water Resources, Baghdad Mayorality.",
    image: "/assets/img/moe.png",
    link: null,
    tech: ["Nuxt.js", "Tailwind CSS", "PrimeVue"],
  },
  {
    id: 5,
    name: "Ramadan Gate Web Game",
    description:
      "a web app game launched during Ramadan 2024, for Ministry of Youth and Sports.",
    image: null,
    link: null,
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 6,
    name: "Green Education Competition",
    description:"A Web based form for the Green Education Competition, for GESRS.org",
    image: null,
    link: null,
    tech: ["Nuxt.js", "Tailwind CSS"],
  },
  {
    id: 7,
    name: "Samir Amis Online Casiher System",
    description: "An online system for the Samir Amis Co.",
    image: null,
    link: null,
    tech: ["Nuxt.js", "Tailwind CSS"],
  },
  {
    id: 8,
    name: "SuperNova",
    description: "A website for the SuperNova",
    image: '/assets/img/supernova.jpg',
    link: 'https://ssupernovas.com/',
    tech: ["Vue.js", "Tailwind CSS"],
  }
]);

const socials = [
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/abdulghani-khalid-mohsin-647278243/',
    icon: LinkedInIcon
  },
  {
    title: 'GitHub',
    link: 'https://github.com/AbdulghaniKM',
    icon: GitHubIcon
  },
];

onMounted(() => {
  if (document.readyState === 'complete') {
    isLoading.value = false;
  } else {
    window.addEventListener('load', () => {
      isLoading.value = false;
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute("href"));
      section?.scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  const sections = document.querySelectorAll("section");

  const options = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      } else {
        entry.target.classList.remove("in-view");
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
});
</script>

<style>
:root {
  --darkBlue: #0a182e;
  --lightBlue: #64ffda;
}

body {
  background-color: var(--darkBlue);
  color: white;
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header ul {
  flex-wrap: wrap;
}

section.in-view {
  @apply opacity-100 transform translate-y-0;
}

section {
  @apply opacity-0 transform translate-y-5 transition-all duration-1000 ease-out;
}

.card img {
  width: 100%;
  height: auto;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 1s ease-out;
}

.hover\:shadow-glow:hover {
  @apply shadow-[0_0_15px_rgba(100,255,218,0.3)];
}

.animate-pulse-slow {
  @apply animate-[pulse_3s_cubic-bezier(0.4,0,0.6,1)_infinite];
}
</style>
