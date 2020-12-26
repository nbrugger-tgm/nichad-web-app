<template>
  <b-modal
      ok-only
      ok-variant="danger"
      header-bg-variant="danger"
      header-text-variant="light"
      :title="title"
      variant="danger"
      id="error-modal"
  >
    <p>{{text}}</p>
  </b-modal>
</template>

<script lang="ts">
export default {
  name: "ErrorPopup",
  props:["title","text"]
}
</script>

<style scoped>

</style>