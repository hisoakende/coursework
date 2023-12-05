<template>
    <input v-model="innerValue" :type="inputType" :placeholder="placeholder">
</template>

<script>
export default {
    data() {
        return {
            innerValue: ""
        }
    },
    props: {
        placeholder: {
            type: String,
            default: "Введите значение"
        },
        inputType: {
            type: String,
            default: "text"
        },
        value: {
            type: String,
            required: true
        }
    },
    watch: {
            innerValue: function () {
            this.$emit("update:value", this.innerValue);
        },
            value: function () {
            this.innerValue = this.value;
        }
    },
    
    mounted() {
        this.innerValue = this.value;
    },
}
</script>

<style scoped>
input {
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
}
  
input:focus {
    border-color: #383838;
}
</style>
