import Vue from 'vue'
import Router from 'vue-router'
import RouteView from '@/layouts/RouteView'
import MenuView from '@/layouts/MenuView'
import WorkPlace from '@/views/dashboard/WorkPlace'
import About from '@/views/About'
import Login from '@/views/login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: '登录页',
      component: Login,
      invisible: true
    },
    {
      path: '/',
      name: '首页',
      component: MenuView,
      redirect: '/login',
      icon: 'none',
      invisible: true,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: RouteView,
          icon: 'dashboard',
          children: [
            {
              path: '/dashboard/workplace',
              name: '工作台',
              component: WorkPlace,
              icon: 'none'
            },
            {
              path: '/About',
              name: 'about',
              component: About,
              icon: 'none'
            },
            {
              path: '/Home',
              name: 'home',
              component: () => import('@/views/Home'),
              icon: 'none'
            }
          ]
        }
      ]
    }
  ]
})
