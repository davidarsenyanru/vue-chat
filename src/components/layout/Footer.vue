<template>
  <footer class="footer">
    <div class="container">
      <p class="footer__text">2023 @VUE-CHAT</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "layoutFooter",
}
</script>

<style scoped lang="scss">
.footer {
  width: 100%;
  height: 50px;
  background: #2F2830;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__text {
    color: white;
  }
}
</style>
