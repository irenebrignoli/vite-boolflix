<script>
export default {
  name: "SectionTitle",
  props: {
    title: String,
  },
};
</script>

<template>
  <h1>Movies</h1>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

h1 {
  text-align: center;
  color: $text-color;
  margin-bottom: 30px;
}
</style>
