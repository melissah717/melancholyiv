<script>
import { onMounted, ref } from "vue"
import CursorFollow from "../components/CursorFollow.vue"
import ShowcaseSection from "../components/ShowcaseSection.vue"
import { animateElements } from "../animations"
import Background1 from "../assets/marble_lineart.png"

export default {
  setup() {
    const verticalContainer = ref(null);
    onMounted(() => {
      animateElements();
    });

    return {
      verticalContainer,
      Background1
    };
  },
  components: {
    CursorFollow,
    ShowcaseSection,
  },
};
</script>

<template>
  <main>
    <CursorFollow />
    <div class="container">

      <div class="header">
        <div class="landing-banner">
          Hi, I'm Melissa
          <!-- Melissa -->
        </div>
      </div>

      <div class="spacer"></div>

      <div class="landing-paragraph-container">

        <p class="landing-paragraph">
          I'm a full stack developer based in San Francisco. My strengths are efficiency, communication, and flexibility. Building something great is both a dynamic and cummulative process. When I'm not coding, you'll probably find me around the house or store trying to DIWHY something.

        </p>
      </div>
      
    </div>
    
    <ShowcaseSection />


<div class="footer-trigger"></div>
<div class="footer-container">
  LOL
</div>
</main>
</template>




<style scoped>

.container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  color: rgb(10, 3, 3);
  height: 200vh;
  will-change: transform;
  z-index: 100;

}

.header {
  width: 100%;
  background-color: rgb(255, 255, 255);
  height: 100vh;
}

.landing-banner {
  font-size: 16rem;
  font-weight: 800;
  letter-spacing: -1.5rem;
  width: 100%;
  color: black;
  text-align: center;
}

.landing-paragraph {
  font-size: 4em;
  width: 70%;
  letter-spacing: -1.5px;
  font-weight: 600;
  text-align: justify;
  color: #c45b94
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

.sassy {
  width: 70%;
  align-items: center;
  text-align: center;
  font-size: 2em;
  overflow: hidden; /* Ensures that the curtain effect is applied */
}

.sassy-heading {
  font-size: 10rem;
  margin: 0
}


.sassy-heading-underline {
  width: 0; /* Initially set the width to 0 */
  height: 2px; /* Set the height of the underline */
  background-color: #eeeeee; /* Set the color of the underline */
}




.footer-container {
  height: 75vh;
  background-color:#000000;
  width: 100vw;
}
.footer {
  position: fixed;
  top: 0px;
  left: 0px;
  padding: 6px 10px 10px 10px;
  border-bottom-right-radius: 26px;
  z-index: 100;
  background-color:#4C51BF;
  will-change: transform;
  height: 20vh;
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


.landing-paragraph {
  font-size: 1em;
}

.landing-paragraph-container {
  font-size: 2rem;
  margin-top: 1em;
  font-weight: 700;
  width: 50%;
  letter-spacing: -1.5px;
  text-align: justify;
  align-self: center;
  top: 0;
}

</style>
