<template>
  <div>
    {{rootStop}}
    <ul class="route-stop__list">
      <RouterStop :stop="stop" />
    </ul>
  </div>
</template>
<script>
import ItemRoute from "@/components/RouterStop.vue";
export default {
  name: "RouteStopList",
  components: { RouterStop }
};
</script>