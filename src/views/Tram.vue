<template>
  <ListRoutes :routes="tramRoutes" />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ListRoutes from "@/components/ListRoutes.vue";

export default {
  name: "Tram",
  components: {
    ListRoutes
  },
  computed: mapGetters(["tramRoutes"]),
  methods: mapActions(["fetchRoutes"]),
  async mounted() {
    this.fetchRoutes();
  }
};
</script>
