/*
 * @Author: ink-song 229135518@qq.com
 * @Date: 2023-05-16 22:02:24
 * @LastEditors: Ice songbing940823@gmail.com
 * @LastEditTime: 2023-06-06 13:58:04
 * @FilePath: /imooc-admin/src/router/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from 'vue-router'
const pucliRoutes = [
  {
    path: '/',
    component: () => import('../layout/index.vue')
  }
]

const routes = [
  ...pucliRoutes,
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
