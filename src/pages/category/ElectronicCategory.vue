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
                    id: 6,
                    name: "Датчик ABS (передний левый) LC 101/TX70 89543-60010",
                    image: "/src/assets/default.png",
                    price: 2000,
                    buys: 10
                },
                {
                    id: 7,
                    name: "Блок управления ДВС Toyona Air Cruiser (J101) 3.0 896616A350",
                    image: "/src/assets/default.png",
                    price: 2500,
                    buys: 190
                },
                {
                    id: 8,
                    name: "Центральный блок управления двигателем 08893231 Genius",
                    image: "/src/assets/default.png",
                    price: 5000,
                    buys: 1125
                },
                {
                    id: 9,
                    name: "Датчик кислорода",
                    image: "/src/assets/default.png",
                    price: 1500,
                    buys: 0
                },
                {
                    id: 10,
                    name: "Электронный блок управления климат-контролем 983298392/13232 Tia",
                    image: "/src/assets/default.png",
                    price: 3000,
                    buys: 17
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
  