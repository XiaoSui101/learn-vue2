<template>
    <div id="app">
        <input v-model="message" type="text" />
        <div>{{ message | initalWord | capitalize }}</div>
        <a href="#/canshu">chuanlian</a>
    </div>
</template>
<script>
export default {
    name: "chuanlian",
    data() {
        return {
            message: "dhadh",
        };
    },
    filters: {
        initalWord: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
};
</script>