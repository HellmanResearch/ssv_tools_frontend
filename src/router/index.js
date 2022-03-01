import Vue from 'vue'
import VueRouter from 'vue-router'

import {Message, MessageBox} from "element-ui"

import store from "../store"

import menus from "./menu"

console.log("menus: ", menus)


Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "root",
        meta: {
            "name": "首页"
        },
        component: () => import('../views/frame/Frame.vue'),
        redirect: "reward",
        children: [
            {
                path: "reward",
                name: "reward",
                component: () => import('../views/reward/Reward.vue'),
                meta: {
                    name: "Reward",
                    icon: "fa-th",
                    login: false,
                }
            },
        ]
    },
    // {
    //     path: "/",
    //     name: "result",
    //     component: () => import('../views/reward/Result.vue'),
    //     meta: {
    //         name: "Result",
    //         icon: "fa-th",
    //         login: false,
    //     }
    // },
    {
        path: "/login",
        name: "login",
        component: () => import("../views/login/Login.vue")
    },
    {
        path: "/test",
        name: "test",
        component: () => import("../views/test/Test.vue"),
        meta: {
            login: false
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


//每次路由跳转预处理
router.beforeEach((to, from, next) => {
    console.log("to: ", to)
    // 如果页面不需要登录 直接跳转
    if (to.meta && to.meta.login === false) {
        next()
        return
    }
    // 如果没有登录就跳转到登录页面  并记录当前路径 登录后会自动跳回来
    // if (to.name != "login" && !store.state.user_info.id) {
    //     next({name: "login", query: {"next_path": to.fullPath}})
    //     return
    // }
    // 如果访问的页面不存在 自动跳上一页 如果不存在上一页就跳转到跟
    if (to.matched.length === 0) {                                                  //如果未匹配到路由
        Message.warning("您访问的页面不存在或没有权限 自动后退到上一页")
        if (from.name && from.name !== "login") {
            next({name: from.name})
            return
        }
        if (from.path != "/") {
            next("/")
        }
        return
    }
    next()
})


const is_all_permission = (permissions) => {
    for (let permission of permissions) {
        if (store.state.user_permissions.indexOf(permission) == -1) {
            return false
        }
    }
    return true
}


const filter_route_item = (items) => {
    var ret_items = []
    for (let item of items) {
        if (!item.meta.permissions || is_all_permission(item.meta.permissions)) {
            let filtered_item = Object.assign({}, item)
            if (!item.children) {
                ret_items.push(filtered_item)
                continue
            }
            filtered_item.children = filter_route_item(item.children)
            if (filtered_item.children.length > 0) {
                ret_items.push(filtered_item)
            }
        }
    }
    return ret_items
}


export const init_router = () => {
    if (store.state.user_menus.length) {
        console.log("重复初始化路由")
        return
    }
    var filtered_menus = []
    // 如果为管理员和具有read_all权限的挂载所有
    console.log("store.state: ", store.state)
    if (store.state.user_info.is_staff || store.state.user_permissions.indexOf("read_all") != -1) {
        filtered_menus = menus
    } else {
        filtered_menus = filter_route_item(menus)
    }
    if (filtered_menus.length == 0) {
        MessageBox.alert('很抱歉 您没有权限 请联系管理员', '提示', {
            confirmButtonText: '确定',
            callback: action => {
                df_admin.sso.login()
            }
        });
    }
    store.commit("set_user_menus", filtered_menus)
    var routers = [{
        path: "/",
        name: "root",
        meta: {
            "name": "首页"
        },
        component: () => import('../views/frame/Frame.vue'),
        redirect: filtered_menus.length ? filtered_menus[0].path : "/test",
        children: filtered_menus
    }]
    router.push(routers)
    console.log("routers:", routers)
    router.addRoutes(routers)
    console.log("router: ", router)
    store.state.filtered_menus = filtered_menus
}


// if(process.env.NODE_ENV === "development"){
//     init_router()
// }

// init_router()


export default router

