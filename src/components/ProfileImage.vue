<template>
  <b-img :src="rawData" :alt="userId" rounded="circle" width="50" height="50" class="m-2"/>
</template>

<script>
export default {
  name: "ProfileImage",
  props: {
    userId: { type: String, default: null, required: true }
  },
  data() {
    return {
      rawData: null
    };
  },
  computed: {
    restURL() {
      return this.$store.getters.getRestURL;
    },
    userToken() {
      return this.$store.getters.getUserToken;
    },
    myImageURL() {
      return `http://${this.restURL}/users/${this.userId}/profile_image`;
    }
  },
  created() {
    const src = this.myImageURL;
    const options = {
      headers: {
        "X-SESSION": this.userToken
      }
    };

    fetch(src, options)
      .then(res => res.blob())
      .then(blob => {
        this.rawData = URL.createObjectURL(blob);
      });
  }
};
</script>

<style scoped></style>
