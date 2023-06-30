  
<script setup>
import {ref} from "vue";
import axios from "axios";
import router from "../../router/index";


defineProps({
  article: Object
})

</script>
<template>
    <RouterLink :to="{ name: 'article', params: { id: article.id }}" class="article">
        <div class="number">{{ article.id }}</div>
        <div class="title">{{ article.title }}</div>
    </RouterLink>
</template>
  
<style lang="scss" scoped>
@import "../../scss/main.scss";
.article{
  display: flex;
  border: 1px solid black;
  .number {
    margin-right: 20px;
  }
  
  }




</style>