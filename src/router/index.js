/* eslint-disable no-tabs */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/container/Home'
import ServerCenter from '@/container/ServerCenter'
import Errors from '@/components/Error'
import Account from '@/container/Account'
import Admin from '@/container/Admin'
import Registry from '@/container/Registry'
import Detail from '@/container/Detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/server',
      name: 'server',
      component: ServerCenter
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    },
    {
      path: '/registry',
      name: 'registry',
      title: '实名认证',
      component: Registry
    },
    {
      path: '/admin',
      name: 'admin',
      title: '帐户管理',
      component: Admin
    },
    {
      path: '/detail/:id',
      name: 'detail',
      title: '商品详情',
      component: Detail
    },
    {
      path: '*',
      redirect: '/',
      component: Errors
    }
  ]
})
