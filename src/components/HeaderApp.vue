<template>
  <header class="header">
    <div class="container container--header">
      <h1 class="header__head">{{ head }}</h1>
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
  height: 60px;
  background-color: #fff;
  &__head {
    font-size: 2rem;
    margin: 0;
  }
}
.container--header {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
}
</style>
