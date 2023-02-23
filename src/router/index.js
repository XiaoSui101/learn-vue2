import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/learn/全局过滤器.vue'
import chuanlian from '@/learn/串联过滤器.vue'
import canshu from '@/learn/过滤器参数.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/chuanlian',
      name: 'chuanlian',
      component: chuanlian
    },
    {
      path: '/canshu',
      name: 'canshu',
      component: canshu
    }
  ]
})
