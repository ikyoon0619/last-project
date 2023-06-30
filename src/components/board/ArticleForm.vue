<script setup>
import axios from "axios";
import { reactive, ref} from "vue";
import { mapState } from "vuex";
import router from "../../router/index";
import store from "../../store"

// computed: mapState({
//   theArticle: board => board.theArticle
// })

computed: mapState([
  'board', ['theArticle']
])
defineProps({
  article: Object,
  default:(()=>{})
})
const form = reactive({
  title: ref(''),
  content: ref(''),
  hasthtag: ref([]),
  userAccountDto : ref({
    userId: "ikyoon",
    userPassword: "1234",
    email: "ikyoon@gk.com",
    nickname: "faust",
    memo: "This is text for memo",
  })
})

const {title, content, hashtag, userAccountDto} = form;

async function submit(){
  try {
    const res = await axios.post('http://localhost:8080/api/v1/article', form)
    const status = res.status
    const data = res.data
    if(status === 201){ 
      router.push({name:"Article" ,params: { id: data.id }})
      store.dispatch("board/reqBoard",{isInit:true, size:30})
    }

    
  } catch (error) {
    console.log(error.message)
  }


}

</script>
<template>
  <p>
    <label for="title">Title</label>
    <input
      id="title"
      type="text"
      name="title"
      :value= "form.title || article.title"
      @input= "form.title = $event.target.value"
    >
  </p>

  <p>
   <span>Content</span>
   <textarea :value="form.content" @input= "form.content = $event.target.value"  placeholder="add content"></textarea>
  </p>
 
  <p>
    <label for="tag">Tag</label>
    <input
      id="tag"
      type="text"
      name="tag"
      :value="form.hashtag"
      @input="form.hashtag = $event.target.value"
    >
  </p>

  <button @click="submit">Submit</button>

  {{ theArticle }}
</template>
  
<style lang="scss" scoped>
@import "../../scss/main.scss";


</style>