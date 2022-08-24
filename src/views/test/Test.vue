<template>
    <div>
        <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
            <el-button>上左</el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
            <i class="el-icon-delete"></i>
        </el-tooltip>

    </div>
</template>

<script>
    export default {
        methods: {
            handleClick(row) {
                console.log(row);
            }
        },
        mounted() {
            this.$c_master.get("https://testnet.c3-protocol.art/config/airdrop.json").then(response => {
                console.log("response: ", response);
            })
        },

        data() {

        },
    }
</script>

<style>

</style>