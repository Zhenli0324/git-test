import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import store from './store'


Vue.config.productionTip = false
Vue.use(VueResource)

//创建vm
new Vue({
  el:'#app',
  render:h=>h(App),
  store,
  beforeCreate(){
    Vue.prototype.$bus=this
  }  
})