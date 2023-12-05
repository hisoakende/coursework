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
                    id: 11,
                    name: "Топливный насос LCW 101/TX70 89543-60000010",
                    image: "/src/assets/default.png",
                    price: 2000,
                    buys: 100
                },
                {
                    id: 12,
                    name: "Фильтр воздуха Bercedes-Tenz 00887128 U class",
                    image: "/src/assets/default.png",
                    price: 500,
                    buys: 190
                },
                {
                    id: 13,
                    name: "Ремень ГРМ Bercedes-Tenz 8762128 U class",
                    image: "/src/assets/default.png",
                    price: 1000,
                    buys: 150
                },
                {
                    id: 14,
                    name: "Свечи зажигания All Korean",
                    image: "/src/assets/default.png",
                    price: 300,
                    buys: 300
                },
                {
                    id: 15,
                    name: "Радиатор охлаждения Mark 3",
                    image: "/src/assets/default.png",
                    price: 2500,
                    buys: 129
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
  