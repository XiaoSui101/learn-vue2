<template>
    <div id="app">
        <input v-model="message" type="text" />
        <div>{{ message | paramsFil('白龙马','白骨精') }}</div>
    </div>
</template>
<script>
export default {
    name: "canshu",
    data() {
        return {
            message: "白家人：",
        };
    },
    filters: {
        paramsFil: function (value, arg1, arg2) {
            console.log(value, arg1, arg2)
            return value + arg1 + arg2
        }
    }
};
</script>