<template>
  <div class="d-flex" @click="$emit('select',chatId)">
    <div>
      <!--ToDo-->
      <ProfileImage user-id="nils1"/>
    </div>
    <div class="flex-grow-1">
      <h3>name</h3>
      <p class="m-auto">last message</p>
    </div>
  </div>
</template>

<script lang="ts">
import ProfileImage from "@/components/ProfileImage.vue";
export default {
  name: "Contact",
  components: {ProfileImage},
  props: {
    chatId: {type: String, default: null, required: false}
  }
}
</script>

<style scoped>

</style>