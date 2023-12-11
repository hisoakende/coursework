<template>
    <article class="category-list">
        <div class="category-item">
            <router-link @click.native="scrollToTop" to="/categories/engine">Двигатель</router-link> 
        </div>
        <div class="category-item">
            <router-link @click.native="scrollToTop" to="/categories/suspension">Подвеска</router-link> 
        </div>
        <div class="category-item">
            <router-link @click.native="scrollToTop" to="/categories/exhaust-system">Выхлопная система</router-link> 
        </div>
        <div class="category-item">
            <router-link @click.native="scrollToTop" to="/categories/electronics">Электроника</router-link> 
        </div>
        <div class="category-item">
            <router-link @click.native="scrollToTop" to="/categories/tires-and-wheels">Шины и диски</router-link> 
        </div>
        <div class="category-item">
            <router-link @click.native="scrollToTop" to="/categories/oils-and-auto-chemicals">Масла и автохимия</router-link>
        </div>
    </article>
</template>

<script>
export default {
    methods: {
        scrollToTop() {
            window.scrollTo(0,0);
        }
    }
}
</script>

<style>
.category-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 200px;
}


</style>

