<script>
import { store } from "../store";
import Card from "./Card.vue";
import SectionTitle from "./SectionTitle.vue";

export default {
  name: "Main",
  components: {
    Card,
    SectionTitle,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <main>
    <div class="container">
      <section id="movies">
        <SectionTitle v-show="store.titleVisible == true" title="Movies" />
        <div class="card-container">
          <Card
            v-for="(movie, index) in store.movieList"
            :key="index"
            :imageM="movie.poster_path"
            :titleM="movie.title"
          />
        </div>
      </section>

      <section id="series">
        <SectionTitle v-show="store.titleVisible == true" title="Serie Tv" />
        <div class="card-container">
          <Card
            v-for="(serie, i) in store.serieList"
            :key="i"
            :imageS="serie.poster_path"
            :titleS="serie.name"
          />
        </div>
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

section {
  padding-top: 130px;
  color: $text-color;
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
    gap: 20px;
  }
}
</style>
