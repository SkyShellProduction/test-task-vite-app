import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        showInMenu: false,
        title: 'Главная'
      },
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      meta: {
        showInMenu: true,
        title: 'Проекты'
      },
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/about-company',
      name: 'about-company',
      meta: {
        showInMenu: true,
        title: 'О компании'
      },
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      meta: {
        showInMenu: true,
        title: 'Контакты'
      },
      component: () => import('../views/ContactsView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error-page',
      meta: {
        showInMenu: false,
        title: 'Ошибка 404'
      },
      component: () => import('../views/ErrorView.vue')
    },
  ]
})
export default router
