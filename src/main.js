import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import '../src/assets/css/globle.css'
import './assets/font/bilifont/bilifont.css'
import common from './assets/js/common.js'
Vue.config.productionTip = false
Vue.prototype.common = common
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
