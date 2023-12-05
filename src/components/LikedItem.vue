<template>
    <div class="item-promotion">
        <div class="item-promotion-upper-part">
            {{ name }}
        </div>
        <div class="item-promotion-lower-part">
            <div class="item-promotion-lower-part-info">
                <div class="item-promotion-lower-part-price">{{ price + "₽" }}</div>
                <div class="item-promotion-lower-part-buttons">
                    <CustomButton v-if="isInCart" :name="buy" @clickbuy="changeCart" :text="text" class="not-hover-button"></CustomButton>
                    <CustomButton v-else :name="buy" @clickbuy="changeCart" class="not-bought" :text="text"></CustomButton>
                    <LikeButton @changeLike="deleteFromLikes" class="liked"/>
                </div>
            </div>
            <div class="item-promotion-lower-part-image">
                <img :src="image">
            </div>
        </div>
    </div>
</template>

<script>
import CustomButton from "@/components/ui/CustomButton.vue";
import LikeButton from "@/components/ui/LikeButton.vue";
import { changeCollectionObject, getIsInCollection } from "@/script.js";

export default {
    components: {
        CustomButton,
        LikeButton
    },
    
    data() {
        return {
            text:  getIsInCollection(this.id, "cart") ? "В корзине" : "Купить",
            buy: "buy"
        }
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
        }
    },

    methods: {
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
        },

        deleteFromLikes() {
            changeCollectionObject(
                {
                    id: this.id,
                    name: this.name,
                    image: this.image,
                    price: this.price,
                    buys: this.buys
                },
                "liked"
            ),
            this.$emit('deleteLikedItem', this.id);
        }
    },

    computed: {
        isInCart() {
            return getIsInCollection(this.id, "cart");
        }
    },
}

</script>

<style>
.item-promotion {
    display: flex;
    gap: 30px;
    flex-direction: column;
    background-color: #ffffff;
    box-shadow: 0 1px 2px #00000029;
    border-radius: 10px;
    padding: 25px;
    width: 350px;
}

.item-promotion-upper-part {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.item-promotion-lower-part {
    display: flex;
}

.item-promotion-lower-part-image {
    margin: auto 0 auto auto;
}

.item-promotion-lower-part-image img {
    max-width: 140px;
    max-height: 110px;
}

.item-promotion-lower-part-info {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.item-promotion-lower-part-price {
    font-size: 2em;
    color: rgb(234, 0, 0);
}

.item-promotion-lower-part-buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
}

.item-promotion-lower-part-buttons button {
    padding: 10px;
}

</style>
