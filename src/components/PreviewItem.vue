<template>
    <div class="preview-item">
        <div class="preview-item-image-container">
            <img :src="image">
        </div>
        <div class="preview-item-info-container">
            <div class="preview-item-info-name">
                {{ name }}
            </div>
            <div class="preview-item-info-orders">
                Куплено: {{ buys }} раз
            </div>
        </div>
        <div class="preview-item-price-container">
            <div class="preview-item-price-container-price">
                <h5>{{ price + " ₽" }}</h5>
            </div>
            <div class="preview-item-price-container-buttons">
                <LikeButton v-if="isLiked" @changeLike="changeLike" class="liked"/>
                <LikeButton v-else @changeLike="changeLike"/>
                <CustomButton v-if="isInCart" :name="buy" @clickbuy="changeCart" :text="text" class="not-hover-button"></CustomButton>
                <CustomButton v-else :name="buy" @clickbuy="changeCart" class="not-bought" :text="text"></CustomButton>
            </div>
        </div>
    </div>
</template>

<script>
import LikeButton from "@/components/ui/LikeButton.vue";
import CustomButton from "@/components/ui/CustomButton.vue";
import { changeCollectionObject, getIsInCollection } from "@/script.js";

export default {
    components: {
        LikeButton,
        CustomButton
    },

    data() {
        return {
            buy: "buy",
            text:  getIsInCollection(this.id, "cart") ? "В корзине" : "Купить"
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
        },
        buys: {
            type: Number,
            required: true
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

<style>

.preview-item {
    display: flex;
    gap: 30px;
    background-color: #ffffff;
    box-shadow: 0 1px 2px #00000029;
    border-radius: 10px;
    min-height: 200px;
    padding: 30px 40px 30px 15px;
    width: 100%;
}

.preview-item-info-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.preview-item-image-container img {
    max-height: 130px;
}

.preview-item-price-container-price {
    text-align: right;
    font-size: 2em;
    color: rgb(234, 0, 0);
}
    
.preview-item-price-container {
    margin-left: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.preview-item-price-container button {
    width: 100%;
    padding-left: 12px;
    padding-right: 12px;
    white-space: nowrap;
}

.preview-item-price-container-buttons {
    display: flex;
    gap: 10px;
}
</style>
