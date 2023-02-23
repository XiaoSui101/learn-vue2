<template>
    <div id="app">
        <input v-model="message" type="text" />
        <div>{{ message | capitalize }}</div>
        <a href="#/chuanlian">chuanlian</a>
    </div>
</template>
<script>
export default {
    name: "HelloWorld",
    data() {
        return {
            message: "dhadh",
        };
    },
};
</script>