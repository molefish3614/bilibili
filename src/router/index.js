import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../view/index.vue'
import Space from '../view/space.vue'
import SpaceDynamic from '../components/space/dynamic.vue'
import SpaceVideo from '../components/space/video.vue'
import SpaceChannel from '../components/space/channel.vue'
import SpaceBangumi from '../components/space/bangumi.vue'
import SpaceFollow from '../components/space/follow.vue'
import SpaceFans from '../components/space/fans.vue'
import SpaceIndex from '../components/space/index.vue'
import SpaceArticle from '../components/space/article.vue'

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
    redirect: '/space/:id/index',
    children: [{
      path: '/space/:id/index',
      name: 'spaceIndex',
      component: SpaceIndex
    }, {
      path: '/space/:id/dynamic', // 路由配置文件的path是最终显示在浏览器地址栏中的，预留动态路由绑定位置
      name: 'spaceDynamic',
      component: SpaceDynamic
    }, {
      path: '/space/:id/video',
      name: 'spaceVideo',
      component: SpaceVideo
    }, {
      path: '/space/:id/channel/index',
      name: 'spaceChannel',
      component: SpaceChannel
    }, {
      path: '/space/:id/bangumi',
      name: 'spaceBangumi',
      component: SpaceBangumi
    }, {
      path: '/space/:id/follow',
      name: 'spaceFollow',
      component: SpaceFollow
    }, {
      path: '/space/:id/fans',
      name: 'spaceFans',
      component: SpaceFans
    }, {
      path: '/space/:id/article',
      name: 'spaceArticle',
      component: SpaceArticle
    },]
  }
]

const router = new VueRouter({
  routes
})

export default router
