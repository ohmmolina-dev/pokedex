<template>
  <Navbar />
   <div class="p-4 text-center">
      <input
         type="text"
         placeholder="Serch 'em all"
         id="search"
         v-model="search"
         @keyup.enter="handleSubmit"
         class="w-2/3 max-w-[500px] text-center rounded bg-teal-100 placeholder-gray-500 text-teal-800"
      />
      <button
      type="submit"
      class="ml-1 p-[0.3rem] rounded bg-teal-300"
      :disabled="pokeStore.loading"
      @click="handleSubmit">
         <SearchSvg class="w-3"/>
      </button>
      <p
      :class="'pt-2 text-[0.5rem] text-red-400 '+pokeStore.display">
         {{ "Sorry that  isn't a pokemon. Try again." }}
      </p>
   </div>
      
   <Card v-if="!pokeStore.loading" :pokemon="pokeStore.pokemon" :sprite="sprite" :key="sprite"/>
   <Loading v-else/>

   <div class="flex justify-between max-w-[600px] mx-auto mt-10 px-8 text-xs">
      <Button
      :disabled="pokeStore.prevPokemon.name==='None'"
      :pokemon="pokeStore.prevPokemon"
      @click="handlePevNext(pokeStore.prevPokemon.id)"/>
      
      <Button
      :pokemon="pokeStore.nextPokemon"
      @click="handlePevNext(pokeStore.nextPokemon.id)"/>
   </div>
   <div class="pt-4 text-center">
      <Button
      :pokemon="{name: 'Toggle Shiny', id:''}"

      @click="toggleSprite()"/>
   </div>
   <Footer />
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import SearchSvg from "../components/SearchSvg.vue";
import Card from "../components/Card.vue";
import Loading from "../components/Loading.vue";
import Button from "../components/Button.vue";
import Footer from "../components/Footer.vue";

import { onBeforeMount, onMounted, ref } from "vue";
import { usePokemonStore } from "../stores/pokemon"


onBeforeMount(() => {
   pokeStore.fetchTotalPokemon();
   });

onMounted(() => {
   pokeStore.fetchPokemon(
      pokeStore.randomPokemon(
         pokeStore.totalPokemon
      )
   );
   document.title = "Pokedex - Serch 'Em All"
});
const pokeStore = usePokemonStore();


const search = ref('')
var sprite = ref('front')

const handleSubmit = () => {
   const regNums = /^[0-9]/;
   if (search.value === ''){
      pokeStore.fetchPokemon(
         pokeStore.randomPokemon(
            pokeStore.totalPokemon
         )
      );
   }else if(regNums.test(search.value)){
      search.value = Number(search.value);
   }else{
      search.value = search.value.toLowerCase()
   }
   pokeStore.fetchPokemon(search.value);
   
}

const handlePevNext = (id) => {
   pokeStore.fetchPokemon(id)
}

const toggleSprite = () =>{
   if(sprite.value === 'front'){
      sprite.value = 'frontShiny'
      console.log(sprite.value);
   } else{
      sprite.value = 'front'
      console.log(sprite.value);
   }
}
</script>
