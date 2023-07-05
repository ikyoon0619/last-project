import { createStore } from "vuex";
import about from "./about";
import movie from "./movie"
import board from "./board"
import auth from "./auth"

export default createStore({
  modules: {
    about,
    movie,
    board,
    auth
  },
});