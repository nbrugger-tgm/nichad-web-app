<template>
  <div class="d-flex flex-column">
    <div class="d-flex">
      <ProfileImage :user-id="myId"/>
      <h4 class="mt-auto mb-auto flex-grow-1">{{myId}}</h4>
      <div class="inline mt-auto mb-auto mr-2"><b-button @click="logout" variant="danger">Logout</b-button></div>
    </div>
    <hr/>
    <b-input-group prepend="Filter" class="p-2 w-100">
      <b-form-input v-model="searchQuery" @change="filter"></b-form-input>
    </b-input-group>
    <hr/>
    <div class="flex-grow-1">
      <Contact v-for="chat in chats"  :key="chat.id" :chatId="chat" class="border-bottom" @select="select"/>
    </div>
    <hr/>
    <div>
      <b-button class="w-auto m-2 p-2 d-block flex-grow-1" variant="primary">New Chat 📝</b-button>
    </div>
  </div>
</template>

<script>
import ProfileImage from "@/components/ProfileImage";
import Contact from "@/components/Contact";
export default {
  name: "ContactList",
  components: {Contact, ProfileImage},
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
    },
    select(id) {
      this.$emit("select",id);
    }
  },
  computed: {
    myId() {
      return this.$store.getters.getUserId;
    },
    chats(){
      return ["Test 1","Test 2","FAKKA"];
    }
  }
}
</script>

<style scoped>
</style>