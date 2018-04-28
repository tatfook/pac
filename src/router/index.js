import Vue from 'vue'
import Router from 'vue-router'
import pac from '@/components/pac'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: pac
      // component: HelloWorld
    }
  ]
})
