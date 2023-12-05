<template>
    <div id="map"></div>
</template>

<script>
    ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 7
        });
    }
</script>

<style>
#map {
    box-shadow: 0 1px 2px #00000029;
    border-radius: 10px;
    width: 100%;
    height: 400px;
    overflow: hidden;
}
</style>