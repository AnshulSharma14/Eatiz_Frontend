<script>
import googleLoginHandler from '../utils/google.js';
import facebookLoginHandler from '../utils/facebook.js';

export default {
  props: [
  'method',
  'company',
  'classes'
  ],
  data() {
    return {
      possibleCompanies: ['google', 'facebook', 'twitter', 'apple'],
    };
  },
  methods: {
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  },
  created() {
    this.src = `../../../src/v1/images/${this.company}.svg`;
  },
  mounted() {
    if (this.company === "google") googleLoginHandler(window);
    if (this.company === "facebook") facebookLoginHandler(window);
  }
}
</script>

<template>
   <div class="flex flex-wrap -mx-3 mt-7" v-if="possibleCompanies.includes(company)">
        <div class="w-full px-3">
          <button  :id="company"  :class="classes+' pl-2 btn px-0 py-1 border-2 bg-white w-full relative flex items-center'">
             <img :src="src" class="w-4 h-4 ml-5 fill-current"/>
               <p class="flex-auto pl-16 pr-8 -ml-16 text-md">{{capitalize(method)}} with {{capitalize(company)}}</p>
          </button>
        </div>
      </div>



    <!-- 
     <button @click.prevent="loginWithFacebook" class="pl-2 btn px-0 py-1 text-blue-900 bg-white border-2 border-blue-900 hover:text-white hover:bg-blue-800 w-full relative flex items-center">
              <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
              </svg>
            <span class="flex-auto pl-16 pr-8 -ml-16 text-lg">Continue with Facebook</span>
          </button>
    
    
     <button @click.prevent="handleClickSignIn" class="btn px-0 text-red-500 border-2 border-red-500 bg-white hover:text-white hover:bg-red-700 w-full relative flex items-center">
            <svg class="w-4 h-4 fill-current mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
            </svg>
            <span class="flex-auto pl-16 pr-8 -ml-16 text-lg">Continue with Google</span>
          </button> -->
</template>