<script>
import axios from "axios";
import { store } from "./store.js";

export default {
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

<template></template>

<style lang="scss" scoped></style>
