<template>
<div id="battle">
  <div class="battle-arena">
    <div class="tutorial-card-opponent">
    <Card :HP="opponent.hp" :Name="opponent.name" :ATK="opponent.ATK" :DEF="opponent.DEF" :SPD="opponent.SPD"
     :Img="opponent.image" :Type="opponent.type" :Level="opponent.level" :HPBar="opponent.HPBar" ></Card>
    </div>
    <div class="tutorial-card-player">
    <Card :HP="player.hp" :Name="player.name" :ATK="player.ATK" :DEF="player.DEF" :SPD="player.SPD" :Img="player.image" 
          :Type="player.type" :Level="player.level" :HPBar="player.HPBar" :Player="player"></Card>
    </div>
    <div class="bottom-menu">
        <div class="battle-text text-box-left">
            {{battleText}}
            <div class="text-box-right">
            <div v-if="options" id="battleOptions">
                <h4 v-on:click="selectOption(1)" class="option-1">{{battleOptions[0]}}</h4>
                <h4 v-on:click="selectOption(2)" class="option-2">{{battleOptions[1]}}</h4>
                <h4 v-on:click="selectOption(3)" class="option-3">{{battleOptions[2]}}</h4>
                <h4 v-on:click="selectOption(4)" class="option-4">{{battleOptions[3]}}</h4>
            </div>
            <div v-if="attacks" id="attackOptions">
                <h4 v-on:click="selectAttack(1)" class="option-1">{{player.attacks[0]}}</h4>
                <h4 v-on:click="selectAttack(2)" class="option-2">{{player.attacks[1]}}</h4>
                <h4 v-on:click="selectAttack(3)" class="option-3">{{player.attacks[2]}}</h4>
                <h4 v-on:click="selectAttack(4)" class="option-4"> {{player.attacks[3]}}</h4>
            </div>
            <div v-if="matchEnded" id="ended">
              <h4 class="option-1">{{matchEndOptions[0]}}</h4>
              <h4 class="option-2">{{matchEndOptions[1]}}</h4>
            </div>

        </div>
        </div>

    </div>
  </div>
</div> 
</template>

<script>
//import axios from 'axios';
import Card from './Card';

export default {
  name: 'Tutorial',
  components:{
    Card
  },
  
  data(){
    return{
         opponent:{
            image: "",
            name: '',
            type:'',
            hp: 100,
            maxHP: 100,
            level: 5,
            attacks: ['Ascuas','Sofoco', 'Lanzallamas', 'Fuego Fatuo'],
            HpBar: { width: '100%'},
            ATK: 15, 
            DEF: 15, 
            SPD:15
        },
        player:{
            image: 'images/Cartas/'+this.$route.params.pokemon+'.png',
            name: this.$route.params.pokemon,
            type:'',
            hp: 100,
            maxHP: 100,
            level: 5,
            attacks: ['Hoja','Fotosintesis', 'Rama', 'Fruta'],
            attacksDamage: [15,40,50,25],
            HpBar:  { width: '100%' },
            ATK: 15, 
            DEF: 15, 
            SPD:15
        },
        battleText: "What will "+ this.$route.params.pokemon+ " do?",
        battleOptions: ["Fight", "Cards", "Item", "Run"],
        menu: 'options',
        attacks: false,
        options: true,
        matchEndOptions:["Yes", "No"],
        matchEnded: false,
        timeOut:'',
    }
  },
  mounted() {  
      if (this.player.name == "Bulbasaur"){
            this.player.type = "Grass"
            this.opponent.type = "Fire"
            this.opponent.name = "Charmander"
            this.opponent.image='images/Cartas/Charmander.png'

      } else if (this.player.name == 'Charmander'){
              this.opponent.type = "Water"  
              this.player.type = "Fire"
              this.opponent.name = "Squirtle"
              this.opponent.image='images/Cartas/Squirtle.png'
        } else{
          this.opponent.type = "Grass"
          this.player.type = "Water"
          this.opponent.name= "Bulbasaur"
          this.opponent.image='/Bulbasaur.png'
        }

        
    },
        methods: {
              hasFainted(){
                if(this.opponent.hp <= 0){
                    return true
                } else{
                    return false
                  }
              },

              selectOption(option) {
                if (option == 1){
                    this.attacks= true;
                    this.options= false;
                    return this.battleText='Choose your attack.';
                   
                } else if (option ==2){
                    setTimeout(() => { this.battleText = "What will " + this.player.name + " do?" }, 2000)
                    return this.battleText = "You're our only hope " + this.player.name + "!";
                    
            
                }else if (option==3){
                    setTimeout(() => { this.battleText = "What will " + this.player.name + " do?" }, 2000)
                    return this.battleText = "No items in bag.";
                  
                }else if (option==4){
                    setTimeout(() => { this.battleText = "What will " + this.player.name + " do?" }, 2000)
                    return this.battleText = "Can't escape.";
                    
                }
              },

               selectAttack(attack) {
                if (attack == 1){
                  this.opponent.hp -= this.player.attacksDamage[attack-1]
                  var percent=this.opponent.hp/this.opponent.maxHP*100
                  console.log(percent);
                  if(this.opponent.hp <= 0){
                    this.opponent.HpBar = "width: 0%"
                  } else{
                      this.opponent.HpBar.width =percent + "%"
                    }   
                  if(this.hasFainted()){
                        this.battleText = this.opponent.name + " has fainted! Play again?"
                        clearTimeout(this.timeOut);
                        this.faintAnimation()
                } else if(this.hasFainted() === false) {
                    this.timeOut=setTimeout(() => {this.battleText = "What will " + this.player.name + " do?"}, 2000);
                    return this.battleText = this.player.name + " used " + this.player.attacks[attack-1] + "!"
                }
                  
                } else if (attack ==2){
                  this.opponent.hp -= this.player.attacksDamage[attack-1]
                  percent=this.opponent.hp/this.opponent.maxHP*100
                  if(this.opponent.hp <= 0){
                      this.opponent.HpBar.width = "0%"
                    } else{
                      this.opponent.HpBar.width =percent + "%"
                    }   
                    if(this.hasFainted()){
                        this.battleText = this.opponent.name + " has fainted! Play again?"
                        clearTimeout(this.timeOut);
                        this.faintAnimation()
                } else if(this.hasFainted() === false) {
                     this.timeOut=setTimeout(() => {this.battleText = "What will " + this.player.name + " do?"}, 2000);
                    return this.battleText = this.player.name + " used " + this.player.attacks[attack-1] + "!"
                }
                   
                }else if (attack==3){
                  this.opponent.hp -= this.player.attacksDamage[attack-1]
                  percent=this.opponent.hp/this.opponent.maxHP*100
                  if(this.opponent.hp <= 0){
                      this.opponent.HpBar.width = "0%"
                    } else{
                      this.opponent.HpBar.width =percent + "%"
                    }   
                   if(this.hasFainted()){
                        this.battleText = this.opponent.name + " has fainted! Play again?"
                        clearTimeout(this.timeOut);
                        this.faintAnimation()
                } else if(this.hasFainted() === false) {
                     this.timeOut=setTimeout(() => {this.battleText = "What will " + this.player.name + " do?"}, 2000);
                    return this.battleText = this.player.name + " used " + this.player.attacks[attack-1] + "!"
                }
                   
                }else if (attack==4){
                   this.opponent.hp -= this.player.attacksDamage[attack-1]
                  percent=this.opponent.hp/this.opponent.maxHP*100
                  if(this.opponent.hp <= 0){
                      this.opponent.HpBar.width = "0%"
                    } else{
                      this.opponent.HpBar.width =percent + "%"
                    }   
                   if(this.hasFainted()){
                        this.battleText = this.opponent.name + " has fainted! Play again?"
                        clearTimeout(this.timeOut);
                        this.faintAnimation()
                } else if(this.hasFainted() === false) {
                    this.timeOut=setTimeout(() => {this.battleText = "What will " + this.player.name + " do?"}, 2000);
                    return this.battleText = this.player.name + " used " + this.player.attacks[attack-1] + "!"
                }
              }
              },
              faintAnimation: function(){
                  this.attacks = false;
                  this.matchEnded = true;
              }           
        }
}


</script>

<style lang="scss">
@import "../assets/css/tutorial.css";
@import "../assets/css/tutorialMobile.css";

</style>
