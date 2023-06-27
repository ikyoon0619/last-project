<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import Logo from "./Logo.vue";

const route = useRoute()

const navigations = ref([
  { name: "Home", href: "/" },
  { name: "Movie", href: "/movie", path:/^\/movie/ },
  { name: "News", href: "/news" ,path:/^\/article/ },
  { name: "About", href: "/about" },
  // { name: "Sign In", href: "/registration" },

]);

function isMatch(path){
  if(!path) return false;

  return path.test(route.fullPath)
}

</script>

<template>
  <header class="container">
    <Logo />
    <div class="nav nav-pills">
      <div v-for="nav in navigations" :key="nav.name" class="nav-item">
        <RouterLink :to="nav.href" active-class="active" :class="{active: isMatch(nav.path)}"  class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
    
  </header>
</template>

<style lang="scss" scoped>
header {
  height: 70px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  .logo {
    margin-right: 40px;
  }
  // .nav-pills{
  //   width: 100%;
  //   .nav-item{
  //     &:last-child{
  //       flex: none;
  //       margin-left: auto;
  //     }
  //   }
  // }
}

</style>