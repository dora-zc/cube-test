import Vue from 'vue'
import './cube-ui'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(MintUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
