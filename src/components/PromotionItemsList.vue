<template>
    <section class="promotion-items-list">
        <PromotionItem v-for="item in promotionItems" 
          :id="item.id"
          :name="item.name"
          :image="item.image"
          :price="item.price"
        />
    </section>
</template>

<script>
import PromotionItem from "@/components/PromotionItem.vue";

export default {
  components: {
    PromotionItem
  },

  props: {
    promotionItems: {
      type: Array,
      required: true
    }
  }
}

</script>

<style>
.promotion-items-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, 350px);
    grid-gap: 30px;
    justify-content: center;
}
</style>