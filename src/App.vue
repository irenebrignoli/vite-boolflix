<script>
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
};
</script>

<template>
  <Header />
  <main>
    <div class="container">
      <!-- <div v-if="store.search == ''" class="no-results">
        Non ci sono risultati
      </div> -->
      <MovieList />
    </div>
  </main>
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
