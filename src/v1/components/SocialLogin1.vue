<template>
    <AuthButton :method="method" company="google" classes="border-red-500 text-red-500 hover:text-white hover:bg-red-700"/>
    <AuthButton :method="method" company="facebook" classes="border-blue-900 text-blue-900 hover:text-white hover:bg-blue-800"/>
    <AuthButton v-if="false" :method="method" company="apple" disabled/>
    <AuthButton v-if="false" :method="method" company="twitter" disabled/>
</template>

<script>
import AuthButton from './AuthButton.vue';

export default {
  name: 'SocialAuth',
  props: [
    'method'
  ],
  components: {
    AuthButton,
  },
  data() {
    return {
    //  method: "login",
    };
  },
  methods: {
    changeMethod() {
      this.method = this.otherMethod;
    },
  },
  computed: {
    otherMethod() {
      return this.method === 'login' ? 'sign up' : 'login';
    },
  },
}
</script>
