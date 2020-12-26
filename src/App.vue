<template>
  <div id="app">
    <b-navbar variant="primary" type="dark">
      <b-navbar-brand href="#">Ni Chad</b-navbar-brand>
    </b-navbar>
    <ChatFrame v-if="isLoggedIn"/>
    <b-container v-else fluid="lg" class="mt-4 w-100">
      <b-row class="justify-content-md-center">
        <b-col cols="12" md="6" lg="4" class="rounded border p-4">
          <LoginForm v-if="authAction === AuthAction.LOGIN"/>
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
import ChatFrame from "@/components/ChatFrame.vue";
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
    RegisterForm,
    ChatFrame
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
