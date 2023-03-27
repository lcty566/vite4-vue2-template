const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: 'home'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: {
      title: 'about'
    }
  },
  {
    path: '/',
    name: 'chatGPT',
    component: () => import('@/views/ChatGPT.vue'),
    meta: {
      title: 'chatGPT'
    }
  }
]

export default routes
