<script setup lang="ts">
import Card from '../components/Card.vue'
import fish from '../services/FishService'
</script>

<script lang="ts">
export default {
  data() {
    return {
      searchTerm: '',
      fishes: [
        {
          name: '',
          cientific_name: '',
          minimum_size: 0,
          image_url: ''
        }
      ],
      fishesFilters: [
        {
          name: '',
          cientific_name: '',
          minimum_size: 0,
          image_url: ''
        }
      ]
    }
  },

  created() {
    this.fishes.pop()
    this.fishesFilters.pop()
    this.getFishes
  },

  computed: {
    async getFishes() {
      try {
        await fish
          .getFishes()
          .then((response) => {
            console.log(response)
            for (let i = 0; i < response.data.length; i++) {
              this.fishes.push({
                name: response.data[i].name,
                cientific_name: response.data[i].cientific_name,
                minimum_size: response.data[i].minimum_size,
                image_url: response.data[i].image_url
              })
            }
            console.log(this.fishes)
            this.fishesFilters = this.fishes
          })
          .catch((error) => {
            console.log(error)
          })
      } catch (error) {
        console.log(error)
      }
    }
  },

  methods: {
    filterFish() {
      this.fishesFilters = this.fishes.filter((fish) =>
        fish.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
      console.log(this.fishesFilters)
    }
  }
}
</script>

<template>
  <div class="grid">
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Buscar por nombre..."
        v-model="searchTerm"
        v-on:keyup.enter="filterFish"
      />
      <div class="input-group-append">
        <button v-on:click="filterFish" class="btn btn-secondary" type="button">Buscar</button>
      </div>
    </div>

    <div class="card-container">
      <div v-for="(fish, index) in fishesFilters" :key="index" class="card">
        <Card
          :name="fish.name"
          :cientific_name="fish.cientific_name"
          :minimum_size="fish.minimum_size"
          :image_url="fish.image_url"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid {
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: 25px;
  padding-right: 25px;
  width: 100%;
  text-align: center;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; /* justify-content: space-between; */
  gap: 20px;
  margin-left: 6%;
}
</style>
