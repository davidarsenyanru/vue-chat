<template>
  <div :class="['chat-message', { user }]">
    <div class="chat-message__card">
      {{ item.text }}
      <p class="chat-message__card-date">{{ item.time }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "WidgetsChatMessage",

  props: {
    item: {
      type: Object,
      default: () => {},
    },
    user: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style lang="scss" scoped>
.chat-message {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  $this: &;

  &.user {
    align-items: flex-start;

    #{$this}__card {
      background: #251F26;
    }
  }

  &__card {
    border-radius: 10px;
    background: #B57FFF;
    padding: 12px 16px 6px;
    color: #FFF;
    font-size: 14px;
    font-weight: 400;
    max-width: 80%;

    @media (max-width: 768px) {
      padding: 8px 10px;
      font-size: 12px;
    }

    &-date {
      width: 100%;
      text-align: end;
      margin-top: 5px;
      color: rgba(255, 255, 255, 0.50);
      font-size: 12px;
    }
  }
}
</style>
