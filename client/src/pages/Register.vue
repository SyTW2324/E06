<script setup lang="ts">
import auth from '../services/UserService'
import multer from '../services/multer'
</script>

<script lang="ts">
interface User {
  name: string
  email: string
  username: string
  password: string
  image_url: string
}

export default {
  data() {
    return {
      user: {} as User,
      image: null
    }
  },
  methods: {
    onFileChange(e: any) {
      /*var files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      this.createImage(files[0])*/
      var file = e.target.files[0]
      const allowedTypes = [
        'application/pdf',
        'application/docx',
        'application/txt',
        'image/jpg',
        'image/jpeg',
        'image/png',
        'image/gif'
      ]

      if (allowedTypes.includes(file.type)) {
        this.image = file
        this.user.image_url = '../carpeta'
        console.log('Entro')
      } else {
        console.log('No Entro')
      }
    },
    createImage(file: any) {
      var reader = new FileReader()
      var vm = this

      reader.onload = (e) => {
        vm.image = e!.target!.result as string
      }
      reader.readAsDataURL(file)
    },
    async createUser() {
      try {
        await auth
          .register(this.user)
          .then((response) => {
            if (response.status == 202) {
              alert('El usuario no se pudo crear. ' + response.data)
            } else {
              alert('Usuario creado con éxito.')
              auth.setUserLogged(
                this.user.username + '|' + response.data.name + '|' + response.data.email
              )
              this.user = {
                name: '',
                email: '',
                username: '',
                password: '',
                image_url: ''
              }
              const formdata = new FormData()
              formdata.append('file', this.image)
              //multer.uploadFile(formdata)
              //this.$router.push('/')
              location.replace('/')
            }
          })
          .catch((error) => {
            console.log(error)
            alert('El usuario no se pudo crear.')
          })
      } catch (error) {
        console.log(error)
      }
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
        <br />

        <form @submit.prevent="createUser">
          <div class="mb-2">
            <label for="exampleFormControlInput1" class="form-label">Nombre Completo</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Nombre"
              v-model="user.name"
              required
            />
          </div>
          <div class="mb-2">
            <label for="exampleFormControlInput1" class="form-label">Nombre de usuario</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Nombre usuario"
              v-model="user.username"
              pattern="^[a-zA-Z0-9]+$"
              title="El nombre de usuario deben ser caracteres alfanumericos sin espacios"
              required
            />
          </div>
          <div class="mb-2">
            <label for="exampleFormControlInput1" class="form-label">Contraseña</label>
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
            <!--La contraseña debe tener entre 6 y 16 caracteres y contener un número-->
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Correo electronico</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="nombre@email.com"
              v-model="user.email"
              required
            />
          </div>
          <div class="mb-5">
            <label for="inputImage" class="form-label">Imagen de perfil</label>
            <input
              type="file"
              class="form-control"
              id="inputImage"
              accept="image/*"
              @change="onFileChange"
            />
          </div>

          <button type="submit" class="btn btn-primary"><a>Registrarse</a></button><br />
        </form>
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
}*/

.main-container {
  padding-top: 100px;
  padding-bottom: 100px;
}

.main-screen {
  width: 50%;
  background-color: #455a64e0;
  border-radius: 2rem;
  overflow: hidden;
  padding: 2%;
  left: 25%;
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
  margin-bottom: 0%;
}

.user-icon {
  width: 15%;
  height: 15%;
}

.form-label {
  color: white;
  margin-bottom: 0%;
}

.main-screen-text .btn {
  width: 40%;
  font-size: 1.4rem;
  background-color: #00a0d1;
  border-color: #00a0d1;
  border-radius: 3rem;
  overflow: hidden;
  padding: 2%;
  left: 60%;
  position: relative;
}

.main-screen-text h2 {
  font-size: 300%;
  font-weight: 500;
  text-align: center;
}

.btn-register {
  text-align: center;
}

.btn-register .btn-register-text {
  font-size: 1.25rem;
  color: white;
  text-decoration: none;
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
}
</style>
