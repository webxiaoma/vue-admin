import Vue from 'vue'
import Router from 'vue-router'
import Store from '@/store'
import {globalVar} from '../store/mutation-types'
import MainLayout from '@/components/MainLayout'
import {Home,Drag} from '@/components/list'
import Login from '@/components/Login'
import {ErrorOne,ErrorTwo,ErrorThree} from '@/components/error'
import {Upload,EditorOne,EditorTwo, MarkDown} from '@/components/form'

Vue.use(Router)

const router = new Router({
  mode: 'history',
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
          meta:{
            breadcrumb:['列表信息','数据列表'],
          }
        },{
          path: 'drag',
          name: '数据分析',
          component: Drag,
          meta:{
            breadcrumb:['列表信息','拖拽列表'],
          }
        },{
          path: '/upload',
          name: '文件上传',
          component: Upload,
          meta:{
            breadcrumb:['表单信息','文件上传'],
          }
        },{
          path: '/editor_one',
          name: '富文本编辑',
          component: EditorOne,
          meta:{
            breadcrumb:['表单信息','富文本编辑一'],
          }
        },{
          path: '/editor_two',
          name: '富文本编辑',
          component: EditorTwo,
          meta:{
            breadcrumb:['表单信息','富文本编辑二'],
          }
        },{
          path: '/markdown',
          name: 'MarkDown',
          component: MarkDown,
          meta:{
            breadcrumb:['表单信息','MarkDown'],
          }
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


export default router;

