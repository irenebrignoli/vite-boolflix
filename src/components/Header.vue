<script>
import { store } from "../store";
import axios from "axios";

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
  methods: {
    getMovies() {
      //let urlApi = "https://api.themoviedb.org/3/search/movie";
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=38108238e55a723ea029b5154ff23a5b&query=constantine"
        )
        .then((response) => {
          this.store.movieList = response.data.results;
          console.log(response.data.results);
        });
    },
  },
  created() {
    this.getMovies();
  },
};
</script>

<template>
  <header>
    <div class="logo">Boolflix</div>
    <Search @doSearch="getMovies" />
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
