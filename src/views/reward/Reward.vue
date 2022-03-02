<template>
    <div style="height: 100%; flex: 1; display: flex; flex-flow: row">
        <div style="height: 100%; flex: 1; padding: 50px 160px; overflow: auto">
            <div>
                <el-input id="search_input" ref="search_input" :trigger-on-focus="false" :autofocus="true"
                          select-when-unmatched @keyup.enter.native="on_search()"
                          placeholder="Input the wallet address used to register your operator / validator"
                          v-model="params.owner_address"
                          style="width: 100%; text-align: center">
                    <el-button id="submit" @click="on_search()" slot="append" icon="el-icon-search"
                               :loading="loading" style="width: 140px; background-color: #16B8D8"></el-button>
                </el-input>
            </div>
            <div style="margin-top: 50px">
                <el-table
                        style=""
                        :data="data"
                        stripe
                        border
                        size="medium"
                        v-loading="loading"
                        @sort-change="on_change_sort"
                        @filter-change="on_change_filter"
                        style="width: 100%"
                        :span-method="arraySpanMethod"
                >
                    <el-table-column
                            label="Eligibility"
                            prop="title"
                            :show-overflow-tooltip="true"
                    >
                    </el-table-column>
                    <el-table-column
                            label="Round1"
                            prop="round1"
                            :show-overflow-tooltip="true"
                    >
                    </el-table-column>
                    <el-table-column
                            label="Round2"
                            prop="round2"
                            :show-overflow-tooltip="true"
                    >
                    </el-table-column>
                    <el-table-column
                            label="Round3"
                            prop="round3"
                            :show-overflow-tooltip="true"
                    >
                    </el-table-column>
                    <el-table-column
                            label="Round4"
                            prop="round4"
                            :show-overflow-tooltip="true"
                    >
                    </el-table-column>
                    <el-table-column
                            label="Round5"
                            prop="round5"
                            :show-overflow-tooltip="true"
                    >
                    </el-table-column>
                </el-table>
            </div>
            <div style="text-align: center; margin-top: 60px">
                Data from <a href="https://docs.google.com/spreadsheets/d/1Bam1JwcJR4g8xDinsAPxF28AN6pvwUyR7sFwznoLwow/edit#gid=1120824648" target="_blank">ssv.network</a>
            </div>
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
                params: {
                    "owner_address": ""
                },
                // show_key_list: ["validators", "ssv_holdings"],
                // show_data: []
                default_data: [{
                    "title": "Validators",
                }, {
                    "title": "SSV Holdings",
                }, {
                    "title": "Operators",
                }, {
                    "title": "Avg. Performance",
                }, {
                    "title": "Manged Validators",
                }, {
                    "title": "Allocation Rewards", "key": "_1"
                }, {
                    "title": "All validators alloc",
                }, {
                    "title": "Validators + SSV Holders alloc",
                }, {
                    "title": "All operators alloc",
                }, {
                    "title": "Verified operators alloc",
                }, {
                    "title": "Total (Round)",
                }, {
                    "title": "Total (All Rounds)"
                }]
            }
        }
        ,
        mounted() {
            console.log("this.data: ", this.data)
            this.data = this.default_data
        }
        ,
        methods: {
            on_search() {
                this.get_data()

            }
            ,
            arraySpanMethod({row, column, rowIndex, columnIndex}) {
                if (rowIndex === 5) {
                    if (columnIndex == 0) {
                        return [1, 6]
                    }
                } else if (rowIndex === 11) {
                    if (columnIndex == 1) {
                        return [1, 5]
                    }
                }
            }
            ,
            after_get_data_error(error) {
                this.data = this.default_data
            }
            ,
            // after_get_data(res_data) {
            //     for (let key of this.show_key_list) {
            //         var show_data_item = {"title": key}
            //         for (let res_data_item of res_data) {
            //             show_data_item[res_data_item["round"]] = res_data_item[key]
            //         }
            //     }
            //     total_reward = 0
            //     for (let res_data_item of res_data) {
            //         total_reward += res_data_item[""]
            //         show_data_item[res_data_item["round"]] = res_data_item[key]
            //     }
            // },
        }
    }
</script>

<style>

</style>
