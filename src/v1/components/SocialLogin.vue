<template>
    <!-- <div class="signup-buttons">
        <div id="fb-root"></div>
        <a href="#" class="google-signup" @click.prevent="loginWithGoogle">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><title>Google</title><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4814h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2581h2.9087c1.7018-1.5668 2.6836-3.874 2.6836-6.615z"></path><path fill="#34A853" d="M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9087-2.2581c-.8059.54-1.8368.859-3.0477.859-2.344 0-4.3282-1.5831-5.036-3.7104H.9574v2.3318C2.4382 15.9832 5.4818 18 9 18z"></path><path fill="#FBBC05" d="M3.964 10.71c-.18-.54-.2822-1.1168-.2822-1.71s.1023-1.17.2823-1.71V4.9582H.9573A8.9965 8.9965 0 0 0 0 9c0 1.4523.3477 2.8268.9573 4.0418L3.964 10.71z"></path><path fill="#EA4335" d="M9 3.5795c1.3214 0 2.5077.4541 3.4405 1.346l2.5813-2.5814C13.4632.8918 11.426 0 9 0 5.4818 0 2.4382 2.0168.9573 4.9582L3.964 7.29C4.6718 5.1627 6.6559 3.5795 9 3.5795z"></path></g></svg>
            Google
        </a>
        <a href="#" class="facebook-signup" @click.prevent="loginWithFacebook">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#3578E5"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            Facebook
        </a>
    </div> -->
     <form>
      <div class="flex flex-wrap -mx-3 mb-3 mt-5">
        <div class="w-full px-3">
            <button @click.prevent="loginWithFacebook" class="pl-2 btn px-0 py-1 text-blue-900 bg-white border-2 border-blue-900 hover:text-white hover:bg-blue-800 w-full relative flex items-center">
              <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
              </svg>
            <span class="flex-auto pl-16 pr-8 -ml-16 text-lg">Continue with Facebook</span>
          </button>
        </div>
      </div>
      
      <div class="flex flex-wrap -mx-3">
        <div class="w-full px-3">
          <button @click.prevent="handleClickSignIn" class="btn px-0 text-red-500 border-2 border-red-500 bg-white hover:text-white hover:bg-red-700 w-full relative flex items-center">
            <svg class="w-4 h-4 fill-current mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
            </svg>
            <span class="flex-auto pl-16 pr-8 -ml-16 text-lg">Continue with Google</span>
          </button>
        </div>
      </div>
    </form>
</template>

<script>
// import { initFbsdk } from '../config/facebook_oAuth.js'
// import router from '@/router/router'
import { getCurrentInstance } from "vue";
// const internalInstance = getCurrentInstance(); 
// const app = internalInstance.appContext.app;

import { inject, toRefs } from "vue";
import axios from 'axios'
const backendEndpoint = import.meta.env.VITE_GOOGLE_BACKEND_URL;
export default {
  name: 'login_signup_social',
  mounted () {
      
  },
  props: {
    msg: String,
  },
  data:function(){
      return{
      //  app:{} 
       user:''
      }
  },

   methods: {
     loginWithFacebook () {
      window.FB.login(response => {
        if (response && response.authResponse) {
          console.log('response', response)
          var userInfo = {
            loginType: 'fb',
            fb: {
              auth: response.authResponse
            }
          }
          this.$store.commit('setLoginUser', userInfo)
          window.FB.api(`/${response.authResponse.userID}`, userResponse => {
            if (userResponse) {
              console.log(userResponse);
              var userInfo = {
                loginType: 'fb',
                fb: {
                  auth: response.authResponse,
                  user: userResponse
                }
              }
              this.$store.commit('setLoginUser', userInfo)
            }
          }, this.params);
          // router.push('/home')
        }
      }, this.params)
    },
    async handleClickSignIn(){
      try {
        const googleUser = await this.$gAuth.signIn();
        if (!googleUser) {
          return null;
        }
        console.log("googleUser", googleUser);
        this.user = googleUser.getBasicProfile().getEmail();
        console.log("getId", this.user);
        console.log("getBasicProfile", googleUser.getBasicProfile());
        console.log("getAuthResponse", googleUser.getAuthResponse());
        console.log(
          "getAuthResponse",
          this.$gAuth.instance.currentUser.get().getAuthResponse()
        );

        const token = googleUser.getAuthResponse().id_token;
        axios.post(backendEndpoint, {token}).then(response => {
            console.log(response.data);
             this.$router.push('/dashboard');
             this.loader =false;
          })
          .catch(error => {
            console.error(error);
              this.loader =false;
          });




      } catch (error) {
        //on fail do something
        console.error(error);
        return null;
      }
    },

    async handleClickGetAuthCode(){
      try {
        const authCode = await this.$gAuth.getAuthCode();
        console.log("authCode", authCode);
      } catch(error) {
        //on fail do something
        console.error(error);
        return null;
      }
    },

    async handleClickSignOut() {
      try {
        await this.$gAuth.signOut();
        console.log("isAuthorized", this.Vue3GoogleOauth.isAuthorized);
        this.user = "";
      } catch (error) {
        console.error(error);
      }
    },

    handleClickDisconnect() {
      window.location.href = `https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=${window.location.href}`;
    },
  },
  setup(props) {
    const { isSignIn } = toRefs(props);
    const Vue3GoogleOauth = inject("Vue3GoogleOauth");

    const handleClickLogin = () => {};
    return {
      Vue3GoogleOauth,
      handleClickLogin,
      isSignIn,
    };
  },
};
</script>
