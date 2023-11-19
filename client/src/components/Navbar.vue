<script setup lang="ts">
</script>

<!-- Navbar.vue -->
<template>
  <div class ="navBar">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="../assets/iso.png" alt="">FISHING NET
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto pe-3">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Foro</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Fauna</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Mapa</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Marea</a>
            </li>
          </ul>
          <a class="nav-item" href="#">
            <img src="../assets/user_icon.png" alt="" width="40px" height="40px">
          </a>
        </div>
       
      </div>
    </nav>
  </div>
</template>


<style>
.navBar{
  width: 100%;
  background-color: #00A0D1;
  position: absolute;
  top: 0;
  padding-left: 1%;
  padding-right: 1%;
}

.navbar-brand img { 
  height: 8%;
  width: 8%;
  margin-right: 2%;
}

.navbar-brand { 
  color: white; 
  align-items: center;
  font-size: 30px;
}
.navbar-brand:hover { 
  color: white; 
  align-items: center;
  font-size: 30px;
}

.navbar-nav .nav-link.active { /* Cuando esta activo*/
  color: white; 
  font-size: 20px; 
  font-weight: bold;
}

.navbar-nav .nav-link {
  color: white;
  font-size: 20px; 
}

@media (max-width: 576px) {
  .navbar-brand { 
    color: white; 
    width: 60%;
    font-size: 20px;
    align-items: center;
  }
}
</style>