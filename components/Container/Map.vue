<template>
  <div id="map" class="relative h-screen w-full">
    <section class="absolute z-[500] right-5 top-5 grid grid-cols-1 gap-5 w-8">
        <BaseButton @onClick="() => { drawWidget = !drawWidget }" class="bg-sienna">1</BaseButton>
        <BaseButton class="bg-sienna">2</BaseButton>
    </section>
    <ContainerDrawCapture :state="drawWidget" :map="map" v-if="drawWidget"></ContainerDrawCapture>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';

const drawWidget = ref(false);

let map = null;

onMounted(() => {
    // console.log(L)

    const url = "https://iserver.supermap.io/iserver/services/map-world/rest/maps/World";
    map = L.map("map", {
      crs: L.CRS.EPSG4326,
      center: [33, 114],
      maxZoom: 18,
      zoom: 2,
    });

    new L.supermap.TiledMapLayer(url).addTo(map);
    L.control.scale().addTo(map);

    
    // var editableLayers = new L.featureGroup();
    // map.addLayer(editableLayers);
    // var options = {
    //     position: 'topleft',
    //     draw: {
    //         polyline: {},
    //         polygon: {},
    //         circle: {},
    //         rectangle: {},
    //         marker: {},
    //         remove: {}
    //     },
    //     edit: {
    //         featureGroup: editableLayers,
    //         remove: true
    //     }
    // };
    // var drawControl = new L.Control.Draw(options);
    // map.addControl(drawControl);
    // handleMapEvent(drawControl._container, map);
    // map.on(L.Draw.Event.CREATED, function (e) {
    //     var type = e.layerType,
    //         layer = e.layer;
    //     if (type === 'marker') {
    //         layer.bindPopup('A popup!');
    //     }
    //     editableLayers.addLayer(layer);
    // });

    

    
})

function handleMapEvent(div, map) {
        if (!div || !map) {
            return;
        }
        div.addEventListener('mouseover', function () {
            map.scrollWheelZoom.disable();
            map.doubleClickZoom.disable();
        });
        div.addEventListener('mouseout', function () {
            map.scrollWheelZoom.enable();
            map.doubleClickZoom.enable();
        });
    }
</script>