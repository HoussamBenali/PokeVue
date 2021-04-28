<template>
<div class="header">
  <b-navbar toggleable="lg" type="dark" variant="info">

    <img class="hi" alt="Pokelogo" src="../../public/images/pokelogo.png" width="60" height="60">
    
    <router-link to="" class="link">
      <h5 class="title"><b>PokeCards</b></h5>
    </router-link>
   
    <b-navbar-toggle target="nav-collapse"/>
    
    <b-collapse id="nav-collapse" is-nav>

      <b-navbar-nav class="ml-auto" v-if="!user">
 
        <b-nav-item href="#" right>
          <router-link to="/login" active-class="active" class="navindex ">Login</router-link>
        </b-nav-item>
        <b-nav-item href="#" right >
          <router-link to="/register" active-class="active" class="navindex">Register</router-link>
        </b-nav-item>
       </b-navbar-nav>


       <b-navbar-nav class="ml-auto" v-if="user">

        <b-nav-item href="#" right>
          <router-link to="/home" active-class="active" class="navindex">Home</router-link>
        </b-nav-item>
        
        <b-nav-item href="#" right>
          <router-link to="/adventure" active-class="active" class="navindex">Adventure</router-link>
        </b-nav-item>
 
        <b-nav-item href="#" right>
          <a href="javascript:void(0)" @click="Logout"  active-class="active" class="navindex">Logout</a>
        </b-nav-item>
        </b-navbar-nav>

      
      
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'navigator',
  methods:{
    Logout(){
      localStorage.removeItem('token');
      this.$store.dispatch('user',null);
      this.$router.push('/');
    }
  },
  computed:{
    ...mapGetters(['user'])
  }
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

hr{
    border-top: 1px solid black;
 }

.navindex{
    color: #000;
    padding-top: 1vh;
    padding-bottom: 1vh;
    border-radius: 1vh;
    background: white;
    text-decoration: none;
    display: block;
    margin-left: auto;
    margin-right: auto;
    min-width: 80px;
    max-width: 300px;
    text-align: center;
  
 }

 .navindex:hover{
    background: black;
    color: white;
    text-decoration: none;
 }

.title{
  border-radius: 1vh;
  min-width: 80px;
  background: white;

  font-size: 37px;
  padding-right: 2vh;
  padding-left: 2vh;
  padding-bottom: 0.5vh;
  color: red;
  /* 1 pixel black shadow to left, top, right and bottom */
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  color: yellow;
  text-decoration: none;
  margin: 0;
}

.link:hover{
  text-decoration: none;
}

.hi{
  margin-right: 1vw;
}

 

//rgb(52, 168, 130)
</style>
