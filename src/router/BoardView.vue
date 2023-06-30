
<script >
import {  RouterView } from 'vue-router'
import store from "../store";
import ArticleList from "../components/board/ArticleList.vue";

export default{

  data() {
    return {
      isInit: true,
      page: 1,
      last: true
    };
  },
  mounted() {
    this.$store.dispatch("board/initBoard",{
    isInit: this.isInit,
    size: store.state.board.size
    })
  },
  computed:{
    last(){
      return store.state.board.last
    }
  },
  methods:{
    reqArticles(){
      store.dispatch("board/reqBoard",{
        page: this.page++,
        size: store.state.board.size
        })
        console.log("last", this.last)
      }
    }
}

</script>
<template>
  <h1>Board View - Parent</h1>
  <span v-if="!last">
    <button @click="reqArticles">30more</button>
  </span>
  <RouterView />
</template>
  
<style>

</style>
  