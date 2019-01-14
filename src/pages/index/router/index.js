import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@a/js/myAuth.js'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
const index = (resolve) => { require(['../views/index.vue'], resolve) }

NProgress.configure({ showSpinner: false })
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
  NProgress.done()
  // if (Auth.isLogin()) {
  // } else {
  //   if (to.path !== '/index') {
  //     next({name: 'index', replace: true})
  //   } else {
  //     next()
  //   }
  //   NProgress.done()
  // }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
export default router
