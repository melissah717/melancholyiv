<script setup lang="ts">
import Lenis from "@studio-freight/lenis"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { onMounted } from "vue"
import Navbar from "@/components/Navbar.vue"
// import { useRoute } from "vue-router"

gsap.registerPlugin(ScrollTrigger)

// const currentRoute = ref(useRoute().path)
onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".star-2",
      start: "top center",
      // end: "bottom center",
      scrub: true,
      markers: true,
      pin: true
    }
  });

  tl.fromTo((".star-1"), {
    y: -1100
  }, {
    x: 200,
    y: 1000,
    rotation: 190,
    duration: 5,
    opacity: 0.4,
    pin: ".right",
    invalidateOnRefetch: true
  });

  tl.from(".star-2", {
    x: 400,
    opacity: 0,
    rotation: 120,
    duration: 2,
    transform: 200
  });

  tl.to(".star-3", {
    x: 600,
    rotation: 360,
    duration: 1,
    opacity: 0.3
  });

  tl.to(".circle1", {
    x: 300,
    y: 1000
  })
});
const lenis = new Lenis()

function raf(time: number) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


</script>

<template>
  <main>
    <div class="container">
      <div class="spacer"></div>
      <div class="star-1">
        <img src="../assets/star.svg" />
      </div>
      <div class="star-2">
        <img src="../assets/star.svg" />
      </div>
      <div class="star-3">
        <img src="../assets/star.svg" />
      </div>

      <div class="circle1">

      </div>
      <div class="right">
        <h2>This is the landing page</h2>
        <Navbar />
      </div>
    </div>


    <div class="container">
      <div class="content">
        <h1>Hello this is the about view</h1>
      </div>
    </div>


    <div class="container">
      <h1>This is the examples view</h1>
      <p>Right now it has a set height of 400px</p>
    </div>
  </main>
</template>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;

  /* background-color: rgb(56, 30, 34); */
  color: rgb(10, 3, 3);
  height: 300vh;
  padding: 1em;
}

.spacer {
  height: 100vh;
}

.star-1,
.star-3 {
  height: 100px;
  width: 100px;
  position: relative;
}

.star-2 {
  height: 50px;
  width: 50px;
  position: relative;
  z-index: 999;
}

.star-4 {
  height: 75px;
  width: 75px;
}

img {
  height: 100%;
  width: 100%;
}


.circle1 {
  height: 100px;
  width: 100px;
  border: 2px solid rgb(119, 119, 241);
  border-radius: 100%;

}

h2 {
  font-size: 3rem;
}
</style>
