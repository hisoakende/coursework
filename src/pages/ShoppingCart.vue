<template>
    <div class="app">
        <DefaultHeader />
        <main>
            <div class="content">
                <div class="content-wrapper-buy">
                    <BuyItemsList 
                        @minusCount="minusCount"
                        @plusCount="plusCount"
                        @deleteCartItem="deleteCartItem" 
                        :cartItems="cartItems"
                    />
                    <BuyWindow @buyItmes="buyItmes" :totalPrice="totalPrice"/>
                </div>
            </div>
        </main>
        <OrderModalWindow @makeOrder="makeOrder"/>
        <DefaultFooter />
    </div>
</template>
  
<script>
import DefaultHeader from "@/components/DefaultHeader.vue";
import BuyWindow from "@/components/BuyWindow.vue";
import BuyItemsList from "@/components/BuyItemsList.vue";
import OrderModalWindow from "@/components/OrderModalWindow.vue";
import DefaultFooter from "@/components/DefaultFooter.vue";
import { getObjectsFromCollections } from "@/script.js";

export default {
    components: {
        DefaultHeader,
        BuyWindow,
        BuyItemsList,
        OrderModalWindow,
        DefaultFooter
    },

    data() {
        const objects = getObjectsFromCollections("cart");
        let totalPrice = 0;
        for (let obj of objects) {
            totalPrice += obj.price * (obj.countToBuy !== undefined ? obj.countToBuy : 1);
        }

        return {
            cartItems: objects,
            totalPrice: totalPrice
        }
    },

    methods: {
        deleteCartItem(id) {
            this.cartItems = this.cartItems.filter(item => item.id !== id);
            this.totalPrice = this.getTotalPrice();
        },

        minusCount(id) {
            let localStorageData = JSON.parse(localStorage.getItem('cart')) || [];
            const object = localStorageData.find(item => item.id === id);

            object.countToBuy = object.countToBuy !== undefined ? object.countToBuy : 1;
            
            if (object.countToBuy !== 1) {
                object.countToBuy--;
            }
            this.cartItems = localStorageData;
            this.totalPrice = this.getTotalPrice();

            localStorage.setItem('cart', JSON.stringify(localStorageData));
        },

        plusCount(id) {
            let localStorageData = JSON.parse(localStorage.getItem('cart')) || [];
            const object = localStorageData.find(item => item.id === id);

            object.countToBuy = object.countToBuy !== undefined ? object.countToBuy : 1;
            object.countToBuy++;
            this.cartItems = localStorageData;
            this.totalPrice = this.getTotalPrice();
        
            localStorage.setItem('cart', JSON.stringify(localStorageData));
        },  
        
        getTotalPrice() {
            const objects = getObjectsFromCollections("cart");
            let result = 0;
            for (let obj of objects) {
                result += obj.price * (obj.countToBuy !== undefined ? obj.countToBuy : 1);
            }
            return result;
        },

        makeOrder() {
            localStorage.setItem('cart', JSON.stringify([]));
            this.cartItems = [];
            this.totalPrice = 0;
        },

        buyItmes() {
            if (this.totalPrice !== 0){
                document.querySelector(".modal-background").style.display = "block";    
            }
        }
    },
}
</script>
  
<style scoped>
.content-wrapper-buy {
    display: flex;
    gap: 30px;
}
</style>
  