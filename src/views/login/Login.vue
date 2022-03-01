<template>
    <div
            v-loading="true"
            element-loading-text="登录中..."
            style="height: 100%"
    >
    </div>
</template>

<script>
    import {init_router} from "../../router";
    import {login_by_qr} from "../../utils/dingtalk"
    import {get_cookie} from "../../utils/cookie";
    import menu from "../../router/menu";

    export default {
        mounted() {
            var session_id = get_cookie("sessionid")
            // var code = this.$route.query.code
            // if (session_id == undefined && code == undefined){
            //     this.$alert('您没有认证信息 系统将为您跳转到钉钉二维码登录界面登录 登录成功后将自动跳转回来', '登录跳转', {
            //         confirmButtonText: '确定',
            //         callback: action => {
            //             dingtalk.login_by_qr(window.location.href)
            //         }
            //     });
            // }
            var code = this.$route.query.code;
            if (code){
                this.login_dingtalk();
                return
            }
            this.get_my_info()
            // if (session_id) {
            //     this.get_my_info()
            // } else {
            //     var code = this.$route.query.code;
            //     if (!code) {
            //         login_by_qr(window.location.href)
            //         return
            //     }
            //     this.login_dingtalk();
            // }
        },
        methods: {
            get_my_info() {
                var self = this
                this.g_master_api
                    .get("user/users/get-my-info")
                    .then(response => {
                        self.init_info(response)
                    })
                    .catch(error => {
                        console.log("error:", error);
                        this.$message.warning("登录失败 自动重试");
                        setTimeout(this.get_user_info, 5000);
                    });
            },
            login_dingtalk() {
                var code = this.$route.query.code;
                var data = {
                    "tmp_auth_code": code
                }
                var self = this;
                this.$c_master
                    .post("user/users/login-dingtalk", data)
                    .then(response => {
                        self.init_info(response)
                        // // 将用户信息和权限保存为全局变量
                        // this.$store.commit("set", "user_info", response.data);
                        // this.$store.commit("set", "user_permissions", response.data.permissions);
                        // // this.$store.state.user_info = response.data;
                        // // this.$store.state.user_permissions = response.data.permissions;
                        //
                        // // 获取跳转链接 没有就跳转到根目录 必须在init_router之前执行  init_router中添加路由会重置next_path
                        // var next_path = this.get_next_path();
                        // console.log("next_path:", next_path);
                        //
                        // // 根据权限初始化路由和菜单数据
                        // init_router();
                        //
                        // this.$router.push({ path: next_path });
                    })
                    .catch(error => {
                        console.log("error:", error);
                        this.$message.warning("登录失败 自动重试");
                        setTimeout(this.get_user_info, 5000);
                    });
            },
            init_info(response) {

                this.$store.commit("set_user_info", response.data);
                this.$store.commit("set_user_permissions", response.data.permissions);

                // 获取跳转链接 没有就跳转到根目录 必须在init_router之前执行  init_router中添加路由会重置next_path
                // var next_path = this.get_next_path();
                var next_path = this.$route.query.next_path
                if (next_path == undefined) {
                    next_path = "/"
                }
                console.log("next_path:", next_path);

                // 根据权限初始化路由和菜单数据
                init_router();

                this.$router.push({path: next_path});
            },
            get_next_path() {
                console.log("get_next_path:", window.location.href);
                var l = window.location.href.split("next_path=");
                if (l.length >= 2) {
                    var next_path = l[1].split("&token")[0];
                    return decodeURIComponent(next_path);
                }
                return "/";
            }
        }
    };
</script>

<style scoped>
</style>
