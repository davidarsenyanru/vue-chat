<template>
  <div class="chat-page">
    <div class="container">
      <div class="chat-page__content desktop">
        <WidgetsMessages />
        <div class="not-chat" v-if="!$route.params.id">
          <UiIcon value="chat" width="65px" height="64px" />
          Выберите пользователя чтобы увидеть переписку
        </div>
        <router-view v-else />
      </div>
      <div class="chat-page__content mobile">
        <router-view v-if="$route.params.id" />
        <WidgetsMessages v-else />
      </div>
    </div>
  </div>
</template>

<script>
import WidgetsMessages from "@/components/widgets/Messages.vue";
import UiIcon from "@/components/ui/Icon.vue";

export default {
  name: 'HomeView',
  components: { UiIcon, WidgetsMessages },
}
</script>

<style scoped lang="scss">
.chat-page {
  padding: 17px 0;
  background: #251F26;

  @media (max-width: 768px) {
    padding: 10px 0;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    column-gap: 15px;

    @media (max-width: 768px) {
      column-gap: 10px;
    }
  }

  .mobile {
    display: none;
  }

  @media (max-width: 768px) {
    .desktop {
      display: none;
    }
    .mobile {
      display: flex;
    }
  }

  .not-chat {
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
