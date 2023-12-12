<script setup lang="ts">
defineProps<{
  name: string
  image_url: string
  cientific_name: string
  minimum_size: number
}>()
</script>

<script lang="ts">
/*export default {
  data() {
    return {
      image: {
        src: this.image_url,
        alt: this.cientific_name
      }
    }
  },
  created() {
    console.log('hola')
    this.setImage()
  },
  methods: {
    setImage() {
      this.image.src = this.image_url
      console.log('he')
    }
  }
}*/
</script>

<template>
  <div class="card" style="width: 18rem">
    <img class="card-img-top" :src="image_url" :alt="cientific_name" id="fish_image" />
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">
        {{ cientific_name }}
      </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Talla mínima: {{ minimum_size }} cm</li>
    </ul>
    <div class="card-body">
      <button href="#" class="btn btn-primary btn-sm">Más info...</button>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: white;
  color: black;
  text-align: center;
}

.list-group-item {
  background-color: white;
  color: black;
}

.btn {
  background-color: #00a0d1;
  border-color: #00a0d1;
  border-radius: 3rem;
}
</style>
