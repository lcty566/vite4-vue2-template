import Vue from 'vue'
import * as filters from '@/utils/filters.js'
import plugins from '@/plugins/index.js'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
const $getParam = (name, url) => {
  const href = url || window.location.href
  const r = new RegExp('(\\?|#|&)' + name + '=([^&#]*)(&|#|$)')
  const m = href.match(r)
  return !m ? '' : m[2]
}
const methods = {
  $getParam
}

export const init = () => {
  // 注册全局过滤器
  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
  })
  // 注册全局方法
  Object.keys(methods).forEach(key => {
    Vue.prototype[key] = methods[key]
  })
  // 注册全局插件
  Object.keys(plugins).forEach(key => {
    Vue.use(plugins[key])
  })
  Vue.use(VXETable)
  Vue.use(ElementUI)
}
