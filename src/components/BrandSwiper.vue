<template>
    <swiper
            :slides-per-view="'auto'"
            :space-between="30"
            :navigation="true"
            :modules="modules"
            
    >

        <swiper-slide class="car-brand">
            <img src="src/assets/audi.png">
        </swiper-slide>
        
        <swiper-slide class="car-brand">
            <img src="src/assets/bmw.png">
        </swiper-slide>

        <swiper-slide class="car-brand">
            <img src="src/assets/honda.jpeg">
        </swiper-slide>

        <swiper-slide class="car-brand">
            <img src="src/assets/hyandai.png">
        </swiper-slide>

        <swiper-slide class="car-brand">
            <img src="src/assets/lada.png">
        </swiper-slide>

        <swiper-slide class="car-brand">
            <img src="src/assets/toyota.png">
        </swiper-slide>
        
        <swiper-slide class="car-brand">
            <img src="src/assets/audi.png">
        </swiper-slide>
        
        <swiper-slide class="car-brand">
            <img src="src/assets/bmw.png">
        </swiper-slide>

        <swiper-slide class="car-brand">
            <img src="src/assets/honda.jpeg">
        </swiper-slide>

        <swiper-slide class="car-brand">
            <img src="src/assets/hyandai.png">
        </swiper-slide>

        <swiper-slide class="car-brand">
            <img src="src/assets/lada.png">
        </swiper-slide>

        <swiper-slide class="car-brand">
            <img src="src/assets/toyota.png">
        </swiper-slide>

    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css'
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide
    },
    
    setup() {
      return {
        modules: [Navigation],
      };
    },
}
</script>

<style>

.car-brand {
    background-color: #ffffff;
    box-shadow: 0 1px 2px #00000029;
    border-radius: 10px;
    height: 70px;
    width: 130px !important;
    padding: 5px;
}

.car-brand img {
    display: block;
    margin: auto;
    max-height: 60px;
    max-width: 120px;
}

</style>