
<script >
import {  RouterView } from 'vue-router'
import store from "../store";
import ArticleList from "../components/board/ArticleList.vue";

export default{

  data() {
    return {
      isInit: true,
      page: 1,
      totalPages: store.state.board.totalPages
    };
  },
  computed:{
    isLastPage(){
      return page === this.totalPages ? true : false;
    }
  },

  created() {
    this.$store.dispatch("board/initBoard",{
    isInit: this.isInit,
    size: store.state.board.size
    })
  },
  methods:{
    reqArticles(){
      store.dispatch("board/reqBoard",{
        page: this.page++,
        size: store.state.board.size
        })
        console.log("totalPage", this.totalPages)
      }
    }
}

</script>
<template>
  <h1>Board View - Parent</h1>
  <span v-if="page <= totalPages">
    <button @click="reqArticles">30more</button>
  </span>
  <RouterView />
</template>
  
<style>

</style>
  