
<script >
import { mapState } from "vuex";
import store from "../store"
import Loader from "../components/Loader.vue";

export default {
  components:{
    Loader,
  },
  computed:{
    ...mapState("board",["theArticle"]),
  },
  created(){
    store.dispatch("board/reqArticleWithId",{
      id: this.$route.params.id
    })
  },
}


</script>
<template>
  <!-- <Loader v-if="loading" /> -->
  <div v-if="theArticle" class="article">
    <h2>{{ theArticle.title }}</h2>
    <p>{{ theArticle.content }}</p>
  </div>
</template>
  
<style>
@media (min-width: 1024px) {
  
}
</style>
  