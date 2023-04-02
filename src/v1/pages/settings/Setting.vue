<template>
  <div class="flex h-screen overflow-hidden">

    <!-- Sidebar -->
    <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />

    <!-- Content area -->
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      
      <!-- Site header -->
      <Header :user="user" :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />

      <main>
        <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto bg-gray-100">

          <!-- Page header -->
          <div class="mb-8">
            <!-- Title -->
            <h1 class="text-2xl md:text-3xl text-slate-800 font-bold">Account Settings</h1>
          </div>

          <!-- Content --> 
               <router-view></router-view>
        </div>         
      </main>

    </div> 

  </div>
</template>

<script>
import { ref } from 'vue'
import Sidebar from '../../partials/Sidebar.vue'
import Header from '../../partials/Header.vue'
// import SettingsSidebar from '../../partials/settings/SettingsSidebar.vue'
// import AppsPanel from '../../partials/settings/AppsPanel.vue'

export default {
  name: 'Settings',
  components: {
    Sidebar,
    Header,
    // SettingsSidebar,
    // AppsPanel,
  },
  data(){
      return{
          user:{}
      }
  },
  mounted(){
    this.user = JSON.parse(sessionStorage.getItem("user"));
    console.log(this.user.image)
  },
  setup() {

    const sidebarOpen = ref(false)

    return {
      sidebarOpen,
    }  
  }
}
</script>