<template>
  <div class="qq-chat">
    <div class="qq-header">
      <span class="chat-title">{{ title }}</span>
    </div>
    <div class="chat-area">
      <slot></slot>
    </div>
  </div>
</template>


<script>
export default {
  name: 'ChatWindow',
  props: {
    title: String,
  },
};
</script>

<style scoped>
.qq-chat {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  border-radius: 6px;
  background-color: var(--codeBg);
}

.custom-container .qq-chat {
  margin: 16px auto;
}

.qq-header {
  padding: 12px 0;
  font-weight: bold;
  text-align: center;
  background-color: var(--headerColor);
  color: var(--textColor);
}

</style>

<style>
.chat-item {
  margin-top: 15px;
  margin-bottom: 15px;
}

.left-chat {
  display: flex;
  align-items: flex-start;
}

.right-chat {
  display: flex;
  align-items: flex-start;
  flex-direction: row-reverse;
}

.chat-content {
  display: flex;
  flex-direction: column;
  max-width: 65%;
}

.chat-name {
  margin-bottom: 5px;
  font-size: 12px;
  color: var(--textColor);
}

.chat-avatar {
  display: inline-block;
  width: 42px;
  height: 42px;
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 50%;
  background-color: var(--textColor);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.chat-avatar-text {
  text-align: center;
  line-height: 42px;
  font-size: 24px;
  font-weight: bold;
  background: var(--textColor);
}

.bubble {
  position: relative;
  padding: 12px;
  min-height: 1em;
  min-width: 1em;
  border-radius: 15px;
  overflow-wrap: break-word;
  background-color: var(--borderColor);
}
</style>