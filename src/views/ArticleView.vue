
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
  <div class="container">
    
    <div v-if="theArticle" class="details">
      <div class="title">
        {{ theArticle.title }}
      </div>
      <div class="labels">
          <span>
            <date-format :date="theArticle.createdAt" />
            
          </span>
          <span>
            <span class="text-secondary">BY</span> 
            {{ theArticle.createdBy}}
          </span>
      </div>
      <div class="content">
        {{ theArticle.content }}
      </div>
      <div class="hashtags">
          <h3>TAG</h3>
          <span v-for="hashtag in theArticle.hashtag">
            {{ hashtag }}
          </span>
      </div>
    </div>
  </div>
  
</template>
  
<style lang="scss" scoped>
@import "../scss/main.scss";
.container {
  padding-top: 40px;
}
.details{
  .title{
    color: $black;
    font-family: "Oswald", sans-serif;
    font-size: 70px;
    line-height: 1;
    margin-bottom: 30px;
  }
  .labels{
    color: $primary;
   
    span{
      &::after{
        content: "\00b7";
        margin: 0 6px;
      }
      &:last-child::after{
        display: none;
      }
    }
  }
  .content{
      margin-top: 20px;
    }
  h3 {
    margin: 24px 0 6px;
    color: $black;
    font-family: "Oswald", sans-serif;
    font-size: 20px;
  }
}
@media (min-width: 1024px) {
  
}
</style>
  