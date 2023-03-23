<template>
  <div v-if="show" class="loading-wrap">
    <div class="loading-box">
      <div class="g-loading-leaf g-loading-leaf-0"></div>
      <div class="g-loading-leaf g-loading-leaf-1"></div>
      <div class="g-loading-leaf g-loading-leaf-2"></div>
      <div class="g-loading-leaf g-loading-leaf-2"></div>
      <div class="g-loading-leaf g-loading-leaf-3"></div>
      <div class="g-loading-leaf g-loading-leaf-4"></div>
      <div class="g-loading-leaf g-loading-leaf-5"></div>
      <div class="g-loading-leaf g-loading-leaf-6"></div>
      <div class="g-loading-leaf g-loading-leaf-7"></div>
      <div class="g-loading-leaf g-loading-leaf-8"></div>
      <div class="g-loading-leaf g-loading-leaf-9"></div>
      <div class="g-loading-leaf g-loading-leaf-10"></div>
      <div class="g-loading-leaf g-loading-leaf-11"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    show: Boolean
  },
  data() {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
.loading-wrap{
  position: fixed;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  width: 50px;
  height: 50px;
  background-color: rgba(37,38,45,0.9);;
  border-radius: .053333rem;
  z-index: 900;
}
.loading-box {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.g-loading-leaf{
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  opacity: 0.25;
  &:before{
    content:" ";
    position: absolute;
    width:6px;
    height: 2px;
    background: rgb(209, 209, 213);
    box-shadow: rgba(0, 0, 0, 0.0980392) 0 0 1px;
    border-radius: 1px;
    transform-origin: 0 0;
  }
  &-0{
    animation: opacity-60-25-0-12 1.25s linear infinite;
    -webkit-animation: opacity-60-25-0-12 1.25s linear infinite;
    &:before{
      transform: rotate(0deg) translate(6.5px, 0px);
      -webkit-transform: rotate(0deg) translate(6.5px, 0px);
    }
  }
  &-1{
    animation: opacity-60-25-1-12 1.25s linear infinite;
    -webkit-animation: opacity-60-25-1-12 1.25s linear infinite;
    &:before{
      transform: rotate(30deg) translate(6.5px, 0px);
      -webkit-transform: rotate(30deg) translate(6.5px, 0px);
    }
}
  &-2{
    animation: opacity-60-25-2-12 1.25s linear infinite;
    -webkit-animation: opacity-60-25-2-12 1.25s linear infinite;
    &:before{
      transform: rotate(60deg) translate(6.5px, 0px);
      -webkit-transform: rotate(60deg) translate(6.5px, 0px);
    }
  }
  &-3{
    animation: opacity-60-25-3-12 1.25s linear infinite;
    -webkit-animation: opacity-60-25-3-12 1.25s linear infinite;
    &:before{
      transform: rotate(90deg) translate(6.5px, 0px);
      -webkit-transform: rotate(90deg) translate(6.5px, 0px);
    }
  }
  &-4{
    animation: opacity-60-25-4-12 1.25s linear infinite;
    -webkit-animation: opacity-60-25-4-12 1.25s linear infinite;
    &:before{
      transform: rotate(120deg) translate(6.5px, 0px);
      -webkit-transform: rotate(120deg) translate(6.5px, 0px);
    }
  }
  &-5{
    animation: opacity-60-25-5-12 1.25s linear infinite;
    -webkit-animation: opacity-60-25-5-12 1.25s linear infinite;
    &:before{
      transform: rotate(150deg) translate(6.5px, 0px);
      -webkit-transform: rotate(150deg) translate(6.5px, 0px);
    }
  }
  &-6{
    animation: opacity-60-25-6-12 1.25s linear infinite;
    -webkit-animation: opacity-60-25-6-12 1.25s linear infinite;
    &:before{
      transform: rotate(180deg) translate(6.5px, 0px);
      -webkit-transform: rotate(180deg) translate(6.5px, 0px);
    }
  }
  &-7{
    animation: opacity-60-25-7-12 1.25s linear infinite;
    -webkit-animation: opacity-60-25-7-12 1.25s linear infinite;
    &:before{
      transform: rotate(210deg) translate(6.5px, 0px);
      -webkit-transform: rotate(210deg) translate(6.5px, 0px);
    }
  }
  &-8{
    animation: opacity-60-25-8-12 1.25s linear infinite;
    -webkit-animation: opacity-60-25-8-12 1.25s linear infinite;
    &:before{
      transform: rotate(240deg) translate(6.5px, 0px);
      -webkit-transform: rotate(240deg) translate(6.5px, 0px);
    }
  }
  &-9{
    animation: opacity-60-25-9-12 1.25s linear infinite;
    -webkit-animation: opacity-60-25-9-12 1.25s linear infinite;
    &:before{
      transform: rotate(270deg) translate(6.5px, 0px);
      -webkit-transform: rotate(270deg) translate(6.5px, 0px);
    }
  }
  &-10{
    animation: opacity-60-25-10-12 1.25s linear infinite;
    -webkit-animation: opacity-60-25-10-12 1.25s linear infinite;
    &:before{
      transform: rotate(300deg) translate(6.5px, 0px);
      -webkit-transform: rotate(300deg) translate(6.5px, 0px);
    }
  }
  &-11{
    animation: opacity-60-25-11-12 1.25s linear infinite;
    -webkit-animation: opacity-60-25-11-12 1.25s linear infinite;
    &:before{
      transform: rotate(330deg) translate(6.5px, 0px);
      -webkit-transform: rotate(330deg) translate(6.5px, 0px);
    }
  }
}

@keyframes opacity-60-25-0-12 {
  0% { opacity: 0.25; }
  0.01% { opacity: 0.25; }
  0.02% { opacity: 1; }
  60.01% { opacity: 0.25; }
  100% { opacity: 0.25; }
}
@keyframes opacity-60-25-1-12 {
  0% { opacity: 0.25; }
  8.34333% { opacity: 0.25; }
  8.35333% { opacity: 1; }
  68.3433% { opacity: 0.25; }
  100% { opacity: 0.25; }
}
@keyframes opacity-60-25-2-12 {
  0% { opacity: 0.25; }
  16.6767% { opacity: 0.25; }
  16.6867% { opacity: 1; }
  76.6767% { opacity: 0.25; }
  100% { opacity: 0.25; }
}
@keyframes opacity-60-25-3-12 {
  0% { opacity: 0.25; }
  25.01% { opacity: 0.25; }
  25.02% { opacity: 1; }
  85.01% { opacity: 0.25; }
  100% { opacity: 0.25; }
}
@keyframes opacity-60-25-4-12 {
  0% { opacity: 0.25; }
  33.3433% { opacity: 0.25; }
  33.3533% { opacity: 1; }
  93.3433% { opacity: 0.25; }
  100% { opacity: 0.25; }
}
@keyframes opacity-60-25-5-12 {
  0% { opacity: 0.270958333333333; }
  41.6767% { opacity: 0.25; }
  41.6867% { opacity: 1; }
  1.67667% { opacity: 0.25; }
  100% { opacity: 0.270958333333333; }
}
@keyframes opacity-60-25-6-12 {
  0% { opacity: 0.375125; }
  50.01% { opacity: 0.25; }
  50.02% { opacity: 1; }
  10.01% { opacity: 0.25; }
  100% { opacity: 0.375125; }
}
@keyframes opacity-60-25-7-12 {
  0% { opacity: 0.479291666666667; }
  58.3433% { opacity: 0.25; }
  58.3533% { opacity: 1; }
  18.3433% { opacity: 0.25; }
  100% { opacity: 0.479291666666667; }
}
@keyframes opacity-60-25-8-12 {
  0% { opacity: 0.583458333333333; }
  66.6767% { opacity: 0.25; }
  66.6867% { opacity: 1; }
  26.6767% { opacity: 0.25; }
  100% { opacity: 0.583458333333333; }
}
@keyframes opacity-60-25-9-12 {
  0% { opacity: 0.687625; }
  75.01% { opacity: 0.25; }
  75.02% { opacity: 1; }
  35.01% { opacity: 0.25; }
  100% { opacity: 0.687625; }
}
@keyframes opacity-60-25-10-12 {
  0% { opacity: 0.791791666666667; }
  83.3433% { opacity: 0.25; }
  83.3533% { opacity: 1; }
  43.3433% { opacity: 0.25; }
  100% { opacity: 0.791791666666667; }
}
@keyframes opacity-60-25-11-12 {
  0% { opacity: 0.895958333333333; }
  91.6767% { opacity: 0.25; }
  91.6867% { opacity: 1; }
  51.6767% { opacity: 0.25; }
  100% { opacity: 0.895958333333333; }
}

</style>
