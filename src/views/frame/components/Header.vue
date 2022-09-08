<template>
    <div
            style="padding: 0px 100px; display: flex; align-items: center; justify-content: space-between; height: 60px; background-color: #16B8D8"
    >
        <div>
            <img
                    style="height: 44px; display: inline-block; vertical-align: middle; box-sizing: border-box; vertical-align: middle;"
                    src="../../../assets/logo.png"
            />
            <span style="margin-left: 8px; letter-spacing:2px; font-weight: 420; color: #FFFFFF; font-size: 30px; height: 100%; display: inline-block; box-sizing: border-box; vertical-align: middle;">&nbsp;| Rewards </span>
        </div>
        <l-frame-menu></l-frame-menu>
        <div>
            <ul class="c_ul">
                <li
                        class="c_li"
                >
                    <transition :duration="1000">
                        <i
                                v-show="loading"
                                class="el-icon-loading"
                                style="color: #FFFFFF;"
                        ></i>
                    </transition>
                </li>
                <li
                        class="c_li"
                        @click="window.open('https://twitter.com/HellmanResearch')"
                >
                    <i
                            class="fa fa-twitter"
                            aria-hidden="true"
                            style="margin-right: 5px"
                    ></i>Twitter
                </li>
                <li
                        class="c_li"
                        @click="window.open('https://hellman.team')"
                >
                    <i
                            class="fa fa-globe"
                            aria-hidden="true"
                            style="margin-right: 5px"
                    ></i>Website
                </li>
                <li
                        class="c_li"
                        @click="window.open('https://explorer.ssv.network/operators/127')"
                >
                    <i
                            class="fa fa-external-link"
                            aria-hidden="true"
                            style="margin-right: 5px"
                    ></i>SSV node
                </li>
            </ul>
        </div>
        <el-dialog
                title="查看API Token"
                :visible.sync="visible_dialog_token"
                width="600px"
        >
            <el-alert
                    title="请妥善保存您的API Token"
                    :closable="false"
                    type="warning"
            >
            </el-alert>
            <div style="padding: 0px 20px; padding-top: 20px">
                <span>{{ token }}</span>
                <i
                        style="float: right; line-height: 24px"
                        class="fa fa-eye fa-lg"
                        aria-hidden="true"
                        @click="get_token"
                ></i>
            </div>
            <span
                    slot="footer"
                    class="dialog-footer"
            >
        <el-button
                type="primary"
                @click="visible_dialog_token = false"
        >确 定</el-button>
      </span>
        </el-dialog>

        <el-dialog
                title="我要吐槽"
                :visible.sync="visible_dialog_spit_slot"
                width="30%"
        >
            <span>{{ spit_slot_content }}</span>
            <span
                    slot="footer"
                    class="dialog-footer"
            >
        <el-button
                type="primary"
                @click="visible_dialog_spit_slot = false"
        >知道了</el-button>
      </span>
        </el-dialog>

        <el-dialog
                title="关于"
                :visible.sync="visible_dialog_about"
                width="30%"
        >
            <span>{{ about_content }}</span>
            <span
                    slot="footer"
                    class="dialog-footer"
            >
        <el-button
                type="primary"
                @click="visible_dialog_about = false"
        >确 定</el-button>
      </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "dfHeader",
        props: {
            site_name: {
                type: String,
                required: true
            },
            api_url: {
                type: String,
                required: false
            },
            help_url: {
                type: String,
                required: false
            },
            // 我要吐槽中间显示的文本
            spit_slot_content: {
                type: String,
                required: false
            },
            about_content: {
                type: String,
                default: ""
            },
            user_info: {
                type: Object,
                default: () => {
                    return {};
                }
            },
            // 更新日志
            update_logs: {
                type: Array,
                default: () => {
                    [];
                }
            },
            get_token_url: {
                type: String,
                default: "user/users/get-my-token"
            },
            logout_url: {
                type: String,
                default: "user/users/logout"
            },
            loading: Boolean
        },
        data() {
            return {
                visible_dialog_token: false,
                visible_dialog_spit_slot: false,
                visible_dialog_about: false,
                token: "***********************************************************",
                window: window,
            };
        },
        mounted() {
            this.$store.state.current_app_id = this.$route.query.current_app_id
        },
        methods: {
            on_change_app(id, name, node){
                this.$root.$emit('change_current_app_id')
                this.$store.commit("change_current_app", node)
            },
            get_token() {
                this.$c_master
                    .get(this.get_token_url)
                    .then(response => {
                        this.token = response.data.token;
                    })
                    .catch(error => {
                    });
            },
            on_logout() {
                this.$confirm("确认退出", "退出", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "info",
                    center: true
                }).then(() => {
                    this.$c_master.post(this.logout_url).then(response => {
                        this.user_info = {};
                        this.$store.state.user_info = {};
                    });
                });
            }
        }
    };
</script>

<style scoped>
    .c_ul {
        white-space: nowrap;
        color: #ffffff;
        font-size: 14px;
    }

    .c_li {
        display: inline-block;
        padding: 0px 14px;
        cursor: pointer;
    }
</style>
