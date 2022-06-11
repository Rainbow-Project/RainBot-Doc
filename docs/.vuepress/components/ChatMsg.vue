<template>
  <div class="chat-item" :class="[onright ? 'right-chat' : 'left-chat']">
    <div
      v-if="avatar"
      :style="{ 'background-image': `url(${avatar})` }"
      class="chat-avatar"
    ></div>
    <div v-else class="chat-avatar chat-avatar-text">{{ name[0] }}</div>
    <div class="chat-content">
      <div class="chat-name">{{ name }}</div>
      <div class="bubble">
        <div class="bubble-arrow"></div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>

export default ({
  name: 'ChatMsg',
  props: {
    name: { type: String, required: true },
    avatar: String,
    onright: Boolean,
  },
})
</script>

<style scoped>
.chat-content {
  font-size: 14px;
}
</style>
