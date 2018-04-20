import Vue from 'vue'
import Router from 'vue-router'
import Store from '@/store'
import {globalVar} from '../store/mutation-types'
import MainLayout from '@/components/MainLayout'
import {Home} from '@/components/list'
import Login from '@/components/Login'
import {ErrorOne,ErrorTwo,ErrorThree} from '@/components/error'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component: MainLayout,
      redirect: '/',
      children: [{
          path: '/',
          name: '首页',
          component: Home,
        },{
          path: 'login',
          name: '登录',
          component: Login,
        },{
          path: 'error/403',
          name: '无权访问',
          component: ErrorOne,
        },{
          path: 'error/404',
          name: '找不到',
          component: ErrorTwo,
        },{
          path: 'error/500',
          name: '服务器发生错误',
          component: ErrorThree,
        }]
    },{
      path:'*',
      redirect: 'error/404'
    }
  ]
})


router.beforeEach((to,from,next) =>{
    // 判断是否进入登录页面或注册页面
    if(to.path.replace('\/','') == 'login'){
      Store.commit(globalVar.IS_LOGIN_PAGE,{status:true})
    }else{
      Store.commit(globalVar.IS_LOGIN_PAGE,{status:false})
    }


    // if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    //     if (sessionStorage.TOKEN) {  // 通过vuex state获取当前的token是否存在
    //         next();
    //     }else {
    //         next({
    //           path: '/login',
    //           query: {redirect: from.fullPath,msg:'请您先登录'}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
    //         })
    //     }
    // }else {
    //     next();
    // }

    next()
})


// 为页面添加title
router.afterEach((to,from)=>{
    document.title = to.name
})


export default router;

