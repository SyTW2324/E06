<script setup lang="ts">
import fish from '../services/FishService'
</script>

<script lang="ts">
export default {
  data() {
    return {
      fish: {
        name: '',
        cientific_name: '',
        description: '',
        habitat: '',
        minimum_size: 0,
        recommended_bait: '',
        image_url: ''
      }
    }
  },

  created() {
    console.log(this.$route.params.id)
    this.getFish
  },

  computed: {
    async getFish() {
      try {
        await fish
          .getFish(String(this.$route.params.id))
          .then((response) => {
            console.log(response)
            this.$data.fish = {
              name: response.data.name,
              cientific_name: response.data.cientific_name,
              description: response.data.description,
              habitat: response.data.habitat,
              minimum_size: response.data.minimum_size,
              recommended_bait: response.data.recommended_bait,
              image_url: response.data.image_url
            }
            console.log(this.fish)
          })
          .catch((error) => {
            console.log(error)
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
        <div class="row">
          <div class="col-8">
            <h1>{{ $data.fish.name }}</h1>
            <h2>{{ $data.fish.cientific_name }}</h2><br>

            <strong>Descripción: </strong>
            <p style="text-align: justify;">{{ $data.fish.description }}</p>

            <strong>Hábitat: </strong>
            <p>{{ $data.fish.habitat }}</p>

            <p><strong>Talla minima: </strong>{{ $data.fish.minimum_size }} cm</p>

            
            <p><strong>Carnada recomendada: </strong>{{ $data.fish.recommended_bait }}</p>
          </div>
          <div class="col col-img">
            <div class="rounded-div">
              <img class="card-img-top" :src="$data.fish.image_url" :alt="$data.fish.cientific_name" id="fish_image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  padding-top: 100px;
  padding-bottom: 100px;
}

.main-screen {
  width: 80%;
  background-color: #455a64e0;
  border-radius: 2rem;
  overflow: hidden;
  padding: 2%;
  left: 10%;
  position: relative;
}

.main-screen-text {
  color: white;
  width: 100%;
}

.col-img {
  display: flex;
  justify-content: center;
  align-items: center;
}

.rounded-div {
  border-radius: 10px;
  overflow: hidden;
}

@media (max-width: 576px) { 
  .main-screen {
    width: 90%;
    background-color: #455a64e0;
    border-radius: 2rem;
    overflow: hidden;
    padding: 5%;
    left: 6%;
    position: relative;
  }

  .main-screen .row {
    flex-direction: column;
  }

  .col-8{
    width: 100%;
  }
}
</style>
