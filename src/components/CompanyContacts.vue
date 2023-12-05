<template>
    <section class="company-contacts">
        <div class="company-contacts-image">
            <img src="src/assets/parts.jpeg">
        </div>        
        <div class="company-contacts-card">
            <div class="company-contacts-card-wrapper">
                <div>Круглосуточная доставка</div>
                <div>Круглосуточная поддержка</div>
                <div>Круглосуточные поставщики</div>
                <div>Круглосуточные детали</div>
            </div>
        </div>
    </section>
</template>

<script>

</script>

<style>

.company-contacts {
    position: relative;
    margin-right: 30px;
}

.company-contacts-image {
    box-shadow: 0 1px 2px #00000029;
    border-radius: 10px;
    display: flex;
    overflow: hidden;
}

.company-contacts img {
    width: 400px;
}

.company-contacts:hover .company-contacts-card {
    opacity: 0.9;
    transition: 0.5s;
}

.company-contacts-card {
    transition: 0.5s;
    opacity: 0;
    background-color: black;
    position: absolute;
    right: -30px;
    bottom: 10px;
    width: 300px;
    height: 300px;
    border-radius: 10px;
    padding: 5px;
    color: white;
    text-align: center;
}

.company-contacts-card-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

</style>
