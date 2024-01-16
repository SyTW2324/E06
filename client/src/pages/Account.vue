<script setup lang="ts">
import axios from 'axios'
import auth from '../services/UserService'
</script>

<script lang="ts">
interface User {
  name: string
  email: string
  username: string
  password: string
}

export default {
  data() {
    return {
      user: {
        username: '',
        name: '',
        email: '',
        password: '',
        new_password: ''
      }
    }
  },
  created() {
    this.userLogged
  },
  methods: {
    async userDelete() {
      if (this.userLogged) {
        let user_str = this.userLogged
        let user = user_str.split('|')
        this.user.username = user[0]
      }
      var resultado = window.confirm('¿Estas seguro de elimiar el usuario?')
      if (resultado === true) {
        try {
          await auth
            .deleteUser(this.user.username)
            .then((response) => {
              auth.deleteUserLogged()
              this.user = {
                username: '',
                name: '',
                email: '',
                password: '',
                new_password: ''
              }
              alert('Usuario eliminado')
              location.replace('/')
              console.log(response)
            })
            .catch((error) => {
              console.log(error)
            })
        } catch (error) {
          console.log(error)
        }
      }
    },

    async changeUserData() {
      try {
        let new_user: User = {
          username: this.user.username,
          name: this.user.name,
          email: this.user.email,
          password: ''
        }
        this.user.new_password != ''
          ? (new_user.password = this.user.new_password)
          : (new_user.password = this.user.password)

        let actual_username = ''
        if (this.userLogged) {
          let user_str = this.userLogged
          console.log(user_str)
          let user = user_str.split('|')
          actual_username = user[0]
        }

        await auth
          .changeUserData(new_user, actual_username, this.user.password)
          .then((response) => {
            console.log(response)
            auth.deleteUserLogged()
            auth.setUserLogged(
              this.user.username + '|' + response.data.name + '|' + response.data.email
            )
            this.user.password = ''
            this.user.new_password = ''
            alert('Actualización realizada con exito.')
            //location.reload()
          })
          .catch((error) => {
            console.log(error)
            alert('Fallo en la actualización. ' + error.response.data)
          })
      } catch (error) {
        console.log(error)
      }
    }
  },

  computed: {
    userLogged() {
      const res = auth.getUserLogged()
      if (res != undefined) {
        let user_str = res
        let user = user_str.split('|')
        this.user.username = user[0]
        this.user.name = user[1]
        this.user.email = user[2]
      }
      return res
    }
  }
}
</script>

<template>
  <div class="main-container">
    <div class="main-screen">
      <div class="main-screen-text">
        <div class="img-login">
          <img class="user-icon" src="../assets/user_icon.png" alt="" />
        </div>

        <h5 style="text-align: center; color: black">
          Para modificar cualquier campo introducir nuevos datos
        </h5>
        <form @submit.prevent="changeUserData">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Nombre de usuario</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Usuario"
              v-model="user.username"
              pattern="^[a-zA-Z0-9]+$"
              title="El nombre de usuario deben ser caracteres alfanumericos sin espacios"
              required
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Nombre completo</label>
            <input
              type="Nombre"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Nombre"
              v-model="user.name"
              required
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Correo electronico</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="email@prueba.com"
              v-model="user.email"
              required
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Contraseña actual (Para cualquier cambio será necesaria la contraseña)</label
            >
            <input
              type="password"
              class="form-control"
              id="inputPassword"
              placeholder="Contraseña"
              v-model="user.password"
              pattern="^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$"
              title="La contraseña debe tener entre 6 y 16 caracteres y contener un número"
              required
            />
          </div>
          <div class="mb-4">
            <label for="exampleFormControlInput1" class="form-label"
              >Nueva contraseña (Si se desea cambiar)</label
            >
            <input
              type="password"
              class="form-control"
              id="inputPassword"
              placeholder=" Nueva Contraseña"
              v-model="user.new_password"
              pattern="^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$"
              title="La contraseña debe tener entre 6 y 16 caracteres y contener un número"
            />
          </div>
          <button type="submit" class="btn btn-primary"><a>Cambiar datos</a></button><br />
        </form>
        <div class="btn-deleteUser">
          <button v-on:click="userDelete" class="btn btn-primary"><a>Borrar Usuario</a></button><br />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/*.main-screen {
  width: 100%;
  background-color: #455a64e0;
  border-radius: 2rem;
  overflow: hidden;
  padding: 2%;
  margin-top: 25%;
  margin-left: 50%;
  margin-bottom: 25%;
  position: relative;
  justify-content: center;
}*/

.main-container {
  padding-top: 100px;
  padding-bottom: 100px;
}

.main-screen {
  width: 60%;
  background-color: #455a64e0;
  border-radius: 2rem;
  overflow: hidden;
  padding: 2%;
  left: 20%;
  position: relative;
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
  width: 10%;
  height: 10%;
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

.btn-deleteUser {
  text-align: left;
  margin-top: 3%;
}
.main-screen-text  .btn-deleteUser .btn {
  width: 50%;
  font-size: 1.4rem;
  background-color: #a8a8a8;
  border-color: #a8a8a8;
  border-radius: 3rem;
  overflow: hidden;
  padding: 2%;
  left: 25%;
  position: relative;
}

@media (max-width: 576px) {
  .main-screen {
    width: 90%;
    background-color: #455a64e0;
    border-radius: 2rem;
    overflow: hidden;
    padding-top: 2%;
    padding-bottom: 2%;
    left: 5%;
    position: relative;
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

  .main-screen-text  .btn-deleteUser .btn {
  width: 70%;
  font-size: 1.4rem;
  background-color: #a8a8a8;
  border-color: #a8a8a8;
  border-radius: 3rem;
  overflow: hidden;
  padding: 2%;
  left: 15%;
  position: relative;
}
}
</style>
