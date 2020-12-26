<template>
  <b-form @submit.prevent="register">
    <h2>Register</h2>
    <b-form-group
      id="input-group-1"
      label="User ID:"
      label-for="id-input"
      description="Used to identify you. Your friends need this ID to text you"
    >
      <b-form-input
        id="input-1"
        v-model="userID"
        placeholder="Enter alias"
        required
      ></b-form-input>
    </b-form-group>

    <b-form-group
      id="input-group-2"
      label="Display Name:"
      label-for="display-name"
      description="This is the name your friends will see"
    >
      <b-form-input
        id="display-name"
        v-model="userName"
        placeholder="Enter name"
        required
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-3" label="Password:" label-for="input-3">
      <b-form-input
        type="password"
        id="input-3"
        v-model="password"
        required
      ></b-form-input>
    </b-form-group>
    <b-button type="submit" variant="primary" class="w-100 align-text-top">
      <div class="p-1 h-100 pt-auto pb-auto" v-if="!loading">Create account</div>
      <b-spinner label="Loading..." v-else></b-spinner>
    </b-button>
    <b-link @click="switchToLogin">I have an account already</b-link>
  </b-form>
</template>

<script>
import { AuthAction } from "@/store/MainState";

export default {
  name: "RegisterForm",
  methods: {
    switchToLogin() {
      this.$store.commit("SWITCH_AUTH_METHOD_CHANGE", AuthAction.LOGIN);
    },
    register() {
      this.$store.dispatch("register", this);
    }
  },
  data() {
    return {
      password: null,
      userName: null,
      userID: null
    };
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    }
  }
};
</script>

<style scoped></style>
