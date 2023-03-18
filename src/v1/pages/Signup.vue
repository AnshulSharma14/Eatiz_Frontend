<template>
  <main class="bg-white">

    <div class="relative flex">

      <!-- Content -->
      <div class="w-full md:w-1/2">
        <div class="min-h-screen h-full flex flex-col after:flex-1">

          <div class="flex-1">
            <div class="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
              <!-- Logo -->
               <router-link class="block" to="/">
                 <img src="../images/logo.png" width="70" height="70" alt="logo" />
              </router-link>
            </div>
          </div>          

          <div class="max-w-sm mx-auto px-4 py-8">
            <h1 class="text-3xl text-slate-800 font-bold mb-6">Create your Account</h1>
            <!-- Form -->
          
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium mb-1" for="firstname">First Name<span class="text-rose-500">*</span></label>
                  <input id="firstname" v-model="user.firstname" class="form-input w-full rounded" type="firstname" />
                </div>
                 <div>
                  <label class="block text-sm font-medium mb-1" for="lastname">Last Name<span class="text-rose-500">*</span></label>
                  <input id="firstname" v-model="user.lastname" class="form-input w-full rounded" type="lastname" />
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1" for="email">Email <span class="text-rose-500">*</span></label>
                  <input id="email" @blur="validateEmail" v-model="user.email" class="form-input w-full rounded" type="email" />
                </div>
             
                <div>
                  <label class="block text-sm font-medium mb-1" for="password">Password <span class="text-rose-500">*</span></label>
                  <input id="password" v-model="user.password" class="form-input w-full rounded" type="password" autoComplete="on" />
                </div>
              </div>
              <div v-if="!loader">
                <div class="flex items-center justify-between mt-6">
                  <div class=" ">
                    <div class="text-sm">
                      Have an account? <router-link class="font-medium theme-color" to="/">Sign In</router-link>
                    </div>
                  </div>
                  <button class="btn theme-bg theme-hover text-white ml-3" @click="signup()">Sign Up</button>
                </div>
                <div class="pt-5 mt-6 border-t border-slate-200">
                <SocialSignIn method="Sign Up"></SocialSignIn>
                </div>
              </div>
              <div v-else>
                  <Loader></Loader>
              </div>
          
         
          </div>

        </div>
      </div>

      <!-- Image -->
      <div class="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2" aria-hidden="true">
        <img class="object-cover object-center w-full h-full" src="../images/landingImg.png" width="760" height="1024" alt="Authentication" />
        <img class="absolute top-1/4 left-0 -translate-x-1/2 ml-8 hidden lg:block" src="../images/auth-decoration.png" width="218" height="224" alt="Authentication decoration" />
      </div>

    </div>

  </main>
</template>

<script>
import SocialSignIn from '../components/SocialLogin.vue'
import  Loader  from "../components/Loader.vue"
import {Services, getAPIUrl } from '../services/services'
import axios from 'axios'
export default {
  name: 'Signup',
  components: {
    SocialSignIn,
    Loader
  },
 data: function () {
    return {
        mobileNavOpen: false,
        top: true,
        user:{
          firstname:"",
          lastname:"",
          email:"",
          password:"",
          roleId: "c9c399ab-5c98-4e9b-86d7-c8844a6e8c66",
          token: "HCAPTCHA_TOKEN"
        },
        loader:false,
        validated:true
    }
  },
  mounted() {
    
  },
  methods: {
    signup:function(){
        this.loader = true;
        if(this.validated){
            axios.post(getAPIUrl(Services.Signup), this.user)
              .then(response => {
                console.log(response.data);
                this.$router.push('/');
                this.loader = false;
              })
              .catch(error => {
                console.error(error);
                this.loader = false;
              });
        }
    },
    validateEmail() {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
         
            this.validated = false;
        } else {
           
            this.validated = true;
        }
    }
  },
}
</script>