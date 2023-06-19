
<script setup>
import {ref} from "vue";
import axios from "axios";
import ArticleList from "../components/board/ArticleList.vue"

function _fetchArticles(payload) {
  const { title, searchType, page } = payload;


  const url = `http://localhost:8080/api/v1/articles`;

  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((res) => {
        console.log("res", res);
        if (res.data.Error) reject(res.data.Error);
        resolve(res);
      })
      .catch((err) => {
        reject(err.message);
      });
  });
}
</script>
<template>
    <div class="article">
      <h1>This is Board page</h1>
      <button @click="_fetchArticles">fetch articles</button>
      <ArticleList/>
      
    </div>
</template>
  
<style>

</style>
  