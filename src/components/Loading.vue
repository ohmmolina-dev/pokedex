<template>
   <div
   class="flex w-2/4 max-w-[180px] h-[296px] m-auto justify-center items-center rounded-2xl bg-gray-800 text-white">
      <div class="flex items-center m-auto animate-pulse">
         <PokeballSvg class="inline-block animate-spin w-12"/>
         <p class="inline-block pr-4 text-lg font-bold">Loading...</p>
      </div>
   </div>
</template>

<script setup>
import PokeballSvg from './PokeballSvg.vue'
</script>
