<script>
import { store } from "./store.js";
import axios from "axios";

import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

export default {
  components: {
    Header,
    Main,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getMovies() {
      this.store.titleVisible = true;

      if (store.search != "") {
        let urlMovies =
          "https://api.themoviedb.org/3/search/movie?api_key=38108238e55a723ea029b5154ff23a5b&query=" +
          store.search;
        axios.get(urlMovies).then((response) => {
          this.store.movieList = response.data.results;
        });
      }

      let urlSeries =
        "https://api.themoviedb.org/3/search/tv?api_key=38108238e55a723ea029b5154ff23a5b&query=" +
        store.search;
      axios.get(urlSeries).then((response) => {
        this.store.serieList = response.data.results;
      });
    },
  },
};
</script>

<template>
  <Header @doSearch="getMovies" />
  <Main />
</template>

<style lang="scss">
@use "./styles/general.scss";

.no-results {
  text-align: center;
  padding-top: 130px;
  font-weight: 700;
  font-size: 30px;
}
</style>
