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
    path: '/home',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: '',
        name: 'HomePage',
        component: () => import('../views/home/home.vue'),
      },
    ],
  },
  {
    path: '/quick-start',
    name: 'QuickStart',
    component: Layout,
    children: [
      {
        path: '',
        name: 'QuickStartPage',
        component: () => import('../views/quick-start/quickStart.vue'),
      },
    ],
  },
  {
    path: '/regulation',
    name: 'Regulation',
    component: Layout,
    children: [
      {
        path: '',
        name: 'RegulationPage',
        component: () => import('../views/regulation/regulation.vue'),
      },
    ],
  },
  {
    path: '/company',
    name: 'Company',
    component: Layout,
    children: [
      {
        path: 'about-us',
        name: 'AboutUs',
        component: () => import('../views/company/about-us/about-us.vue'),
      },
      {
        path: 'legal',
        name: 'Legal',
        component: () => import('../views/company/legal/legal.vue'),
      },
      {
        path: 'fund-safety',
        name: 'FundSafety',
        component: () => import('../views/company/fund-safety/fund-safety.vue'),
      },
      {
        path: 'responsibility',
        name: 'Responsibility',
        component: () => import('../views/company/responsibility/responsibility.vue'),
      },
    ],
  },
  {
    path: '/learn',
    name: 'Learn',
    component: Layout,
    children: [
      {
        path: 'what-is-cfd',
        name: 'WhatIsCfd',
        component: () => import('../views/learn/what-is-cfd/what-is-cfd.vue'),
      },
      {
        path: 'deposits-withdrawals',
        name: 'DepositsWithdrawals',
        component: () => import('../views/learn/deposits-withdrawals/deposits-withdrawals.vue'),
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
