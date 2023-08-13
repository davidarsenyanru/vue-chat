<template>
  <div>
    <LayoutHeader />
    <slot />
    <LayoutFooter />
  </div>
</template>

<script>
import LayoutHeader from "@/components/layout/Header.vue";
import LayoutFooter from "@/components/layout/Footer.vue";

export default {
  name: "LayoutDefault",
  components: { LayoutFooter, LayoutHeader }
}
</script>

<style scoped>

</style>
