<template>
  <div class="app">
    <DefaultHeader/>
    <main>
      <div class="content">
        <div class="content-upper-part">
          <CategoryList class="category-list"/>
          <CompanyInfo class="company-info"/>
        </div>
        <BrandSwiper class="brand-swiper"/>
        <div class="content-contacts">
          <YandexMap/>
          <CompanyContacts/>
        </div>
        <PromotionItemsList :promotionItems="promotionItems"/>
      </div>
    </main>
    <DefaultFooter/>
  </div>
</template>

<script>
import DefaultHeader from "@/components/DefaultHeader.vue";
import CategoryList from "@/components/CategoryList.vue";
import CompanyInfo from "@/components/CompanyInfo.vue";
import BrandSwiper from "@/components/BrandSwiper.vue";
import YandexMap from "@/components/YandexMap.vue";
import CompanyContacts from "@/components/CompanyContacts.vue";
import PromotionItemsList from "@/components/PromotionItemsList.vue";
import DefaultFooter from "@/components/DefaultFooter.vue"

export default {
  components: {
    DefaultHeader,
    CategoryList,
    CompanyInfo,
    BrandSwiper,
    YandexMap,
    CompanyContacts,
    PromotionItemsList,
    DefaultFooter
  },
  data() {
    return {
      promotionItems: [
        {
          id: 1,
          name: "Аккумулятор BUTLU FFB 60 А/ч обратная R+ 242x175x190 EM540",
          image: "/src/assets/1.png",
          price: 9999,
          description: "Аккумулятор BUTLU FFB 60 А/ч обратная R+ 242x175x190 EM540 - это надежный и мощный аккумулятор, который обеспечит вашему автомобилю надежную работу в любых условиях. С его емкостью 60 А/ч и обратной полярностью R+, он подходит для широкого спектра автомобилей. Размеры 242x175x190 мм позволяют установить аккумулятор в большинство автомобилей без проблем. Этот аккумулятор обеспечит надежную и стабильную работу вашего автомобиля в течение длительного времени."
        },
        {
          id: 2,
          name: "LATA Шатун LATA 11194 11194100404500",
          image: "/src/assets/shatun.jpeg",
          price: 4000,
          description: "Шатун LATA 11194 11194100404500 - это высококачественный и надежный компонент для вашего автомобиля. Изготовленный из прочного материала, он обеспечивает отличную прочность и долговечность. Специально разработанный для оптимальной работы двигателя, этот шатун обеспечивает стабильную и эффективную передачу энергии. Установка данного шатуна позволит вашему автомобилю работать на высоком уровне производительности и надежности." 
        },
        {
          id: 3,
          name: "Вал коленчатый LATA 1118 11183100501601",
          image: "/src/assets/default.png",
          price: 13450,
          description: "Вал коленчатый LATA 1118 11183100501601 - это надежный и высококачественный компонент, который обеспечивает оптимальную работу двигателя вашего автомобиля. Изготовленный из прочного материала, он обладает отличной прочностью и долговечностью, что обеспечивает длительный срок службы. Специально разработанный для эффективной передачи энергии, этот вал коленчатый обеспечивает стабильную работу двигателя и минимизирует износ деталей. Установка данного компонента позволит вашему автомобилю работать на высоком уровне производительности и надежности, обеспечивая плавное и эффективное функционирование двигателя."
        },
        {
          id: 4,
          name: "Сайлентблок BMG 31126768818",
          image: "/src/assets/default.png",
          price: 9999,
          description: "Сайлентблок BMG 31126768818 - это надежное и прочное крепление, разработанное специально для автомобилей BMG. Изготовленный из высококачественных материалов, этот сайлентблок обеспечивает отличную амортизацию и устойчивость, снижая вибрацию и шум во время движения. Он предназначен для повышения комфорта и безопасности вождения, обеспечивая долговечность и надежность в любых условиях эксплуатации. Сайлентблок BMG 31126768818 - это идеальное решение для замены изношенных или поврежденных деталей подвески вашего автомобиля."
        },
        {
          id: 5,
          name: "Сайлентблок LATA 31126006863",
          image: "/src/assets/default.png",
          price: 9999,
          description: "Сайлентблок LATA 31126006863 - это прочный и надежный элемент подвески автомобиля, который обеспечивает плавное и бесшумное функционирование. Изготовленный из высококачественного материала, он обладает отличной износостойкостью и долговечностью. Сайлентблок LATA 31126006863 предназначен для установки на различные модели автомобилей и обеспечивает стабильность и комфорт во время движения. Обязательный компонент для поддержания безопасности и производительности вашего автомобиля."
        }
      ]
    }
  }
}
</script>

<style>
.content-upper-part {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.company-info {
  width: 100%;
}

.brand-swiper {
  width: 100%;
  padding: 5px 0;
  max-width: 1200px;
}

.content-contacts {
  max-width: 1200px;
  display: flex;
  gap: 30px;
}

@media screen and (max-width: 900px) and (min-width: 681px) {
  .content-contacts {
    flex-direction: column;
    align-items: center;
  }
  .company-info {
    font-size: 25px;
  }
}

@media screen and (max-width: 680px) and (min-width: 581px) {
  .content-contacts {
    flex-direction: column;
    align-items: center;
  }
  
  .company-info {
    font-size: 17px;
  }

  .footer-wrapper {
    gap: 40px;
    flex-direction: column;
  }
}

@media screen and (max-width: 580px) {
  .content-contacts {
    flex-direction: column;
    align-items: center;
  }
  .footer-wrapper {
    gap: 40px;
    flex-direction: column;
  }

  .company-info {
    font-size: 17px;
  }

  .company-contacts img {
    width: 300px;
  }
}

</style>
