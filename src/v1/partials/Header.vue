<template>
  <header class="sticky top-0 bg-white z-30">
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 -mb-px">

        <!-- Header: Left side -->
        <div class="flex">

          <!-- Hamburger button -->
          <button class="text-slate-500 hover:text-slate-600 lg:hidden" @click.stop="$emit('toggle-sidebar')" aria-controls="sidebar" :aria-expanded="sidebarOpen">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="5" width="16" height="2" />
              <rect x="4" y="11" width="16" height="2" />
              <rect x="4" y="17" width="16" height="2" />
            </svg>
          </button>

        </div>

        <!-- Header: Right side -->
        <div class="flex items-center space-x-3">
          <div>
            <button
              class="w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ml-3"
              :class="{ 'bg-slate-200': searchModalOpen }"
              @click.stop="searchModalOpen = true"
              aria-controls="search-modal"
            >
              <span class="sr-only">Search</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#33cc66" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
              </svg>
            </button>          
            <SearchModal id="search-modal" searchId="search" :modalOpen="searchModalOpen" @open-modal="searchModalOpen = true" @close-modal="searchModalOpen = false" />
          </div>
          <Notifications align="right" />
          <Help align="right" />
          <!-- Divider -->
          <hr class="w-px h-6 bg-slate-200" />
          <UserMenu align="right" :user="user" />

        </div>

      </div>
    </div>
  </header>
</template>

<script>
import { ref } from 'vue'

import SearchModal from '../components/ModalSearch.vue'
import Notifications from '../components/DropdownNotifications.vue'
import Help from '../components/DropdownHelp.vue'
import UserMenu from '../components/DropdownProfile.vue'

export default {
  name: 'Header',
  props: ['sidebarOpen','user'],
  components: {
    SearchModal,
    Notifications,
    Help,
    UserMenu,
  },
  data(){
   return{
     profile:""
   }
  },
  mounted(){
    try{
       this.profile = JSON.parse(sessionStorage.getItem("user"));
       if(this.profile==null){
          sessionStorage.clear();
          this.$router.push('/');
       }
    }catch(e){
      console.log(e)
      sessionStorage.clear();
      this.$router.push('/');
    }
  },
  setup() {
    const searchModalOpen = ref(false)
    return {
      searchModalOpen,
    }  
  }  
}
</script>