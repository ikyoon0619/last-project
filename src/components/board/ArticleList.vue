<script setup>
import { ref, computed } from "vue";
import store from "../../store";
import Loader from "../Loader.vue";
import ArticleItem from "./ArticleItem.vue";
import router from "../../router/index";

const articles = computed(()=>{
  return store.state.board.articles;
})
const loading = computed(() => {
  return store.state.board.loading;
});

const page = ref(1)
function reqArticles(){
  store.dispatch("board/reqBoard",{
    page: page.value++ ,
    size: store.state.board.size
  })
}

function createArticle (){
  router.push({name:'create'}) 
}

</script>
<template>
  <div class="container">
      <Loader v-if="loading" />
      <div v-if="articles" class="movies">
          <ArticleItem v-for="article in articles" :key="article.id" :article="article"/>
      </div>
      <div v-if="true">
        <span>
          <button @click="reqArticles">30more</button>
          <button @click="createArticle">글쓰기</button>
        </span>
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
