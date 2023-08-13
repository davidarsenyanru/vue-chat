<template>
  <div v-if="currentMessages" class="chat">
    <div class="chat__content">
      <div class="chat__header">
        <div class="chat__header-item">
          <UiIcon @click="$router.push('/chat')" value="left" width="10px" height="22px" class="chat__header-icon" />
          <div class="chat__header-user">
            <div class="chat__header-avatar">
              {{ selectedUser.firstname.charAt(0).toUpperCase() }}
            </div>
            <p class="chat__header-name">{{ selectedUser.lastName }}</p>
          </div>
        </div>
        <div class="chat__header-item">
          <UiInput placeholder="Поиск" small search />
          <UiIcon width="20px" height="20px" value="sort" color="white" />
        </div>
      </div>
      <div class="chat__body" v-if="currentMessages.messageList.length > 0">
        <widgets-chat-message v-for="(item, key) in currentMessages.messageList" :item="item" :user="item.user" :key="key" />
      </div>
      <div v-else class="chat__body empty">
        У вас нет сообщений!
      </div>
    </div>
    <div class="chat__actions">
      <UiInput v-model="message" />
      <UiButton :disabled="!message">Отправить</UiButton>
    </div>
  </div>
</template>

<script>
import UiInput from "@/components/ui/Input.vue";
import { messages, users } from "@/jsons/messages";
import UiIcon from "@/components/ui/Icon.vue";

export default {
  name: "WidgetsChat",
  components: {
    UiIcon,
    UiInput,
    WidgetsChatMessage: () => import("@/components/widgets/ChatMessage.vue"),
    UiButton: () => import('@/components/ui/Button')
  },
  data() {
    return {
      message: '',
      messages,
      users
    }
  },

  computed: {
    currentMessages() {
      return this.messages.find(val => val.id === this.$route.params.id)
    },

    selectedUser() {
      return this.users.find(val => val.id === this.$route.params.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.chat {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 4px;;
  background: #2F2830;
  box-shadow: 0 4px 16px 0 rgba(100, 100, 100, 0.04);

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 16px;
    border-bottom: 1px solid #433945;

    @media (max-width: 768px) {
      padding: 10px;
    }

    &-item {
      display: flex;
      align-items: center;
      column-gap: 10px;
    }

    &-user {
      display: flex;
      align-items: center;
      column-gap: 10px;
    }

    &-icon {
      display: none;
      margin-right: 15px;

      @media (max-width: 768px) {
        display: block;
      }
    }

    &-avatar {
      min-width: 40px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #5b4c4c;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #FFF;
      font-weight: 600;

      @media (max-width: 768px) {
        min-width: 30px;
        width: 30px;
        height: 30px;
      }
    }

    &-name {
      color: #FFF;
      font-size: 20px;
      font-weight: 600;

      @media (max-width: 768px) {
        font-size: 16px;
      }
    }
  }

  &__body {
    padding: 16px;
    overflow-y: scroll;
    height: calc(100vh - 400px);
    display: flex;
    flex-direction: column;
    row-gap: 10px;

    @media (max-width: 768px) {
      padding: 10px;
      height: calc(100vh - 320px);
    }
  }

  &__actions {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 16px;
    border-top: 1px solid #433945;
    padding: 16px 16px 32px;

    @media (max-width: 768px) {
      gap: 10px;
      padding: 10px 10px 20px;
    }

    .input {
      width: 100%;
    }
  }

  .empty {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    column-gap: 10px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: #7F7780;
  }
}
</style>
