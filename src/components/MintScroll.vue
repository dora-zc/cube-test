<template>
  <div>
    <div class="tab-container" >
      <div class="wrap" ref="navbar">
        <mt-navbar v-model="selected" ref="items">
          <mt-tab-item v-for="item in navBarData" :id="item.id" ref="item">{{item.title}}</mt-tab-item>
        </mt-navbar>
      </div>
    </div>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item :id=1 >
        <mt-cell v-for="n in 10" :title="'内容 ' + n"/>
      </mt-tab-container-item>
      <mt-tab-container-item :id="2">
        <mt-cell v-for="n in 4" :title="'测试 ' + n"/>
      </mt-tab-container-item>
      <mt-tab-container-item :id="3">
        <mt-cell v-for="n in 6" :title="'选项 ' + n"/>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
  export default {
    name: "MintScroll",
    data() {
      return {
        selected: 1,
        navBarData:[
          {
            id: 1,
            title: '选项1'
          },
          {
            id: 2,
            title: '选项2'
          },
          {
            id: 3,
            title: '选项4'
          },
          {
            id: 4,
            title: '选项5'
          },
          {
            id: 5,
            title: '选项5'
          },
          {
            id: 6,
            title: '选项6'
          },
          {
            id: 7,
            title: '选项7'
          },
          {
            id: 8,
            title: '选项8'
          }
        ]
      }
    },
    watch:{
      selected(newVal){
        this._adjust()
      }
    },
    created() {
      this.selected = 1
    },
    mounted() {
      console.log(this.$refs.navbar)
      this.setNavWidth()

    },
    methods:{
      setNavWidth(){
        const lists = this.$refs.item
        let width = 0
        for (let i=0;i<lists.length;i++) {
          width += lists[i].$el.clientWidth
        }

        this.$refs.items.$el.style.width = width + 'px'
      },
      _adjust() {
        // waiting ui
        this.$nextTick(() => {
          const targetProp = 'clientWidth'
          const active = this.selected
          const viewportSize = 375//this.$refs.scroll.$el[targetProp]
          const itemsEle = this.$refs.items.$el
          const scrollerSize = itemsEle[targetProp]
          // const minTranslate = Math.min(0, viewportSize - scrollerSize)
          const minTranslate = viewportSize - scrollerSize
          const middleTranslate = viewportSize / 2
          const items = itemsEle.children
          let size = 0
          this.navBarData.every((navbar, index) => {
            if (index === this.selected) {
              size += (items[index][targetProp] / 2)
              return false
            }
            size += items[index][targetProp]
            return true
          })
          let translate = middleTranslate - size
          translate = Math.max(minTranslate, Math.min(0, translate))
          this.$refs.items.$el.style.transform = `translateX(${translate}px)`
          // this.$refs.items.$el.style.transition = `translateX(${translate}px)`
        })
      }
    }
  }
</script>

<style>
.tab-container{
  width: 100%;
  /*height: 0px;*/
}
.wrap {
  overflow-x: scroll;
  width: 100%;
}
.mint-navbar {
  display: inline-block;
  width: 800px;
  text-align: left;
  height: 50px;
  /*transform: translateX(0px);*/
  /*transition: transform cubic-bezier(0.55, 0.06, 0.1, 0.9) 0.3s;*/
}

.mint-navbar .mint-tab-item {
  display: inline-block;
  padding: 17px 18px;
  /*height: 40px;*/
}
</style>
