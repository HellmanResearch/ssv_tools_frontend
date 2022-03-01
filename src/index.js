
import * as filters from "./utils/filters"
import * as plugins from "./utils/plugins"

import mixins from "./utils/mixins/index"
import cookie from "./utils/cookie"

const requireComponent = require.context(
    './components',
    true,
    // /index.(vue|js)$/
    /[A-Z]\w+\.(vue|js)$/
)

var components = {}

const install = function (Vue, g_master_api, options = {}) {
    window.Vue = Vue
    console.log("options: ", options)
    var default_options = {
        // df-admin 组件请求后端数据默认axios实例
        g_master_api: null,
    }
    options = Object.assign({}, default_options, options)

    Vue.prototype.g_master_api = g_master_api
    for (let item in plugins) {
        Vue.prototype[item] = plugins[item]
    }

    for (let item in filters) {
        Vue.filter(item, filters[item])
    }

    requireComponent.keys().forEach(fileName => {
        var component_config = requireComponent(fileName)
        if (!component_config.default.name) {
            return
        }
        Vue.component(
            component_config.default.name,
            component_config.default
        )
    })
}

requireComponent.keys().forEach(fileName => {
    var component_config = requireComponent(fileName)
    if (!component_config.default.name) {
        return
    }
    console.log("register component: ", component_config.default.name)
    components[component_config.default.name] = component_config.default
})

export default Object.assign({}, components, {
    install,
    mixins,
    cookie,
})
