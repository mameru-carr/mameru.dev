import { createRouter, createWebHistory } from 'vue-router'
import SphinxPage from '@/pages/SphinxPage.vue'
import HomePage from '@/pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
	  {
		  "path": "/",
		  "name": 'Sphinx',
		  "component": SphinxPage
	  },
		{
			"path": "/home",
			"name": "Home",
			"component": HomePage
		}
  ]
})

export default router
