<template>
    <el-submenu
            v-if="display_count > 0"
            :index="item.name"
    >
        <template slot="title">
            <i class="el-icon-menu"></i>
            <span style="display: inline-block;">{{ item.meta.name }}</span>
        </template>
        <el-menu-item
                v-for="(child_item, index) in item.children"
                v-if="!child_item.meta || child_item.meta.display!=false"
                :key="index"
                :index="child_item.name"
        >
            <i class="el-icon-menu"></i>
            <span
                    slot="title"
                    style="display: inline-block;"
            >{{ child_item.meta.name }}</span>
        </el-menu-item>
    </el-submenu>
    <el-menu-item
            v-else
            :index="item.name"
    >
        <i class="el-icon-menu"></i>
        <span
                slot="title"
                style="display: inline-block;"
        >{{ item.meta.name }}</span>
    </el-menu-item>
</template>


<script>
    export default {
        name: "MenuItem",
        props: ["item"],
        computed: {
            display_count() {
                var count = 0;
                if (!this.item.children || this.item.children.length == 0) {
                    return count;
                }
                for (let item of this.item.children) {
                    if (item.meta && item.meta.display != false) {
                        count += 1;
                    }
                }
                return count;
            }
        }
    };
</script>