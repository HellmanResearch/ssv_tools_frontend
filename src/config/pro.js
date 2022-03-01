import axios from "axios"

// axios.get("config.json").then(response => {
//     Vue.prototype.dynamic_config = response.data
// })


// async function get_dynamic_config() {
//     try {
//         var response = await axios.get("config.json")
//     } catch (error) {
//         alert("请求配置文件失败")
//         return
//     }
//     return response.data
// }
//
// var dynamic_config = get_dynamic_config()

export default {
    base_url: window.location.protocol + "//" + window.location.host + "/api/v1/",
    // app_id: dynamic_config.app_id   // auth
}