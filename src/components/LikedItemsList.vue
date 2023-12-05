<template>
    <section class="liked-items-list">
        <LikedItem @deleteLikedItem="deleteLikedItem" v-for="item in likedItems" 
            :id="item.id"
            :name="item.name"
            :image="item.image"
            :price="item.price"
        />
    </section>
</template>

<script>
import LikedItem from "@/components/LikedItem.vue";

export default {
    components: {
        LikedItem
    },

    props: {
        likedItems: {
            type: Array,
            required: true
        }
    },
    
    methods: {
        deleteLikedItem(id) {
            this.$emit('deleteLikedItem', id);
        }
    }
}

</script>

<style>
.liked-items-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, 350px);
    grid-gap: 30px;
    justify-content: center;
}

</style>