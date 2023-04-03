<script>
export default {
  name: "Card",
  props: {
    oggetto: Object,
    title: String,
  },
  mounted() {
    console.log(this.movie);
  },
};
</script>

<template>
  <div class="card">
    <div class="card-inner">
      <div class="card-front">
        <img
          v-if="oggetto.poster_path != null"
          :src="`https://image.tmdb.org/t/p/w342${oggetto.poster_path}`"
          :alt="title"
        />
        <div class="no-image-box" v-else>{{ title }}</div>
      </div>

      <div class="card-back">
        <h2>{{ oggetto.title }}</h2>
        <h3>Titolo originale: {{ title }}</h3>
        <div>{{ oggetto.vote_average }}</div>
        <div v-if="(oggetto.original_language = it)">
          <img src="../../public/Flag-of-Italy-01-1.svg" alt="" />
        </div>
        <div v-else>{{ oggetto.original_language }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.card {
  width: 250px;
  height: 380px;
  background-color: $no-image-box;
  perspective: 1000px;

  &:hover .card-inner {
    transform: rotateY(180deg);
  }

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;

    .card-front,
    .card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
    }
    .card-front {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
      }
      .no-image-box {
        text-align: center;
        line-height: 1.6;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background-color: $no-image-box;
      }
    }

    .card-back {
      background-color: $no-image-box;
      transform: rotateY(180deg);
    }
  }
}
</style>

<!-- https://image.tmdb.org/t/p/w200/'+ movie.results[0].poster_path -->
