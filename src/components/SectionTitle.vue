<script>
export default {
  name: "SectionTitle",
  props: {
    title: String,
  },
};
</script>

<template>
  <h1>{{ title }}</h1>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

h1 {
  text-align: center;
  color: $text-color;
  margin-bottom: 30px;
  font-family: "Bebas Neue", cursive;
  font-size: 40px;
  font-weight: 500;
}
</style>
