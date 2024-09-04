import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import UsesPage from "@/pages/UsesPage.vue";
import NowPage from "@/pages/NowPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
	  {
		  "path": "/",
		  "name": 'Home',
		  "component": HomePage
	  },
	  {
		  "path": "/uses",
		  "name": "Uses",
		  "component": UsesPage
	  },
      {
          "path": "/now",
          "name": "Now",
          "component": NowPage
      }
  ]
})

export default router
