<template>
    <div style="padding: 0px 20px; display: flex; align-items: center; justify-content: space-between; height: 64px; box-shadow: 0 1px 4px rgba(0,21,41,.08); background-color: #FFFFFF">
        <div>
            <i class="el-icon-s-fold" style="font-size: 20px"></i>
        </div>
        <div>
            <df-remote-query-select
                    url="release/apps"
                    auto_select_first
                    display_field="name"
                    value_field="id"
                    v-model="$store.state.current_app_id"
            >
            </df-remote-query-select>
        </div>
        <div>
            <el-dropdown style="">
                <div style="display: flex; align-items: center">
                    <el-avatar size="small"
                               :src="$store.state.user_info.avatar"></el-avatar>
                    <span style="margin-left: 10px">{{ $store.state.user_info.name }}</span>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="">
                        <font-awesome-icon icon="sign-out-alt"/>
                        Sign out
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
</style>
