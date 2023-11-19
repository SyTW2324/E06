<script setup lang="ts">
  import Navbar from '../components/Navbar.vue'
  import Footer from '../components/Footer.vue'
</script>

<template>
    <div class="navbar"><Navbar /></div>

    <div class="main-screen">
      <div class="main-screen-text">
        <h1>Login</h1>
        <br>

        <div class="mb-3">
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Usuario">
        </div>
        <div class="mb-1">
          <input type="password" class="form-control" id="inputPassword" placeholder="Contraseña">
        </div>
        <div class="forgot-link">
          <a class="forgot-link-text" href="#">Olvidé mi contraseña</a>
        </div>

        <a type="button" class="btn btn-primary" href="#">Iniciar sesión</a><br>
        <div class="btn-register">
          <a class="btn-register-text" href="#/register">Registrarse</a>
        </div>
      </div>
    </div>

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
.main-screen {
  width: 34%;
  background-color: #455a64e0;
  border-radius: 2rem;
  overflow: hidden;
  padding-top: 2%;
  padding-bottom: 2%;
  padding: 2%;
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
  width: 50%;
  font-size: 1.5rem;
  background-color: #00A0D1;
  border-color: #00A0D1;
  border-radius: 3rem;
  overflow: hidden;
  padding: 2%;
  left: 25%;
  position: relative;
}

.main-screen-text h2 {
  font-size: 300%;
  font-weight: 500;
  text-align: center;
}

.forgot-link {
  text-align: right;
  padding-bottom: 4%;
}

.forgot-link .forgot-link-text {
  color: #00A0D1; 
  text-decoration: none; 
  cursor: pointer; 
}

.btn-register{
  text-align: center;
}

.btn-register .btn-register-text{
  font-size: 1.25rem;
  color: white;
  text-decoration: none;
}

.footer {
  background-color: #00A0D1;
  bottom: 0;
  width: 100%; 
  left: 0;
  position: fixed;
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
    width: 70%;
    font-size: 1.5rem;
    background-color: #00A0D1;
    border-color: #00A0D1;
    border-radius: 3rem;
    overflow: hidden;
    padding: 2%;
    left: 15%;
    position: relative;
  }
}
</style>
