<script>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CursorFollow from "../components/CursorFollow.vue";
import ShowcaseSection from "../components/ShowcaseSection.vue";
import { animateElements } from "../animations";
import FooterSection from "../components/FooterSection.vue";


export default {
  setup() {
    const verticalContainer = ref(null);
    onMounted(() => {
      animateElements();
    });

    gsap.registerPlugin(ScrollTrigger)

    return {
      verticalContainer,
    };
  },
  components: {
    CursorFollow,
    ShowcaseSection,
    FooterSection
  },
};
</script>

<template>
  <main>
    <CursorFollow />
    <div class="container">

      <div class="header">
        <div class="landing-banner">
          Hi I'm Melissa!
        </div>
      </div>
      <div class="landing-paragraph-container">
        <p class="landing-paragraph">
          I'm a full stack developer based in San Francisco. My strengths are efficiency, communication, and
          flexibility. Building something great is both a dynamic and cummulative process that requires iteration and
          reflection. When I'm not coding, you'll probably find me around the house or store trying to DIWHY something.
          I find inspiration from beautiful things, repulsive things, and everything in between.
        </p>
      </div>
    </div>

    <ShowcaseSection />

  </main>
  <FooterSection />
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  color: rgb(10, 3, 3);
  height: 180vh;
}

.header {
  width: 100%;
  background-color: #ffffff;
  height: 90vh;
}

.spacer {
  height: 20vh;
}

.landing-banner {
  font-size: 8rem;
  font-weight: 900;
  letter-spacing: -0.8rem;
  width: 80%;
  color: black;
  text-align: center;
  font-family: "Comfortaa", sans-serif;
  overflow: hidden;
  border-right: .05em solid #e56b6f; 
  white-space: nowrap; 
  margin: 0 auto; 
  letter-spacing: .15em; 
  animation: typing 3.5s steps(40, end), blink-caret .75s step-end infinite;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #e56b6f; }
}

.landing-paragraph {
  font-size: 2em;
  width: 45%;
  letter-spacing: -1.5px;
  font-weight: 600;
  text-align: justify;
  color: black;
}

.landing-paragraph-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
