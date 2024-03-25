<template>
  <div class="footer-container">
      <div class="text-content">
        <a href="mailto:melissa.h717@outlook.com" class="email">melissa.h717@outlook.com</a>
        <div class="links">
          <div class="github">
          <a href="https://github.com/melissah717" class="link">github</a>
          </div>
          <div class="github">
          <a href="https://linkedin.com/in/melissah717" class="link">linkedin</a>
          </div>
          <div class="blog">
            <a href="/" disabled class="link">blog</a></div>
        </div>
      </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  setup() {
    const footer = ref(null);

    onMounted(() => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footer.value,
          start: "bottom bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      tl.to(footer.value, { y: 0 });
    });

    return {
      footer,
    };
  },
};
</script>

<style scoped>
.footer-container {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 12vh; /* Adjust height as needed */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
}
.text-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80rem; /* Adjust width as needed */
}

.links {
  display: flex;
}

.links > div {
  margin-right: 10px;
}

.links > div:last-child {
  margin-right: 0; 
}

.email {
  font-size: 4rem;
  letter-spacing: -0.3rem;
  color: white;
  text-decoration: none;
  font-weight: 700
}

.link {
  text-decoration: none;
  font-size: 2rem;
}
</style>
