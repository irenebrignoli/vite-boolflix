<script>
import axios from "axios";
import { store } from "./store.js";

import Header from "./components/Header.vue";
import MovieList from "./components/MovieList.vue";

export default {
  components: {
    Header,
    MovieList,
  },
  data() {
    return {
      store,
    };
  },
  created() {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=38108238e55a723ea029b5154ff23a5b&query=constantine"
      )
      .then((response) => {
        this.store.movieList = response.data.results;
        console.log(response.data.results);
      });
  },
};
</script>

<template>
  <Header />
  <main>
    <MovieList />
  </main>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
