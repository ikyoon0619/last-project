<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import Logo from "./Logo.vue";

const route = useRoute()

const navigations = ref([
  { name: "Home", href: "/" },
  { name: "Movie", href: "/movie", path:/^\/movie/ },
  { name: "About", href: "/about" },
]);

function isMatch(path){
  if(!path) return false;
  console.log(route.fullPath)
  return path.test(route.fullPath)
}

</script>

<template>
  <header>
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
}
</style>