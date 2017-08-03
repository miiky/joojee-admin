/**
 * Created by yangchunyuan on 2017/7/25.
 */
let _baseUrl = 'https://admin.joojee.cn'
if (process.env.NODE_ENV == 'development') {
    _baseUrl = 'http://192.168.2.115:8085'
}

export default {
    /**
     * @description 获取所有办税服务厅基础信息
     * @returns {string}
     */
    getBsfwtLists(){
        return _baseUrl + '/ycqh/getBsfwtLists'
    },
    /**
     * @description 获取所有业务信息
     */
    getYwLists(){
        return _baseUrl + '/ycqh/getYwLists'
    },
    /**
     * @description 获取所有办税服务厅取号控制信息
     */
    getBsfwtQhKzxx(){
        return _baseUrl + '/ycqh/getBsfwtQhKzxx'
    },
    /**
     * @description 4.更改办税服务厅取号控制信息
     * @params bsfwtDm（办税服务厅代码、必传）、fwtZt（服务厅状态）、kqhs（可取号数 ）、wbls（为办理数上限）、
     *          yqtsZt（友情提示状态）、yqtsNr（友情提示内容）
     * */
    updateBsfwtConfig(){
        return _baseUrl + '/ycqh/updateBsfwtConfig'
    },
    /**
     * @description 更改办税服务厅业务取号控制信息
     * @params bsfwtDm（办税服务厅代码、必传）、ywdm（业务代码）、ywzt（业务状态）、
     *          kqhs（可取号数）、kqhsjq（可取号时间起）、kqhsjz（可取号时间止）、qhcs（可 取号次数）
     */
    updateBsfwtYwxxConfig(){
        return _baseUrl + '/ycqh/updateBsfwtYwxxConfig'
    },
    /**
     * @description 过去所有办税服务厅推送规则信息
     * @returns {string}
     */
    getBsfwtTsxx(){
        return _baseUrl + '/ycqh/getBsfwtTsxx'
    },
    /**
     * @description 更改办税服务厅推送规则
     * @params bsfwtDm（办税服务厅代码、必传）、gzdm（规则代码、必传）、tszt（推送规 则）、lessNum（小于多少时推送）、tspc（推送频次）
     */
    updateBsfwtTsxx(){
        return _baseUrl + '/ycqh/updateBsfwtTsxx'
    },
    /**
     * @description getWxqhLsxx
     * @params zgswjDm（主管税务局代码）、bsfwtDm（办税服务厅代码）、qhsj（取号时间）、phzt（票号状态）、phone（电话号码）
     */
    getWxqhLsxx(){
        return _baseUrl + '/ycqh/getWxqhLsxx'
    }

}