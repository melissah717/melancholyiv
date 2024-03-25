<script>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CursorFollow from "../components/CursorFollow.vue";
import ShowcaseSection from "../components/ShowcaseSection.vue";
import { animateElements } from "../animations";
import Background1 from "../assets/marble_lineart.png";
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
      Background1
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
          Hi  I'm Melissa!
        </div>
      </div>

      <div class="landing-paragraph-container">
        <p class="landing-paragraph">
          I'm a full stack developer based in San Francisco. My strengths are efficiency, communication, and flexibility. Building something great is both a dynamic and cummulative process that requires iteration and reflection. When I'm not coding, you'll probably find me around the house or store trying to DIWHY something.
        </p>
      </div>
      
    </div>

    <ShowcaseSection />

</main>
<FooterSection />
</template>




<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  color: rgb(10, 3, 3);
  height: 100vh;
}

.header {
  width: 100%;
  background-color: rgb(255, 255, 255);
  height: 100vh;
}

.landing-banner {
  font-size: 10rem;
  font-weight: 700;
  letter-spacing: -1rem;
  width: 100%;
  color: black;
  text-align: center;
}

.landing-paragraph {
  font-size: 2em;
  width: 40%;
  letter-spacing: -1.5px;
  font-weight: 600;
  text-align: justify;
  color: #00886a;
}

.landing-paragraph-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.spacer {
  opacity: 0;
  height: 100px;
  background-color: rgb(255, 255, 255);
}

.home-container {
  height: 250vh;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}




img {
  height: 100%;
}

.trigger {
  height: 5vh;
}


h2 {
  font-size: 3rem;
}


</style>
