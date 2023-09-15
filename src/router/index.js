import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/books/list',
      name: 'list',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ListBooks.vue')
    },
    {
      path: '/admin/books/create',
      name: 'create',
      component: () => import('../views/admin/AdminCreateBooks.vue')
    },
    {
      path: '/admin/books/update/:id',
      name: 'update',
      component: () => import('../views/admin/AdminUpdateBooks.vue')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('../views/DetailBooks.vue')
    },
    {
      path: '/admin/books/book-list',
      name: 'delete',
      component: () => import('../views/admin/AdminListBooks.vue')
    }

  ]
})

export default router
