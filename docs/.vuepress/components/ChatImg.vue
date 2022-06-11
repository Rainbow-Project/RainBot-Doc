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
      <img :src="src" />
    </div>
  </div>
</template>

<script>

export default({
  name: 'ChatImg',
  props: {
    name: { type: String, required: true },
    avatar: String,
    src: { type: String, required: true },
    onright: Boolean,
  },
})
</script>

<style scoped>
.chat-content > img {
  max-width: 300px;
  max-height: 350px;
  border-radius: 10px;
  display: block;
  @media (min-width: 850px) {
    max-width: 300px !important;
  }
  @media (max-width: 850px) {
    max-width: 100% !important;
  }
  max-height: 350px !important;
}
</style>
