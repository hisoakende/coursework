<template>
    <section class="buy-window">
        <div class="buy-window-price-container">
            <h5>Итого: <span class="buy-window-price">{{ totalPrice + " ₽"}}</span></h5>
        </div>
        <div class="buy-window-button-container">
            <CustomButton @click="buyItmes" class="inverse-button-color">Купить</CustomButton>
        </div>
    </section>
</template>

<script>
import CustomButton from "@/components/ui/CustomButton.vue";

export default {
    components: {
        CustomButton
    },

    props: {
        totalPrice: {
            type: Number,
            required: true
        }
    },

    methods: {
        buyItmes() {
            this.$emit('buyItmes');
        }
    }
}
</script>

<style>
.buy-window {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 400px;
    background-color: #ffffff;
    box-shadow: 0 1px 2px #00000029;
    border-radius: 10px;
    padding: 15px;
    align-self: flex-start;
    position: sticky;
    top: 110px;
}

.buy-window-price-container {
    font-size: 2em;
}

.buy-window-price {
    color: rgb(234, 0, 0);
}

.buy-window-button-container button {
    width: 100%;
}
</style>
