import config from "../config"
import {set_cookie} from "./cookie";

export const login_by_qr = (redirect_url = null) => {
    if (!redirect_url) {
        redirect_url = window.location.href
    }
    set_cookie("sessionid", "", -1)
    // var redirect_url = `${window.location.href}/login`
    var encode_url = encodeURIComponent(redirect_url)
    window.open(`https://oapi.dingtalk.com/connect/qrconnect?appid=${config.app_id}&response_type=code&scope=snsapi_login&redirect_uri=${encode_url}`, name = "_self")
}
//
// export default {
//     login_by_qr,
// }
