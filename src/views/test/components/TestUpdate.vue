<template>
    <h1>test update</h1>
</template>

<script>
    export default {
        name: "TestUpdate.vue",
        mounted() {
            console.log("test update")
        },
        beforeUpdate() {
            console.log("beforeUpdate")
        }
    }
</script>

<style scoped>

</style>