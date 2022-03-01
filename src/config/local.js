import axios from "axios";


// async function get_dynamic_config() {
//     try {
//         var response = await axios.get("config.json")
//     } catch (error) {
//         alert("请求配置文件失败")
//         return
//     }
//     return response.data
// }


var request = new XMLHttpRequest();
request.open('GET', 'config.json', false);
request.send(null);
if (request.status != 200) {
    alert("load config.json failed")
    throw "load config.json failed"
}

const dynamic_config = JSON.parse(request.responseText)


export default {
    base_url: "http://localhost:8000/api/v1/",
    app_id: dynamic_config.app_id   // auth
}