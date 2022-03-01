<template>
    <div
            id="app"
            style="height: 100%"
    >
        <router-view></router-view>
    </div>
</template>

<style>
    body {
        margin: 0;
        height: 100%;
        overflow-y: hidden;
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }

    html {
        height: 100%;
    }

    /* 改变搜索组件“搜索按钮”背景色 必须和主题色一致 */
    /*.el-input-group__append {*/
    /*    background-color: #0096ff !important;*/
    /*    color: #ffffff !important;*/
    /*}*/

    /* 使得table中的button id可以复制 */
    .el-button--text {
        user-select: text !important;
    }

    /* 为df-admin 指定主题色 必须和当前项目主题色一致 */
    .df-theme-color {
        background-color: #16B8D8;
    }
</style>
