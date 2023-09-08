<script setup>
defineProps({
  color: String,
  icon: String,
});
</script>
<template>
  <button
    class="w-full px-2 py-2 flex justify-center gap-4 items-center text-white font-bold middle none center rounded shadow-md transition-all hover:shadow-lg"
    @click="$emit('onClick')"
  >
    <slot></slot>
    <svg v-if="icon" class="icon w-5 h-5" :class="icon"></svg>
  </button>
</template>