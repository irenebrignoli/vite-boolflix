<script>
import { store } from "../store";

export default {
  name: "Header",
  emits: ["doSearch"],
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <header>
    <a href="#" class="logo"><div>Boolflix</div></a>
    <div class="search">
      <input
        @keyup.enter="$emit('doSearch')"
        v-model="store.search"
        type="text"
        placeholder="Cerca..."
      />
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
  z-index: 99;

  .logo {
    color: red;
    font-size: 40px;
    text-transform: uppercase;
    font-family: "Bebas Neue", cursive;
    text-decoration: none;
  }

  .search {
    input {
      margin-right: 10px;
      color: #fff;
      background-color: $main-bg-color;
      border: none;
      padding: 5px;
      border-radius: 3px;
    }

    button {
      padding: 5px;
      border-radius: 3px;
      font-weight: 600;
      color: #fff;
      background-color: rgb(102, 102, 102);

      &:hover {
        cursor: pointer;
        background-color: lighten($color: rgb(102, 102, 102), $amount: 10%);
      }
    }
  }
}
</style>
