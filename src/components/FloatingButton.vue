<template>
<div
id="button"
class="fixed bottom-8 right-8 w-12 h-12 z-50 rounded-full bg-teal-200 border-2 border-dark curser-pointer shadow-md shadow-dark hover:animate-bounce"
@click="goTop()">
      <img src="../assets/up.svg" alt="up"
      class="">
</div>
</template>

<script setup>
const goTop = ()=>{
   window.scrollTo({
      top: 0,
      behavior: "smooth",
   })
};
</script>

<style>

</style>