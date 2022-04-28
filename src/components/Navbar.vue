<template>
   <nav
   class="sticky flex flex-wrap justify-evenly items-center top-0 py-2 z-50 bg-teal-500 text-dark">
      <div>
         <router-link to="/">
            <p class="font-pokefont">Pokedex</p>
         </router-link>
      </div>
      <div>
         <router-link to="/list"><p class="font-pokefont">All Pokemon</p></router-link>
      </div>
      
   </nav>
</template>