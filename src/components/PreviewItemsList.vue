<template>
    <section class="preview-items-list">
        <PreviewItem v-for="item in previewItems" 
            :id="item.id"
            :name="item.name"
            :image="item.image"
            :price="item.price"
            :buys="item.buys"
        />
    </section>
</template>

<script>
import PreviewItem from "@/components/PreviewItem.vue"

export default {
    components: {
        PreviewItem
    },

    props: {
        previewItems: {
            type: Array,
            required: true
        }
    }
}

</script>

<style>
.preview-items-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

</style>