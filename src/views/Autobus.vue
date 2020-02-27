<template>
  <ListRoutes :routes="autobusRoutes" />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ListRoutes from "@/components/ListRoutes.vue";

export default {
  name: "Autobus",
  components: {
    ListRoutes
  },
  computed: mapGetters(["autobusRoutes"]),
  methods: mapActions(["fetchRoutes"]),
  async mounted() {
    this.fetchRoutes();
  }
};
</script>
