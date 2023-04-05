<script>
import { store } from "./store.js";
import axios from "axios";
import "@fontsource/bebas-neue";

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
    getCalls() {
      this.getMovies();
      this.getSeries();
    },
    getMovies() {
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: this.store.apiKey,
            query: this.store.search,
            language: "it-IT",
          },
        })
        .then((response) => {
          this.store.movieList = response.data.results;
        });
    },
    getSeries() {
      axios
        .get("https://api.themoviedb.org/3/search/tv", {
          params: {
            api_key: this.store.apiKey,
            query: this.store.search,
            language: "it-IT",
          },
        })
        .then((response) => {
          this.store.serieList = response.data.results;
        });
    },
    getCasting() {
      axios
        .get("https://api.themoviedb.org/3/movie/1726/credits", {
          params: {
            api_key: this.store.apiKey,
            //query: this.store.search,
            //language: "it-IT",
          },
        })
        .then((response) => {
          this.store.castingList = response.cast;
        });

      console.log(this.store.castingList);
    },
  },
};
</script>

<template>
  <Header @doSearch="getCalls" />
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
