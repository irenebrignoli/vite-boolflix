<script>
import { store } from "../store";

export default {
  name: "Search",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="search">
    <input v-model="store.search" type="text" />
    <button @click="$emit('doSearch')">Cerca</button>
  </div>
</template>

<style lang="scss" scoped>
.search {
  input {
    margin-right: 10px;
  }
}
</style>
