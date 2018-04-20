import Vue from 'vue'
import Vuex from 'vuex'
import {globalVar} from './mutation-types'
import createLogger from 'vuex/dist/logger'

import home from './modules/home'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    namespaced: true,
    state: {
      isAsideNav:false,
      isLoginPage: true, // 是否是登录页面
    },
    modules: {
        home,
    },
    actions: {
        navChange({commit},val){
           commit(globalVar.NAV_CHANGE,val)
        }
    },
    mutations: {
      [globalVar.NAV_CHANGE](state,val){ // 控制导航栏变化
        state.isAsideNav = val;
      },
      [globalVar.IS_LOGIN_PAGE](state,val){ // 控制导航栏变化
        state.isLoginPage = val.status;
      }
    },
    strict: false,
    plugins: debug ? [createLogger()] : []
})

