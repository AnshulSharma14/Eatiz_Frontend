<template>
          <!-- Content --> 
          <div class="bg-white shadow-lg rounded-sm mb-8">
            <div class="flex flex-col md:flex-row md:-mr-px">
              <SettingsSidebar />
              <AccountPanel />
            </div>
          </div>
</template>

<script>
import { ref } from 'vue'
import Sidebar from '../../partials/Sidebar.vue'
import Header from '../../partials/Header.vue'
import SettingsSidebar from '../../partials/settings/SettingsSidebar.vue'
import AccountPanel from '../../partials/settings/AccountPanel.vue'

export default {
  name: 'Account',
  components: {
    Sidebar,
    Header,
    SettingsSidebar,
    AccountPanel,
  },
  data(){
   
  },
  mounted(){
   
  },
  setup() {

    const sidebarOpen = ref(false)

    return {
      sidebarOpen,
    }  
  }
}
</script>