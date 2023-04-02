<script>
import { store } from "../store";
import Search from "./Search.vue";

export default {
  name: "Header",
  components: {
    Search,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <header>
    <div class="logo">Boolflix</div>
    <Search />
  </header>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

header {
  background-color: $header-bg-color;
  height: 80px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    color: red;
    font-size: 25px;
    text-transform: uppercase;
  }
}
</style>
