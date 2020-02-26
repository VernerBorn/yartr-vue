<template>
  <div id="app">
    <HeaderApp head="Траспорт Ярославля" />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderApp from "@/components/HeaderApp.vue";

export default {
  name: "Home",
  components: {
    HeaderApp
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: Neuron;
  src: url("./assets/fonts/Neuron-DemiBold.woff2") format("woff2"),
    url("./assets/fonts/Neuron-DemiBold.woff") format("woff");
  font-style: normal;
  font-weight: normal;
}

@font-face {
  font-family: Neuron;
  src: url("./assets/fonts/Neuron.woff2") format("woff2"),
    url("./assets/fonts/Neuron.woff") format("woff");
  font-style: normal;
  font-weight: bold;
}
body {
  font-size: 18px;
  font-family: Neuron, sans-serif;
}
</style>
