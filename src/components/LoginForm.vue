<template>
  <b-form @submit="login">
    <h3>Login</h3>
    <b-form-group id="input-group-1" label="User ID:" label-for="id-input">
      <b-form-input
        id="input-1"
        v-model="userID"
        type="email"
        placeholder="Enter alias"
        required
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-3" label="Password:" label-for="input-3">
      <b-form-input id="input-3" v-model="password" required type="password"></b-form-input>
    </b-form-group>
    <b-button type="submit" variant="primary" class="w-100">Login</b-button>
    <b-link @click="switchToRegister">No account? Create one!</b-link>
  </b-form>
</template>

<script>
import { AuthAction } from "@/store/MainState";

export default {
  name: "LoginForm",
  methods: {
    login() {
      console.log("lol");
    },
    switchToRegister: function() {
      this.$store.commit("SWITCH_AUTH_METHOD_CHANGE", AuthAction.REGISTER);
    }
  },
  data() {
    return {
      userID: null,
      userName: null,
      password: null
    };
  }
};
</script>

<style scoped></style>
