<template>
<v-layout column>
  <v-flex xs6 offset-xs3>
    <div class="white elevation-2">
      <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <input type='email' name='email' placeholder='email' v-model='email'/><br>
          <input type='password' name='password' placeholder='password' v-model='password'/><br>
          <div v-html='err' ></div><br>
          <v-btn class="cyan" @click='register'>Register</v-btn>
        </div>
    </div>
  </v-flex>
</v-layout>
</template>

<script>
import authService from '@/services/authService'
export default {
  name: 'register',
  data () {
    return {
      email: '',
      password: '',
      err: null
    }
  },
  methods: {
    async register () {
      try {
        await authService.register({
          email: this.email,
          password: this.password
        })
      } catch (err) {
        this.err = err.response.data.err
      }
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

</style>
