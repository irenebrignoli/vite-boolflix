<script>
export default {
  name: "Card",
  props: {
    image: String,
  },
};
</script>

<template>
  <div class="card">
    <img :src="`https://image.tmdb.org/t/p/w342${image}`" alt="" />
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 300px;
  height: 400px;
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    object-position: top;
  }
}
</style>

<!-- https://image.tmdb.org/t/p/w200/'+ movie.results[0].poster_path -->
