import { homeApi } from  '@/api'
// import { } from '../mutation-types'

const state = {
    ind:0,
}

const actions = {
      listRequest(){
        return homeApi.homeList();
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
