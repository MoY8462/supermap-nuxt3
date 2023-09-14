<template>
  <div id="map" class="relative h-screen w-full">
    <section class="absolute z-[500] right-5 top-5 grid grid-cols-1 gap-5 w-8">
        <BaseButton @onClick="() => { drawBasicWidget = !drawWidget }" class="bg-sienna">1</BaseButton>
        <BaseButton @onClick="() => { drawCaptureWidget = !drawCaptureWidget }" class="bg-sienna">2</BaseButton>
        <BaseButton @onClick="home" class="bg-sienna">3</BaseButton>
    </section>
    <ContainerDrawBasic :map="map" v-if="drawBasicWidget"></ContainerDrawBasic>
    <ContainerDrawCapture :map="map" v-if="drawCaptureWidget"></ContainerDrawCapture>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';

const drawBasicWidget = ref(false);
const drawCaptureWidget = ref(false);

let map = null;




onMounted(() => {
    // console.log(L)

    const url ="https://iserver.supermap.io";
    const World = new L.supermap.TiledMapLayer(url + '/iserver/services/map-world/rest/maps/World',{noWrap:true});
    const ChinaDark = new L.supermap.TiledMapLayer(url + '/iserver/services/map-china400/rest/maps/ChinaDark', {noWrap:true});
    
    map = L.map("map", {
      crs: L.CRS.EPSG4326,
      center: [23.63, -102.55],
      maxZoom: 18,
      zoom: 5,
      layers: [World]
    });
    console.log(L)

    L.control.scale().addTo(map);

    const baseMaps = { "World": World};
    // Add layer switch control
    var overlayMaps = {
      // "Puntazo": punto
  };
    L.control.layers(baseMaps, overlayMaps, {
      position: 'topleft'
    }).addTo(map);

    // var osm = new L.supermap.TiledMapLayer(url + "/iserver/services/map-world/rest/maps/World", {minZoom: 5, maxZoom: 18,noWrap: true});
    // map.addLayer(osm);
    // map.setView(L.latLng(23.63, -102.55), 10);
    var osm2 = new L.supermap.TiledMapLayer(url + "/iserver/services/map-world/rest/maps/World", {minZoom: 0, maxZoom: 13,noWrap: true});

    L.control.minimap(osm2, {mapOptions:{ logoControl: true},toggleDisplay: true}).addTo(map);
    
})

const home = () => {
  map.setView(L.latLng(23.63, -102.55), 5);
}

</script>