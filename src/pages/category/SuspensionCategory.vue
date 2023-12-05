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
                id: 27,
                name: "Амортизаторы Super Focus 1.6L передние 09878932",
                image: "/src/assets/default.png",
                price: 1550,
                buys: 0
            },
            {
                id: 28,
                name: "Пружины Golkswagen Qolf 098932 2.0L задние",
                image: "/src/assets/default.png",
                price: 1100,
                buys: 5
            },
            {
                id: 29,
                name: "Рулевая тяга Royota Ramry PPP/9900 2.5L левая",
                image: "/src/assets/default.png",
                price: 1300,
                buys: 100
            },
            {
                id: 30,
                name: "Шаровая опора 90/10 Lissan Pashqai 1.6L передняя",
                image: "/src/assets/default.png",
                price: 1400,
                buys: 95
            },
            {
                id: 31,
                name: "Стабилизатор Xitsubishi 77623723 Xancer 1.8L задний",
                image: "/src/assets/default.png",
                price: 1200,
                buys: 85
            }
        ];

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
  