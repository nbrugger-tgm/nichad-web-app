<template>
  <div id="app">
    <b-navbar variant="primary" type="dark">
      <b-navbar-brand href="#">Ni Chad</b-navbar-brand>
    </b-navbar>
    <b-container fluid="lg" class="mt-4">
      <b-row v-if="isLoggedIn">
        <b-col>Logged in</b-col>
      </b-row>
      <b-row v-else class="justify-content-md-center">
        <b-col cols="12" md="6" lg="4" class="rounded border p-4">
          <LoginForm  v-if="authAction === AuthAction.LOGIN"/>
          <RegisterForm v-else/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { AuthAction } from "@/store/MainState";
import LoginForm from "@/components/LoginForm.vue";
import RegisterForm from "@/components/RegisterForm.vue";

@Component({
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    authAction() {
      return this.$store.getters.getAuthMethod;
    }
  },
  components: {
    LoginForm,
    RegisterForm
  },
  data() {
    return {
      AuthAction: AuthAction
    }
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
</style>
