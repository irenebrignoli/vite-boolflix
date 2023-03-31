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
  <header></header>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

header {
  background-color: $header-bg-color;
  height: 80px;
}
</style>
