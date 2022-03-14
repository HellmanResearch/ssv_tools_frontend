<template>
    <el-menu
            router
            class="el-menu-demo"
            mode="horizontal"
            background-color="#16b8d8"
            text-color="#fff"
            unique-opened
            :default-active="$route.name"
            active-text-color="#ffd04b">
        <el-menu-item index="reward" route="reward">Reward</el-menu-item>
        <el-menu-item index="top" route="top">Rank</el-menu-item>
        <el-menu-item index="allocation">Allocation</el-menu-item>
        <el-menu-item index="validator-key">Validator Key</el-menu-item>
    </el-menu>
</template>

