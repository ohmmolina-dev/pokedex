<template>
  <router-view></router-view>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";
import { usePokemonStore } from "./stores/pokemon"
const pokeStore = usePokemonStore();
onMounted(()=>(
  pokeStore.fetchTotalPokemon()
))
</script>
