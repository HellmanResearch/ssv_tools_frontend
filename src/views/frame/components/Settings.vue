<template>
    <el-drawer
            title="我是标题"
            :visible.sync="is_visible"
            :direction="direction"
            :before-close="handleClose">
        <span>我来啦!</span>
    </el-drawer>
</template>

<script>
    export default {
        name: "settings"
    }
</script>

<style scoped>

</style>