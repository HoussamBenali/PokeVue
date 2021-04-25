<template>
<div id="registerForm">
    <div class="containerRoot">
        <form @submit.prevent="Register">
            <h2><b>Register</b></h2>
            <hr>
            <div class="form-group">
                <BaseInput label="Nick:" 
                v-model="$v.form.nick.$model"
                :validator = "$v.form.nick"
                ></BaseInput>
            </div>

            <div class="form-group">
                <BaseInput label="Email:" 
                type="email" 
                v-model="$v.form.email.$model"
                :validator = "$v.form.email"
                ></BaseInput>
            </div>
            
            <div class="form-group">
                <BaseInput label="Password:" 
                type="password"
                v-model="$v.form.password.$model"
                :validator = "$v.form.password"
                ></BaseInput>
            </div>

            <div class="form-group">
                <BaseInput label="Confirm password:"
                type="password" 
                v-model="$v.form.rpassword.$model"
                :validator = "$v.form.rpassword"
                ></BaseInput>
            </div>

            <button 
                :disabled="!formValidate"
                type="submit"
                class="">Enviar
            </button>
            <hr>
            <div class="requirements">
            Nick: Must have at least 3 characters<br>
            Email: Must be a valid email<br>
            Password: Must have at least 8 characters<br>
                 password: Must be the same as Password
            </div>
            <hr>
            <div class="container">
                <label class="psw">
                    <span>Already have an account? <router-link to="login">Sign in</router-link></span>
                </label>
            </div>

        </form>
    </div>
</div>
</template>

<script>
import { required, minLength, sameAs, email } from 'vuelidate/lib/validators';
import BaseInput from "../components/BaseInput.vue";
import axios from 'axios';

export default {

    components: {BaseInput},
    data () {
        return {
            form:{
                nick:"",
                email:"",
                password:"",
                rpassword:"",
            }
        }
    },
    validations: {
        form: {
            nick: {
                required,
                minLength: minLength(3)
            },
            email: {
                required,
                email
            },
            password: {
                required,
                minLength: minLength(8)
            },
            rpassword: {
                required,
                sameAsPassword: sameAs('password')
            }
        }
    },
    methods: {
        async Register(){ 
            // console.log("enviar"+ this.formValidate)
            if (this.formValidate) {
                console.log(this.form)
                try {
                    await axios.post('register',{
                        nick: this.$v.form.$model.nick,
                        email: this.$v.form.$model.email,
                        password: this.$v.form.$model.password,
                        password_confirm: this.$v.form.$model.rpassword,
                        });
                
                        //console.log(response);
                        this.$router.push('/login');
                        
                }catch (error) {
                        this.error='An error has ocurred!'
                    } 
                
            } else {
                console.log("Form error")
            }
        }
    },
    computed: {
        formValidate () {

            return !this.$v.$invalid

            // return  this.form.nick.length > 0 &&
            //         this.form.email.length > 0 &&
            //         this.form.password.length > 4 &&
            //         this.form.rpassword == this.form.password
        }
    }
}
</script>

<style scoped lang="scss">

@import '../../node_modules/bootstrap/scss/bootstrap.scss';
@import "../assets/css/styles.css";

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

.containerRoot{
  margin-top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container{
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
  padding: 1.5vh;
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