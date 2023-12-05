<template>
    <button @click="click">
        <slot></slot>{{ text }}
    </button>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: ""
        },
        text: {
            type: String,
            default: ""
        }
    },
    
    methods: {
        click() {
            if (this.name !== "") {
                this.$emit("click" + this.name, this);
            }
        }
    }
}
</script>



<style scoped>
button {
    padding: 10px 0;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    background-color: #FFFFFF;
    color: #707070;
    border: 2px solid #cccccc;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  }
  
button:hover {
    background-color: #383838;
    border-color: #383838;
    color: #FFFFFF;
    cursor: pointer;
}

</style>