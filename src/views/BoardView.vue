
<script setup>
import {ref, onMounted} from "vue";
import ArticleList from "../components/board/ArticleList.vue"
import store from "../store";

const isInit = ref(true)
onMounted(() => {
  store.dispatch("board/reqBoard",{
    isInit: isInit.value,
    size: store.state.board.size
  })
})

</script>
<template>
    <div class="article">
      
      <ArticleList/>
      
    </div>
</template>
  
<style>

</style>
  