<script setup lang="ts">
import auth from '../services/UserService'
</script>

<script lang="ts">
export default {
  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async getUserAndCheckPassword() {
      try {
        await auth
          .login(this.user.username, this.user.password)
          .then((response) => {
            console.log(response)
            if (response.status == 200) {
              alert('Usuario autentificado con éxito.')
              auth.setUserLogged(
                this.user.username + '|' + response.data.name + '|' + response.data.email
              )
              this.user = {
                username: '',
                password: ''
              }
              //this.$router.replace('/')
              location.replace('/')
            }
          })
          .catch((error) => {
            console.log(error)
            if (error.response.status == 400) {
              alert('Usuario y/o contraseña incorrecto. ' + error.response.data)
            } else if (error.response.status == 404) {
              alert('El usuario introducido no existe. ' + error.response.data)
            } else {
              alert('Fallo en la autentificación.')
            }
          })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<template>
  <div class="main-screen">
    <div class="main-screen-text">
      <div class="img-login">
        <img class="user-icon" src="../assets/user_icon.png" alt="" />
      </div>
      <br />

      <form @submit.prevent="getUserAndCheckPassword">
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Usuario"
            v-model="user.username"
            required
          />
        </div>
        <div class="mb-5">
          <input
            type="password"
            class="form-control"
            id="inputPassword"
            placeholder="Contraseña"
            v-model="user.password"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary"><a>Iniciar sesión</a></button><br />
      </form>
      <div class="btn-register">
        <a class="btn-register-text" href="/register">Registrarse</a>
      </div>
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a>
    </div>
  </div>
</template>

<style scoped>
.main-screen {
  width: 34%;
  background-color: #455a64e0;
  border-radius: 2rem;
  overflow: hidden;
  padding: 2%;
  top: 25%;
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

.img-login {
  text-align: center;
  margin-bottom: 5%;
}

.user-icon {
  width: 15%;
  height: 15%;
}

.main-screen-text .btn {
  width: 50%;
  font-size: 1.4rem;
  background-color: #00a0d1;
  border-color: #00a0d1;
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
  color: #00a0d1;
  text-decoration: none;
  cursor: pointer;
}

.btn-register {
  text-align: center;
  margin-top: 3%;
}

.btn-register .btn-register-text {
  font-size: 1.25rem;
  color: white;
  text-decoration: none;
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
    background-color: #00a0d1;
    border-color: #00a0d1;
    border-radius: 3rem;
    overflow: hidden;
    padding: 2%;
    left: 15%;
    position: relative;
  }
}
</style>
