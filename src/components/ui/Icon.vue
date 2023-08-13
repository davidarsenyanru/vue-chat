
<template>
  <svg @click="$emit('click')" :style="{ height, width, minWidth: width, color }" >
    <use :href="sprite + '#' + value" />
  </svg>
</template>

<script>
import IconsSprite from '../../assets/svg/icons.svg'
export default {
  name: "UiIcon",
  props: {
    value: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    }
  },

  computed: {
    sprite () {
      return IconsSprite

    }
  }
}
</script>

<style scoped lang="scss">
  svg {
    cursor: pointer;
  }
</style>
