<template>
    <div></div>
</template>
<script setup>
import { toRefs } from "vue"

const props = defineProps({
    map: Object,
    state: Boolean
})

const map = toRefs(props).map.value;
let options = null


onMounted(() => {

    // Capture drawing control parameter settings
    options = {
        position: 'bottomleft', // Control position
        drawMarker: true, // Whether marker drawing is optional
        drawPolygon: true, // Whether drawPolygon drwaing is optional
        drawPolyline: true, // Whether drawPolyline drawing is optional
        editPolygon: true, // Whether EditPolygon editing is optional
        deleteLayer: true
    };
    // Add Capture drawing control
    map.pm.addControls(options);
})

onBeforeUnmount(() => {
    map.pm.removeControls();
})
</script>