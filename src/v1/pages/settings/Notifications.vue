<template>
          <!-- Content --> 
          <div class="bg-white shadow-lg rounded-sm mb-8">
            <div class="flex flex-col md:flex-row md:-mr-px">
              <SettingsSidebar />
              <NotificationsPanel />
            </div>
          </div>
</template>

<script>
import { ref } from 'vue'
import Sidebar from '../../partials/Sidebar.vue'
import Header from '../../partials/Header.vue'
import SettingsSidebar from '../../partials/settings/SettingsSidebar.vue'
import NotificationsPanel from '../../partials/settings/NotificationsPanel.vue'

export default {
  name: 'Notifications',
  components: {
    Sidebar,
    Header,
    SettingsSidebar,
    NotificationsPanel,    
  },
  setup() {

    const sidebarOpen = ref(false)

    return {
      sidebarOpen,
    }  
  }
}
</script>