<script>
export default {
  name: "Card",
  props: {
    oggetto: Object,
    title: String,
    originalTitle: String,
  },
  methods: {
    getImageUrl(path) {
      return new URL(path, import.meta.url).href;
    },
  },
  data() {
    return {
      flags: ["it", "en", "es", "de", "fr"],
    };
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
        <h2>{{ title }}</h2>
        <h3>Titolo originale: {{ originalTitle }}</h3>
        <div>{{ oggetto.vote_average }}</div>
        <img
          v-if="flags.includes(oggetto.original_language)"
          :src="
            getImageUrl(
              `../../src/assets/flags/${oggetto.original_language}.png`
            )
          "
          alt="Flag of${oggetto.original_language}`"
          class="flag"
        />
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

      .flag {
        width: 50px;
        border: 1px solid #fff;
      }
    }
  }
}
</style>

<!-- https://image.tmdb.org/t/p/w200/'+ movie.results[0].poster_path -->
