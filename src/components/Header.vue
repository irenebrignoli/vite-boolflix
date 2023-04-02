<script>
import { store } from "../store";

export default {
  name: "Header",
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
    <div class="search">
      <input v-model="store.search" type="text" />
      <button @click="$emit('doSearch')">Cerca</button>
    </div>
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
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;

  .logo {
    color: red;
    font-size: 25px;
    text-transform: uppercase;
  }
}
</style>
