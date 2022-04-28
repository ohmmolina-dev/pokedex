import { defineStore } from 'pinia'

export const usePokemonStore = defineStore('pokemon',{
   state:()=>({
      loading: false,
      display: 'hidden',
      //Al cargar por primera vez: undifined, asi que por defecto es 9 para no tener errores.
      totalPokemon: 9,
      //Si llega a haber un error en la vista, requieren estar definidas aunque no tengan ningun valor.
      pokemon: {
         name: '',
         id: '',
         front: '',
      },
      //Navegacion por contiguos.
      prevPokemon: {
         name: 'None',
         id: ''
      },
      nextPokemon: {
         name: 'None',
         id: ''
      },
   }),
   getters:{
   },
   actions: {
      pokemonName: (name) => {
         return name[0] + name.substring(1).toLowerCase()
      },
      randomPokemon(max){
         return Math.floor(Math.random() * (max + 1 - 1) + 1);
      },
      async fetchTotalPokemon() {
         try {
            const res = await fetch(
               "https://pokeapi.co/api/v2/pokemon-species/?limit=0"
            );
            const data = await res.json();
            this.totalPokemon = data.count; //898
         } catch (e) {
            console.log(e);
         }
      },
      async fetchPokemon(id){
         this.loading = true;
         try {
            const res = await fetch(
               `https://pokeapi.co/api/v2/pokemon/${id}`
            );
            const data = await res.json();
            this.pokemon = {
               name: data.name.toUpperCase(),
               id: data.id,
               types: [],
               front: data.sprites.front_default,
               back: data.sprites.back_default,
               frontShiny: data.sprites.front_shiny,
               backShiny: data.sprites.back_shiny,
               version: '',
            };
            data.types.forEach(slot => {
               this.pokemon.types.push(slot.type.name);
            });
            if(data.game_indices[0]!==undefined){
               this.pokemon.version = data.game_indices[0].version.name[0].toUpperCase()+data.game_indices[0].version.name.substring(1);
            }else{
               this.pokemon.version = 'Unknown';
            }
            
            this.display='hidden';
      
            this.fetchPrevPokemon(this.pokemon.id-1);
            this.fetchNextPokemon(this.pokemon.id+1);

         } catch (e) {
            if(e.name === 'SyntaxError'){
               this.display= ''
               console.log('id '+id+': Not found.');
            }else{
               console.log(e.message);
            }
         } finally{
            this.loading = false;
         }
      },
      async fetchPrevPokemon(id){
         try {
            if(id === 0){
               throw new Error('Previous pokemon does not exist.');
            }
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await res.json();
            this.prevPokemon = {
               name: data.name[0].toUpperCase()+data.name.substring(1),
               id: data.id,
            };
         } catch (e) {
            if(e.message === 'Previous pokemon does not exist.'){
               this.prevPokemon.name = 'None'
               this.prevPokemon.id = ''
            }
            console.log(e.message);
         }
      },
      async fetchNextPokemon(id){
         try {
            if(id > this.totalPokemon){
               throw new Error('Next pokemon does not exist');
            }else if (id > this.totalPokemon && id-1 === 9){
               throw new Error('totalPokemon bugged.')
            }
            
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await res.json();
      
            this.nextPokemon = {
               name: data.name[0].toUpperCase()+data.name.substring(1),
               id: data.id,
            };
         } catch (e) {
            if(e.message === 'Next pokemon does not exist'){
               this.nextPokemon.name = 'Bulbasaur'
               this.nextPokemon.id = '1'
            //Paliativo para bug:
            //al cargarse por primera vez, 'fetchTotalPokemon' no responde antes de la carga de la tarjat, por tanto 'totalPokemon' = 9. Si esa primera carga es Blastoise (#9), se carga automaticamente como next a Caterpie (#10). 
            }else if(e.message === 'totalPokemon bugged.'){
               this.nextPokemon.name = 'Caterpie'
               this.nextPokemon.id = '10'
            }
            console.log(e.message);
         }
      }  
   }
})