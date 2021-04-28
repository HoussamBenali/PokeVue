<template>
 
<div id="battle" >  
  <div v-if="!changing" class="battle-arena" :style=" {'background-image': 'url('+MapBackground+')','background-size': '100% 100%'} ">
    <div class="tutorial-card-opponent">
      <Card :HP="opponent.hp" :Name="opponent.name" :ATK="opponent.ATK" :DEF="opponent.DEF" :SPD="opponent.SPD"
            :Type="opponent.type" :Level="opponent.level" :HPBar="opponent.HPBar" ></Card>
    </div>

    <div class="tutorial-card-player">
        <Card :HP="player.current.hp" :maxHP="player.current.hp" :Name="player.current.name" :ATK="player.current.ATK" :DEF="player.current.DEF" 
        :SPD="player.current.SPD" :Type="player.current.type" :Level="player.current.level" :HPBar="player.current.HPBar"
        :Player="player"></Card>
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
                <h4 @click="selectAttack(1)" class="option-1">{{player.current.attacks[0]}}</h4>
                <h4 @click="selectAttack(2)" class="option-2">{{player.current.attacks[1]}}</h4>
                <h4 @click="selectAttack(3)" class="option-3">{{player.current.attacks[2]}}</h4>
                <h4 @click="selectAttack(4)" class="option-4"> {{player.current.attacks[3]}}</h4>
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

  <div  v-if="changing" class="deck">
    <div class="card-1">
      <Card :HP="player.poke1.hp" :maxHP="player.poke1.hp" :Name="player.poke1.name" :ATK="player.poke1.ATK" :DEF="player.poke1.DEF" 
      :SPD="player.poke1.SPD" :Type="player.poke1.type" :Level="player.poke1.level" :HPBar="player.poke1.HPBar"
      :Player="player"></Card>
    </div>
    <div class="card-2">
      <Card :HP="player.poke2.hp" :maxHP="player.poke2.hp" :Name="player.poke2.name" :ATK="player.poke2.ATK" :DEF="player.poke2.DEF"
      :SPD="player.poke2.SPD" :Type="player.poke2.type" :Level="player.poke2.level" :HPBar="player.poke2.HPBar"
      :Player="player"></Card>
    </div>
    <div class="card-3">
      <Card :HP="player.poke3.hp" :maxHP="player.poke3.hp" :Name="player.poke3.name" :ATK="player.poke3.ATK" :DEF="player.poke3.DEF" 
      :SPD="player.poke3.SPD" :Type="player.poke3.type" :Level="player.poke3.level" :HPBar="player.poke3.HPBar"
      :Player="player"></Card>
    </div>
      <div class="card-4">
      <Card :HP="player.poke4.hp" :maxHP="player.poke4.hp" :Name="player.poke4.name" :ATK="player.poke4.ATK" :DEF="player.poke4.DEF" 
      :SPD="player.poke4.SPD" :Type="player.poke4.type" :Level="player.poke4.level" :HPBar="player.poke4.HPBar"
      :Player="player"></Card>
    </div>
    <div class="card-5">
      <Card :HP="player.poke5.hp" :maxHP="player.poke5.hp" :Name="player.poke5.name" :ATK="player.poke5.ATK" :DEF="player.poke5.DEF" 
      :SPD="player.poke5.SPD" :Type="player.poke5.type" :Level="player.poke5.level" :HPBar="player.poke5.HPBar"
      :Player="player"></Card>
    </div>
    <div class="card-6">
      <Card :HP="player.poke6.hp" :maxHP="player.poke6.hp" :Name="player.poke6.name" :ATK="player.poke6.ATK" :DEF="player.poke6.DEF" 
      :SPD="player.poke6.SPD" :Type="player.poke6.type" :Level="player.poke6.level" :HPBar="player.poke6.HPBar"
      :Player="player"></Card>
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
            cards: 1,
            name: 'Charmander',
            type:'Fire',
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
            cards: 2,
            current: '',
            poke1:{
                    name: 'Charmander',
                    type:'Fire',
                    hp: 100,
                    maxHP: 100,
                    level: 5,
                    attacks: ['Hoja','Fotosintesis', 'Rama', 'Fruta'],
                    attacksDamage: [15,40,50,25],
                    HpBar:  { width: '100%' },
                    ATK: 15, 
                    DEF: 15, 
                    SPD:15,
            },
            poke2:{
                    name: 'Charmander',
                    type:'Fire',
                    hp: 100,
                    maxHP: 100,
                    level: 5,
                    attacks: ['Hoja','Fotosintesis', 'Rama', 'Fruta'],
                    attacksDamage: [15,40,50,25],
                    HpBar:  { width: '100%' },
                    ATK: 15, 
                    DEF: 15, 
                    SPD:15,
            },
            poke3:'',
            poke4:'',
            poke5:'',
            poke6:''
        },
        battleText: "",
        battleOptions: ["Fight", "Cards", "Item", "Run"],
        menu: 'options',
        attacks: false,
        options: true,
        disabledOptions: false,
        changing: false,
        matchEnded: false,
        timeOut:'',
        map: '',
        MapPath: "https://raw.githubusercontent.com/HoussamBenali/Assets/main/images/Fondos/",
        MapBackground: '',


    }
  },

  mounted() {  
    this.map = this.$route.params.area + '.jpg'
    this.MapBackground=  this.MapPath+this.map;
     if (this.IFainted(this.player.poke1) && this.player.cards>0 || this.IFainted(this.player.poke1) && this.opponent.cards>0){
       this.player.current=this.player.poke2  
    } else if (!this.IFainted(this.player.poke1) && this.player.cards>0 || !this.IFainted(this.player.poke1) && this.opponent.cards>0){
      this.player.current=this.player.poke1 
     
    } else if (this.IFainted(this.player.poke2)  && this.player.cards>0 || !this.IFainted(this.player.poke2) && this.opponent.cards>0){
     this.player.current=this.player.poke3 

      }
     this.battleText= "What will "+ this.player.current.name+ " do?"
  }
,
methods: {
        faintAnimation: function(){
          this.attacks = false
          this.options = false
  
          if (this.player.cards==0 || this.opponent.cards==0){
              this.matchEnded = true; 
              
              setTimeout(() => { this.$router.push('../adventure')},6500)
          } else {
               setTimeout(() => {this.changeCard()},2000) 
          }
                 
      },

      changeCard(){
         this.attacks = false
         this.options = false
         this.disabledOptions = false
         this.changing= true
      },
     
      HeFainted(){
        if(this.opponent.hp <= 0){
            return true
        } else{
            return false
          }
      },
      IFainted(poke){
        if(poke.hp <= 0){
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
            this.battleText = "You're our only hope " + this.player.current.name + "!";
            this.changeCard()
            this.timeOut=setTimeout(() => {this.battleText = "What will " + this.player.current.name + " do?"}, 2000);


        }else if (option==3){
            this.battleText = "No items in bag.";
            this.timeOut=setTimeout(() => {this.battleText = "What will " + this.player.current.name + " do?"}, 2000);
          
        }else if (option==4){
            this.battleText = "Can't escape.";
            this.timeOut=setTimeout(() => {this.battleText = "What will " +this.player.current.name + " do?"}, 2000);
       
        }
      },

selectAttack(attack) {
    if (attack == 1){
        this.attacks = false
        this.options = false
        this.disabledOptions = true
        this.opponent.hp -= this.player.current.attacksDamage[attack-1]
        var percent=this.opponent.hp/this.opponent.maxHP*100
        if(this.HeFainted()){
              this.opponent.HpBar = "width: 0%"
        } else{
              this.opponent.HpBar.width =percent + "%"
          }   
        if(this.HeFainted()){
            this.battleText = this.player.current.name + " used " + this.player.current.attacks[attack-1] + "!"
            setTimeout(() => {this.battleText = this.opponent.name + " has fainted! "},2001)
            setTimeout(() => {this.battleText = "You have won 100EXP & 100PokeCoins"},4000)
            this.opponent.cards -=1
            this.faintAnimation()

        } else if(this.HeFainted() === false) {
              setTimeout(() => { 
                if (this.IFainted(this.player.current)==false){
                    this.timeOut=setTimeout(() => {this.battleText = "What will " + this.player.current.name + " do?"}, 2000);     
                }  
              }, 2000);

                this.battleText = this.player.current.name + " used " + this.player.current.attacks[attack-1] + "!"
                setTimeout(() => {this.opponentAttack()},2000)

          }
                  
    } else if (attack ==2){
          this.attacks = false
          this.options = false
          this.disabledOptions = true
          this.opponent.hp -= this.player.current.attacksDamage[attack-1]
          percent=this.opponent.hp/this.opponent.maxHP*100

                 if(this.HeFainted()){
              this.opponent.HpBar = "width: 0%"
        } else{
              this.opponent.HpBar.width =percent + "%"
          }   
        if(this.HeFainted()){
              this.battleText = this.player.current.name + " used " + this.player.current.attacks[attack-1] + "!"
              setTimeout(() => {this.battleText = this.opponent.name + " has fainted! "},2001)
              setTimeout(() => {this.battleText = "You have won 100EXP & 100PokeCoins"},4000)
              this.opponent.cards -=1
              this.faintAnimation()
          

        } else if(this.HeFainted() === false) {
              setTimeout(() => { 
                if (this.IFainted(this.player.current)==false){
                    this.timeOut=setTimeout(() => {this.battleText = "What will " + this.player.current.name + " do?"}, 2000);
                } 
              }, 2000);

              this.battleText = this.player.current.name + " used " + this.player.current.attacks[attack-1] + "!"
                setTimeout(() => {this.opponentAttack()},2000)
      
          }

    } else if (attack==3){
          this.attacks = false
          this.options = false
          this.disabledOptions = true
          this.opponent.hp -= this.player.current.attacksDamage[attack-1]
          percent=this.opponent.hp/this.opponent.maxHP*100
          if(this.HeFainted()){
              this.opponent.HpBar = "width: 0%"
        } else{
              this.opponent.HpBar.width =percent + "%"
          }   
        if(this.HeFainted()){
          this.battleText = this.player.current.name + " used " + this.player.current.attacks[attack-1] + "!"
             setTimeout(() => {this.battleText = this.opponent.name + " has fainted! "},2001)
             setTimeout(() => {this.battleText = "You have won 100EXP & 100PokeCoins"},4000)
             this.opponent.cards -=1
             this.faintAnimation()
        } else if(this.HeFainted() === false) {
              setTimeout(() => { 
                if (this.IFainted(this.player.current)==false){
                    this.timeOut=setTimeout(() => {this.battleText = "What will " + this.player.current.name + " do?"}, 2000);
                }
              }, 2000);

               this.battleText = this.player.current.name + " used " + this.player.current.attacks[attack-1] + "!"
                setTimeout(() => {this.opponentAttack()},2000)  
          }

      }else if (attack==4){
          this.attacks = false
          this.options = false
          this.disabledOptions = true
          this.opponent.hp -= this.player.current.attacksDamage[attack-1]
          percent=this.opponent.hp/this.opponent.maxHP*100
                  if(this.HeFainted()){
              this.opponent.HpBar = "width: 0%"
        } else{
              this.opponent.HpBar.width =percent + "%"
          }   
        if(this.HeFainted()){
              this.battleText = this.player.current.name + " used " + this.player.current.attacks[attack-1] + "!"
              setTimeout(() => {this.battleText = this.opponent.name + " has fainted! "},2001)
              setTimeout(() => {this.battleText = "You have won 100EXP & 100PokeCoins"},4000)
              this.opponent.cards -=1
              this.faintAnimation()

        } else if(this.HeFainted() === false) {
                 setTimeout(() => {this.battleText = "What will " + this.player.current.name + " do?"}, 2000);
                 this.battleText = this.player.current.name + " used " + this.player.current.attacks[attack-1] + "!"
                 setTimeout(() => {this.opponentAttack()},2000)
          }
      }
              
  },

      opponentAttack(){
        
          var random = Math.floor((Math.random() * 4) + 1)
          this.player.current.hp -=  this.opponent.attacksDamage[random-1]
          var percent=this.player.current.hp/this.player.current.maxHP*100
          if(this.IFainted(this.player.current)){
              this.player.current.HpBar = "width: 0%"
          } else{
              this.player.current.HpBar.width = percent + "%"
          }   
          
          if(this.IFainted(this.player.current)){
            this.battleText = this.opponent.name + " used " + this.opponent.attacks[random-1] + "!" 
            this.player.cards -=1
            this.faintAnimation()
            setTimeout(() => {this.battleText = this.player.current.name + " has fainted!"},2001)
            setTimeout(() => {this.battleText = "You lost and ran away home while crying"},4000)
          } else if(this.IFainted(this.player.current) === false) {
                this.battleText ='Foe '+ this.opponent.name + " used " + this.opponent.attacks[random-1] + "!"
                setTimeout(() => { this.attacks = false, this.options = true, this.disabledOptions = false},2000)
             
           }
        },
    }
}


</script>

<style scoped lang="css">
@import "../assets/css/tutorial.css";
@import "../assets/css/tutorialMobile.css";

.deck{
    position: relative;
    flex: 1 1 1 33%;
    justify-content:space-evenly;
    top:0;
    width: 80vw;
    height: 90vh;
    min-width: 650px;
    min-height: 405px;
    background: white;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    z-index: 0;
    margin-top: 5vh;  
    display: flex;
    flex-wrap: row wrap;

  }



</style>
