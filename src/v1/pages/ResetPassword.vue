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
            <h1 class="text-3xl text-slate-800 font-bold mb-6">Reset your Password</h1>
            <!-- Form -->
            <form>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium mb-1" for="email">Email Address <span class="text-rose-500">*</span></label>
                  <input id="email" class="form-input w-full rounded" v-model="email" type="email" />
                </div>
              </div>
              <div class="flex justify-end mt-6" v-if="!loader">
                <button class="btn theme-bg theme-hover text-white whitespace-nowrap" @click="resetPassword">Send Reset Link</button>
              
              </div>
              <div v-else>
                <Loader></Loader>
              </div>
            </form>
          </div>

        </div>
      </div>

      <!-- Image -->
      <div class="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2" aria-hidden="true">
        <img class="object-cover object-center w-full h-full" src="../images/auth-image.jpg" width="760" height="1024" alt="Authentication" />
        <img class="absolute top-1/4 left-0 -translate-x-1/2 ml-8 hidden lg:block" src="../images/auth-decoration.png" width="218" height="224" alt="Authentication decoration" />
      </div>

    </div>

  </main>
</template>

<script>
import axios from 'axios'
import Loader from "../components/Loader.vue"
import { Services, getAPIUrl } from "../services/services"

export default {
  name: 'ResetPassword',
  components:{
    Loader
  },
  data:function(){
    return{
          token: "HCAPTCHA_TOKEN",
          email:"",
          loader:false
      }
  },
  methods: {
    resetPassword:function(){
       this.loader =true;
        axios.post(getAPIUrl(Services.ResetPassword)+this.email, {
          token:this.token
        })
        .then(response => {
          this.loader=false;
          console.log(response.data);
          this.$router.push("/");
        })
        .catch(error => {
          this.loader=false;
          console.error(error)
        })
    }
  },
}
</script>