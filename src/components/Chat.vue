<template>
  <div>
    <p v-if="chatId == null">Select a chat</p>
    <div class="d-flex flex-col" v-else>
      <Contact :chatId="chatId"/>
      <hr/>
    </div>
  </div>

</template>

<script>
import Contact from "@/components/Contact";
export default {
  name: "Chat",
  components: {Contact},
  props: {
    chatId: {
      type: String,
      default: null,
      required: false
    }
  }
}
</script>

<style scoped>

</style>