<script setup lang="ts"></script>

<template>
  <div class="main-screen">
    <div class="main-screen-text">
      <h1>404</h1>
      <h1>PAGE NOT FOUND</h1>
    </div>
  </div>
</template>

<style scoped>
.main-screen {
  width: 45%;
  background-color: #455a64e0;
  border-radius: 2rem;
  overflow: hidden;
  padding-top: 2%;
  padding-bottom: 2%;
  top: 25%;
  left: 27%;
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

.main-screen-text h2 {
  font-size: 300%;
  font-weight: 500;
  text-align: center;
}

@media (max-width: 576px) {
  .main-screen {
    width: 70%;
    background-color: #455a64e0;
    border-radius: 2rem;
    overflow: hidden;
    padding-top: 2%;
    padding-bottom: 2%;
    left: 15%;
    position: absolute;
  }

  .main-screen-text .btn {
    width: 50%;
    font-size: 1.5rem;
    background-color: #00a0d1;
    border-color: #00a0d1;
    border-radius: 3rem;
    overflow: hidden;
    padding: 2%;
    margin-bottom: 5%;
    left: 25%;
    position: relative;
  }
}
</style>
