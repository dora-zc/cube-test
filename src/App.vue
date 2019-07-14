<template>
  <div id="app">
    <scroll-nav></scroll-nav>
<!--    <mint-scroll></mint-scroll>-->
<!--    <swiper-test></swiper-test>-->
<!--    <better-scroll-test></better-scroll-test>-->
  </div>

</template>

<script>
import ScrollNav from './components/ScrollNav.vue'
// import BetterScrollTest from './components/BetterScrollTest.vue'
import MintScroll from './components/MintScroll.vue'
// import SwiperTest from './components/SwiperTest.vue'


export default {
  name: 'app',
  components: {
    ScrollNav,
    MintScroll,
    // SwiperTest,
    // BetterScrollTest
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
