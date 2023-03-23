<template>
  <div>
    <!-- Sidebar backdrop (mobile only) -->
    <div class="fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200" :class="sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'" aria-hidden="true"></div>

    <!-- Sidebar -->
    <div
      id="sidebar"
      ref="sidebar"
      class="border-r-2 border-dashed flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-white p-4 transition-all duration-200 ease-in-out"
      :class="sidebarOpen ? 'translate-x-0' : '-translate-x-64'"
    >

      <!-- Sidebar header -->
      <div class="flex justify-between mb-10 pr-3 sm:px-2">
        <!-- Close button -->
        <button
          ref="trigger"
          class="lg:hidden text-slate-500 hover:text-slate-400"
          @click.stop="$emit('close-sidebar')"
          aria-controls="sidebar"
          :aria-expanded="sidebarOpen"
        >
          <span class="sr-only">Close sidebar</span>
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
          </svg>
        </button>
        <!-- Logo -->
        <router-link class="block" to="/">
           <img src="../images/logo.png" width="60" height="60" alt="logo" />
        </router-link>
      </div>

      <!-- Links -->
      <div class="space-y-8 h-full">
        <!-- Pages group -->
        <div class="h-3/5">
          <h3 class="text-xs uppercase text-slate-500 font-semibold pl-3">
            <span class="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">•••</span>
            <span class="lg:hidden lg:sidebar-expanded:block 2xl:block">Marketplace</span>
          </h3>
          <ul class="mt-3">
            <!-- Dashboard -->
                   
            <!-- E-Commerce  -->
           
            <!-- Community -->
           
            <!-- Finance -->
           
            <!-- Tasks -->
                          
            <!-- Messages -->
           
            <!-- Inbox -->
            
            <!-- Calendar -->
            <router-link to="/explore" custom v-slot="{ href, navigate, isExactActive }">
              <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0" :class="isExactActive && 'theme-bg'">
                <a class="block text-black truncate transition duration-150" :class="isExactActive ? 'hover:text-white' : 'hover:text-black'" :href="href" @click="navigate">
                  <div class="flex items-center">
                    <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="19" fill="#EAEAEA"/>
                    <g clip-path="url(#clip0_0_1)">
                    <rect width="1520" height="1747" transform="translate(-28 -138)" :fill="isExactActive ? 'white':'#000'"/>
                    <rect x="-29" y="-138" width="240" height="1402" :fill="isExactActive ? 'white':'#000'"/>
                    <rect x="-14" y="-10" width="208" height="40" rx="4" :fill="isExactActive ? '#33CC66':'#fff'"/>
                    <circle cx="10" cy="11" r="2" :stroke="isExactActive ? 'white':'#000'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.4492 9.55L13.4992 7.5" :stroke="isExactActive ? 'white':'#000'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.40052 18.0002C1.40425 15.6186 0.24197 11.6026 1.50316 7.98896C2.76435 4.3753 6.17309 1.95459 10.0005 1.95459C13.8279 1.95459 17.2367 4.3753 18.4979 7.98896C19.7591 11.6026 18.5968 15.6186 15.6005 18.0002H4.40052Z" :stroke="isExactActive ? 'white':'#000'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_0_1">
                    <rect width="1520" height="1747" fill="white" transform="translate(-28 -138)"/>
                    </clipPath>
                    </defs>
                    </svg>
                    <span :class="isExactActive ? 'text-white' : 'text-black'" class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Explore</span>
                  </div>
                </a>
              </li>
            </router-link>
            <!-- Campaigns -->
            <router-link to="/doners" custom v-slot="{ href, navigate, isExactActive }">
              <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0" :class="isExactActive && 'theme-bg'">
                <a class="block text-black truncate transition duration-150" :class="isExactActive ? 'hover:text-white' : 'hover:text-black'" :href="href" @click="navigate">
                  <div class="flex items-center">

                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="19" height="16" fill="#EAEAEA"/>
                      <g clip-path="url(#clip0_0_1)">
                      <rect width="1520" height="1747" transform="translate(-28 -184)" :fill="isExactActive ? 'white':'#000'"/>
                      <rect x="-29" y="-184" width="240" height="1402" :fill="isExactActive ? '#33CC66':'white'"/>
                      <circle cx="10" cy="10" r="2" :stroke="isExactActive ? '#33CC66':'white'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M11.4492 8.55L13.4992 6.5" :stroke="isExactActive ? '#33CC66':'white'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.40052 17.0002C1.40425 14.6186 0.24197 10.6026 1.50316 6.98896C2.76435 3.3753 6.17309 0.95459 10.0005 0.95459C13.8279 0.95459 17.2367 3.3753 18.4979 6.98896C19.7591 10.6026 18.5968 14.6186 15.6005 17.0002H4.40052Z" :stroke="isExactActive ? '#33CC66':'white'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M3 18C3.5 13.5 5.5 10 10 8" :stroke="isExactActive ? 'white':'#2C2C2C'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00033 15C13.2183 15 17.5003 11.712 18.0003 3V1H13.9863C4.98633 1 2.00033 5 1.98633 10C1.98633 11 1.98633 13 3.98633 15H6.98633H7.00033Z" :stroke="isExactActive ? 'white':'#2C2C2C'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_0_1">
                      <rect width="1520" height="1747" fill="isExactActive ? '#33CC66':'white'" transform="translate(-28 -184)"/>
                      </clipPath>
                      </defs>
                      </svg>
                    <!-- <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path class="fill-current" :class="isExactActive ? 'text-white' : 'text-black'" d="M20 7a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 0120 7zM4 23a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 014 23z" />
                      <path class="fill-current" :class="isExactActive ? 'text-white' : 'text-black'" d="M17 23a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 010-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1zM7 13a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 112 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z" />                    
                    </svg> -->
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"  :class="isExactActive ? 'text-white' : 'text-black'">Top Doners</span>
                  </div>
                </a>
              </li>
            </router-link>            
            <!-- Settings -->
            <router-link to="/messages" custom v-slot="{ href, navigate, isExactActive }">
              <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0" :class="isExactActive && 'theme-bg'">
                <a class="block text-black truncate transition duration-150" :class="isExactActive ? 'hover:text-white' : 'hover:text-black'" :href="href" @click="navigate">
                  <div class="flex items-center">

                    <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="19" :fill="isExactActive ? 'white':'#EAEAEA'"/>
                    <g clip-path="url(#clip0_0_1)">
                    <rect width="1520" height="1747" transform="translate(-28 -228)" :fill="isExactActive ? '#33CC66':'white'"/>
                    <rect x="-29" y="-228" width="240" height="1402" :fill="isExactActive ? '#33CC66':'white'"/>
                    <path d="M1 18.0001L2.3 14.1001C-0.0238826 10.6631 0.873876 6.22782 4.39977 3.72638C7.92566 1.22495 12.9902 1.4303 16.2453 4.20667C19.5003 6.98304 19.9401 11.4726 17.2739 14.7072C14.6076 17.9419 9.6592 18.9222 5.7 17.0001L1 18.0001" :stroke="isExactActive ? 'white':'#2C2C2C'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10 9.99988V10.0099" :stroke="isExactActive ? 'white':'#2C2C2C'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 9.99988V10.0099" :stroke="isExactActive ? 'white':'#2C2C2C'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14 9.99988V10.0099" :stroke="isExactActive ? 'white':'#2C2C2C'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_0_1">
                    <rect width="1520" height="1747" :fill="isExactActive ? '#33CC66':'white'" transform="translate(-28 -228)"/>
                    </clipPath>
                    </defs>
                    </svg>
                    <!-- <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path class="fill-current" :class="isExactActive ? 'text-white' : 'text-black'" d="M20 7a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 0120 7zM4 23a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 014 23z" />
                      <path class="fill-current" :class="isExactActive ? 'text-white' : 'text-black'" d="M17 23a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 010-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1zM7 13a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 112 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z" />                    
                    </svg> -->
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"  :class="isExactActive ? 'text-white' : 'text-black'">Messages</span>
                  </div>
                </a>
              </li>
            </router-link>    
            <!-- Utility -->
               
          </ul>
        </div>
        <!-- More group -->
        <div>
          <h3 class="text-xs uppercase text-slate-500 font-semibold pl-3">
            <span class="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">•••</span>
            <span class="lg:hidden lg:sidebar-expanded:block 2xl:block">More</span>
          </h3>
          <ul class="mt-3">
            <!-- Authentication -->
                <!-- Settings -->
            <router-link to="/settings" custom v-slot="{ href, navigate, isExactActive }">
              <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0" :class="isExactActive && 'theme-bg'">
                <a class="block text-black truncate transition duration-150" :class="isExactActive ? 'hover:text-white' : 'hover:text-black'" :href="href" @click="navigate">
                  <div class="flex items-center">

                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings " width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" :stroke="isExactActive ? 'white':'#2C2C2C'" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                 
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"  :class="isExactActive ? 'text-white' : 'text-black'">Settings</span>
                  </div>
                </a>
              </li>
            </router-link> 

               <!-- help -->
            <router-link to="/help" custom v-slot="{ href, navigate, isExactActive }">
              <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0" :class="isExactActive && 'theme-bg'">
                <a class="block text-black truncate transition duration-150" :class="isExactActive ? 'hover:text-white' : 'hover:text-black'" :href="href" @click="navigate">
                  <div class="flex items-center">

                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-info-circle" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" :stroke="isExactActive ? 'white':'#2C2C2C'" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <circle cx="12" cy="12" r="9" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                      <polyline points="11 12 12 12 12 16 13 16" />
                    </svg>
                 
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"  :class="isExactActive ? 'text-white' : 'text-black'">Help</span>
                  </div>
                </a>
              </li>
            </router-link> 

             <router-link to="/logout" custom v-slot="{ href, navigate, isExactActive }">
              <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0" :class="isExactActive && 'theme-bg'">
                <a class="block text-black truncate transition duration-150" :class="isExactActive ? 'hover:text-white' : 'hover:text-black'" :href="href" @click="navigate">
                  <div class="flex items-center float-right">

                         <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-bar-left" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" :stroke="isExactActive ? 'white':'#2C2C2C'" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <line x1="4" y1="12" x2="14" y2="12" />
                            <line x1="4" y1="12" x2="8" y2="16" />
                            <line x1="4" y1="12" x2="8" y2="8" />
                            <line x1="20" y1="4" x2="20" y2="20" />
                          </svg>     
                  
                  </div>
                </a>
              </li>
            </router-link> 
                    
            <!-- Components  -->

    
                     
          </ul>
        </div>
      </div>

      <!-- Expand / collapse button -->
      <div class="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
        <div class="px-3 py-2">
          <button @click.prevent="sidebarExpanded = !sidebarExpanded">
            <span class="sr-only">Expand / collapse sidebar</span>
            <svg class="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
              <path class="text-slate-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
              <path class="text-slate-600" d="M3 23H1V1h2z" />
            </svg>
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'

import SidebarLinkGroup from './SidebarLinkGroup.vue'

export default {
  name: 'Sidebar',
  props: ['sidebarOpen'],
  components: {
    SidebarLinkGroup,
  },  
  setup(props, { emit }) {

    const trigger = ref(null)
    const sidebar = ref(null)

    const storedSidebarExpanded = localStorage.getItem('sidebar-expanded')
    const sidebarExpanded = ref(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true')

    const currentRoute = useRouter().currentRoute.value

    // close on click outside
    const clickHandler = ({ target }) => {
      if (!sidebar.value || !trigger.value) return
      if (
        !props.sidebarOpen ||
        sidebar.value.contains(target) ||
        trigger.value.contains(target)
      ) return
      emit('close-sidebar')
    }

    // close if the esc key is pressed
    const keyHandler = ({ keyCode }) => {
      if (!props.sidebarOpen || keyCode !== 27) return
      emit('close-sidebar')
    } 

    onMounted(() => {
      document.addEventListener('click', clickHandler)
      document.addEventListener('keydown', keyHandler)
    })

    onUnmounted(() => {
      document.removeEventListener('click', clickHandler)
      document.removeEventListener('keydown', keyHandler)
    })

    watch(sidebarExpanded, () => {
      localStorage.setItem('sidebar-expanded', sidebarExpanded.value)
      if (sidebarExpanded.value) {
        document.querySelector('body').classList.add('sidebar-expanded')
      } else {
        document.querySelector('body').classList.remove('sidebar-expanded')
      }
    })

    return {
      trigger,
      sidebar,
      sidebarExpanded,
      currentRoute,
    }
  },
}
</script>