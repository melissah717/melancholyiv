<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <header>
    <p>this is the header</p>
  </header>
  <Navbar />
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
p {
  font-size: 0.5rem;
}
</style>
