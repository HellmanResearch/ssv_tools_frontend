<template>
    <div>
<!--                <g-env-tree v-model="selected"></g-env-tree>-->
<!--        <vue-pipeline :data="data" ref="pipeline" @select="on_select"></vue-pipeline>-->
        <!--        <l-release-graph :release="release"></l-release-graph>-->
        <!--        <df-remote-select></df-remote-select>-->

        <!--        <div style="width: 400px; height: 400px; background-color: #99a9bf; position: relative">-->
        <!--            <el-button style="position: absolute; right: 10px; bottom: 20px">aaa</el-button>-->
        <!--        </div>-->

        <!--        <g-remote-dropdown-->
        <!--            style="width: 140px; margin-left: 20px; background-color: #0096ff"-->
        <!--            url="release/apps"-->
        <!--            auto_select_first-->
        <!--            display_field="name"-->
        <!--            value_field="id"-->
        <!--            v-model="$store.state.current_app_id"-->
        <!--        ></g-remote-dropdown>-->

<!--                <l-test-test-update ref="test_comp"></l-test-test-update>-->

<!--        <l-release-graph :release="{id: 39}"></l-release-graph>-->

<!--        <el-button @click="on_click">ssss</el-button>-->
        <h1>test</h1>
        <g-monaco-editor style="height: 200px"></g-monaco-editor>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                selected: [],
                data: [
                    {
                        "name": "Start",
                        "status": "start",
                        "next": [
                            {
                                "index": 1,
                                "weight": 2
                            },
                            {
                                "index": 2,
                                "weight": 2
                            }
                        ]
                    },
                    {
                        "name": "前置动作|192.168.1.128",
                        "status": "success",
                        "next": [
                            {
                                "index": 3,
                                "weight": 2
                            }
                        ]
                    },
                    {
                        "name": "前置动作|192.168.1.128",
                        "status": "success",
                        "next": [
                            {
                                "index": 4,
                                "weight": 2
                            }
                        ]
                    },
                    {
                        "name": "写入配置|192.168.1.128",
                        "status": "success",
                        "next": [
                            {
                                "index": 5,
                                "weight": 2
                            }
                        ]
                    },
                    {
                        "name": "写入配置|192.168.1.128",
                        "status": "success",
                        "next": [
                            {
                                "index": 6,
                                "weight": 2
                            }
                        ]
                    },
                    {
                        "name": "传程序包|192.168.1.128",
                        "status": "running",
                        "next": [
                            {
                                "index": 7,
                                "weight": 1
                            }
                        ]
                    },
                    {
                        "name": "传程序包|192.168.1.128",
                        "status": "running",
                        "next": [
                            {
                                "index": 8,
                                "weight": 1
                            }
                        ]
                    },
                    {
                        "name": "",
                        "status": "end",
                        "next": [
                            {
                                "index": 9,
                                "weight": 1
                            }
                        ]
                    },
                    {
                        "name": "",
                        "status": "end",
                        "next": [
                            {
                                "index": 10,
                                "weight": 1
                            }
                        ]
                    },
                    {
                        "name": "",
                        "status": "end",
                        "next": [
                            {
                                "index": 11,
                                "weight": 1
                            }
                        ]
                    },
                    {
                        "name": "",
                        "status": "end",
                        "next": [
                            {
                                "index": 11,
                                "weight": 1
                            }
                        ]
                    },
                    {
                        "name": "End",
                        "status": "end",
                        "next": []
                    }
                ],
                release: {id: 12}
            }
        },
        mounted() {
            // this.data = [{
            //     "name": "Start",
            //     "status": "start",
            //     "next": [
            //     ]
            // }]
        },
        methods: {
            on_select(node) {
                console.log(node)
            },
            on_click() {
                this.$delete()
            }
        },
        beforeUpdate() {
            console.log("this.beforeUpdates")
        },
        beforeDestroy() {
            console.log("this.beforeDestroy")
        }
    }
</script>