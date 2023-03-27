import Vue from 'vue'
import * as filters from '@/utils/filters.js'
import plugins from '@/plugins/index.js'

const $getParam = (name, url) => {
  const href = url || window.location.href
  const r = new RegExp('(\\?|#|&)' + name + '=([^&#]*)(&|#|$)')
  const m = href.match(r)
  return !m ? '' : m[2]
}
const commonApis = {
  $getParam
}

export const init = () => {
  // 注册全局过滤器
  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
  })
  // 注册全局方法
  Object.keys(commonApis).forEach(key => {
    Vue.prototype[key] = commonApis[key]
  })
  // 注册全局插件
  Object.keys(plugins).forEach(key => {
    Vue.use(plugins[key])
  })
}
