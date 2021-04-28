<template>
 
<div id="battle" >  
  <div class="battle-arena" >
    <div class="tutorial-card-opponent">
    <Card  :HP="opponent.hp" :Name="opponent.name" :ATK="opponent.ATK" :DEF="opponent.DEF" :SPD="opponent.SPD"
     :Img="opponent.image" :Type="opponent.type" :Level="opponent.level" :HPBar="opponent.HPBar" ></Card>
    </div>
    <div class="tutorial-card-player">
    <Card :HP="player.hp" :Name="player.name" :ATK="player.ATK" :DEF="player.DEF" :SPD="player.SPD" :Img="player.image" 
          :Type="player.type" :Level="player.level" :HPBar="player.HPBar" :Player="player"></Card>
    </div>
    
    <div class="bottom-menu">
        <div class="battle-text text-box-left">
            {{battleText}}
      </div>
          <div class="text-box-right">
            <div v-if="options" id="battleOptions">
                <h4 @click="selectOption(1)" class="option-1">{{battleOptions[0]}}</h4>
                <h4 @click="selectOption(2)" class="option-2">{{battleOptions[1]}}</h4>
                <h4 @click="selectOption(3)" class="option-3">{{battleOptions[2]}}</h4>
                <h4 @click="selectOption(4)" class="option-4">{{battleOptions[3]}}</h4>
            </div>
            <div v-if="attacks" id="attackOptions">
                <h4 @click="selectAttack(1)" class="option-1">{{player.attacks[0]}}</h4>
                <h4 @click="selectAttack(2)" class="option-2">{{player.attacks[1]}}</h4>
                <h4 @click="selectAttack(3)" class="option-3">{{player.attacks[2]}}</h4>
                <h4 @click="selectAttack(4)" class="option-4"> {{player.attacks[3]}}</h4>
            </div>
            <div v-if="disabledOptions" id="battleOptions">
               <!-- <h4 class="option-1">{{battleOptions[0]}}</h4>
                <h4 class="option-2">{{battleOptions[1]}}</h4>
                <h4 class="option-3">{{battleOptions[2]}}</h4>
                <h4 class="option-4">{{battleOptions[3]}}</h4>-->
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
    Card,

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
            attacksDamage: [15,40,50,25],
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
        disabledOptions: false,
        matchEndOptions:["Yes", "No"],
        turn: true,
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
        faintAnimation: function(){
          this.attacks = false
          this.options = false
          this.matchEnded = true;
          setTimeout(() => { this.$router.push('../home')},7000)
      },
      
      HeFainted(){
        if(this.opponent.hp <= 0){
            return true
        } else{
            return false
          }
      },
      IFainted(){
        if(this.player.hp <= 0){
            return true
        } else{
            return false
          }
      },

      selectOption(option) {
        if (option == 1){
            this.attacks= true;
            this.options= false;
            this.battleText='Choose your attack.';
            
        } else if (option ==2){
            this.battleText = "You're our only hope " + this.player.name + "!";
            this.timeOut=setTimeout(() => {this.battleText = "What will " + this.player.name + " do?"}, 2000);

        }else if (option==3){
            this.battleText = "No items in bag.";
            this.timeOut=setTimeout(() => {this.battleText = "What will " + this.player.name + " do?"}, 2000);
          
        }else if (option==4){
            this.battleText = "Can't escape.";
            this.timeOut=setTimeout(() => {this.battleText = "What will " + this.player.name + " do?"}, 2000);
     
            
        }
      },

selectAttack(attack) {
    if (attack == 1){
        this.attacks = false
        this.options = false
        this.disabledOptions = true
        this.opponent.hp -= this.player.attacksDamage[attack-1]
        var percent=this.opponent.hp/this.opponent.maxHP*100
        if(this.HeFainted()){
              this.opponent.HpBar = "width: 0%"
        } else{
              this.opponent.HpBar.width =percent + "%"
          }   
        if(this.HeFainted()){
            this.battleText = this.player.name + " used " + this.player.attacks[attack-1] + "!"
            setTimeout(() => {this.battleText = this.opponent.name + " has fainted! "},2001)
            setTimeout(() => {this.battleText = "You have won 100EXP & 100PokeCoins"},4000)
            this.faintAnimation()

        } else if(this.HeFainted() === false) {
              setTimeout(() => { 
                if (this.IFainted()==false){
                    this.timeOut=setTimeout(() => {this.battleText = "What will " + this.player.name + " do?"}, 2000);     
                }  
              }, 2000);

                this.battleText = this.player.name + " used " + this.player.attacks[attack-1] + "!"
                setTimeout(() => {this.opponentAttack()},2000)

          }
                  
    } else if (attack ==2){
          this.attacks = false
          this.options = false
          this.disabledOptions = true
          this.opponent.hp -= this.player.attacksDamage[attack-1]
          percent=this.opponent.hp/this.opponent.maxHP*100

                 if(this.HeFainted()){
              this.opponent.HpBar = "width: 0%"
        } else{
              this.opponent.HpBar.width =percent + "%"
          }   
        if(this.HeFainted()){
              this.battleText = this.player.name + " used " + this.player.attacks[attack-1] + "!"
              setTimeout(() => {this.battleText = this.opponent.name + " has fainted! "},2001)
              setTimeout(() => {this.battleText = "You have won 100EXP & 100PokeCoins"},4000)
              this.faintAnimation()
          

        } else if(this.HeFainted() === false) {
              setTimeout(() => { 
                if (this.IFainted()==false){
                    this.timeOut=setTimeout(() => {this.battleText = "What will " + this.player.name + " do?"}, 2000);
                } 
              }, 2000);

              this.battleText = this.player.name + " used " + this.player.attacks[attack-1] + "!"
                setTimeout(() => {this.opponentAttack()},2000)
      
          }

    } else if (attack==3){
          this.attacks = false
          this.options = false
          this.disabledOptions = true
          this.opponent.hp -= this.player.attacksDamage[attack-1]
          percent=this.opponent.hp/this.opponent.maxHP*100
          if(this.HeFainted()){
              this.opponent.HpBar = "width: 0%"
        } else{
              this.opponent.HpBar.width =percent + "%"
          }   
        if(this.HeFainted()){
          this.battleText = this.player.name + " used " + this.player.attacks[attack-1] + "!"
             setTimeout(() => {this.battleText = this.opponent.name + " has fainted! "},2001)
             setTimeout(() => {this.battleText = "You have won 100EXP & 100PokeCoins"},4000)
             this.faintAnimation()
        } else if(this.HeFainted() === false) {
              setTimeout(() => { 
                if (this.IFainted()==false){
                    this.timeOut=setTimeout(() => {this.battleText = "What will " + this.player.name + " do?"}, 2000);
                }
              }, 2000);

               this.battleText = this.player.name + " used " + this.player.attacks[attack-1] + "!"
                setTimeout(() => {this.opponentAttack()},2000)  
          }

      }else if (attack==4){
          this.attacks = false
          this.options = false
          this.disabledOptions = true
          this.opponent.hp -= this.player.attacksDamage[attack-1]
          percent=this.opponent.hp/this.opponent.maxHP*100
                  if(this.HeFainted()){
              this.opponent.HpBar = "width: 0%"
        } else{
              this.opponent.HpBar.width =percent + "%"
          }   
        if(this.HeFainted()){
              this.battleText = this.player.name + " used " + this.player.attacks[attack-1] + "!"
              setTimeout(() => {this.battleText = this.opponent.name + " has fainted! "},2001)
              setTimeout(() => {this.battleText = "You have won 100EXP & 100PokeCoins"},4000)
              this.faintAnimation()

        } else if(this.HeFainted() === false) {
                 setTimeout(() => {this.battleText = "What will " + this.player.name + " do?"}, 2000);
                 this.battleText = this.player.name + " used " + this.player.attacks[attack-1] + "!"
                 setTimeout(() => {this.opponentAttack()},2000)
          }
      }
              
  },

      opponentAttack(){
        
          var random = Math.floor((Math.random() * 4) + 1)
          this.player.hp -=  this.opponent.attacksDamage[random-1]
          var percent=this.player.hp/this.player.maxHP*100
          if(this.IFainted()){
              this.player.HpBar = "width: 0%"
          } else{
              this.player.HpBar.width = percent + "%"
          }   
          
          if(this.IFainted()){
            this.battleText = this.opponent.name + " used " + this.opponent.attacks[random-1] + "!" 
            this.faintAnimation()
            setTimeout(() => {this.battleText = this.player.name + " has fainted!"},2001)
            setTimeout(() => {this.battleText = "You lost and ran away home while crying"},4000)
          } else if(this.IFainted() === false) {
                this.battleText = this.opponent.name + " used " + this.opponent.attacks[random-1] + "!"
                setTimeout(() => { this.attacks = false, this.options = true, this.disabledOptions = false},2000)
             
           }
        },
    }
}


</script>

<style scoped lang="css">
@import "../assets/css/tutorial.css";
@import "../assets/css/tutorialMobile.css";


</style>
