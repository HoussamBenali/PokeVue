
<template>
<div id="adventure">
  <div class="chooseArea">CHOOSE YOUR ADVENTURE AREA</div>
    <div class="flex-container">
      <div type="button" @click="selectMap(1)" class="sewers map" name="Sewers">
        <span>Sewers</span>
      </div>  
      <div type="button" @click="selectMap(2)" class="grassland map" name="Grassland"><span>Grassland</span></div>
      <div type="button" @click="selectMap(3)" class="forest map"><span>Forest</span></div>  
      <div type="button" @click="selectMap(4)" class="desert map"><span>Desert</span></div>
      <div type="button" @click="selectMap(5)" class="cave map"><span>Cave</span></div>
      <div type="button" @click="selectMap(6)" class="volcano map"><span>Volcano</span></div>
      <div type="button" @click="selectMap(7)" class="iceCave map"><span>Ice Cave</span></div>
      <div type="button" @click="selectMap(8)" class="sea map"><span>Sea</span></div>
  </div>

</div>
</template>

<script>
//import axios from 'axios';
import {mapGetters} from 'vuex';
//import $ from 'jquery';

export default {
  name: 'Adventure',  
  data(){
    return{
    }
  },
  computed:{
    ...mapGetters(['user']),
  },

  methods:{
    selectMap(map){
      if (map == 1){ this.$router.push('wildMap/Sewers') }
      else if (map==2){ this.$router.push('wildMap/Grassland') }
      else if (map==3){ this.$router.push('wildMap/Forest') }
      else if (map==4){ this.$router.push('wildMap/Desert') }
      else if (map==5){ this.$router.push('wildMap/Cave') }
      else if (map==6){ this.$router.push('wildMap/Volcano') }
      else if (map==7){ this.$router.push('wildMap/IceCave') }
      else if (map==8){ this.$router.push('wildMap/Sea') }
    }
  }

}

</script>

<style scoped lang="scss">
  @import "../assets/css/adventure.css";
  @import "../assets/css/adventureMobile.css";

  #adventure{
    background-color: #f6f7c7;
    height: fit-content;
    text-align: center;
  }
  span{
    display: block;
    position: relative;
    color: honeydew;
    margin-top: 25vh;
    padding: 2vh;
    background-color: slategray;
    border-bottom-left-radius: 1vh;
    border-bottom-right-radius: 1vh;
    border: 5px solid silver;
  }

  span:hover{
      position: relative;
      width:100%;
  }
  

</style>
