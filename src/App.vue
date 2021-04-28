<template>
  <div id="app">
    <div class="header">
      <!--<Nav></Nav>-->
      <Nav v-if="['login', 'register', 'home', 'base', 'adventure'].includes($route.name)"></Nav>
    </div>
    <div class="">
      <router-view/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Nav from './components/Nav';


export default {
  name: 'index',
  components: {
    Nav,
  },   
  data(){
    return {
      user: null,
      isAuthenticated:''
    }
  },
  async created(){
      const response = await axios.get('user');
      this.$store.dispatch('user',response.data);

    }, 
  
}

</script>

<style lang="scss">

@font-face {
    font-family: PokemonSolid;
    src: url('/assets/fonts/Pokemon Solid.ttf');
}

@font-face{
    font-family: PokemonHollow;
    src: url('/assets/fonts/Pokemon Hollow.ttf');
}
@media (min-width: 630px) {
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f6f7c7;
  min-height: 100vh;
  height: fit-content;

     
}

.header > a{
  color: #2c3e50;
  text-decoration: none;
}

html {

  margin: 0;

}
}

</style>