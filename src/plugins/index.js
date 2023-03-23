
import messageBox from './messageBox.vue'
import ToastCompont from './ToastCompont.vue'
import LoadingComponent from './LoadingComponent.vue'
import LazyLoad from './LazyLoad.js'

// 定义插件对象
const MessageBox = {
// vue的install方法，用于定义vue插件
  install: (Vue, options) => {
    const MessageBoxInstance = Vue.extend(messageBox)
    let currentMsg
    const initInstance = () => {
    // 实例化vue实例
      currentMsg = new MessageBoxInstance()
      const msgBoxEl = currentMsg.$mount().$el
      document.body.appendChild(msgBoxEl)
    }
    // 在Vue的原型上添加实例方法，以全局调用
    Vue.prototype.$MessageBox = options => {
      if (!currentMsg) {
        initInstance()
      }
      if (typeof options === 'string') {
        currentMsg.content = options
      } else if (typeof options === 'object') {
        Object.assign(currentMsg, options)
      }
      return currentMsg.showMsgBox().then(val => {
        currentMsg = null
        return Promise.resolve(val)
      }).catch(err => {
        currentMsg = null
        return Promise.reject(err)
      })
    }
  }
}

const ToastWithText = {
  install: (Vue) => {
    const ToastConstructor = Vue.extend(ToastCompont)
    function showToast(text, duration = 2000) {
      const toastDom = new ToastConstructor({
        el: document.createElement('div'),
        data() {
          return {
            text,
            showWrap: true,
            showContent: true
          }
        }
      })
      document.body.appendChild(toastDom.$el)
      setTimeout(() => { toastDom.showContent = false }, duration - 250)
      setTimeout(() => { toastDom.showWrap = false }, duration)
    }
    Vue.prototype.$ToastWithText = showToast
  }
}

const ToastWithLoading = {
  install: (Vue) => {
    const LoadingConstructor = Vue.extend(LoadingComponent)
    const loadingDom = new LoadingConstructor({
      el: document.createElement('div')
    })
    loadingDom.show = false
    Vue.prototype.$ToastWithLoading = () => {
      return {
        show() { // 显示方法
          loadingDom.show = true
          document.body.appendChild(loadingDom.$el)
        },
        hide() { // 隐藏方法
          loadingDom.show = false
        }
      }
    }
  }
}
export default {
  MessageBox,
  ToastWithText,
  ToastWithLoading
  // LazyLoad
}
