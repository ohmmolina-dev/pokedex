<template>
   <div
   class="flex w-2/4 max-w-[300px] h-[340px] m-auto justify-center items-center rounded-2xl bg-gray-800 text-white">
      <div class="flex items-center m-auto animate-pulse">
         <PokeballSvg class="inline-block animate-spin"/>
         <p class="inline-block pr-4 text-2xl font-bold">Loading...</p>
      </div>
   </div>
</template>

<script setup>
import PokeballSvg from './PokeballSvg.vue'
</script>
