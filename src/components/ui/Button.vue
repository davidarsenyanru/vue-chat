<template>
  <button :class="['ui-button', { disabled }]" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: "UiButton",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style lang="scss" scoped>
.ui-button {
  color: #FFF;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  border-radius: 4px;
  background: var(--web-dark-purple, #B57FFF);
  box-shadow: 0 8px 15px 0 rgba(100, 100, 100, 0.08);
  border: none;
  width: 155px;
  padding: 12px 0;
  cursor: pointer;
  transition: 0.3s;

  @media (max-width: 768px) {
    width: 125px;
    padding: 8px 0;
  }

  &.disabled {
    background: #7F7780;
  }
}
</style>
