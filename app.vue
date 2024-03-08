<script setup lang="ts">
import { TimelineLite } from 'gsap';

const mel = 32
new Vue({
  el: '#app',
  mounted() { 
    const box = this.$refs.box
    const timeline = new TimelineLite() 
    
    timeline.to(box, 1, { x: 200, rotation: 90 }) 
   }
})

</script>

<template>
  <div class="container">
    mel is {{ mel }} years old :D
    <div ref="box" class="box"></div>
  </div>

</template>

<style scoped>
.hello {
  font-family: Arial;
  font-size: 3em;
  padding: 2em;
}

.box { 
  height: 60px; 
  width: 60px; 
  background: red; 
}

body {
  background: #1a1a1a;
}
</style>
