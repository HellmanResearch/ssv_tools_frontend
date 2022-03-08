<template>
    <div>
        <el-descriptions border>
            <el-descriptions-item label="用户名">
                <el-descriptions-item>kooriookami</el-descriptions-item>
                <el-descriptions-item>kooriookami</el-descriptions-item>
            </el-descriptions-item>
            <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
            <el-descriptions-item label="居住地" :span="2">苏州市</el-descriptions-item>
            <el-descriptions-item label="备注">
                <el-tag size="small">学校</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
        </el-descriptions>
    </div>
</template>

<script>
    export default {
        methods: {
            handleClick(row) {
                console.log(row);
            }
        },

        data() {

        },
    }
</script>

<style>
    .el-input__inner {
        border-top: 0px;
        border-right: 0px;
        border-left: 0px;
        border-bottom: 1px solid #16b8d8;
    }

</style>