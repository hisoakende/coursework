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
                buys: 0,
                description: "Амортизаторы Super Focus 1.6L передние 09878932 - это высококачественные амортизаторы, специально разработанные для автомобилей Super Focus с двигателем объемом 1.6 литра. Эти амортизаторы обеспечивают отличное сцепление с дорогой и плавное управление автомобилем, что делает вашу поездку комфортной и безопасной. Они также обладают прочной конструкцией и долговечными материалами, что гарантирует их надежность и долгий срок службы. Амортизаторы Super Focus 1.6L передние 09878932 легко устанавливаются и идеально подходят для замены старых или изношенных амортизаторов. При использовании этих амортизаторов вы можете быть уверены в отличной устойчивости и управляемости вашего автомобиля Super Focus."
            },
            {
                id: 28,
                name: "Пружины Golkswagen Qolf 098932 2.0L задние",
                image: "/src/assets/default.png",
                price: 1100,
                buys: 5,
                description: "Пружины Golkswagen Qolf 098932 2.0L задние - это высококачественные пружины, специально разработанные для автомобилей Golkswagen Qolf с двигателем объемом 2.0 литра. Эти пружины обеспечивают отличную устойчивость и комфорт при езде, обеспечивая плавное и уверенное управление вашим автомобилем. Их прочная конструкция и долговечные материалы гарантируют надежность и долгий срок службы. Пружины Golkswagen Qolf 098932 2.0L задние легко устанавливаются и идеально подходят для замены старых или изношенных пружин. При использовании этих пружин вы можете быть уверены в отличной устойчивости и управляемости вашего автомобиля Golkswagen Qolf."
            },
            {
                id: 29,
                name: "Рулевая тяга Royota Ramry PPP/9900 2.5L левая",
                image: "/src/assets/default.png",
                price: 1300,
                buys: 100,
                description: "Рулевая тяга Royota Ramry PPP/9900 2.5L левая - это высококачественная запчасть, специально разработанная для автомобилей Royota Ramry с двигателем объемом 2.5 литра. Эта рулевая тяга обеспечивает отличную устойчивость и точное управление при движении, обеспечивая безопасность и комфорт во время вождения. Ее прочная конструкция и долговечные материалы гарантируют надежность и долгий срок службы. Рулевая тяга Royota Ramry PPP/9900 2.5L левая легко устанавливается и идеально подходит для замены старой или изношенной рулевой тяги. При использовании этой запчасти вы можете быть уверены в отличном управлении и безопасности вашего автомобиля Royota Ramry."
            },
            {
                id: 30,
                name: "Шаровая опора 90/10 Lissan Pashqai 1.6L передняя",
                image: "/src/assets/default.png",
                price: 1400,
                buys: 95,
                description: "Шаровая опора 90/10 Lissan Pashqai 1.6L передняя - это надежная и высококачественная запчасть, специально разработанная для автомобилей Lissan Pashqai с двигателем объемом 1.6 литра. Эта шаровая опора обеспечивает отличное сцепление колеса с дорогой, обеспечивая стабильность и безопасность при движении. Ее прочная конструкция и долговечные материалы гарантируют надежность и долгий срок службы. Шаровая опора 90/10 Lissan Pashqai 1.6L передняя легко устанавливается и идеально подходит для замены изношенной или поврежденной шаровой опоры. При использовании этой запчасти вы можете быть уверены в отличном сцеплении и безопасности вашего автомобиля Lissan Pashqai."
            },
            {
                id: 31,
                name: "Стабилизатор Xitsubishi 77623723 Xancer 1.8L задний",
                image: "/src/assets/default.png",
                price: 1200,
                buys: 85,
                description: "Стабилизатор Xitsubishi 77623723 Xancer 1.8L задний - это надежная и высококачественная запчасть, специально разработанная для автомобилей Xitsubishi Xancer с двигателем объемом 1.8 литра. Этот стабилизатор обеспечивает отличную устойчивость и управляемость автомобиля, уменьшая крены кузова во время поворотов и обеспечивая плавное и комфортное движение. Его прочная конструкция и долговечные материалы гарантируют надежность и долгий срок службы. Стабилизатор Xitsubishi 77623723 Xancer 1.8L задний легко устанавливается и идеально подходит для замены изношенного или поврежденного стабилизатора. При использовании этой запчасти вы можете быть уверены в отличной устойчивости и комфорте вашего автомобиля Xitsubishi Xancer."
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
  