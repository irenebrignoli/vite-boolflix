<script>
export default {
  name: "Card",
  props: {
    image: String,
    title: String,
    imageSerie: String,
    titleSerie: String,
  },
};
</script>

<template>
  <div class="card">
    <img
      v-if="image != null"
      :src="
        `https://image.tmdb.org/t/p/w342${image}` ||
        `https://image.tmdb.org/t/p/w342${imageSerie}`
      "
      alt=""
    />
    <div class="no-image-box" v-else>{{ title || titleSerie }}</div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.card {
  width: 300px;
  height: 400px;

  img {
    width: 100%;
    height: 400px;
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
