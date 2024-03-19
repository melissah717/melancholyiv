<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import petal from "../assets/petal.png";

const boxes = ref([]);

// Function to animate the circle rotation
const animateBoxes = (rotationDirection) => {
  const totalPetals = boxes.value.length;
  const maxRotation = 360; // Total rotation angle to form a complete circle
  boxes.value.forEach((box, index) => {
    const startRotation = index * (maxRotation / totalPetals); // Start rotation angle for each petal
    const endRotation = maxRotation - startRotation; // End rotation angle for each petal (reverse)
    gsap.fromTo(box, {rotation: startRotation}, {
      duration: 1,
      rotation: endRotation, // End rotation angle for each petal
      transformOrigin: 'bottom top', // Set transform origin to the center of each petal
      ease: 'none',
      delay: index * 0.1, // Apply delay to create sequential opening effect
      opacity: 1
    });
  });
};

// Setup ScrollTrigger to activate animation on scroll
const setupScrollTrigger = () => {
  ScrollTrigger.create({
    trigger: '.landing-paragraph',
    start: 'top center', // Adjust as needed
    end: 'bottom center',
    markers: true, // Set to true for debugging
    onEnter: () => {
      animateBoxes('forward'); // Forward animation when entering trigger
    },
    onLeaveBack: () => {
      animateBoxes('backward'); // Backward animation when leaving trigger
    },
    onToggle: (self) => {
      if (self.direction === -1) {
        animateBoxes('forward'); // Forward animation when scrolling up
      }
    }
  });
};

// Initialize the ScrollTrigger setup after the DOM has loaded
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  setupScrollTrigger();
});
</script>

<template>
  <div class="flower-container">
    <div class="circle">
      <img v-for="index in 9" :key="index" :src="petal" class="box" ref="boxes" alt="petal" />
    </div>
  </div>
</template>

<style scoped>
.flower-container {
  position: relative;
  width: 400px;
  height: 400px;
}

.circle {
  position: absolute;
  width: 50px;
  height: 50px;
  top: 50%;
  left: 50%;
  border: 1px solid black;
}

.box {
  width: 50px;
  height: 50px;
  position: absolute;
}
</style>
