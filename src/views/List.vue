<template>
   <Navbar />
   <FloatingButton />
   <div class="flex flex-wrap justify-center">
      <Card 
      @scroll="pokeSoter.fetchTotalPokemon()"
      class='m-4'
      v-for="pokemon in pokeStore.listPokemon" :key="pokemon.url" :pokemon="pokemon" simplified="true"/>
   </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import FloatingButton from "../components/FloatingButton.vue";
import Card from "../components/Card.vue";

import { onBeforeMount, onMounted } from "vue";
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
   document.title = "Pokedex - List"
});

const pokeStore = usePokemonStore();

pokeStore.fetchTotalPokemon()

pokeStore.fetchPokemonList()

</script>