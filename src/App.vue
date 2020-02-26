<template>
  <div id="app">
    <HeaderApp head="Траспорт Ярославля" />
    <main>
      <div class="container">
        <FormSearch />
        <NavApp />
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import HeaderApp from "@/components/HeaderApp.vue";
import FormSearch from "@/components/FormSearch.vue";
import NavApp from "@/components/NavApp.vue";

export default {
  name: "Home",
  components: {
    HeaderApp,
    FormSearch,
    NavApp
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: Neuron;
  src: url("./assets/fonts/Neuron-DemiBold.woff2") format("woff2"),
    url("./assets/fonts/Neuron-DemiBold.woff") format("woff");
  font-style: normal;
  font-weight: bold;
}

@font-face {
  font-family: Neuron;
  src: url("./assets/fonts/Neuron.woff2") format("woff2"),
    url("./assets/fonts/Neuron.woff") format("woff");
  font-style: normal;
  font-weight: normal;
}
body {
  padding: 0;
  margin: 0;
  background-color: #f9fbfd;
  font-size: 16px;
  font-family: Neuron, sans-serif;
  color: #161c2d;
}
.container {
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1rem;
}
</style>
