<template>
    <div class="app">
        <DefaultHeader />
        <main>
            <div class="content">
                <div class="item-detail">
                    <div class="item-detail-left-container">
                        <img :src="image">
                    </div>
                    <div class="item-detail-right-container">
                        <div class="item-detail-right-container-top">
                            {{ name }}
                        </div>
                        <div class="item-detail-right-container-middle">
                            <div class="item-detail-right-container-middle-price">{{ price + " ₽" }}</div>
                            <div class="item-detail-right-container-middle-price-buttons">
                                <LikeButton v-if="isLiked" @changeLike="changeLike" class="liked"/>
                                <LikeButton v-else @changeLike="changeLike"/>
                                <CustomButton v-if="isInCart" :name="'buy'" @clickbuy="changeCart" :text="text" class="not-hover-button"></CustomButton>
                                <CustomButton v-else :name="'buy'" @clickbuy="changeCart" class="not-bought" :text="text"></CustomButton>
                            </div>
                        </div>
                        <div class="item-detail-right-container-bottom">
                            {{ description }}
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <DefaultFooter />
    </div>
</template>
  
<script>
import DefaultHeader from "@/components/DefaultHeader.vue";
import CustomButton from "@/components/ui/CustomButton.vue";
import LikeButton from "@/components/ui/LikeButton.vue";
import DefaultFooter from "@/components/DefaultFooter.vue";
import { changeCollectionObject, getIsInCollection } from "@/script.js";


export default {
    components: {
        DefaultHeader,
        LikeButton,
        CustomButton,
        DefaultFooter
    },

    data() {
        return {
            name: this.$route.query.name,
            image: this.$route.query.image,
            price: this.$route.query.price,
            text: getIsInCollection(this.id, "cart") ? "В корзине" : "Купить",
            description: this.$route.query.description
        }
    },

    methods: {
        changeLike(button) {
            let isLiked = changeCollectionObject(
                {
                    id: this.id,
                    name: this.name,
                    image: this.image,
                    price: this.price,
                    buys: this.buys
                },
                "liked"
            );

            if (isLiked) {
                button.$el.classList.add("liked");
            } else {
                button.$el.classList.remove("liked");
            }
        },

        changeCart(button) {
            let isInCart = changeCollectionObject(
                {
                    id: this.id,
                    name: this.name,
                    image: this.image,
                    price: this.price,
                    buys: this.buys
                },
                "cart"
            );
            
            if (isInCart) {
                button.$el.classList.remove("not-bought");
                button.$el.classList.add("not-hover-button");
                this.text = "В корзине";
            } else {
                button.$el.classList.add("not-bought");
                button.$el.classList.remove("not-hover-button");
                this.text = "Купить";
            }
        }
    },

    computed: {
        isLiked() {
            return getIsInCollection(this.id, "liked");
        },

        isInCart() {
            return getIsInCollection(this.id, "cart");
        }
    },
}
</script>
  
<style scoped>

.item-detail {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    background-color: #ffffff;
    box-shadow: 0 1px 2px #00000029;
    border-radius: 10px;
    padding: 30px 70px 30px 30px;
}

.item-detail-right-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 50px;
}

.item-detail-right-container-middle {
    display: flex;
}

.item-detail-right-container-middle-price {
    font-size: 2em;
    color: rgb(234, 0, 0);
}

.item-detail img {
    max-width: 500px;
}

.item-detail-right-container-middle-price-buttons {
    margin-left: auto;
    display: flex;
    gap: 10px;
}
.item-detail-right-container-middle-price-buttons button {
    padding: 10px;
}

</style>
  