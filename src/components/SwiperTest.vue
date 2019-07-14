<template>
  <div class="demo">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for= "(item,index) in swiperList">
          <div class="box-c">{{item}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper";
  import "swiper/dist/css/swiper.min.css";

  export default {
    name: "HelloWorld",
    data() {
      return {
        swiperList: []
      };
    },
    mounted() {
      this.getData();
    },
    methods: {
      getData() {
        this.swiperList = [5, 6, 7, 8];
        setTimeout(function() {
          var mySwiper = new Swiper(".swiper-container", {
            slidesPerView: 1,
            loop: false,
            autoplay: false
          });
        }, 100);
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .demo {
    width: 350px;
  }
  .box-c {
    width: 100px;
    height: 50px;
    border: 1px solid #000;
  }
</style>
