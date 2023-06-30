
<script setup>
import {ref, onMounted} from "vue";
import store from "../store";
import ArticleList from "../components/board/ArticleList.vue";


const isInit = ref(true)
onMounted(() => {
  store.dispatch("board/reqBoard",{
    isInit: isInit.value,
    size: store.state.board.size
  })
})

</script>
<template>
  <ArticleList />
</template>
  
<style>

</style>
  