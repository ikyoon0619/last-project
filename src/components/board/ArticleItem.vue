  
  <script setup>
  import {ref} from "vue";

  defineProps({
  article: Object
})

  const title = ref("test")

  </script>
<template>
    <RouterLink :to="`/article/${article.id}`" class="article">
      <div class="info">
        <div class="number">{{ article.id }}.</div>
        <div class="title">{{ article.title }}</div>
      </div>
    </RouterLink>
</template>
  
<style lang="scss" scoped>
@import "../../scss/main.scss";
.info{
  display: flex;
  border: 1px solid black;
  .number {
    margin-right: 20px;
  }
  
}

</style>