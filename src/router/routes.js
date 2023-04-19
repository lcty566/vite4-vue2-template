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
  },
  {
    path: '/elTable',
    name: 'elTable',
    component: () => import('@/views/ELTable.vue'),
    meta: {
      title: 'elTable'
    }
  },
  {
    path: '/VXETable',
    name: 'VXETable',
    component: () => import('@/views/VXETable.vue'),
    meta: {
      title: 'VXETable'
    }
  },
  {
    path: '/echarts',
    name: 'Echarts',
    component: () => import('@/views/EchartsDemo.vue'),
    meta: {
      title: 'echarts'
    }
  }
]

export default routes
