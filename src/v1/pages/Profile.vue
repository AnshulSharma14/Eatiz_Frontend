<template>
  <div class="flex h-screen overflow-hidden">

    <!-- Sidebar -->
    <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />

    <!-- Content area -->
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white">
      
      <!-- Site header -->
      <Header :sidebarOpen="sidebarOpen" :user="user" @toggle-sidebar="sidebarOpen = !sidebarOpen" />

      <main>
        <div class="relative flex" v-if="user.email">
          <!-- Profile sidebar -->
          <!-- <ProfileSidebar :profileSidebarOpen="profileSidebarOpen" @close-profilesidebar="profileSidebarOpen = false" /> -->

          <!-- Profile body -->
          <ProfileBody :user="user" :profileSidebarOpen="profileSidebarOpen" @toggle-profilesidebar="profileSidebarOpen = !profileSidebarOpen" />
          
        </div>
      </main>

    </div> 

  </div>
</template>

<script>
import { ref } from 'vue'
import Sidebar from '../partials/Sidebar.vue'
import Header from '../partials/Header.vue'
// import ProfileSidebar from '../partials/community/ProfileSidebar.vue'
import ProfileBody from '../partials/ProfileBody.vue'
import {Services, getAPIUrl, getRequestHeaders } from '../services/services'
import axios from 'axios'

export default {
  name: 'Profile',
  components: {
    Sidebar,
    Header,
    // ProfileSidebar,
    ProfileBody,
  },
  data(){
     return{
        user:{
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
        }
      }
    },
  mounted(){
    try{
    this.user = JSON.parse(sessionStorage.getItem("user"));
    console.log(this.user.userId)
    this.getUserProfile();
    }catch( e){
      console.log(e)
    }

  }, 
  setup(){

    const sidebarOpen = ref(false)
    const profileSidebarOpen = ref(false)

    return {
      sidebarOpen,
      profileSidebarOpen,
    }  
  },
  methods:{
    getUserProfile:function(){
        axios.get(getAPIUrl(Services.GetUserAccountDetail)+this.user.userId, getRequestHeaders())
        .then(response => {
          this.user = response.data.users; 
          sessionStorage.setItem('user',this.user); 
          console.log(this.user)     
        })
        .catch(error => {
       
          console.error(error)
        })
    }
  }
}
</script>