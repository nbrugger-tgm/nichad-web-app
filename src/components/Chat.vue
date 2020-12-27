<template>
  <div>
    <h2>Chat Frame</h2>
    <p v-if="chatId == null">Select a chat</p>
    <p v-else>An amazing chat ({{ chatId }})</p>
  </div>

</template>

<script>
export default {
  name: "Chat",
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