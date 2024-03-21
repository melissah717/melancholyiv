<template>
    <div>
      <div
        ref="glowEffect"
        class="glow-effect"
        :style="{ top: mousePos.y + 'px', left: mousePos.x + 'px' }"
      ></div>
      <div
        ref="patternEffect"
        class="pattern-effect"
        :style="{ top: mousePos.y + 'px', left: mousePos.x + 'px' }"
      ></div>
    </div>
</template>
  
  <script>
  import { gsap } from 'gsap';
  
  export default {
    data() {
      return {
        mousePos: { x: 0, y: 0 },
      };
    },
    mounted() {
      gsap.to(this.$refs.glowEffect, {
        scale: 1.5,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
        paused: true,
      });
  
      gsap.to(this.$refs.patternEffect, {
        scale: 2,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
        paused: true,
      });
  
      window.addEventListener('mousemove', this.handleMouseMove);
    },
    methods: {
      handleMouseMove(event) {
        this.mousePos.x = event.clientX;
        this.mousePos.y = event.clientY;
  
        gsap.to(this.$refs.glowEffect, {
          x: this.mousePos.x,
          y: this.mousePos.y,
          duration: 0.1,
        });
  
        gsap.to(this.$refs.patternEffect, {
          x: this.mousePos.x,
          y: this.mousePos.y,
          duration: 0.1,
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .glow-effect {
    position: fixed;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(247, 45, 45, 0.5);
    mix-blend-mode: screen;
    pointer-events: none;
  }
  
  .pattern-effect {
    position: fixed;
    width: 100px;
    height: 100px;
    background-image: url('../assets/lantern.png');
    background-size: cover;
    pointer-events: none;
  }
  </style>
  