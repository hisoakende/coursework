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
                    id: 32,
                    name: "Диски BMK 318i 17 литые",
                    image: "/src/assets/default.png",
                    price: 80000,
                    buys: 75
                },
                {
                    id: 33,
                    name: "Шины Aufi f4 225/55 R17 зимние",
                    image: "/src/assets/default.png",
                    price: 20000,
                    buys: 87
                },
                {
                    id: 34,
                    name: "Колесные гайки LATA C200 19 комплект",
                    image: "/src/assets/default.png",
                    price: 1300,
                    buys: 100
                },
                {
                    id: 35,
                    name: "Запасное колесо Polkswagen Rassat 205/60 R16",
                    image: "/src/assets/default.png",
                    price: 1400,
                    buys: 0
                },
                {
                    id: 36,
                    name: "Датчик давления в шинах Dord Ondeo 2.0L комплект",
                    image: "/src/assets/default.png",
                    price: 1700,
                    buys: 99
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
  