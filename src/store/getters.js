/**
 * Created by yangchunyuan on 2017/7/13.
 */
import {GET_USERINFO, GET_RESOURCE, GET_MENU} from './mutation-types'

import {getStore} from '../utils/common'

export default {
    [GET_USERINFO]: (state) => {
        if (state.userInfo == null) {
            let data = JSON.parse(getStore('userInfo'))
            state.userInfo = data
        }
        return state.userInfo

    },
    [GET_RESOURCE]: (state) => {
        if (state.resource == null) {
            let data = JSON.parse(getStore('resource'))
            state.resource = data
        }
        return state.resource
    },
    [GET_MENU]: (state) => {
        if(state.menu == null){
            let data = JSON.parse(getStore('menu'))
            state.menu = data
        }
        return state.menu
    }
}