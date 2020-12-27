<template>
  <div class="h-100">
      <SplitGrid class="h-100" :columnMinSizes="{'0':100,'1':300}">
        <SplitGridArea class="h-100" :columnMinSize="100">
          <ContactList v-on:select="select" class="w-100 h-100"/>
        </SplitGridArea>
        <SplitGridGutter/>
        <SplitGridArea class="h-100">
          <Chat :chat-id="chatId" class="w-100 h-100"/>
        </SplitGridArea>
      </SplitGrid>
  </div>
</template>

<script lang="ts">
import ContactList from "@/components/ContactList";
import Chat from "@/components/Chat";
import { SplitGrid, SplitGridArea, SplitGridGutter } from 'vue-split-grid';

export default {
  name: "ChatFrame",
  components: {Chat, ContactList, SplitGrid,
    SplitGridArea,
    SplitGridGutter},
  methods: {
    select(selectedChat:string) {
      this.chatId = selectedChat;
    }
  },
  data() {
    return {
      chatId: null
    };
  }
};
</script>

<style scoped>

#contacts {
  float: left;
}
#chat{
  float:left;
}
.gutter.gutter-horizontal {
   cursor: ew-resize;
 }
.gutter.gutter-horizontal {
  float: left;
}
</style>