import { createApp } from 'vue'

// import router from './router'
// import App from './v1/App.vue'
// import './v1/css/style.css'

import router from './router'
import App from './App.vue'
import './css/style.css'

import { initFacebookSdk } from './utils/facebook_oAuth';
import gAuthPlugin from 'vue3-google-oauth2';


const app = createApp(App)
let gauthClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
let gauthOption = { clientId: gauthClientId, scope: 'email profile', prompt: 'consent', fetch_basic_profile: false }



initFacebookSdk().then(()=>{
    startApp()
  })
  
  // const app = createApp(App)
  // app.use(router)
  // app.mount('#app')
  
  
  function startApp() {
    createApp(App)
        // .use(Vuex)
        .use(router)
        // .use(store) 
        .use(gAuthPlugin, gauthOption)
        .mount('#app');
  }



