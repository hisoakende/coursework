<template>
    <div class="buy-item">
        <div class="buy-item-left-container">
            <img :src="image">
        </div>
        <div class="buy-item-central-container">
            <div class="buy-item-info-name">
                <router-link @click.native="scrollToTop" :to="{ name: 'item', query: { name: name, image: image, price: price, description: description}}">
                    {{ name }}
                </router-link>
            </div>
            <div class="buy-item-count-container">
                <div class="buy-item-count-buttons">
                    <CustomButton @click="minusCount">-</CustomButton>
                    <div class="buy-item-count">
                        <div class="buy-item-wrapper">
                            {{ countToBuy }}
                        </div>
                    </div>
                    <CustomButton @click="plusCount">+</CustomButton>
                </div>
                <div class="buy-item-price-per-one">
                    {{ price + " ₽ / шт" }}  
                </div>
            </div>
        </div>
        <div class="buy-item-right-container">
            <div class="buy-item-right-total">
                <h5>{{ countToBuy * price + " ₽" }}</h5>
            </div>
            <div class="buy-item-right-buttons">
                <DeleteButton @click="deleteCartItem"/>
                <LikeButton v-if="isLiked" @changeLike="changeLike" class="liked"/>
                <LikeButton v-else @changeLike="changeLike"/>
            </div>
        </div>
    </div>
</template>

<script>
import CustomButton from "@/components/ui/CustomButton.vue";
import DeleteButton from "@/components/ui/DeleteButton.vue";
import LikeButton from "@/components/ui/LikeButton.vue";
import { changeCollectionObject, getIsInCollection } from "@/script.js";

export default {
    components: {
        CustomButton,
        DeleteButton,
        LikeButton
    },

    props: {
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        countToBuy: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: false
        }
    },

    methods: {
        scrollToTop() {
            window.scrollTo(0,0);
        },
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

        deleteCartItem() {
            changeCollectionObject(
                {
                    id: this.id,
                    name: this.name,
                    image: this.image,
                    price: this.price,
                    buys: this.buys
                },
                "cart"
            ),
            this.$emit('deleteCartItem', this.id);
        },

        minusCount(arg) {
            this.$emit('minusCount', this.id);
        },

        plusCount(arg) {
            this.$emit('plusCount', this.id);
        }
    },

    computed: {
        isLiked() {
            return getIsInCollection(this.id, "liked");
        }
    }
}
</script>

<style scoped>

.buy-item {
    display: flex;
    gap: 30px;
    background-color: #ffffff;
    box-shadow: 0 1px 2px #00000029;
    border-radius: 10px;
    min-height: 200px;
    padding: 30px 40px 30px 15px;
    width: 100%;
}

.buy-item-central-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
}

.buy-item-left-container img {
    max-height: 130px;
}

.buy-item-right-container-price {
    font-size: 2em;
    color: rgb(234, 0, 0);
}
    
.buy-item-right-container {
    width: 100%;
    align-items: end;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.buy-item-count-buttons {
    display: flex;
    gap: 10px;
}

.buy-item-count-buttons button {
    width: 30px;
}

.buy-item-price-per-one {
    color: #9f9f9f;
}

.buy-item-count-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.buy-item-count {
    display: flex;
    align-items: center;
}

.buy-item-right-total {
    font-size: 1.6em;
}
    
button {
    width: 100%;
    padding: 6px;
}

.buy-item-right-buttons {
    display: flex;
    gap: 10px;
}
</style>
