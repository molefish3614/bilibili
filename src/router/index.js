import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../view/index.vue'
import Space from '../view/space.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'index',
    component: Index,
    meta: {
      title: '(仿)哔哩哔哩弹幕网首页'
    }
  },
  {
    path: '/space/:id',
    name: 'space',
    component: Space,
  }
]

const router = new VueRouter({
  routes
})

export default router
