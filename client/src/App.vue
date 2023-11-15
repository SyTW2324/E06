<script setup lang="ts">
  import Navbar from './components/Navbar.vue'
</script>

<template>
    <div class="navbar"><Navbar /></div>
    

    <div class="main-screen">
      <div class="main-screen-text">
        <h1>TU</h1>
        <h2>página de pesca</h2>
        <h2><a>Regístrate</a></h2>
      </div>
    </div>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%; 
  z-index: 1000;
}
.main-screen {
  width: 140%;
  color: white;
  background-color: #455a64e0;
  border-radius: 25px;
  overflow: hidden;
  padding: 20% 20%;
}
.main-screen-text {
  width: 100%;
}

.main-screen-text h1 {
  font-size: 300%;
  font-weight: 500;
  text-align: center;
}

.main-screen-text h2 {
  font-size: 200%;
  font-weight: 500;
  text-align: center;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
