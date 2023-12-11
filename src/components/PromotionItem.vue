<template>
    <div class="item-promotion">
        <div class="item-promotion-upper-part">
            <div class="item-promotion-upper-part-title">
                <h2>Выгодно!</h2>
            </div>
            <div class="item-promotion-upper-part-name">
                <router-link @click.native="scrollToTop" :to="{ name: 'item', query: { name: name, image: image, price: price, description: description}}">
                    {{ name }}
                </router-link>
            </div>
        </div>
        <div class="item-promotion-lower-part">
            <div class="item-promotion-lower-part-info">
                <div class="item-promotion-lower-part-price">{{ price + "₽" }}</div>
                <div class="item-promotion-lower-part-link">
                    <router-link @click.native="scrollToTop" :to="{ name: 'item', query: { name: name, image: image, price: price, description: description}}">
                        <CustomButton>Подробнее</CustomButton>
                    </router-link>
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

export default {
    components: {
        CustomButton
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
        description: {
            type: String,
            required: false
        }
    },

    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        }
    }
}


</script>

<style>
.item-promotion {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background-color: #ffffff;
    box-shadow: 0 1px 2px #00000029;
    border-radius: 10px;
    padding: 25px;
    height: 270px;
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
    margin: 0 auto;
}

.item-promotion-lower-part-image img {
    max-width: 100px;
    max-height: 100px;
}

.item-promotion-lower-part-info {
    gap: 20px;
    display: flex;
    flex-direction: column;
}

.item-promotion-lower-part-price {
    font-size: 2em;
    color: rgb(234, 0, 0);
}

.item-promotion-lower-part-link {
    font-size: 1.2em;
}

.item-promotion-lower-part-link button {
    padding: 10px;
    width: 100%;
}
</style>
