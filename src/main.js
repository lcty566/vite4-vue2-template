import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/base.css'
import { init } from './utils/init.js'
init()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
