<script>
import { stringifyExpression } from "@vue/compiler-core";

export default {
  name: "Card",
  props: {
    imageS: String,
    imageM: String,
    titleS: String,
    titleM: String,
  },
};
</script>

<template>
  <div class="card">
    <img
      v-if="imageM || imageS != null"
      :src="`https://image.tmdb.org/t/p/w342${imageM || imageS}`"
      alt=""
    />
    <div class="no-image-box" v-else>{{ titleM || titleS }}</div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.card {
  width: 250px;
  height: 380px;
  background-color: $no-image-box;

  img {
    width: 100%;
    height: 380px;
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
</style>

<!-- https://image.tmdb.org/t/p/w200/'+ movie.results[0].poster_path -->
