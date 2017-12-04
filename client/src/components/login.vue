<template>
<v-layout column>
  <v-flex xs6 offset-xs3>
    <div class="white elevation-2">
      <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field type='email' name='email' label='Email' v-model='email' light /><br>
          <v-text-field type='password' name='password' label='Password' v-model='password' light/><br>
          <div v-html='err' ></div><br>
          <v-btn class="cyan" @click='login' dark>Login</v-btn>
        </div>
    </div>
  </v-flex>
</v-layout>
</template>

<script>
import authService from '@/services/authService'
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
      err: null
    }
  },
  methods: {
    async login () {
      try {
        const res = await authService.login({
          email: this.email,
          password: this.password
        })
        console.log(res)
        const route = {
          name: res.data.route
        }
        this.$store.dispatch('setToken', res.data.token)
        this.$store.dispatch('setUser', res.data.user)
        this.$router.push(route)
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
