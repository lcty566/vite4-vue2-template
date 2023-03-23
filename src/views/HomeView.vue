<template>
  <div>
    <div v-for="(item,i) in 20" :key="i">
      <!-- <img v-lazy="'https://fs.smyfinancial.com/prddata/smy-cdf-file-image/101_e2bd7dd2a1dad235badaecc55c765b2c.png'" alt=""> -->
      aaaa
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vue2HomeView',

  data () {
    return {

    }
  },

  mounted () {
  },

  methods: {
    aa () {
      console.log(111)
    }
  }
}
</script>

<style scoped>

</style>
