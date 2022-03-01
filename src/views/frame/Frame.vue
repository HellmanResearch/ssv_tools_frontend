<template>
    <section style="display: flex; flex-flow: column; height: 100%; min-width: 1300px; overflow: auto">
        <header style="height: 80px">
            <l-frame-header
                    slot="header"
                    site_name="Release"
                    :user_info="$store.state.user_info"
                    api_url="api-docs"
                    :update_logs="update_logs"
                    :loading="$store.state.in_request_count?true:false"
                    chrome_check
            ></l-frame-header>
        </header>
        <section style="flex: 1; display: flex; flex-flow: row">
<!--            <df-menu-->
<!--                    slot="menu"-->
<!--                    :menus="$store.state.filtered_menus"-->
<!--            ></df-menu>-->
            <main style="height: 100%; flex: 1; padding: 20px; overflow: auto">
                <router-view v-if="!refreshing" slot="main" ref="main"></router-view>
            </main>
        </section>
    </section>
</template>

<script>
    import update_logs from "../../others/update_logs";

    export default {
        data() {
            return {
                update_logs: update_logs,
                refreshing: false
            };
        },
        mounted() {
            // 如果用户已登录 添加update dialog    update dialog会自动判断是否有新版本   有新版本才会显示
            if (this.$store.state.user_info.id) {
                this.$df_add_dialog("dfUpdateLog", {
                    update_logs: update_logs,
                    check_new: true
                });
            }

            this.$root.$on("change_current_app_id", () => {
                this.refreshing = true
                this.$nextTick(() => {
                    this.refreshing = false
                })
            });
        },
        methods: {
            on_click() {
                this.refreshing = true
                this.$nextTick(() => {
                    this.refreshing = false
                })
            }
        }
    };
</script>