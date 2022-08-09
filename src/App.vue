<template>
  <router-view path="$router.key"></router-view>
  <TheFooter />
</template>

<script>
import "./styles/global.css";
import TheFooter from "./components/TheFooter.vue";
export default {
  name: "App",
  components: { TheFooter },
};
</script>
