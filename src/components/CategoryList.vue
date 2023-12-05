<template>
    <article class="category-list">
        <div class="category-item">
            <router-link to="/categories/engine">Двигатель</router-link> 
        </div>
        <div class="category-item">
            <router-link to="/categories/suspension">Подвеска</router-link> 
        </div>
        <div class="category-item">
            <router-link to="/categories/exhaust-system">Выхлопная система</router-link> 
        </div>
        <div class="category-item">
            <router-link to="/categories/electronics">Электроника</router-link> 
        </div>
        <div class="category-item">
            <router-link to="/categories/tires-and-wheels">Шины и диски</router-link> 
        </div>
        <div class="category-item">
            <router-link to="/categories/oils-and-auto-chemicals">Масла и автохимия</router-link>
        </div>
    </article>
</template>

<script>

</script>

<style>
.category-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 200px;
}


</style>

