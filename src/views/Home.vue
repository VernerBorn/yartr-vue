<template>
  <ListRoutes :key="routes.number" :routes="routes" />
</template>

<script>
import ListRoutes from "@/components/ListRoutes.vue";
export default {
  name: "Home",
  components: {
    ListRoutes
  },
  data: function() {
    return {
      routes: [
        { number: "1", start: "Ул. Свердлова", end: "Ул. Чкалова" },
        { number: "5", start: "Ул. Чкалова", end: "Больница №9" },
        { number: "6", start: "Ул. Автозаводская", end: "Ул. Блюхера" },
        { number: "7", start: "Ул. Свердлова", end: "Ул. Волгоградская" },
        { number: "9", start: "Ул. Блюхера", end: "Ул. Свердлова" }
      ]
    };
  }
};
</script>
