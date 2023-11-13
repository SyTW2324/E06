<!-- Navbar.vue -->
<template>
  <div class="navbar">
    <ul>
      <li @click="changePage('Inicio')">Inicio</li>
      <li @click="changePage('Acerca')">Acerca de</li>
      <li @click="changePage('Contacto')">Contacto</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  methods: {
    changePage(page: string): void {
      // Aquí podrías realizar acciones al cambiar de página, como cargar componentes dinámicamente, etc.
      console.log(`Cambiar a la página: ${page}`);
    },
  },
});
</script>

<style scoped>
.navbar {
  background-color: #333;
  color: white;
  padding: 10px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

li {
  margin-right: 15px;
  cursor: pointer;
}

li:hover {
  text-decoration: underline;
}
</style>