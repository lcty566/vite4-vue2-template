<template>
  <div>
    <div class="btn" @click="btnEvent1">btn1</div>
    <div class="btn" @click="btnEvent2">btn2</div>

  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {

    }
  },
  methods: {
    btnEvent1() {
      // this.$ToastWithLoading().hide()
      // this.$ToastWithText('1111')
    },
    btnEvent2() {
      // this.$ToastWithLoading().show()
    }
  }
}
</script>

<style scoped>

</style>
