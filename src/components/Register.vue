<template>
<div id="registerForm">
  <div class="container0">
    <form @submit.prevent="Register">
        <h2><b>Register</b></h2>
        <hr>
        <div class="messageOrerror">
          <Error v-if="error" :error="error"></Error>
        </div>
        <div class="form-group">
          <label for="nick"><b>Username:</b></label>
          <input type="text" class="form-control" v-model="nick" placeholder="Enter Username" name="nick" id="nick" required>
        </div>

        <div class="form-group">
          <label for="email"><b>Email:</b></label>
          <input type="text" class="form-control" v-model="email" placeholder="Enter Email" name="email" id="email" required>
        </div>

        <div class="form-group">
          <label for="password"><b>Password:</b></label>
          <input type="password" class="form-control" v-model="password" placeholder="Enter Password" name="password" id="password" required>
        </div>

        <div class="form-group">
          <label for="password_repeat"><b>Repeat Password:</b></label>
          <input type="password" class="form-control" v-model="password_confirm" placeholder="Repeat Password" name="passwor_confirm" id="password_repeat" required>
        </div>
        <!--<hr>
        <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>-->

        <button type="submit" class="registerbtn">Register</button>
        <div class="container1">
          <label class="psw">
              <span>Already have an account? <router-link to="login">Sign in</router-link></span>
          </label>
        </div>

    </form>
  </div>   
</div>
</template>

<script>
import axios from 'axios';
import Error from './Error';
//import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'

export default {
  name: 'registerForm',
  components:{
    Error
  },
  data(){
    return{
      nick: '',
      email: '',
      password: '',
      password_confirm:'',
      error: null,
    }
  },
 
  methods: {
   
    async Register(){
      try {
        const response = await axios.post('register',{
              nick: this.nick,
              email: this.email,
              password:this.password,
              password_confirm: this.password_confirm,
              });
      
              console.log(response);
              this.$router.push('/login');
              
      } catch (error) {
          this.error='An error has ocurred!'
      }
    }
      
  },
}

</script>

<style scoped lang="scss">
@import "../assets/css/styles.css";
@import '../../node_modules/bootstrap/scss/bootstrap.scss';

#registerForm{
  background-color: #f6f7c7;
  display: block;
  width: 100%;
  height: 90vh;
}

h2{
  margin-top:2vh;
}

.psw{
  padding: 12.5px;
  padding-bottom: 5px;
}

.container0{
  margin-top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container1{
  min-width: 280px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:#f1f1f1;
  margin-top: 1vh;
}

button {
  background-color: #4CAF50;
  border-radius: 1vh;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.mybtn{
  margin-bottom: 0;
}


</style>
