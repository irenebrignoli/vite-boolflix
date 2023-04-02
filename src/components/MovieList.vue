<script>
import { store } from "../store";
import Card from "./Card.vue";

export default {
  name: "MovieList",
  components: {
    Card,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <section>
    <h1>Movies</h1>
    <div class="card-container">
      <Card
        v-for="(movie, index) in store.movieList"
        :key="index"
        :image="movie.poster_path"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

section {
  text-align: center;
  padding-top: 50px;
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
