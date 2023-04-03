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
        axios
          .get("https://api.themoviedb.org/3/search/movie", {
            params: {
              api_key: this.store.apiKey,
              query: this.store.search,
            },
          })
          .then((response) => {
            this.store.movieList = response.data.results;
          });
      }

      axios
        .get("https://api.themoviedb.org/3/search/tv", {
          params: {
            api_key: this.store.apiKey,
            query: this.store.search,
          },
        })
        .then((response) => {
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
