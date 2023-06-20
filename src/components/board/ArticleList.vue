<script setup>
import { ref, computed } from "vue";
import Loader from "../Loader.vue";
import ArticleItem from "./ArticleItem.vue";
import store from "../../store";

const articles = computed(()=>{
  return store.state.board.articles;
})
const loading = computed(() => {
  return store.state.board.loading;
});

</script>
<template>
  <div class="container">
      <Loader v-if="loading" />
      <div v-if="articles" class="movies">
          <ArticleItem v-for="article in articles" :key="article.id" :article="article"/>
      </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../scss/main.scss";
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
  .articles {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
