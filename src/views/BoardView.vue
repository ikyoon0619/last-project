
<script setup>
import {ref} from "vue";
import ArticleList from "../components/board/ArticleList.vue"
import store from "../store";

function init(){
  store.dispatch("board/initBoard",{
    // title: text.value,
  })
}
</script>
<template>
    <div class="article">
      <h1>This is Board page</h1>
      <button @click="init">fetch articles</button>
      <ArticleList/>
      
    </div>
</template>
  
<style>

</style>
  