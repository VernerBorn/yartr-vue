<template>
  <section class="routes">
    <table class="table-routes">
      <tbody>
        <tr class="table-routes__row">
          <td class="table-routes__col">№</td>
          <td class="table-routes__col">Направление</td>
        </tr>
        <ItemRoute
          v-for="route in routes"
          :key="route.number"
          :number="route.number"
          :start="route.start"
          :end="route.end"
        />
      </tbody>
    </table>
  </section>
</template>

<script>
import ItemRoute from "@/components/ItemRoute.vue";
export default {
  name: "ListRoutes",
  components: { ItemRoute },
  props: {
    routes: []
  }
};
</script>

<style lang="scss">
.routes {
  margin: 1rem 0;
  padding: 1rem;
  background-color: #fff;
  border: 1px solid #f1f4f8;
}
.table-routes {
  text-align: left;
  border-collapse: separate;
  &__col {
    border-bottom: 1px solid #f1f4f8;
    padding: 0.5rem 1rem;
    &:first-child {
      text-align: center;
    }
    &:last-child {
      width: 100%;
    }
  }
  &__row:last-child &__col {
    border-bottom: none;
    padding-bottom: 0;
  }
  &__row:first-child &__col {
    padding-top: 0;
  }
}
</style>
