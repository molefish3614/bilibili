import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import '../src/assets/css/globle.css'
import './assets/font/bilifont/bilifont.css'
import {
  Swipe,
  SwipeItem,
  Lazyload
} from 'vant';
import {
  Popover
} from 'ant-design-vue'
Vue.component(Popover.name, Popover)
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
