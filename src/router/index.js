import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
import routerAfterHandler from './routerAfterHandler.js'
import routerBeforeHandler from './routerBeforeHandler.js'
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  routerBeforeHandler(to, from, next)
})

router.afterEach((to, from) => {
  routerAfterHandler(to, from)
})

export default router
