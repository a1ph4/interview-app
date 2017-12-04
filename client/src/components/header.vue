<template>
  <v-toolbar fixed dark class="cyan">
    <v-toolbar-title class="mr-4" id='logo' @click = "navigateTo ({name: 'hello'})">Interview App</v-toolbar-title>
    <!-- <v-toolbar-items>
        <v-btn flat drak >
            Browser
        </v-btn>
    </v-toolbar-items> -->
    
        <v-spacer></v-spacer>
    <v-toolbar-items>
        <v-btn v-if="!$store.state.userLoggedIn" flat dark @click = "navigateTo ({name: 'register'})">
            sign up
        </v-btn>
        <v-btn v-if="!$store.state.userLoggedIn" flat dark @click = "navigateTo ({name: 'login'})">
            login
        </v-btn>
        <v-btn v-if="$store.state.userLoggedIn" flat dark @click = "logOut">
            logout
        </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logOut () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({name: 'login'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#logo:hover{
    cursor: pointer;
    color:rgba(255,255,255,.85)
}
</style>
