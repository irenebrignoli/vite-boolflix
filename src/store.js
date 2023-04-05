import { reactive } from "vue";

export const store = reactive({
  movieList: [],
  serieList: [],
  castingList: [],
  search: "",
  apiKey: "38108238e55a723ea029b5154ff23a5b",
});

// "https://api.themoviedb.org/3/search/movie?api_key=38108238e55a723ea029b5154ff23a5b&query=constantine"
