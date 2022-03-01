<template>
    <div
            class="df-theme-color"
            style="padding: 0px 20px; display: flex; align-items: center; justify-content: space-between; height: 80px"
    >
        <div>
            <img
                    style="height: 44px; display: inline-block; vertical-align: middle; box-sizing: border-box; vertical-align: middle;"
                    src="../../../assets/ipfs_logo_09.png"
            />
            <span style="margin-left: 8px; letter-spacing:2px; font-weight: 420; color: #FFFFFF; font-size: 30px; height: 100%; display: inline-block; box-sizing: border-box; vertical-align: middle;">&nbsp;| {{ site_name }}</span>

        </div>
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
                        v-if="api_url"
                        @click="window.open(api_url)"
                >
                    <i
                            class="fa fa-file-text"
                            aria-hidden="true"
                            style="margin-right: 5px"
                    ></i>API文档
                </li>
                <li
                        class="c_li"
                        v-if="help_url"
                        @click="window.open(help_url)"
                >
                    <i
                            class="fa fa-question-circle"
                            aria-hidden="true"
                            style="margin-right: 5px"
                    ></i>帮助
                </li>
                <li
                        class="c_li"
                        v-if="spit_slot_content"
                        @click="visible_dialog_spit_slot = true"
                >
                    <i
                            class="fa fa-comment"
                            aria-hidden="true"
                            style="margin-right: 5px"
                    ></i>我要吐槽
                </li>
                <li
                        class="c_li"
                        @click="$df_add_dialog('dfUpdateLog', {update_logs})"
                >
                    <i
                            class="fa fa-arrow-circle-o-up"
                            aria-hidden="true"
                            style="margin-right: 5px"
                    ></i>更新日志
                </li>

                <li
                        class="c_li"
                        @click="visible_dialog_about = true"
                >
                    <i
                            class="fa fa-info-circle"
                            aria-hidden="true"
                            style="margin-right: 5px"
                    ></i>关于
                </li>
                <li class="c_li">
                    <el-dropdown style="">
            <span
                    class="el-dropdown-link"
                    style="font-size: 16px; color: #FFF"
            >
              <i
                      class="fa fa-user-circle-o"
                      style="margin-right: 5px"
              ></i>{{ user_info.name ? user_info.name: "未登录" }}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item
                                    :disabled="user_info.username==undefined?true:false"
                                    @click.native="visible_dialog_token=true"
                            >
                                <i
                                        class="fa fa-key"
                                        aria-hidden="true"
                                ></i>Token
                            </el-dropdown-item>
                            <el-dropdown-item
                                    v-if="user_info.username"
                                    @click.native="on_logout"
                            >
                                <i
                                        class="fa fa-sign-out"
                                        aria-hidden="true"
                                ></i>退出
                            </el-dropdown-item>
                            <el-dropdown-item
                                    v-else
                            >
                                <i
                                        class="fa fa-sign-in"
                                        aria-hidden="true"
                                ></i>登录
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
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
