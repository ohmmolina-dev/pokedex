<template>
   <div
      class="w-2/4 max-w-[300px] m-auto rounded-2xl bg-teal-100 text-white">
      <div class="flex min-h-[160px] p-2 justify-center">
         <a
         :href="'https://www.wikidex.net/wiki/'+pokeStore.pokemonName(pokeStore.pokemon.name)"
         target="_blank"
         class="rounded-[50%] hover:bg-teal-900 hover:bg-opacity-20">
            <img :src="pokeStore.pokemon.front" :alt="pokeStore.pokemon.name" class="w-36 "/>
         </a>
      </div>
      <div class="relative text-center bg-gray-800 rounded-b-xl">
         <a :href="'https://www.wikidex.net/wiki/'+pokeStore.pokemonName(pokeStore.pokemon.name)" target="_blank">
            <p
            class="inline-block text-center pt-4">
               {{ pokeStore.pokemon.name }}
            </p>
         </a>
         <p 
         class="text-center text-xs pt-1">
            {{ pokeStore.pokemon.id }}°
         </p>
         <div class="text-center">
            <p class="text-xs pt-4">Type(s)</p>
            <p class="inline-block text-xs px-2"
            v-for="(type, idx) in pokeStore.pokemon.types" :key="idx">
               {{type}}
            </p>
         </div>
         <div class="text-center">
            <p class="text-xs pt-4">Generation</p>
            <p class="text-xs pb-4">{{pokeStore.pokemon.version}}</p>
         </div>
      </div>
   </div>
</template>

<script setup>
import { usePokemonStore } from '../stores/pokemon'

const pokeStore = usePokemonStore();
</script>