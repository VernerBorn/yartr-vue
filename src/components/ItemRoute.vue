<template>
  <tr class="table-routes__row">
    <td class="table-routes__col">{{ number }}</td>
    <td class="table-routes__col">
      <ul class="route-stop__list">
        <li class="route-stop route-stop--start">
          <span>{{ start }}</span>
        </li>
        <li class="route-stop route-stop--end">{{ end }}</li>
      </ul>
    </td>
  </tr>
</template>

<script>
export default {
  name: "ItemRoute",
  props: {
    number: String,
    start: String,
    end: String,
    type: String
  }
};
</script>

<style lang="scss">
.route-stop {
  position: relative;
  padding: 0;
  margin: 0;
  cursor: pointer;
  &::before {
    content: "";
    display: block;
    box-sizing: border-box;
    width: 8px;
    height: 8px;
    background-color: #ffffff;
    border-radius: 4px;
    border: #335eea 2px solid;
    position: absolute;
    left: calc(-1rem - 3px);
    top: 50%;
    transform: translateY(-50%);
  }
  &__list {
    position: relative;
    padding: 0;
    margin: 0;
    list-style: none;
    &::before {
      content: "";
      display: block;
      width: 2px;
      height: calc(100% - 1rem);
      background-color: #335eea;
      position: absolute;
      left: -1rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
