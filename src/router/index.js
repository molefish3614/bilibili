import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/index.vue'
import Main from '../components/main.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Index,
  redirect: '/index',
  children: [{
    path: '/index',
    component: Main
  }]
}]

const router = new VueRouter({
  routes
})

export default router
