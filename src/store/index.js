import { createStore } from "vuex";
import pharmacy from "./pharmacy";
import about from "./about";

export default createStore({
  modules: {
    pharmacy,
    about,
  },
});