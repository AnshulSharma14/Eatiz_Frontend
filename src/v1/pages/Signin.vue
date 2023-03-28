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
            <h1 class="text-3xl text-slate-800 font-bold mb-6">Welcome back!</h1>
            <!-- Form -->
           
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium mb-1" for="email">Email Address</label>
                  <input id="email" v-model="user.email" class="form-input w-full rounded" type="email" />
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1" for="password">Password</label>
                  <input id="password" v-model="user.password" class="form-input w-full rounded" type="password" autoComplete="on" />
                </div>
              </div>
              <div v-if="!loader">
              <div class="flex items-center justify-between mt-6">
                <div class="mr-1">
                  <router-link class="text-sm underline hover:no-underline" to="/reset-password">Forgot Password?</router-link>
                </div>
                <button class="btn theme-bg theme-hover text-white ml-3" @click="signIn">Sign In</button>
              </div>
          
            <!-- Footer -->
            <div class="pt-5 mt-6 border-t border-slate-200">
             
              <!-- Warning -->
             <SocialSignIn method="Login"></SocialSignIn>

              <div class="text-sm mt-5">
                Don’t you have an account? <router-link class="font-medium theme-color" to="/signup">Sign Up</router-link>
              </div>
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
import { Services, getAPIUrl} from "../services/services"
import axios from 'axios'
export default {
  name: 'Signin',
   components: {
    Loader,
    SocialSignIn
  },
  data:function(){
     return {
       user:{
            password: "",
            token: "HCAPTCHA_TOKEN",
            accessToken: "",
            refreshToken: "",
            userId: "",
            accessTokenExpiry: "",
            refreshTokenExpiry: "",
            email: "",
            phoneNumber: null,
            googleAuthEnabled: false,
            appleAuthEnabled: false,
            otpAuthEnabled: false
        },
       loader:false,
     }
  },
  methods:{
     signIn:function(){
       this.loader =true;
        axios.post(getAPIUrl(Services.SignIn), this.user)
          .then(response => {
           
            let user = response.data;
            this.user.email = user.email;
            this.user.accessToken = user.accessToken;
            this.user.userId = user.userId;
            this.user.refreshToken = user.refreshToken;

             console.log(JSON.stringify(this.user));
             sessionStorage.setItem("user",JSON.stringify(this.user));
             sessionStorage.setItem("accessToken", user.accessToken);
             sessionStorage.setItem("isLogedIn",true)
             this.$router.push('/dashboard');
             this.loader =false;
          })
          .catch(error => {
            console.error(error);
              this.loader =false;
          });
      }
  }
}
</script>