
<template>
<div id="home">

 <div class="main">
   <span v-if="user">Hi, {{user.nick}} 
    <div class="info" >
     <p>{{user}}</p>
    </div>
   </span>
   <h1 v-else-if="!user"> You are not logged in! <br><router-link to="login">Sign in!</router-link></h1>
   
 </div>

</div>
</template>

<script>
//import axios from 'axios';
import {mapGetters} from 'vuex';

export default {
  name: 'Home',  
  computed:{
    ...mapGetters(['user']),
  }

}

</script>

<style scoped lang="scss">
  @import "../assets/css/styles.css";
  @import '../../node_modules/bootstrap/scss/bootstrap.scss';

  #home{
  background-color: #f6f7c7;
  display: block;
  width: 100%;
  height: 90vh;
}
</style>
