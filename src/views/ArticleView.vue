
<script >
import { mapState } from "vuex";
import axios from "axios";
import store from "../store"
import router from "../router/index";
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
  methods:{

    async deleteItem(id){
      try {
        await axios.delete(`http://localhost:8080/api/v1/article/${id}`)
        store.dispatch("board/reqBoard",{isInit:true, size:30})
        router.push({name:"ArticleList"})
      } catch (error) {
        
      } 
    }
  }

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
  <div class="btn">
      <button @click="deleteItem(theArticle.id)">delete</button>
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
  