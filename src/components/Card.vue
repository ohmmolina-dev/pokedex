<template>
   <div
      class="w-2/4 max-w-[180px] m-auto rounded-2xl bg-teal-100 text-white">
      <div class="flex min-h-[160px] justify-center">
         <a
         :href="'https://www.wikidex.net/wiki/'+pokeStore.pokemonName(pokemon.name)"
         target="_blank"
         class="rounded-[50%] hover:bg-teal-900 hover:bg-opacity-20">
            <img :src="pokemon[sprite]" :alt="pokemon.name" class="w-36 "/>
         </a>
      </div>
      <div class="relative text-center bg-gray-800 rounded-b-xl">
         <a :href="'https://www.wikidex.net/wiki/'+pokeStore.pokemonName(pokemon.name)" target="_blank">
            <p
            class="inline-block text-center pt-1">
               {{ pokemon.name }}
            </p>
         </a>
         <p 
         class="text-center text-xs">
            {{ pokemon.id }}°
         </p>
         <div
         v-if="!simplified"
         class="text-center">
            <p class="text-xs pt-2">Type(s)</p>
            <p class="inline-block text-xs px-2"
            v-for="(type, idx) in pokemon.types" :key="idx">
               {{type}}
            </p>
         </div>
         <div 
         v-if="!simplified"
         class="text-center">
            <p class="text-xs pt-2">Generation</p>
            <p class="text-xs pb-1">{{pokemon.version}}</p>
         </div>
      </div>
   </div>
</template>

<script setup>
import { usePokemonStore } from '../stores/pokemon'

const pokeStore = usePokemonStore();

const props = defineProps({
   pokemon: {},
   sprite: {
      type: String,
      default: "front"
   },
   simplified: false,
})

</script>