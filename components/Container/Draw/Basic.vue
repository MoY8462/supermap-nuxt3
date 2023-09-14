<template>
    <div></div>
</template>
<script setup>
import { toRefs } from "vue"

const props = defineProps({
    map: Object
})

const map = toRefs(props).map.value;

let options = null
let editableLayers = null;
let drawControl = null;

onMounted(() => {

    editableLayers = new L.FeatureGroup();
    // Draw the configuration of control parameter
    options = {
        position: 'bottomleft',
        draw: {
            polyline: {}, // line
            polygon: {}, // polygon
            circle: {}, // circle
            rectangle:{}, // rectangle
            marker: {}, // marker
            remove: {}
        },
        edit: {
            featureGroup: editableLayers,
            remove: true
        }
    };
    // Create and add a draw control
    drawControl = new L.Control.Draw(options);
    map.addControl(drawControl);
    // monitor drawing events
    map.on(L.Draw.Event.CREATED, function (e) {
        var type = e.layerType, layer = e.layer;
        editableLayers.addLayer(layer);
    });
    

    
})


onBeforeUnmount(() => {
    map.removeControl(drawControl);
})
</script>