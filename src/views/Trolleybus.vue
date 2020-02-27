<template>
  <ListRoutes :routes="trolleybusRoutes" />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ListRoutes from "@/components/ListRoutes.vue";

export default {
  name: "Trolleybus",
  components: {
    ListRoutes
  },
  computed: mapGetters(["trolleybusRoutes"]),
  methods: mapActions(["fetchRoutes"]),
  async mounted() {
    this.fetchRoutes();
  }
};
</script>
