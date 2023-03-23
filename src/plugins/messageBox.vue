<template>
  <transition name="dialog">
    <div :class="['message-box',styleClass]" v-show="isShowMessageBox">
      <div class="mask" @click="cancel" @touchmove.prevent></div>
      <div class="message-content">
        <div class="head">
          <img :src="imgUrl" alt="" v-if="isShowImg">
        </div>
        <div class="text">
          <div class="center-text" v-if="centerText" v-html="centerText"></div>
          <div class="left-text" v-if="leftText" v-html="leftText"></div>
        </div>
        <div class="iocn" v-if="isShowIcon">
          <img :src="iconPath" alt="">
          <p>{{iconDesc}}</p>
        </div>
        <div class="btn-group">
          <div class="btn btn-cancel" @click="cancel" v-show="isShowCancelBtn">{{ cancelBtnText }}</div>
          <div class="btn btn-confirm" @click="confirm" v-show="isShowConfimrBtn">{{ confirmBtnText }}</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
const mo = function (e) { e.preventDefault() }
export default {
  props: {
    centerText: {
      type: String,
      default: ''
    },
    leftText: {
      type: String,
      default: ''
    },
    isShowImg: {
      type: Boolean,
      default: false
    },
    imgUrl: {
      type: String,
      default: ''
    },
    isShowIcon: {
      type: Boolean,
      default: false
    },
    iconPath: {
      type: String,
      default: ''
    },
    iconDesc: {
      type: String,
      default: ''
    },
    isShowCancelBtn: {
      type: Boolean,
      default: true
    },
    isShowConfimrBtn: {
      type: Boolean,
      default: true
    },
    cancelBtnText: {
      type: String,
      default: '取消'
    },
    confirmBtnText: {
      type: String,
      default: '确定'
    },
    styleClass: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isShowMessageBox: false,
      resolve: '',
      reject: '',
      promise: '' // 保存promise对象
    }
  },
  methods: {
  // 确定,将promise断定为resolve状态
    confirm: function () {
      this.isShowMessageBox = false
      this.resolve('confirm')
      this.remove()
    },
    // 取消,将promise断定为reject状态
    cancel: function () {
      this.isShowMessageBox = false
      this.reject('cancel')
      this.remove()
    },
    // 弹出messageBox,并创建promise对象
    showMsgBox: function () {
      this.isShowMessageBox = true
      // 弹出框背景禁止滑动
      document.body.style.overflow = 'hidden'
      document.addEventListener('touchmove', mo, false)
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve
        this.reject = reject
      })
      // 返回promise对象
      return this.promise
    },
    remove: function () {
      // 背景可以滑动
      document.body.style.overflow = ''
      document.removeEventListener('touchmove', mo, false)
      setTimeout(() => {
        this.destroy()
      }, 300)
    },
    destroy: function () {
      this.$destroy()
      document.body.removeChild(this.$el)
    }
  }
}
</script>

<style lang="less" scoped>
.message-box{
  position: absolute;
  z-index: 2020;
  touch-action: none;
  .message-content{
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2020;
    width: 6.933333rem;
    background-color: #fff;
    border-radius: .08rem;
    overflow: hidden;
    .head{
      width: 100%;
      min-height: .266667rem;
      img{
        display: block;
        width: 100%;
        height: 4.16rem;
      }
    }
    .text{
      padding: .4rem .266667rem .32rem .266667rem;
      text-align: center;
      .center-text{
        text-align: center;
        padding-bottom: .133333rem;
        /deep/ h4{
          color: #2e2e2e;
          font-size: .426667rem;
          line-height: .666667rem;
          font-weight: 600;
          span{
            color: #F73B54;
            font-weight: 600;
          }
        }
        /deep/ .mb5{
          margin-bottom: .133333rem;
        }
        /deep/ p{
          color: #888;
          font-size: .373333rem;
          line-height: .666667rem;
          font-weight: 500;
          span{
            color: #F73B54;
            font-weight: 500;
          }
        }
        /deep/ h1{
          color: #000;
          font-size: .64rem;
          line-height: 1.2rem;
          font-weight: 600;
        }
        /deep/ h5{
          color: #2e2e2e;
          font-size: .373333rem;
          line-height: .533333rem;
          font-weight: 500;
        }
        /deep/ h6{
          color: #2e2e2e;
          font-size: .373333rem;
          line-height: .666667rem;
          font-weight: 500;
        }
      }
      .left-text{
        text-align: left;
        font-size: .32rem;
        line-height: .586667rem;
        padding:0 .266667rem;
        max-height: 8.533333rem;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        /deep/ p{
          color: #333;
          text-indent:-0.48rem;
          margin-left:0.48rem;
        }
        /deep/ h4{
          color: #000;
          text-indent:-0.48rem;
          margin-left:0.48rem;
          font-weight: 600;
          margin-top:.4rem;
        }
      }
    }
    .btn-group{
      display: flex;
      padding:0 .266667rem;
      .btn{
        border-top:.026667rem solid #ccc;
        flex: 1;
        height: 1.306667rem;
        line-height: 1.306667rem;
        text-align: center;
        font-size: .426667rem;
        color: #F93A52;
        font-weight: 600;
        &.btn-cancel{
          color: #888;
          font-weight: 400;
        }
      }
    }
    .iocn{
      text-align: center;
      img{
        width: 3.52rem;
        height: 3.52rem;
      }
      p{
        font-size: .373333rem;
        color: #F73B54;
        font-weight: 600;
        line-height: .666667rem;
        margin-bottom: .266667rem;
      }
    }
  }
  .mask{
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 0.8;
    background: #000;
    z-index: 2019;
  }
  &.big .message-content{
    width: 8rem;
  }
}

.dialog-enter-active,
.dialog-leave-active {
  transition: all 0.3s;
}
.dialog-enter,
.dialog-leave-active {
  opacity: 0;
}
</style>
