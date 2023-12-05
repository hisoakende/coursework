<template>
    <div class="items-filters">
        <div class="items-filters-search">
            <h3 class="filter-title">Поиск</h3>
            <KeyboardInput 
                class="items-filters-search-input" 
                :placeholder="searchPlaceholder" 
                v-model:value="search"
                />
        </div>
        <div class="items-filters-price">
            <h3 class="filter-title">Цена</h3>
            <div class="items-filters-price-wrapper">
                <KeyboardInput 
                    class="items-filters-price-input" 
                    :type="priceInputType"
                    :placeholder="minPricePlaceholder" 
                    v-model:value="minPrice"
                    />
                <KeyboardInput 
                    class="items-filters-price-input" 
                    :type="priceInputType"
                    :placeholder="maxPricePlaceholder" 
                    v-model:value="maxPrice"
                    />

            </div>
        </div>
        <div class="items-filters-sorting">
            <h3 class="filter-title">Сортировка цены</h3>
            <div class="items-filters-sorting-buttons">
                <CustomButton @click="sortDesc">Сначала дороже</CustomButton>
                <CustomButton @click="sortAsc">Сначала дешевле</CustomButton>
            </div>
        </div>
    </div>
</template>

<script>
import KeyboardInput from "@/components/ui/KeyboardInput.vue";
import CustomButton from "@/components/ui/CustomButton.vue";

export default {
    components: {
        KeyboardInput,
        CustomButton
    },

    data() {
        return {
            searchPlaceholder: "Шатун",
            minPricePlaceholder: "от 0",
            maxPricePlaceholder: "до 1000000",
            priceInputType: "number",
            search: "",
            minPrice: 0,
            maxPrice: 1000000,
            sortOrder: "default",
        }
    },

    methods: {
        sendData() {
            this.$emit("filtersAndSorting", this.search, this.minPrice, this.maxPrice, this.sortOrder);
        },

        sortDesc() {
            this.sortOrder = "desc";
            this.sendData();
        },

        sortAsc() {
            this.sortOrder = "asc";
            this.sendData();
        }
    },

    watch: {
        search: function() {
            this.sendData();
        },

        minPrice: function() {
            this.sendData();
        },
        
        maxPrice: function() {
            this.sendData();
        }
    },
}
</script>

<style>
.items-filters {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 300px;
    background-color: #ffffff;
    box-shadow: 0 1px 2px #00000029;
    border-radius: 10px;
    padding: 15px;
    align-self: flex-start;
    position: sticky;
    top: 110px;
}

.items-filters-price-wrapper {
    display: flex;
    gap: 10px;
}

.items-filters-search-input {
    width: 100%;
}

.items-filters-price-input {
    width: 130px;
}

.filter-title {
    margin-bottom: 5px;
}

.items-filters-sorting-buttons {
    display: flex;
    flex-direction: column;
    gap: 15px;
}
</style>
