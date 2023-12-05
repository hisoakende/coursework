<template>
    <div class="app">
        <DefaultHeader />
        <main>
            <div class="content">
                <LikedItemsList @deleteLikedItem="deleteLikedItem" :likedItems="likedItems"/>
            </div>
        </main>
        <DefaultFooter />
    </div>
</template>
  
<script>
import DefaultHeader from "@/components/DefaultHeader.vue";
import LikedItemsList from "@/components/LikedItemsList.vue";
import DefaultFooter from "@/components/DefaultFooter.vue";
import { getObjectsFromCollections } from "@/script.js";


export default {
    components: {
        DefaultHeader,
        LikedItemsList,
        DefaultFooter
    },
    
    data() {
        return {
            likedItems: getObjectsFromCollections("liked")
        }
    },

    methods: {
        deleteLikedItem(id) {
            this.likedItems = this.likedItems.filter(item => item.id !== id);
        }
    }
}
</script>
  
<style scoped>
.content-wrapper {
    display: flex;
    gap: 30px;
}
</style>
  