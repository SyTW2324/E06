<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="navbar"><Navbar /></div>

  <router-view></router-view>

  <div class="footer"><Footer /></div>
</template>

<style scoped>
#app {
  left: 50%;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.footer {
  position: fixed;
  background-color: #00a0d1;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>
