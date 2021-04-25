<template>
    <div v-if="hasHP"    class="card">
      <span class="player-level">Lvl. {{Level}}</span>
      <div class="hp-bar">
        <div v-if="Player" :style="HPStyle" class="hp-bar-fill-player"></div>
        <div v-if="!Player" :style="HPStyle" class="hp-bar-fill-opponent"></div>
         <h4 v-if="Player" class="hp">{{HP}}/{{HP}}</h4>
      </div> 
      <img v-if="hasHP" class="card-img-top" :src="CardsPath+Name+'.png'" :alt="Name">
      <span class="card-name">
          <img class="types-icon" :src="IconsPath+Type+'.png'" />
            {{Name}}
           <img class="types-icon" :src="IconsPath+Type+'.png'" />
      </span>
      <span class="card-text">{{Attacks[0]}}</span>
      <span class="card-text">{{Attacks[1]}}</span>
      <span class="card-text">{{Attacks[2]}}</span>
      <span class="card-attack">{{Attacks[3]}}</span>
    </div>
</template>

<script>

export default {
    name: 'Carta',
    data(){
            return {
                CardsPath: "/images/Cartas/",
                IconsPath: "/images/Types/",
                maxHP: this.HP,
            };
        },
    props: {
        Player:{},
        Name: {},
        Type: {},
        Level: {},
        HP: {},
        Img: {},
        Attacks: {},
        HpBar: {}
    },

    computed: {
            HPStyle(){    
                let color = '#f02b2b';
                        
                if(this.HP >= 70){
                    color = '#33bd96';
                }       
                else if(this.HP >= 30){
                    color = '#ff9012';
                }

                return {
                    width: String(this.HP) + '%',
                    background: color
                }
            },
                hasHP(){
                    return this.HP > 0;
                },
        },
        methods: {
          
        }

}
</script>

<style lang="css">
@import "../assets/css/cards.css";
@import "../assets/css/cardsMobile.css";


</style>