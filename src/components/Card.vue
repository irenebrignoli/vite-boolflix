<script>
import { stringifyExpression } from "@vue/compiler-core";

export default {
  name: "Card",
  props: {
    imageS: String,
    imageM: String,
    titleS: String,
    titleM: String,
    orignalTitleM: String,
    originalLangM: String,
    voteM: String,
    orignalTitleS: String,
    originalLangS: String,
    voteS: String,
  },
};
</script>

<template>
  <div class="card">
    <div class="card-inner">
      <div class="card-front">
        <img
          v-if="imageM || imageS != null"
          :src="`https://image.tmdb.org/t/p/w342${imageM || imageS}`"
          :alt="titleM || titleS"
        />
        <div class="no-image-box" v-else>{{ titleM || titleS }}</div>
      </div>

      <div class="card-back">
        <h2>{{ titleM || titleS }}</h2>
        <h3>Titolo originale: {{ orignalTitleM || orignalTitleS }}</h3>
        <div>{{ originalLangM || originalLangS }}</div>
        <div>{{ voteM || voteS }}</div>
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
