
<script >
import {  RouterView } from 'vue-router'
import store from "../store";

export default{

  data() {
    return {
      isInit: true,
      page: 1,
    };
  },
  mounted() {
    this.$store.dispatch("board/initBoard",{
    isInit: this.isInit,
    size: store.state.board.size
    })
  },
  computed:{
    isLast(){
      return store.state.board.last
    }
  },
  methods:{
    reqArticles(){
      store.dispatch("board/reqBoard",{
        page: this.page++,
        size: store.state.board.size
        })

      }
    }
}

</script>
<template>
  <h1>Board View - Parent</h1>
  <span v-if="!isLast">
    <button @click="reqArticles">30more</button>
  </span>
  <RouterView />
</template>
  
<style>

</style>
  