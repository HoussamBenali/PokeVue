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
      <span class="card-text">ATK: {{ATK}}</span>
      <span class="card-text">DEF: {{DEF}}</span>
      <span class="card-attack">SPD: {{SPD}}</span>
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
        Player: {},
        Name: {},
        Type: {},
        Level: {},
        HP: {},
        Img: {},
        ATK:{},
        DEF: {},
        SPD: {},
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