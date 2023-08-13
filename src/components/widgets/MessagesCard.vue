<template>
  <router-link class="messages-card"  tag="div" :to="'/chat/' + data.id" exact>
    <div class="messages-card__wrap">
      <div class="messages-card__wrap-avatar">
        {{ data.firstname.charAt(0).toUpperCase() }}
      </div>
      <div class="messages-card__wrap-col">
        <p class="messages-card__wrap-name">{{ data.lastName }}</p>
        <p class="messages-card__wrap-text">
          {{ data.username }}
        </p>
      </div>
    </div>
    <p class="messages-card__date">{{ data.date }}</p>
  </router-link>
</template>

<script>
export default {
  name: "MessagesCard",
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.messages-card {
  position: relative;
  padding: 16px;
  transition: 0.3s;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 10px;
  }

  &.router-link-active {
    background: rgba(181, 127, 255, 0.05);
  }

  &__wrap {
    display: flex;
    gap: 8px;

    &-avatar {
      min-width: 48px;
      height: 48px;
      border-radius: 100%;
      background-color: #5b4c4c;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #FFF;
      font-size: 20px;
      font-weight: 600;
    }

    &-col {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    &-name {
      white-space: nowrap;
      color: #FFF;
      font-size: 14px;
      font-weight: 700;
      line-height: 18px;
      text-overflow: ellipsis;
      max-width: 180px;
      overflow: hidden;

      @media (max-width: 768px) {
        font-size: 12px;
      }
    }

    &-text {
      white-space: nowrap;
      color: #7F7780;
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      text-overflow: ellipsis;
      max-width: 215px;
      overflow: hidden;

      @media (max-width: 768px) {
        font-size: 12px;
      }
    }
  }

  &__date {
    position: absolute;
    top: 16px;
    right: 16px;
    color: #7F7780;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
  }
}
</style>
