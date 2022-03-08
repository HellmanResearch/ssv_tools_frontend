<template>
    <div style="padding: 20px 40px; overflow: auto">
        <div style="display: flex; justify-content: space-between">
            <el-radio-group v-model="round" @change="on_change_round">
                <el-radio-button label="">All</el-radio-button>
                <el-radio-button label="round1">Round1</el-radio-button>
                <el-radio-button label="round2">Round2</el-radio-button>
                <el-radio-button label="round3">Round3</el-radio-button>
                <el-radio-button label="round4">Round4</el-radio-button>
                <el-radio-button label="round5">Round5</el-radio-button>
            </el-radio-group>
<!--            <el-input style="width: 400px" v-model="search_value" placeholder="Search Owner Address" @change="on_search"></el-input>-->
        </div>
        <div style="margin-top: 20px; display: flex; justify-content: space-between">
            <l-top-rewards ref="top_rewards"></l-top-rewards>
            <l-top-performance ref="top_performance" style="margin-left: 20px"></l-top-performance>
        </div>
        <div style="text-align: center; margin-top: 60px">
            Data from <a
                href="https://docs.google.com/spreadsheets/d/1Bam1JwcJR4g8xDinsAPxF28AN6pvwUyR7sFwznoLwow/edit#gid=1120824648"
                target="_blank">ssv.network</a>
        </div>
    </div>
</template>

<script>
    import df_admin from "df-admin";

    export default {
        mixins: [df_admin.mixins.list_mixin],
        data() {
            return {
                url: "ssv/results/rewards",
                // params: {
                //     "owner_address": ""
                // },
                owner_address: "",
                round: "",
                search_value: ""
            }
        },
        methods: {
            on_search(owner_address) {
                this.$refs.top_rewards.on_search(owner_address)
            },
            on_change_round(round) {
                this.$refs.top_rewards.on_change_round(round)
                this.$refs.top_performance.on_change_round(round)
            }
        }
    }
</script>

<style>
    /*.el-input__inner {*/
    /*    border-top: 0px;*/
    /*    border-right: 0px;*/
    /*    border-left: 0px;*/
    /*    border-bottom: 1px solid #16b8d8;*/
    /*}*/
</style>
