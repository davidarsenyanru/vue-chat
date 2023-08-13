<template>
  <div id="app">
    <LayoutDefault>
      <router-view/>
    </LayoutDefault>
  </div>
</template>

<style lang="scss">
@import "src/assets/style/global";
</style>
<script setup>
import LayoutDefault from "@/layout/default.vue";
</script>
