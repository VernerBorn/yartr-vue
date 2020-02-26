<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <h1 class="header__head">{{ head }}</h1>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderApp",
  props: {
    head: String
  }
};
</script>

<style lang="scss">
.header {
  height: 90px;
  background-color: #fff;
}
</style>
