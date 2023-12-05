<template>
    <div class="app">
        <DefaultHeader />
        <main>
            <div class="content">
                <div class="content-wrapper-category">
                    <ItemsFilters @filtersAndSorting="sortAndFilter" />
                    <PreviewItemsList :previewItems="internalPreviewItems" />
                </div>
            </div>
        </main>
        <DefaultFooter />
    </div>
</template>
  
<script>
import DefaultHeader from "@/components/DefaultHeader.vue";
import ItemsFilters from "@/components/ItemsFilters.vue";
import PreviewItemsList from "@/components/PreviewItemsList.vue";
import DefaultFooter from "@/components/DefaultFooter.vue";


export default {
    components: {
        DefaultHeader,
        ItemsFilters,
        PreviewItemsList,
        DefaultFooter
    },


    methods: {
        sortAndFilter(search, lowPrice, highPrice, sortOrder) {
            let result = this.previewItemsAll.filter(item => {
                return item.name.toLowerCase().includes(search.toLowerCase()) &&
                    item.price >= lowPrice &&
                    item.price <= highPrice;
            });

            if (sortOrder === "asc") {
                result.sort((a, b) => a.price - b.price);
            } else if (sortOrder === "desc") {
                result.sort((a, b) => a.price - b.price).reverse();
            }
            
            this.internalPreviewItems = result;
        }
    },

    data() {
        let previewItemsAll = [
                {
                    id: 16,
                    name: "Выхлопная труба SuperCar 09876782-90129",
                    image: "/src/assets/default.png",
                    price: 20000,
                    buys: 145
                },
                {
                    id: 17,
                    name: "Пламегаситель Bercedes-Tenz 90138912 Е class",
                    image: "/src/assets/default.png",
                    price: 1700,
                    buys: 198
                },
                {
                    id: 18,
                    name: "Пламегаситель Bercedes-Tenz 1323 T class",
                    image: "/src/assets/default.png",
                    price: 1700,
                    buys: 150
                },
                {
                    id: 19,
                    name: "Пайпы All Korean",
                    image: "/src/assets/default.png",
                    price: 300,
                    buys: 305
                },
                {
                    id: 20,
                    name: "Насадки 900dp 9878392",
                    image: "/src/assets/default.png",
                    price: 2500,
                    buys: 1106
                }
            ]
        return {
            previewItemsAll: previewItemsAll,
            internalPreviewItems: previewItemsAll
        }
    }
}
</script>
  
<style>
.content-wrapper-category {
    display: flex;
    gap: 30px;
}
</style>
  