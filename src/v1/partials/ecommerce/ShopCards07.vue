<template>
  <!-- Card 1 -->
  <div v-for="(asset, index) in assets"
        :key="index" class="col-span-full md:col-span-6 xl:col-span-3 bg-white overflow-hidden">
    <div class="flex flex-col h-full">
      <!-- Image -->
      <div class="relative">
        <img class="w-full rounded-md" :src="asset.imageUrl" width="301" height="226" alt="Application 21" />
        <!-- Like button -->
        <button class="absolute top-0 right-0 mt-4 mr-4">
          <div class="text-slate-100 bg-slate-900 bg-opacity-60 rounded-full">
            <span class="sr-only">Like</span>
            <svg class="h-8 w-8 fill-current" viewBox="0 0 32 32">
              <path d="M22.682 11.318A4.485 4.485 0 0019.5 10a4.377 4.377 0 00-3.5 1.707A4.383 4.383 0 0012.5 10a4.5 4.5 0 00-3.182 7.682L16 24l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L16 21.247l-5.285-5A2.5 2.5 0 0112.5 12c1.437 0 2.312.681 3.5 2.625C17.187 12.681 18.062 12 19.5 12a2.5 2.5 0 011.785 4.251h-.003z" />
            </svg>
          </div>
        </button>
        <!-- Special Offer label -->
        <div class="absolute bottom-0 right-0 mb-4 mr-4">
          <div class="inline-flex items-center text-xs font-medium text-slate-100 bg-slate-900 bg-opacity-60 rounded-full text-center px-2 py-0.5">
            <svg class="w-3 h-3 shrink-0 fill-current text-amber-500 mr-1" viewBox="0 0 12 12">
              <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
            </svg>
            <span>Special Offer</span>
          </div>
        </div>
      </div>
      <!-- Rating and price -->
        <div class="flex flex-wrap justify-between items-center mt-2">
          <!-- Rating -->
          <div class="flex items-center space-x-2 mr-2">
            <!-- Stars -->
            <div class="flex space-x-1">
              <button>
                <span class="sr-only">1 star</span>
                <svg class="w-4 h-4 fill-current theme-color" viewBox="0 0 16 16">
                  <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                </svg>
              </button>
            </div>
            <!-- Rate -->
            <div class="inline-flex text-sm font-medium">4.7</div>
          
            <div class="inline-flex text-sm"><li> LngLis, Canada</li></div>
          </div>
          <!-- Price -->
          <div>
            <div class="inline-flex text-sm font-medium theme-light-bg theme-color rounded-full text-center px-2 py-0.5">$39.00</div>
          </div>
        </div>
      <!-- Card Content -->
      <div class="grow flex flex-col pt-2">
        <!-- Card body -->
        <div class="grow">
          <header class="mb-2">
            <div class="text-sm">{{asset.title}}</div>
            <div class="text-sm">located at LngLis, Manitoba</div>
          </header>
        </div>
        <div class="">
          <img class="w-8 h-8 rounded-full inline-flex text-sm mr-2" :src="user.image?user.image.data:''" width="32" height="32" alt="User" />
          <div class="inline-flex text-sm pt-2">by {{user.firstname}} {{user.lastname}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {Services, getAPIUrl, getRequestHeaders} from '../../services/services'

export default {
  name: 'ShopCards07',
  data(){
    return{
      imageBase:"https://www.eatiz.org/eatiz_images/asset/",
      assets:[],
      user:{},
    }
  },
  mounted(){
      try{
          this.user = JSON.parse(sessionStorage.getItem("user"));
          this.getAssetList();
        }catch( e){
          console.log(e)
        }
  },
  methods:{
    getAssetList(){
         let id= this.user.userId ?? this.user.id
          axios.post(
          getAPIUrl(Services.GetAssetList),{
            "ownerId":id
          },
          getRequestHeaders())
          .then(response => {
            console.log(response)  
            this.assets = response.data.result;     
          })
          .catch(error => {
        
            console.error(error)
          })
    }
  }
}
</script>