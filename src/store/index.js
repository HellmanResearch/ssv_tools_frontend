import Vue from 'vue'
import Vuex from 'vuex'

import NProgress from 'nprogress'

import menus from "../router/menu"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // user_info: process.env.NODE_ENV === "development" ? {"id": 1, "name": "张三", "is_staff": true}:{},
        user_info: {
            id: 1
        },
        user_permissions: [],
        user_menus: [],
        in_request_count: 0,
        current_app_id: null,
        current_app_name: null
    },
    mutations: {
        set_user_info(state, value){
            state.user_info = value
        },
        set_user_permissions(state, value){
            state.user_permissions = value
        },
        set_user_menus(state, value){
            state.user_menus = value
        },
        add_request_count(state, number=1){
            state.in_request_count += number
            NProgress.start()
        },
        reduce_request_count(state, number=1){
            state.in_request_count -= number
            NProgress.inc(0.2)
            if(state.in_request_count <= 0){
                NProgress.done()
            }
        },
        clear_request_count(state){
            state.in_request_count = 0
            NProgress.done()
        },
        change_current_app(state, app){
            state.current_app_id = app.id
            state.current_app_name = app.name
        }
    },
    actions: {
    },
    modules: {
    }
})