<template>
  <div class="messages">
    <div class="messages__header">
      <h2 class="messages__header-title">Сообщения</h2>
      <UiInput placeholder="Поиск" small search />
      <UiIcon width="20px" height="20px" value="sort" color="white" />
    </div>
    <div class="messages__list">
      <widgets-messages-card v-for="item in users" :data="item" :key="item.id" />
    </div>
  </div>
</template>

<script>
import { users } from "@/jsons/messages";

export default {
  name: "WidgetsMessages",

  components: {
    UiIcon: () => import('@/components/ui/Icon.vue'),
    UiInput: () => import('@/components/ui/Input.vue'),
    WidgetsMessagesCard: () => import('@/components/widgets/MessagesCard')
  },

  data() {
    return {
      users
    }
  }
}
</script>

<style lang="scss" scoped>
.messages {
  width: 350px;
  min-width: 350px;
  height: calc(100vh - 152px);
  overflow: hidden;
  padding-bottom: 16px;
  border-radius: 4px;
  background: #2F2830;
  box-shadow: 0 10px 17px 0 rgba(100, 100, 100, 0.12);

  @media (max-width: 768px) {
    width: 100%;
    height: calc(100vh - 138px);
  }

  @media (max-width: 500px) {
    width: 100%;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    column-gap: 10px;

    @media (max-width: 768px) {
      padding: 10px;
    }

    &-title {
      color: #FFF;
      font-size: 20px;
      font-weight: 700;
      line-height: 140%;

      @media (max-width: 768px) {
        font-size: 18px;
      }
    }
  }

  &__list {
    height: calc(100vh - 180px);
    overflow-y: auto;
    .messages-card:not(:last-child) {
      border-bottom: 1px solid #433945;
    }
  }
}
</style>
