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
          image: "src/assets/1.png",
          price: 9999
        },
        {
          id: 2,
          name: "LATA Шатун LATA 11194 11194100404500",
          image: "src/assets/1.png",
          price: 4000
        },
        {
          id: 3,
          name: "Вал коленчатый LATA 1118 11183100501601",
          image: "src/assets/1.png",
          price: 13450
        },
        {
          id: 4,
          name: "Сайлентблок BMG 31126768818",
          image: "src/assets/1.png",
          price: 9999
        },
        {
          id: 5,
          name: "Сайлентблок LATA 31126006863",
          image: "src/assets/1.png",
          price: 9999
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
