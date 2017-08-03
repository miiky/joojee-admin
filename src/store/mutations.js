import {SET_RESOURCE, SET_USERINFO, CHANGE_MENU} from './mutation-types'

import {setStore} from '../utils/common'

export default {
    /** 保存用户信息 */
    [SET_USERINFO](state, payload){
        state.userInfo = payload.userInfo
        setStore('userInfo', state.userInfo)
    },

    /** 保存资源信息 */
    [SET_RESOURCE](state, paylad){
        state.resource = paylad.resource
        setStore('resource', state.resource)

        //初始化menu
        let menu = {subMenuItem: [state.resource[0].value], menuItem: state.resource[0].children[0].path}
        state.menu = menu
        setStore('menu', state.menu)

    },

    [CHANGE_MENU](state, payload){
        if(payload.menu.subMenuItem != null){
            state.menu.subMenuItem = payload.menu.subMenuItem
        }
        state.menu.menuItem = payload.menu.menuItem
        setStore('menu', state.menu)
    }


}
