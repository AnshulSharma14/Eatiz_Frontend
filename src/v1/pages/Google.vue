<template>
  <main class="bg-white">
    
                <Loader></Loader>
         

  </main>
</template>

<script>

import  Loader  from "../components/Loader.vue"
import { Services, getAPIUrl} from "../services/services"
import axios from 'axios'
export default {
  name: 'Google',
   components: {
    Loader
  },
  data:function(){
     return {
       user:{
        email: "",
        password: "",
        token: "HCAPTCHA_TOKEN"
       },
       loader:false,
     }
  },
  mounted(){
      const params = new URLSearchParams(window.location.search); 
      console.log(params)

      const form = document.querySelector('form');
      console.log(form)
  },
  methods:{
    //  signIn:function(){
    //    this.loader =true;
    //     axios.post(getAPIUrl(Services.SignIn), this.user)
    //       .then(response => {
    //         console.log(response.data);
    //          this.$router.push('/dashboard');
    //          this.loader =false;
    //       })
    //       .catch(error => {
    //         console.error(error);
    //           this.loader =false;
    //       });
    //   },
    //   login: function () {
    //     this.$auth.login({ email, password }).then(function () {
    //     console.log("login")
    //       // Execute application logic after successful login
    //     })
    //   },

    //   register: function () {
    //     this.$auth.register({ name, email, password }).then(function () {
    //      console.log("login")
    //       // Execute application logic after successful registration
    //     })
    //   }
  }
}
</script>