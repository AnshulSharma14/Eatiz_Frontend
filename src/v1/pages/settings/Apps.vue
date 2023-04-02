<template>
          <!-- Content --> 
          <div class="bg-white shadow-lg rounded-sm mb-8">
            <div class="flex flex-col md:flex-row md:-mr-px">
              <SettingsSidebar />
              <AppsPanel />
            </div>
          </div>
</template>

<script>
import { ref } from 'vue'
import Sidebar from '../../partials/Sidebar.vue'
import Header from '../../partials/Header.vue'
import SettingsSidebar from '../../partials/settings/SettingsSidebar.vue'
import AppsPanel from '../../partials/settings/AppsPanel.vue'

export default {
  name: 'Apps',
  components: {
    Sidebar,
    Header,
    SettingsSidebar,
    AppsPanel,
  },
  setup() {

    const sidebarOpen = ref(false)

    return {
      sidebarOpen,
    }  
  }
}
</script>