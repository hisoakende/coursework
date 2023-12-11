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
                    buys: 100,
                    description: "Топливный насос LCW 101/TX70 89543-60000010 представляет собой высококачественное устройство, обеспечивающее надежную подачу топлива в двигатель. Совместим с широким спектром транспортных средств, этот насос обладает высокой производительностью и долговечностью. Специально разработанный для эффективной работы в различных условиях эксплуатации, он станет надежным помощником в обеспечении непрерывной работы вашего двигателя."
                },
                {
                    id: 12,
                    name: "Фильтр воздуха Bercedes-Tenz 00887128 U class",
                    image: "/src/assets/default.png",
                    price: 500,
                    buys: 190,
                    description: "Фильтр воздуха Bercedes-Tenz 00887128 U class предназначен для обеспечения чистого и свежего воздуха в салоне вашего автомобиля. Специально разработанный для моделей U class, этот фильтр эффективно задерживает пыль, пыльцу, бактерии и неприятные запахи, обеспечивая комфортную и здоровую атмосферу в салоне. Легкая замена и высокая фильтрационная эффективность делают этот продукт идеальным выбором для поддержания чистоты воздуха в вашем автомобиле."
                },
                {
                    id: 13,
                    name: "Ремень ГРМ Bercedes-Tenz 8762128 U class",
                    image: "/src/assets/default.png",
                    price: 1000,
                    buys: 150,
                    description: "Высококачественный ремень ГРМ Bercedes-Tenz 8762128 U class предназначен для автомобилей класса U и обеспечивает надежную передачу момента от коленчатого вала к распределительному валу. Изготовлен из прочного материала, обеспечивающего долгий срок службы и стабильную работу двигателя. Идеально подходит для замены изношенного или поврежденного ремня ГРМ и обеспечивает надежность и безопасность в работе двигателя."
                },
                {
                    id: 14,
                    name: "Свечи зажигания All Korean",
                    image: "/src/assets/default.png",
                    price: 300,
                    buys: 300,
                    description: "Свечи зажигания All Korean - это надежные и высококачественные свечи, специально разработанные для корейских автомобилей. Изготовленные с использованием передовых технологий и материалов, они обеспечивают стабильную работу двигателя, эффективный зажигательный процесс и экономию топлива. Свечи All Korean особенно подходят для автомобилей Hyundai, Kia и других корейских марок, обеспечивая оптимальные характеристики работы двигателя и долгий срок службы."
                },
                {
                    id: 15,
                    name: "Радиатор охлаждения Mark 3",
                    image: "/src/assets/default.png",
                    price: 2500,
                    buys: 129,
                    description: "Радиатор охлаждения Mark 3 - это надежное и эффективное устройство, разработанное для оптимального охлаждения двигателя вашего автомобиля. Изготовленный из высококачественных материалов и обладающий превосходными теплоотводящими свойствами, этот радиатор гарантирует стабильную работу двигателя даже в условиях высоких температур. Современный дизайн и прочная конструкция делают радиатор охлаждения Mark 3 незаменимым аксессуаром для любого автолюбителя, обеспечивая надежную защиту от перегрева и продлевая срок службы вашего автомобиля."
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
  