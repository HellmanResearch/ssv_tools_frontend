<template>
    <div>
        <!--        <h2 style="text-align: center">Rewards</h2>-->

        <!--        <el-card class="box-card">-->
        <!--            <div slot="header">-->
        <h2 style="text-align: center">Rewards</h2>
        <!--                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
        <!--            </div>-->

        <el-table
                :data="data"
                size="medium"
                v-loading="loading"
                @sort-change="on_change_sort"
                @filter-change="on_change_filter"
                style="width: 100%"
        >
            <el-table-column
                    label="Rank"
                    prop="rank"
                    width="55px"
                    :show-overflow-tooltip="true"
            >
            </el-table-column>
            <el-table-column
                    label="Address"
                    prop="owner_address"
                    :show-overflow-tooltip="true"
            >
            </el-table-column>
            <el-table-column
                    label="Total rewards"
                    prop="sum"
                    width="120px"
                    :formatter="(row, column, cellValue, index)=>cellValue.toFixed(2)"
                    :show-overflow-tooltip="true"
            >
            </el-table-column>
        </el-table>
        <!--        </el-card>-->

        <div style="height: 80px">
            <el-pagination
                    @current-change="get_data()"
                    :current-page.sync="params.page"
                    :page-size="params.page_size"
                    style="float: right; margin-right: 100px; margin-top: 20px"
                    background
                    layout="total, prev, pager, next"
                    :total="count"
            >
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import df_admin from "df-admin";

    export default {
        mixins: [df_admin.mixins.list_mixin],
        props: ["round"],
        data() {
            return {
                url: "ssv/results/group-by",
                params: {
                    "owner_address": "",
                    "ordering": "-sum",
                    "_func": "sum",
                    "_value": "owner_address",
                    "round": "",
                    "_column": "total_rewards"
                },
            }
        },
        mounted() {
            this.get_data();
        },
        methods: {
            after_get_data(res_data) {
                var index = 0
                for (let item of res_data.results) {
                    index += 1
                    var rank = (this.params.page_size * (this.params.page - 1)) + index
                    item["rank"] = rank
                }
                this.data = res_data.results
            },
            tableRowClassName({row, rowIndex}) {
                console.log("row: ", row)
                if (row.rank === 1) {
                    return 'top1';
                } else if (row.rank === 2) {
                    console.log("row.rank === 2")
                    return 'top2';
                } else if (row.rank === 3) {
                    return 'top3';
                }
                return '';
            },
            on_search(owner_address) {
                this.params.owner_address = owner_address
                this.get_data()
            },
            on_change_round(round) {
                this.params.round = round
                this.get_data()
            }
        }
    }
</script>

<style>
    .el-table .top1 {
        background: #F56C6C;
    }

    .el-table .top2 {
        background: #E6A23C;
    }

    .el-table .top3 {
        background: #67C23A;
    }
</style>