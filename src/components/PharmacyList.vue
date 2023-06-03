<script setup>
import { computed } from "vue";
import store from "../store";
import PharmacyItem from "./PharmacyItem.vue";
import Loader from "./Loader.vue";

const pharamcies = computed(() => {
  return store.state.pharmacy.pharmacies;
});
const message = computed(() => {
  return store.state.pharmacy.message;
});
const loading = computed(() => {
  return store.state.pharmacy.loading;
});
</script>
<template>
    <div class="container">
        <div :class="{ 'no-result': !pharamcy.length }" class="inner">
        <Loader v-if="loading" />
        <div v-if="message" class="message">{{ message }}</div>
        <div v-else class="movies">
            <PharmacyItem v-for="pharmacy in pharmacies" :key="movie.imdbID" :movie="movie" />
        </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import "../scss/main.scss";
.container {
  margin-top: 30px;
  .inner {
    background-color: $gray-200;
    padding: 15px 0px;
    border-radius: 4px;
    text-align: center;
    &.no-result {
      padding: 70px 0;
    }
  }
  .message {
    color: $gray-400;
    font-size: 20px;
  }
  .pharamcy {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>