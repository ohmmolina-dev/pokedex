<template>
   <button
      class="inline-block w-40 p-2 rounded-2xl cursor-pointer text-center text-white bg-teal-600 hover:bg-teal-800 disabled:bg-slate-500 disabled:cursor-not-allowed">
         {{ pokemon.id+' '+pokemon.name }}
   </button>
</template>

<script setup>
import { usePokemonStore } from '../stores/pokemon'
import { ref } from 'vue'

const pokeStore = usePokemonStore();

const props = defineProps({
   pokemon: {}
})

</script>