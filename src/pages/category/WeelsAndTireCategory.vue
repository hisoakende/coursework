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
                    buys: 75,
                    description: "Диски BMK 318i 17 литые - это стильные и надежные легкосплавные диски, специально разработанные для автомобилей BMK 318i. Их литая конструкция обеспечивает прочность и надежность, а также отличную теплоотдачу, что помогает предотвратить перегрев тормозов. Эти диски не только придают автомобилю элегантный внешний вид, но и улучшают управляемость и устойчивость на дороге. Их легкий вес также способствует улучшению динамических характеристик автомобиля. Диски BMK 318i 17 литые легко устанавливаются и идеально подходят для замены стандартных дисков или улучшения внешнего вида и производительности вашего автомобиля BMK 318i."
                },
                {
                    id: 33,
                    name: "Шины Aufi f4 225/55 R17 зимние",
                    image: "/src/assets/default.png",
                    price: 20000,
                    buys: 87,
                    description: "Диски Шины Aufi F4 225/55 R17 зимние - это высококачественные и надежные комбинированные покрышки с дисками, специально разработанные для обеспечения превосходного сцепления и управляемости на зимних дорогах. Эти шины идеально подходят для автомобилей с умеренной или высокой проходимостью на снежных, обледенелых и скользких поверхностях."
                },
                {
                    id: 34,
                    name: "Колесные гайки LATA C200 19 комплект",
                    image: "/src/assets/default.png",
                    price: 1300,
                    buys: 100,
                    description: "Колесные гайки LATA C200 19 - это незаменимый комплект для замены или обновления колесных гаек на вашем автомобиле. Этот комплект включает в себя 19 колесных гаек, что позволяет вам полностью заменить гайки на всех колесах вашего автомобиля."
                },
                {
                    id: 35,
                    name: "Запасное колесо Polkswagen Rassat 205/60 R16",
                    image: "/src/assets/default.png",
                    price: 1400,
                    buys: 0,
                    description: "Запасное колесо Polkswagen Rassat 205/60 R16 - это резервное колесо, специально разработанное и предназначенное для автомобилей Polkswagen. Оно имеет размеры 205 мм ширины, 60% процентов профиля и диаметр 16 дюймов. Это запасное колесо является прекрасным решением для автомобилистов, так как позволяет заменить поврежденное или спущенное колесо на дороге, обеспечивая безопасность и комфорт при поездке. Оно изготовлено с использованием высококачественных материалов, что гарантирует его прочность, долговечность и надежность."
                },
                {
                    id: 36,
                    name: "Датчик давления в шинах Dord Ondeo 2.0L комплект",
                    image: "/src/assets/default.png",
                    price: 1700,
                    buys: 99,
                    description: "Датчик давления в шинах Dord Ondeo 2.0L комплект - это инновационное устройство, предназначенное для контроля и мониторинга давления в шинах вашего автомобиля. Этот комплект включает в себя все необходимые компоненты для установки и настройки датчиков давления в шинах. Датчик давления в шинах Dord Ondeo 2.0L помогает поддерживать оптимальное давление в шинах, что позволяет улучшить безопасность, производительность и долговечность шин. Он надежно фиксируется на каждом колесе автомобиля и передает информацию о текущем давлении в шинах на вашу систему мониторинга."
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
  