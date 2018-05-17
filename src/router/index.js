import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/page/Login'
import Home from '@/components/common/Home'
import Dashboard from '@/components/page/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/dashboard'
    },{
      path:'/',
      component:Home,
      meta:{title:'自述文件'},
      children:[
        {
          path:'/dashboard',
          meta:{ title:'系统首页'},
          component:Dashboard
        }
      ]
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'*',
      redirect:'/login'
    }
  ]
})
