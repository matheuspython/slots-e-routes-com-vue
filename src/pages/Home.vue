<template>
  <TheHeader>{{page}}</TheHeader>
  <main class="main">
    <div class="container">
      <ul>
        <li>
          <router-link to="/">ir para home</router-link>
        </li>
        <li>
          <router-link to="/sobre">ir para sobre</router-link>
        </li>
        <li>
          <router-link to="/contato"> ir para contato</router-link>
        </li>
        <li>
          <router-link to="/localizacao"> ir para localização</router-link>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
export default {
  name: "TheHome",
  props: {
    page: String
  },
  components: { TheHeader },
};
</script>

<style>
.container{
    display: flex;
    justify-content: center;
    align-items: center;
}

.container ul {
    background: #aa17ee;
    border-radius: 12px;
    padding: 15px;
    width: 350px;
}
.container a {
    color: #fff;
    transition: .4s;
}

.container a:hover{
    
}
</style>
