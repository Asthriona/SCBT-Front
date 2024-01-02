// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/new-project',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'new-project',
        component: () => import('@/views/new-project.vue')
      }
    ]
  },
  {
    path: '/project/:projectId',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'project-view',
        component: () => import('@/views/project-views.vue')
      }
    ]
  },
  {
    path: '/project/:projectId/bug/new',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'project-bug-new',
        component: () => import('@/views/project-bug-new.vue')
      }
    ]
  },
  {
    path: '/project/:projectId/:bugId',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'bug-view',
        component: () => import('@/views/bug-view.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
