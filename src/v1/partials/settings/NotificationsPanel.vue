<template>
  <div class="grow">

    <!-- Panel body -->
    <div class="p-6 space-y-6">
      <h2 class="text-2xl text-slate-800 font-bold mb-5">My Notifications</h2>

      <!-- General -->
      <section>
        <h3 class="text-xl leading-snug text-slate-800 font-bold mb-1">General</h3>
        <ul>
          <li class="flex justify-between items-center py-3 border-b border-slate-200">
            <!-- Left -->
            <div>
              <div class="text-slate-800 font-semibold">Account Support</div>
              <div class="text-sm">Recieve messages about your account,legal notifications,security and privacy matters and customer support</div>
            </div>
            <!-- Right -->
            <div class="flex items-center ml-4">
              <div class="text-sm text-slate-400 italic mr-2">{{comments}}</div>
              <div class="form-switch">
                <input type="checkbox" id="comments" class="sr-only" v-model="comments" true-value="On" false-value="Off" />
                <label class="bg-slate-400" for="comments">
                  <span class="bg-white shadow-sm" aria-hidden="true"></span>
                  <span class="sr-only">Enable smart sync</span>
                </label>
              </div>
            </div>
          </li>
          <li class="flex justify-between items-center py-3 border-b border-slate-200">
            <!-- Left -->
            <div>
              <div class="text-slate-800 font-semibold">Messages</div>
              <div class="text-sm">Recieve messages from neighbours and guests, including food requests</div>
            </div>
            <!-- Right -->
            <div class="flex items-center ml-4">
              <div class="text-sm text-slate-400 italic mr-2">{{messages}}</div>
              <div class="form-switch">
                <input type="checkbox" id="messages" class="sr-only" v-model="messages" true-value="On" false-value="Off" />
                <label class="bg-slate-400" for="messages">
                  <span class="bg-white shadow-sm" aria-hidden="true"></span>
                  <span class="sr-only">Enable smart sync</span>
                </label>
              </div>
            </div>
          </li>
          <li class="flex justify-between items-center py-3 border-b border-slate-200">
            <!-- Left -->
            <div>
              <div class="text-slate-800 font-semibold">Promotion and tips</div>
              <div class="text-sm">Recieve promotions, surveys ,product updates and inspiration form</div>
            </div>
            <!-- Right -->
            <div class="flex items-center ml-4">
              <div class="text-sm text-slate-400 italic mr-2">{{mentions}}</div>
              <div class="form-switch">
                <input type="checkbox" id="mentions" class="sr-only" v-model="mentions" true-value="On" false-value="Off" />
                <label class="bg-slate-400" for="mentions">
                  <span class="bg-white shadow-sm" aria-hidden="true"></span>
                  <span class="sr-only">Enable smart sync</span>
                </label>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>

    <!-- Panel footer -->
    <footer>
      <div class="flex flex-col px-6 py-5 border-t border-slate-200">
        <div class="flex self-end">
          <button class="btn border-slate-200 hover:border-slate-300 text-slate-600">Cancel</button>
          <button class="btn theme-bg hover:bg-indigo-600 text-white ml-3">Save Changes</button>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'NotificationsPanel',
  setup() {

  const comments = ref('On')
  const messages = ref('On')
  const mentions = ref('Off')

    return {
      comments,
      messages,
      mentions,
    }
  }
}
</script>