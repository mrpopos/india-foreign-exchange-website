import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/layout.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('../views/home/home.vue'),
      },
      {
        path: 'quick-start',
        name: 'QuickStart',
        component: () => import('../views/quick-start/quickStart.vue'),
      },
    ],
  },
  {
    path: '/help',
    name: 'Help',
    component: Layout,
    children: [
      {
        path: 'center',
        name: 'Center',
        component: () => import('../views/help/help.vue'),
      },
      {
        path: 'category/:name',
        name: 'HelpCategory',
        component: () => import('../views/category/category.vue'),
        children: [
          {
            path: '',
            name: 'ArticlePage',
            component: () => import('../views/category/components/article.vue'),
          },
          {
            path: ':url_alias',
            name: 'ArticlePage',
            component: () => import('../views/category/components/article.vue'),
          },
        ],
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
