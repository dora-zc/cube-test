<template>
<div>
  <div class="side-container">
    <scroll-nav-bar
      :current="current"
      :labels="labels"
      @change="changeHandler">
    </scroll-nav-bar>
  </div>
  <div class="content-box">
    <div v-show="current==='快车'">
      page1
    </div>
    <div v-show="current==='小巴'">
      page2
    </div>
  </div>
</div>
</template>

<script>
  import ScrollNavBar from './scroll/ScrollNavBar.vue'
  export default {
    data() {
      return {
        current: '快车',
        labels: [
          '快车',
          '小巴',
          '专车',
          '顺风车',
          '代驾',
          '公交',
          '自驾租车',
          '豪华车',
          '二手车',
          '出租车'
        ],
      }
    },
    methods: {
      changeHandler(cur) {
        this.current = cur
      }
    },
    components:{
      ScrollNavBar
    }
  }
</script>

<style scoped>

</style>
