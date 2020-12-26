<template>
  <b-form @submit.prevent="login">
    <h3>Login</h3>
    <b-form-group id="input-group-1" label="User ID:" label-for="id-input">
      <b-form-input
        id="input-1"
        v-model="userID"
        placeholder="Enter alias"
        required
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-3" label="Password:" label-for="input-3">
      <b-form-input id="input-3" v-model="password" required type="password"></b-form-input>
    </b-form-group>
    <b-button type="submit" variant="primary" class="w-100">
      <div v-if="!loading">Login</div>
      <b-spinner v-else></b-spinner>
    </b-button>
    <b-link @click="switchToRegister">No account? Create one!</b-link>
    <ErrorPopup
      title="Login failed"
      :text="errMessage"
    />
  </b-form>
</template>

<script lang="ts">
import { AuthAction } from "@/store/MainState";
import ErrorPopup from "@/components/ErrorPopup";

export default {
  name: "LoginForm",
  components: {ErrorPopup},
  methods: {
    login() {
      this.$store.dispatch("login", this);
    },
    switchToRegister: function() {
      this.$store.commit("SWITCH_AUTH_METHOD_CHANGE", AuthAction.REGISTER);
    },
    onError(res: LoginResult) {
      this.$bvModal.show("error-modal");
      this.errMessage = res;
    },
    onRequestError(stat: number){
      this.$bvmodal.show("error-modal");
      this.errMessage = "Status code : " + stat;
    }
  },
  data() {
    return {
      userID: null,
      password: null,
      errMessage: null
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
