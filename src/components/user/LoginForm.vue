<script setup>
import axios from "axios";
import {ref, reactive} from "vue";
import router from "../../router";

 const event = reactive({
  usernameOrEmail:'',
  password:''
 })

 async function login(data){
  const URL = 'http://localhost:8080/api/auth/signin'
  console.log()
  try {
    const res = await axios.post(URL, data)
    const result = res.data;
    console.log("result=>", result)
    
  } catch (error) {
    console.warn(error.message);
  }
  
} 

</script>
<template>
  <div>
    <label for="id">ID</label>
    <input
      id="id"
      type="text"
      name="id"
      v-model="event.usernameOrEmail"
      placeholder="ID" 
    >
  </div>

  <div>
    <label for="password">Password</label>
    <input
      id="password"
      type="password"
      name="password"
      v-model="event.password"
      placeholder="Password" 
    >
  </div>

  <button @click="login(event)">Submit</button>
</template>
  
<style lang="scss" scoped>
@import "../../scss/main.scss";


</style>