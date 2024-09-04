import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import UsesPage from "@/pages/UsesPage.vue";
import NowPage from "@/pages/NowPage.vue";
import ProjectsPage from "@/pages/ProjectsPage.vue";
import HunderedNightsOfCode from "@/pages/projects/HunderedNightsOfCode.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
	  {
		  "path": "/",
		  "name": 'Home',
		  "component": HomePage
	  },
      {
          "path": "/projects",
          "name": "Projects",
          "component": ProjectsPage,
      },
	  {
		  "path": "/uses",
		  "name": "Uses",
		  "component": UsesPage
	  },
      {
          "path": "/projects/101NightsOfCode",
          "name": "HunderedNightsOfCode",
          "component": HunderedNightsOfCode
      }
  ]
})

export default router
