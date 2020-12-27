<template>
  <div>
    <ProfileImage :user-id="myId"/>
    <b-button @click="logout">Logout</b-button>
    <hr />
    <b-input-group prepend="Filter" class="p-2 w-100">
      <b-form-input v-model="searchQuery" @change="filter"></b-form-input>
    </b-input-group>
    <hr/>
  </div>
</template>

<script>
import ProfileImage from "@/components/ProfileImage";
export default {
  name: "ContactList",
  components: {ProfileImage},
  data() {
    return {
      searchQuery: null
    }
  },
  methods: {
    filter() {
      if(this.searchQuery == null || this.searchQuery == ""){
        console.log("Do not filter");
      }
    },
    logout() {
      this.$store.commit("LOGOUT");
    }
  },
  computed: {
    myId() {
      return this.$store.getters.getUserId;
    }
  }
}
</script>

<style scoped>
  hr{
    margin: 0;
  }
</style>