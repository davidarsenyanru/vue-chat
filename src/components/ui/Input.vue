<template>
  <div :class="['input', {'input-small': small}]">
    <UiIcon
        class="input__search-icon"
        v-if="search"
        value="search"
        width="14px"
        height="15px"
    />
    <input
        type="text"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
import UiIcon from "@/components/ui/Icon.vue";

export default {
  name: "UiInput",
  components: { UiIcon },

  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    small: {
      type: Boolean,
      default: false
    },
    search: {
      type: Boolean,
      default: false
    },
  }
}
</script>

<style scoped lang="scss">
.input {
  border-radius: 4px;
  border: 1px solid #3F3940;
  background: #251F26;
  display: flex;
  align-items: center;

  &__search-icon {
    padding-left: 15px;
  }

  input {
    border-radius: 4px;
    background: #251F26;
    outline: none;
    height: 51px;
    display: flex;
    align-items: center;
    border: none;
    color: white;
    width: 100%;
    padding: 0 15px;

    &::placeholder {
      color: #808080;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
}

.input-small {
  height: 26px;
  input {
    height: 26px;
    padding: 0 8px;
  }
}
</style>
