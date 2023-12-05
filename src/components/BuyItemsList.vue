<template>
    <section class="buy-items-list">
        <BuyItem 
            @minusCount="minusCount"
            @plusCount="plusCount"
            @deleteCartItem="deleteCartItem" 
            v-for="item in cartItems"
                :id="item.id"
                :name="item.name"
                :image="item.image"
                :price="item.price"
                :countToBuy="getCountToBuy(item)"
        />
    </section>
</template>

<script>
import BuyItem from "@/components/BuyItem.vue";

export default {
    components: {
        BuyItem
    },

    props: {
        cartItems: {
            type: Array,
            required: true
        }
    },

    methods: {
        getCountToBuy(item) {
            return item.countToBuy !== undefined ? item.countToBuy : 1
        },

        deleteCartItem(id) {
            this.$emit('deleteCartItem', id);
        },

        plusCount(id) {
            this.$emit('plusCount', id);
        },

        minusCount(id) {
            this.$emit('minusCount', id);
        }
    }
}

</script>

<style>
.buy-items-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

</style>