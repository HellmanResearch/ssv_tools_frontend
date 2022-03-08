<template>
    <div style="height: 100%; display: flex; width: 256px">
        <el-menu
                :default-active="$route.name"
                unique-opened
                @select="on_select"
                :collapse="is_collapse"
        >
            <l-frame-menu-item
                    v-for="(item, index) in menus"
                    v-if="!item.meta || item.meta!='false'"
                    :key="index"
                    :item="item"
            >
            </l-frame-menu-item>
        </el-menu>
    </div>
</template>

<script>
    import menu from "../../../router/menu"

    export default {
        name: "dfMenu",
        props: {
            // 默认是否折叠菜单栏
            collapse: {
                type: Boolean,
                default: false
            },
        },
        data() {
            return {
                is_collapse: this.collapse,
                menu_map: {},
                menus: menu
            };
        },
        mounted() {
            this.init_menu_map(this.menus);
            if (
                Object.keys(this.menu_map).includes(this.$route.name) &&
                this.menu_map[this.$route.name].meta &&
                this.menu_map[this.$route.name].meta.collapse === true
            ) {
                this.is_collapse = true;
            }
        },
        methods: {
            on_select(key, path) {
                var item = this.menu_map[key];
                if (item.meta && item.meta.collapse === true) {
                    this.is_collapse = true;
                }
                this.$router.push({name: key});
            },
            folding() {
                this.is_collapse = false;
            },
            unfolding() {
                this.is_collapse = true;
            },
            init_menu_map(menus) {
                for (let item of menus) {
                    this.menu_map[item.name] = item;
                    if (item.children) {
                        this.init_menu_map(item.children);
                    }
                }
            }
        }
        // components: {
        //   DfMenuItem
        // }
    };
</script>

<style scoped>
    .el-menu {
        border-right-width: 0px !important;
    }
</style>