<template>
  <div class="toast-wrap" v-if="showWrap" :class="showContent ?'fadein':'fadeout'">{{text}}</div>
</template>

<style scoped>
.toast-wrap{
  position: fixed;
  left: 50%;
  top:50%;
  background: rgba(37,38,45,0.9);
  padding: 10px;
  border-radius: 5px;
  transform: translate(-50%,-50%);
  color:#fff;
  z-index: 900;
}
.fadein {
  animation: animate_in 0.25s;
}
.fadeout {
  animation: animate_out 0.25s;
  opacity: 0;
}
@keyframes animate_in {
  0% {
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
@keyframes animate_out {
  0% {
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}
</style>
