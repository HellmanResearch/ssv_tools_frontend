import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import VuePipeline from 'vue-pipeline'
import 'echarts/lib/component/title'
import 'echarts/lib/component/toolbox'
import VCharts from "v-charts"
import axios from "axios"
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import "font-awesome/css/font-awesome.min.css"

import df_admin from "df-admin"

import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

import 'element-ui/lib/theme-chalk/index.css';
import 'nprogress/nprogress.css'
import 'v-charts/lib/style.css'

import master_api from "./api"
import * as plugins from "./utils/plugins"
import devops_admin from "./index"

// library.add(faUserSecret, faSignOutAlt)

Vue.config.productionTip = false
// Vue.prototype.$g_master_api = master_api
// Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(ElementUI);
Vue.use(VCharts)
Vue.use(devops_admin, master_api)
Vue.use(df_admin, master_api)
Vue.use(VuePipeline)


const require_component = require.context(
    './components',
    true,
    /[A-Z]\w+\.(vue|js)$/
)

const require_views_component = require.context(
    './views',
    true,
    /[A-Z]\w+\.(vue|js)$/
)

// 自动注册 src/components目录以及子目录所有组件 注册后的组件名为 G<文件夹名><文件夹><文件名>  子目录文件(名)首字母会自动大写
// require_component.keys().forEach(file_name => {
//   const component_config = require_component(file_name)
//
//   var component_name = upperFirst(
//       camelCase(
//           file_name.replace(/^\.\/(.*)\.\w+$/, '$1')
//       )
//   )
//   component_name = "G" + component_name
//   console.log("component_name", component_name)
//   Vue.component(
//       component_name,
//       component_config.default || component_config
//   )
// })


require_views_component.keys().forEach(file_name => {
    if (file_name.split("/").length != 4 || file_name.split("/")[2] != "components") {
        return
    }
    const component_config = require_views_component(file_name)
    var component_name = upperFirst(
        camelCase(
            file_name.replace(/^\.\/(.*)\.\w+$/, '$1')
        )
    )
    component_name = "L" + component_name.split("Components")[0] + component_name.split("Components")[1]
    console.log("component_name", component_name)
    Vue.component(
        component_name,
        component_config.default
    )
})

for (let item in plugins) {
    Vue.prototype[item] = plugins[item]
}


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')


