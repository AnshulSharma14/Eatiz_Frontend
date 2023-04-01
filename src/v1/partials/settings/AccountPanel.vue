<template>
  <div class="grow">
    <!-- Panel body -->
    <div class="p-6 space-y-6">
      <h2 class="text-2xl text-slate-800 font-bold mb-5">My Profile</h2>
      <!-- Picture -->
      <section>
        <div class="flex items-center">
          <div class="mr-4">
            <img class="w-20 h-20 rounded-full" :src="user.image?user.image.data:''" width="80" height="80" alt="User upload" />
          </div>
          <button class="btn-sm theme-bg hover:bg-green-500 text-white"  @click.stop="profileImageModalOpen = true" >Change</button>
        </div>
      </section>
      <!-- Business Profile -->
      <section>
        <h3 class="text-xl leading-snug text-slate-800 font-bold mb-1">Personal info</h3>
        <div class="text-sm">Provide personal details so that your neighbours can reach you</div>
        <div class="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1" for="name">First Name</label>
            <input id="name" v-model="user.firstname" class="form-input w-full rounded" type="text" />
          </div>
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1" for="last-name">Last Name</label>
            <input id="last-name" v-model="user.lastname" class="form-input w-full rounded" type="text" />
          </div>
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1" for="Phone-number">phone number</label>
            <input id="Phone-number" v-model="user.phoneNumber" class="form-input w-full rounded" type="text" />
          </div>
        </div>
        <div class="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1" for="Birth-id">Birth Date</label>
            <input id="Birth-id" v-model="user.DOB" class="form-input w-full rounded" type="date" />
          </div>
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1" for="Gender">Gender</label>
            <input id="Gender" v-model="user.gender" class="form-input w-full rounded" type="text" />
          </div>
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1" for="Government-id">Government ID</label>
            <input id="Government-id" v-model="user.govermentId" class="form-input w-full rounded" type="text" />
          </div>
        </div>
        <div class="mt-1" >
        <label class="block text-sm font-medium mb-1" for="about-me">About me</label>
        <textarea id="about-me" v-model="user.aboutMe" class="form-textarea w-full px-2 py-1 rounded" rows="4" required></textarea>
        </div>
      </section>
      <!-- Email -->
      <section>
        <h3 class="text-xl leading-snug text-slate-800 font-bold mb-1">Email</h3>
        <div class="text-sm">Update your email and secure your account.</div>
        <div class="flex flex-wrap mt-5">
          <div class="mr-2">
            <label class="sr-only" for="email">email</label>
            <input id="email" v-model="user.email" class="form-input rounded" type="email" />
          </div>
          <button class="btn border-slate-200 hover:border-slate-300 shadow-sm text-green-500">Change</button>
        </div>
      </section>
      <!-- Password -->
      <section>
        <h3 class="text-xl leading-snug text-slate-800 font-bold mb-1">Password</h3>
        <div class="text-sm">You can set a permanent password if you don't want to use temporary login codes.</div>
        <div class="mt-5">
          <!-- set Password -->
                    <!-- Start -->
                    <button class="theme-bg btn text-white" aria-controls="password-modal" @click.stop="passwordModalOpen = true">Set New Password</button>
                    <ModalBasic id="password-modal" :modalOpen="passwordModalOpen" @close-modal="passwordModalOpen = false" title="Change Password">
                      <!-- Modal content -->
                      <div class="px-5 py-4">
                       
                        <div class="space-y-3">
                          <div>
                            <label class="block text-sm font-medium mb-1" for="old-password">Old password</label>
                            <input id="old-password" v-model="oldPassword" class="form-input w-full px-2 py-1 rounded" type="password" required />
                          </div>
                          <div>
                            <label class="block text-sm font-medium mb-1" for="new-password">New password</label>
                            <input id="new-password" v-model="newPassword" class="form-input w-full px-2 py-1 rounded" type="password" required />
                          </div>
                          <div>
                            <label class="block text-sm font-medium mb-1" for="confirm-password">Confirm password</label>
                            <input id="confirm-password" v-model="confirmPassword" class="form-input w-full px-2 py-1 rounded" type="password" required />
                          </div>
                          <div>
                             <Toast :type="toastType" :open="toast2ErrorOpen">
                               {{toastErrorMessage}}
                              </Toast>
                          </div>  
                        </div>
                      </div>
                      <!-- Modal footer -->
                      <div class="px-5 py-4 border-t border-slate-200">
                        <div class="flex flex-wrap justify-end space-x-2">
                          <button class="btn-sm border-slate-200 hover:border-slate-300 text-slate-600" @click.stop="passwordModalOpen = false">Cancel</button>
                          <button class="btn-sm theme-bg btn text-white hover:theme-bg btn text-white" @click="changePassword()">Submit</button>
                        </div>
                      </div>
                    </ModalBasic>
                    <!-- End -->
                  </div>
                </section>
                <section>
                  <ModalBasic id="change-profile-image-modal" :modalOpen="profileImageModalOpen" @close-modal="profileImageModalOpen = false" title="Change Profile Image">
                      <!-- Modal content -->
                    
                      <div class="px-5 py-4">
                        <input type="file" @change="onFileChange">
                        <button class="btn-sm theme-bg hover:bg-green-500 text-white float-right" @click="uploadImage">Upload</button>
                      </div>
                    
                  </ModalBasic>
              </section>
      <!-- Home address -->
      <h3 class="text-xl leading-snug text-slate-800 font-bold mb-1">Home Address</h3>
        <div class="text-sm">Use a permanent address where you can recieve mail.</div>
        <div class="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
          <div class="sm:w-2/3">
            <label class="block text-sm font-medium mb-1" for="Street-address">Street Adress</label>
            <input id="Street-address" v-model="user.address.streetAddress" class="form-input w-full rounded" type="text" />
          </div>
          <div class="sm:w-2/3">
            <label class="block text-sm font-medium mb-1" for="Street-address">Street Address</label>
            <input id="Street-address" v-model="user.address.streetAddress2" class="form-input w-full rounded" type="text" />
          </div>
        </div>
        <div class="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1" for="Birth-id">City</label>
            <input id="Birth-id" v-model="user.address.city" class="form-input w-full rounded" type="text" />
          </div>
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1" for="state-province">State/Provience</label>
            <input id="state-province" v-model="user.address.state" class="form-input w-full rounded" type="text" />
          </div>
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1" for="Country">Country</label>
            <input id="Country" v-model="user.address.country" class="form-input w-full rounded" type="text" />
          </div>
        </div>
        
        <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1" for="Postal-code">Postal Code</label>
            <input id="Postal-code" v-model="user.address.postalCode" class="form-input w-full rounded" type="text" />
          </div>
      <section>
        
      </section>
    </div>
    <!-- Panel footer -->
    <footer>
      <div class="flex flex-col px-6 py-5 border-t border-slate-200">
        <div class="flex self-end">
          <button class="btn border-slate-200 hover:border-slate-300 text-slate-600" @click="cancelProfile()">Cancel</button>
          <button class="btn bg-green-500 hover:bg-green-500 text-white ml-3" @click="updateProfile()">Save Changes</button>
        </div>
      </div>
    </footer>
  </div>  
</template>

<script>
import { ref } from 'vue'
import ModalBasic from './../../components/ModalBasic.vue'
import axios from 'axios'
import {getAPIUrl, Services, getRequestHeaders} from './../../services/services'
import Toast from './../../components/Toast.vue'
export default {
 name: 'AccountPanel',

 components: {

    ModalBasic,
    Toast
  },
  setup() {

     const profileImageModalOpen =ref(false)
     const passwordModalOpen = ref(false)
     const sync = ref('Off')
     const toast2ErrorOpen = ref(false)
     const toastType = ref("error")
     const toastErrorMessage = ref("")

    return {
      toast2ErrorOpen,
      passwordModalOpen,
      sync,
      toastType,
      toastErrorMessage,
      profileImageModalOpen
    }  
  },
  data(){
   return{
       user:{
        DOB: "",
        aboutMe: "",
        address: {
          aptSuite: "",
          city: "",
          country: "",
          createdAt: "",
          createdBy: "",
          id: "",
          landmark: "",
          organisationId: "",
          postalCode: "",
          state: "",
          streetAddress2:"",
          streetAddress: "",
          type: "",
          updatedAt: "",
          updatedBy: "",
        },
        addressId: "",
        address_id: "",
        createdAt: "",
        createdBy: "",
        email: "",
        emailVerificationToken: "",
        emailVerified: "",
        firstname: "",
        gender: "",
        govermentId: "",
        id: "",
        jobTitle: "",
        lastname: "",
        organisationId: "",
        organization: "",
        password: "",
        passwordChangeToken: "",
        phoneNumber: "",
        roleId: "",
        updatedAt: "",
        updatedBy: "",
        username: "",
        website: ""
       },
      oldPassword:"",
      newPassword:"",
      confirmPassword:"",
      file: null,
      base64Image: null
   }
  },
  mounted(){
     try{
    this.user = JSON.parse(sessionStorage.getItem("user"));
    console.log(this.user)
     this.getProfile();
    }catch( e){
      console.log(e)
    }
       
  },
  methods:{
      getProfile: function(){
            axios.get(getAPIUrl(Services.GetUserAccountDetail)+this.user.id, getRequestHeaders())
            .then(response => {
              this.user = response.data.users; 
             // sessionStorage.setItem('user',JSON.stringify(this.user)); 
              console.log(this.user)     
            })
            .catch(error => {
          
              console.error(error)
            })
      },
      cancelProfile(){
            this.$$router.push("/dashboard");
      },
      updateProfile(){
         axios.put(getAPIUrl(Services.UpdateUserProfile)+this.user.id,
            this.user,
            getRequestHeaders())
            .then(response => {
             // this.user = response.data.users; 
             // sessionStorage.setItem('user',JSON.stringify(this.user)); 
              console.log(this.user)     
            })
            .catch(error => {
          
              console.error(error)
            })
      },
      changePassword(){
        if(this.validateChangePassword()){
            axios.put(getAPIUrl(Services.UpdateUserPassword)+this.user.id,
            {
              "password":this.newPassword,
              "oldPassword":this.oldPassword  
            },
            getRequestHeaders())
            .then(response => {
             // this.user = response.data.users; 
             // sessionStorage.setItem('user',JSON.stringify(this.user)); 
              console.log(response)   
               this.toast2ErrorOpen =true;
               this.toastErrorMessage = response.data.message;
               this.toastType = "success";
               return false;  
            })
            .catch(error => {
              console.log(error)
              this.toast2ErrorOpen =true;
              this.toastErrorMessage = error.response.data.msg;
              this.toastType = "error";
              
            })
          }
      },
      validateChangePassword(){
            if(this.newPassword!=""&&this.confirmPassword!=""&& this.oldPassword!="" && this.newPassword===this.confirmPassword){
              this.toast2ErrorOpen =false;
              return true;
             }else if(this.newPassword!=this.confirmPassword){
               this.toast2ErrorOpen =true;
               this.toastErrorMessage = "Confirm Password Not Match!"
               return false;
             }
             else{
                this.toast2ErrorOpen =true;
                this.toastErrorMessage = "Fill All Fields!"
                return false;
             }
       },
       onFileChange(e) {
          const file = e.target.files[0];
          if (!file) {
            return;
          }
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            this.file = file;
            this.base64Image = reader.result;
          };
        },
        async uploadImage() {
          const formData = new FormData();
          formData.append('image', this.base64Image);
          try {
            const response = await axios.put(getAPIUrl(Services.UpdateProfileImage)+this.user.id,
            formData,
            getRequestHeaders());
            console.log(response.data);
          } catch (error) {
            console.error(error);
          }
        }

  }


}
</script>