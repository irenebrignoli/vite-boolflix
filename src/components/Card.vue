ard
<script>
import { store } from "../store";

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
    getStars(number) {
      let rating = Math.ceil(number / 2);
      let output = [];

      for (let i = rating; i >= 1; i--) {
        output.push('<i class="fa-solid fa-star star"></i>');
      }

      for (let i = 5 - rating; i >= 1; i--) {
        output.push('<i class="fa-regular fa-star star"></i>');
      }

      return output.join("");
    },
  },
  data() {
    return {
      flags: ["it", "en", "es", "de", "fr"],
      store,
    };
  },
};
</script>

<template>
  <!-- card -->
  <div class="card">
    <div class="card-inner">
      <!-- card  front-->
      <div class="card-front">
        <img
          v-if="oggetto.poster_path != null"
          :src="`https://image.tmdb.org/t/p/w342${oggetto.poster_path}`"
          :alt="title"
        />
        <div class="no-image-box" v-else>{{ title }}</div>
        <!-- <img v-else src="../../public/movie-background.avif" alt="" /> -->
      </div>

      <!-- card back-->
      <div class="card-back">
        <h2 class="title">{{ title }}</h2>

        <div v-show="title != originalTitle" class="original-title">
          <div class="subtitle">Titolo originale:</div>
          <h3>{{ originalTitle }}</h3>
        </div>

        <div class="cast"></div>

        <div class="rating">
          <div class="subtitle">Voto:</div>
          <div v-html="getStars(oggetto.vote_average)"></div>
        </div>

        <div class="language">
          <div class="subtitle">Lingua:</div>
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

        <div v-show="oggetto.overview != ''" class="overview">
          <div class="subtitle">Overview:</div>
          <p class="o-text">{{ oggetto.overview }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.card {
  width: 250px;
  height: 380px;
  perspective: 1000px;

  &:hover .card-inner {
    transform: rotateY(180deg);
  }

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    border: 1px solid $border-card;
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
        background-image: url("../../public/movie-background.avif");
        padding: 20px;
        background-size: contain;
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
      color: $text-card-back;
      background-color: $no-image-box;
      transform: rotateY(180deg);
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 15px;
      text-align: center;

      .subtitle {
        color: #8a8a8a;
        margin-bottom: 5px;
        font-size: 12px;
        text-transform: uppercase;
      }
      .title {
        font-size: 20px;
        font-weight: 500;
      }

      .original-title {
        align-items: center;

        h3 {
          font-size: 14px;
          font-weight: 500;
        }
      }

      .star {
        font-size: 16px;
      }
      .flag {
        width: 40px;
        border: 1px solid #fff;
      }

      .overview {
        overflow-y: scroll;
        scrollbar-width: none;

        &::-webkit-scrollbar {
          display: none;
        }
        .o-text {
          font-size: 12px;
          line-height: 1.3;
          font-weight: 400;
        }
      }
    }
  }
}
</style>

<!-- https://image.tmdb.org/t/p/w200/'+ movie.results[0].poster_path -->
