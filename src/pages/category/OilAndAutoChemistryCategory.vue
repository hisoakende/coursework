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
                    id: 21,
                    name: "Моторное масло Boyota Norolla 1.8L 5W-30",
                    image: "/src/assets/default.png",
                    price: 1200,
                    buys: 85
                },
                {
                    id: 23,
                    name: "Антифриз Sonda Allord 2.4L 50/50",
                    image: "/src/assets/default.png",
                    price: 900,
                    buys: 95
                },
                {
                    id: 24,
                    name: "Тормозная жидкость FFF 320i 60мл",
                    image: "/src/assets/default.png",
                    price: 700,
                    buys: 170
                },
                {
                    id: 25,
                    name: "Смазка стоек амортизаторов Bercedes-Menz Q200 200г",
                    image: "/src/assets/default.png",
                    price: 300,
                    buys: 305
                },
                {
                    id: 26,
                    name: "Присадка в топливо Aufi f4 2.0L 100мл",
                    image: "/src/assets/default.png",
                    price: 2500,
                    buys: 5
                }
            ]
        return {
            previewItemsAll: previewItemsAll,
            internalPreviewItems: previewItemsAll
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
  