  
<script setup>
import axios from "axios";
import { reactive, ref} from "vue";

const title = ref('')
const content = ref('')
const tags =  ref([])
const userAccountDto = ref({
  userId: "ikyoon2",
  userPassword: "1234",
  email: "ikyoon@gk.com",
  nickname: "faust",
  memo: "This is text for memo",
})
const form = reactive({
  title, content, tags, userAccountDto
})

async function submit(){
  try {
    const res = await axios.post('http://localhost:8080/api/v1/article', form)
    const data = res.data;
    
  } catch (error) {
    
  }

  console.log("test", data)
}

</script>
<template>
  <p>
    <label for="title">Title</label>
    <input
      id="title"
      type="text"
      name="title"
      :value="form.title"
    >
  </p>

  <p>
   <span>Content</span>
   <p style="white-space: pre-line;">{{form.content}}</p>
   <textarea :value="form.content"  placeholder="add content"></textarea>
  </p>

  <p>
    <label for="tag">Tag</label>
    <input
      id="tag"
      type="text"
      name="tag"
      :value="form.tags"
    >
  </p>

  <button @click="submit">Submit</button>


</template>
  
<style lang="scss" scoped>
@import "../../scss/main.scss";


</style>