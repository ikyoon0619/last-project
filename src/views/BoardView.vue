
<script setup>
import {ref, onMounted} from "vue";
import { RouterLink, RouterView } from 'vue-router'
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
    <div class="news">
      <RouterView />
    </div>
</template>
  
<style>

</style>
  