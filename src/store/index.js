import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './action'

Vue.use(Vuex)

const state = {
    userInfo: null,
    resource: null,
    menu: null,
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
})
