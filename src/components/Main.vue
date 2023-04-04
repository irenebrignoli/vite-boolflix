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
      <section v-if="store.movieList.length > 0" id="movies">
        <SectionTitle title="Movies" />
        <div class="card-container">
          <Card
            v-for="movie in store.movieList"
            :key="movie.id"
            :oggetto="movie"
            :title="movie.title"
            :originalTitle="movie.original_title"
          />
        </div>
      </section>

      <section v-if="store.serieList.length > 0" id="series">
        <SectionTitle title="Serie Tv" />
        <div class="card-container">
          <Card
            v-for="serie in store.serieList"
            :key="serie.id"
            :oggetto="serie"
            :title="serie.name"
            :originalTitle="serie.original_name"
          />
        </div>
      </section>

      <h2
        class="no-results"
        v-if="store.movieList.length == 0 && store.serieList.length == 0"
      >
        Non ci sono risultati
      </h2>
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

.no-results {
  margin-top: 100px;
}
</style>
