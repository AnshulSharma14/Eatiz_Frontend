<template>
  <div class="grow">
    <!-- Panel body -->
    <div class="p-6 space-y-6">
      <h2 class="text-2xl text-slate-800 font-bold mb-5">My Profile</h2>
      <!-- Picture -->
      <section>
        <div class="flex items-center">
          <div class="mr-4">
            <img class="w-20 h-20 rounded-full" src="../../images/user-avatar-80.png" width="80" height="80" alt="User upload" />
          </div>
          <button class="btn-sm bg-green-500 hover:bg-green-500 text-white">Change</button>
        </div>
      </section>
      <!-- Business Profile -->
      <section>
        <h3 class="text-xl leading-snug text-slate-800 font-bold mb-1">Personal info</h3>
        <div class="text-sm">Provide personal details so that your neighbours can reach you</div>
        <div class="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1" for="name">First Name</label>
            <input id="name" class="form-input w-full" type="text" />
          </div>
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1" for="last-name">Last Name</label>
            <input id="last-name" class="form-input w-full" type="text" />
          </div>
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1" for="Phone-number">phone number</label>
            <input id="Phone-number" class="form-input w-full" type="text" />
          </div>
        </div>
        <div class="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1" for="Birth-id">Birth Date</label>
            <input id="Birth-id" class="form-input w-full" type="text" />
          </div>
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1" for="Gender">Gender</label>
            <input id="Gender" class="form-input w-full" type="text" />
          </div>
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1" for="Government-id">Government ID</label>
            <input id="Government-id" class="form-input w-full" type="text" />
          </div>
        </div>
      </section>
      <!-- Email -->
      <section>
        <h3 class="text-xl leading-snug text-slate-800 font-bold mb-1">Email</h3>
        <div class="text-sm">Update your email and secure your account.</div>
        <div class="flex flex-wrap mt-5">
          <div class="mr-2">
            <label class="sr-only" for="email">email</label>
            <input id="email" class="form-input" type="email" />
          </div>
          <button class="btn border-slate-200 hover:border-slate-300 shadow-sm text-green-500">Change</button>
        </div>
      </section>
      <!-- Password -->
      <section>
        <h3 class="text-xl leading-snug text-slate-800 font-bold mb-1">Password</h3>
        <div class="text-sm">You can set a permanent password if you don't want to use temporary login codes.</div>
        <div class="mt-5">
          <button class="btn border-slate-200 shadow-sm text-white bg-green-500">Set New Password</button>
        </div>
      </section>
      <!-- Home address -->
      <h3 class="text-xl leading-snug text-slate-800 font-bold mb-1">Home Address</h3>
        <div class="text-sm">Use a permanent address where you can recieve mail.</div>
        <div class="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
          <div class="sm:w-2/3">
            <label class="block text-sm font-medium mb-1" for="Street-address">Street Adress</label>
            <input id="Street-address" class="form-input w-full" type="text" />
          </div>
          <div class="sm:w-2/3">
            <label class="block text-sm font-medium mb-1" for="Street-address">Street Address</label>
            <input id="Street-address" class="form-input w-full" type="text" />
          </div>
        </div>
        <div class="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1" for="Birth-id">City</label>
            <input id="Birth-id" class="form-input w-full" type="text" />
          </div>
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1" for="state-province">State/Provience</label>
            <input id="state-province" class="form-input w-full" type="text" />
          </div>
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1" for="Country">Country</label>
            <input id="Country" class="form-input w-full" type="text" />
          </div>
        </div>
        <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1" for="Postal-code">Postal Code</label>
            <input id="Postal-code" class="form-input w-full" type="text" />
          </div>
      <section>
        
      </section>
    </div>
    <!-- Panel footer -->
    <footer>
      <div class="flex flex-col px-6 py-5 border-t border-slate-200">
        <div class="flex self-end">
          <button class="btn border-slate-200 hover:border-slate-300 text-slate-600">Cancel</button>
          <button class="btn bg-green-500 hover:bg-green-500 text-white ml-3">Save Changes</button>
        </div>
      </div>
    </footer>
  </div>  
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'AccountPanel',
  setup() {

  const sync = ref('Off')

    return {
      sync,
    }
  }
}
</script>