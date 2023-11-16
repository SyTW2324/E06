<script setup lang="ts">
  import Navbar from './components/Navbar.vue'
</script>

<template>
    <div class="navbar"><Navbar /></div>

    <div class="main-screen">
      <div class="main-screen-text">
        <h1>TU</h1>
        <h2>página de pesca</h2>
        <br/><br/><br/><br/><br/><br/>
        <button type="button" class="btn btn-primary">Regístrate</button>
      </div>
    </div>
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
.main-screen {
  width: 34%;
  background-color: #455a64e0;
  border-radius: 2rem;
  overflow: hidden;
  padding-top: 2%;
  padding-bottom: 2%;
  top: 30%;
  left: 33%;
  position: absolute;
}
.main-screen-text {
  color: white;
  width: 100%;
}

.main-screen-text h1 {
  font-size: 4rem;
  font-weight: 500;
  text-align: center;
}

.main-screen-text .btn {
  width: 40%;
  font-size: 1.5rem;
  background-color: #00A0D1;
  border-color: #00A0D1;
  border-radius: 3rem;
  overflow: hidden;
  padding: 2%;
  left: 30%;
  position: relative;
}

.main-screen-text h2 {
  font-size: 300%;
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
