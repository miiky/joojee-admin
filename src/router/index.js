import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview';

Vue.use(Router)

const routes = [
    {
        path: '/',
        meta: {
            title: '湖北国税移动办税平台'
        },
        component: (resolve) => require(['@/views/login.vue'], resolve),
    }, {
        path: '/home',
        meta: {
            title: '湖北国税移动办税平台'
        },
        component: (resolve) => require(['@/views/home.vue'], resolve),
        children: [{
            path: 'system/user',
            component: (resolve) => require(['@/views/system/user.vue'], resolve),
        }, {
            path: 'system/role',
            component: (resolve) => require(['@/views/system/role.vue'], resolve),
        }, {
            path: 'system/resource',
            component: (resolve) => require(['@/views/system/resource.vue'], resolve),
        }, {
            path: 'function/material',
            component: (resolve) => require(['@/views/function/material.vue'], resolve),
        }, {
            path: 'function/message',
            component: (resolve) => require(['@/views/function/message.vue'], resolve),
        }, {
            path: 'takeNum/manage',
            component: (resolve) => require(['@/views/takeNum/manage.vue'], resolve),
        }, {
            path: 'takeNum/message',
            component: (resolve) => require(['@/views/takeNum/message.vue'], resolve),
        }, {
            path: 'takeNum/serviceHall',
            component: (resolve) => require(['@/views/takeNum/serviceHall.vue'], resolve),
        }, {
            path: 'takeNum/settings',
            component: (resolve) => require(['@/views/takeNum/settings.vue'], resolve),
        }
        ]
    }
]

const router = new Router({
    mode: 'history',
    routes: routes,
    //每次路由跳转之后都回到顶部
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    //主页面放行
    if (to.fullPath == '/') {
        next()
        return
    }
    //未有登陆标签的生成未登录标签
    if (localStorage.JOOJEE_ADMIN_ISLOGIN == undefined) {
        localStorage.JOOJEE_ADMIN_ISLOGIN = 'F'
    }
    //有登陆标签的登录，未登录的跳到登录页
    if (localStorage.JOOJEE_ADMIN_ISLOGIN == 'T') {
        next()
    } else {
        next({
            path: '/'
        })
    }
})

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
});

export default router