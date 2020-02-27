<template>
  <div class="">
    <ListRoutes :routes="allRoutes" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ListRoutes from "@/components/ListRoutes.vue";

export default {
  name: "Home",
  components: {
    ListRoutes
  },
  computed: mapGetters(["allRoutes"]),
  methods: mapActions(["fetchRoutes"]),
  async mounted() {
    this.fetchRoutes();
  }
};
</script>
