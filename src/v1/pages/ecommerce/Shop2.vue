<template>
  <div class="flex h-screen overflow-hidden">

    <!-- Sidebar -->
    <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />

    <!-- Content area -->
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      
      <!-- Site header -->
      <Header :user= "user" :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />

      <main>
        <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

          <!-- Page header -->
          <div class="mb-5">

            <!-- Title -->
            <h1 class="text-2xl md:text-3xl text-slate-800 font-bold">World’s local food available at your fingertips</h1>

          </div>

          <!-- Page content -->
          <div class="flex flex-col space-y-10 sm:flex-row sm:space-x-6 sm:space-y-0 md:flex-col md:space-x-0 md:space-y-10 xl:flex-row xl:space-x-6 xl:space-y-0 mt-9">

            <!-- Sidebar -->
            <!-- <ShopSidebar /> -->

            <!-- Content -->
            <div>

              <!-- Filters -->
              <div class="mb-5">
                <ul class="flex flex-wrap -m-1">
                  <!-- <li class="m-1 filter">
                    <button class="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 hover:border-slate-300 shadow-sm theme-bg text-white duration-150 ease-in-out" @click="handleFilters($event)">View All</button>
                  </li>
                  <li class="m-1 filter">
                    <button class="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out" @click="handleFilters($event)">Featured</button>
                  </li>
                  <li class="m-1 filter">
                    <button class="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out" @click="handleFilters($event)">Newest</button>
                  </li>
                  <li class="m-1 filter">
                    <button class="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out" @click="handleFilters($event)">Price - Low To High</button>
                  </li>
                  <li class="m-1 filter">
                    <button class="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out" @click="handleFilters($event)">Price - High to Low</button>
                  </li> -->
                   <li v-for="(child, index) in children"
                      :key="index"
                      class="m-1">
                    <button :class="activeIndex === index?'theme-bg text-white':'bg-gray-100 text-black'" class=" hover:shadow-sm  text-xs inline-flex items-center justify-center font-normal leading-5 rounded-full px-3 py-1 " @click="handleClick(index)">{{ child }}
                      <svg class="w-2 h-2 shrink-0 ml-1 fill-current text-current" viewBox="0 0 12 12" >
                        <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                      </svg>
                    </button>
                  </li>
                </ul>
              </div>

              <div class="text-sm text-slate-500 italic mb-4">67.975 Items</div>

              <!-- Cards 1 (Video Courses) -->
              <div>
                <div class="grid grid-cols-12 gap-6">
                  <ShopCards07 />
                </div>
              </div>

              <!-- Pagination -->
              <!-- <div class="mt-6">
                <PaginationClassic />
              </div> -->

            </div>

          </div>

        </div>        
      </main>

    </div> 

  </div>
</template>

<script>
import { ref } from 'vue'
import Sidebar from '../../partials/Sidebar.vue'
import Header from '../../partials/Header.vue'
// import ShopSidebar from '../../partials/ecommerce/ShopSidebar.vue'
import ShopCards07 from '../../partials/ecommerce/ShopCards07.vue'
// import PaginationClassic from '../../components/PaginationClassic.vue'

export default {
  name: 'Shop2',
  components: {
    Sidebar,
    Header,
    // ShopSidebar,
    ShopCards07,    
    // PaginationClassic,
  },
  data(){
    return{
      user:"",
      children: ['Business Type', 'Category', 'Price', 'Condition', 'Distance','Sort'],
      activeIndex: -1
    }
  },
   mounted(){
    try{
    this.user = JSON.parse(sessionStorage.getItem("user"));
    }catch( e){
      console.log(e)
    }

  }, 
  setup() {

    const sidebarOpen = ref(false)

    return {
      sidebarOpen,
    }  
  },
  methods:{
    handleClick(index) {
      if (this.activeIndex === index) {
        this.activeIndex = -1
      } else {
        this.activeIndex = index
      }
    }
  }
}
</script>