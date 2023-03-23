const LazyLoad = {
  // install方法
  install(Vue, options) {
    // 代替图片的loading图
    const defaultSrc = options || 'https://fs.smyfinancial.com/prddata/smy-cdf-file-image/001_cb1b0b5fe8b2233b0d54b8a7ed4319f1.png'
    Vue.directive('lazy', {
      bind(el, binding) {
        LazyLoad.init(el, binding.value, defaultSrc)
      },
      inserted(el) {
        // 兼容处理
        if ('IntersectionObserver' in window) {
          LazyLoad.observe(el)
        } else {
          LazyLoad.listenerScroll(el)
        }
      },
      componentUpdated(el, binding) {
        el.setAttribute('data-src', binding.value)
        LazyLoad.load(el)
      }
    })
  },
  // 初始化
  init(el, val, def) {
    // data-src 储存真实src
    el.setAttribute('data-src', val)
    // 设置src为loading图
    el.setAttribute('src', def)
  },
  // 利用IntersectionObserver监听el
  observe(el) {
    const io = new IntersectionObserver(entries => {
      const realSrc = el.dataset.src
      if (entries[0].isIntersecting) {
        if (realSrc) {
          el.src = realSrc
          el.removeAttribute('data-src')
        }
      }
    })
    io.observe(el)
  },
  // 监听scroll事件
  listenerScroll(el) {
    const handler = LazyLoad.throttle(LazyLoad.load, 300)
    LazyLoad.load(el)
    window.addEventListener('scroll', () => {
      handler(el)
    })
  },
  // 加载真实图片
  load(el) {
    const windowHeight = document.documentElement.clientHeight
    const elTop = el.getBoundingClientRect().top
    const elBtm = el.getBoundingClientRect().bottom
    const realSrc = el.dataset.src
    if (elTop - windowHeight < 0 && elBtm > 0) {
      if (realSrc) {
        el.src = realSrc
        el.removeAttribute('data-src')
      }
    }
  },
  // 节流
  throttle(fn, delay) {
    let timer
    let prevTime
    return function(...args) {
      const currTime = Date.now()
      const context = this
      if (!prevTime) prevTime = currTime
      clearTimeout(timer)

      if (currTime - prevTime > delay) {
        prevTime = currTime
        fn.apply(context, args)
        clearTimeout(timer)
        return
      }

      timer = setTimeout(function() {
        prevTime = Date.now()
        timer = null
        fn.apply(context, args)
      }, delay)
    }
  }

}

export default LazyLoad
