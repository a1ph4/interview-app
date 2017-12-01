<template>
  <div>
    <input type="email" name="email" placeholder="email" v-model="email"/><br>
    <input type="password" name="password" placeholder="password" v-model="password"/><br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import authService from "@/services/authService";
export default {
  name: "register",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async register() {
      const res = await authService.register({
        email: this.email,
        password: this.password
      });
      console.log(res.data);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
