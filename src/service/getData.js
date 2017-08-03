/**
 * Created by yangchunyuan on 2017/7/13.
 */
import fetch from '../utils/fetch'
import * as login from './tempdata/login'
import * as userData from './tempdata/user'
import * as serviceHall from './tempdata/serviceHall'
import * as takeNum from './tempdata/takeNumber'
import api from './api'

/**
 * 创建临时数据
 */
const setpromise = data => {
    return new Promise((resolve, reject) => {
        resolve(data)
    })
}


let userInfo = () => setpromise(login.user_info)

let resource =() => setpromise(login.resoutce)

let userList = () => setpromise(userData.user_list)

let treeList = () => setpromise(login.treeList)

let serviceHallList = () => setpromise(serviceHall.serviceHall_list.serviceHallList)

let businessList = () => setpromise(serviceHall.serviceHall_list.businessList)

let orderList = () => setpromise(takeNum.takeNum_orderList.orderList)

/**
 * 分页获取服务厅列表数据
 *
 * @param param         搜索key
 * @param pageSize      一页展示多少
 * @param pageNumber    第几页
 */
let getBsfwtLists = (param, pageSize, pageNumber) => fetch('GET', api.getBsfwtLists(),{
    param : param,
    pageSize: pageSize,
    pageNumber: pageNumber
})

/**
 * 分页获取业务列表数据
 *
 * @param param         搜索key
 * @param pageSize      一页展示多少数据
 * @param pageNumber    第几页
 */
let getYwLists = (param, pageSize, pageNumber) => fetch('GET', api.getYwLists(),{
    param : param,
    pageSize: pageSize,
    pageNumber: pageNumber
})

/**
 * 获取办税服务厅取号控制页面信息
 */
let getBsfwtQhKzxx = () => fetch('GET', api.getBsfwtQhKzxx())

let updateBsfwtConfit = (bsfwtDm, fwtZt) => fetch('GET', api.updateBsfwtConfig(), {
    bsfwtDm: bsfwtDm,
    fwtZt: fwtZt
})

export {
    userInfo, resource, userList, treeList, serviceHallList, businessList, orderList,
    getBsfwtLists, getYwLists, getBsfwtQhKzxx, updateBsfwtConfit,
}