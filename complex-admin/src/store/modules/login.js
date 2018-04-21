import { loginApi } from  '@/api'
// import { } from '../mutation-types'

const state = {
    loginData:{
      userName:'admin',
      password:'123456',
    }
}

const actions = {
      loginRequest({commit,state}){
        return new Promise((reslove,reject)=>{
          loginApi.login(state.loginData).then(res=>{
            reslove(res)
          }).catch(error=>{
            reject(error)
          })
        })
      }

}

const mutations = {

}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
