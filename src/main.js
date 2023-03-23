import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { init } from './utils/init.js'
console.log(111)
init()
console.log(222)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
