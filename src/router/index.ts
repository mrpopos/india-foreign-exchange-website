import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/Index.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const routes = [
  {
    path: '/',
    redirect: '/home/index',
  },
  {
    path: '/home',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('../views/home/Index.vue'),
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
        component: () => import('../views/help/Index.vue'),
      },
      {
        path: 'category/:name',
        name: 'HelpCategory',
        component: () => import('../views/category/Index.vue'),
        children: [
          {
            path: '',
            name: 'ArticlePage',
            component: () => import('../views/category/components/Article.vue'),
          },
          {
            path: ':url_alias',
            name: 'ArticlePage',
            component: () => import('../views/category/components/Article.vue'),
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
