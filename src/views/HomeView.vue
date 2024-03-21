<script>
import { onMounted, ref } from "vue"
import CursorFollow from "../components/CursorFollow.vue"
import ShowcaseSection from "../components/ShowcaseSection.vue"
import { animateElements } from "../animations"

export default {
  setup() {
    const verticalContainer = ref(null);
    onMounted(() => {
      animateElements();
    });

    return {
      verticalContainer,
    };
  },
  components: {
    CursorFollow,
    ShowcaseSection
  },
};
</script>

<template>
  <main>
    <CursorFollow />
    <!-- <CursorEffect /> -->
    <div class="container">
      <div class="header">
        <div class="landing-banner">
          <h1>Melissa</h1>
        </div>
      </div>
      <div class="spacer"></div>

      <div class="landing-paragraph-container">
        <div class="spacer"></div>
        <p class="landing-paragraph">
          I'm a full stack developer based in San Francisco. My strengths are efficiency, communication, and flexibility. When I'm not coding, you'll probably find me at the home improvement store trying to DIWHY something.
        </p>
      </div>

      <div class="spacer"></div>

      <div class="home-container">


        <div class="darkness-trigger"></div>
      </div>
      
    </div>
    
    <ShowcaseSection />

    <div class="sassy">
          <h1 class="sassy-heading">The 2000's called.</h1>
          <div class="sassy-heading-underline"></div> 
          <div class="sassy-marquee">
            <p>(They want their marquees back)</p>
          </div>
        </div>
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
  height: 300vh;
  will-change: transform;
  z-index: 100;

}

.header {
  width: 100%;
  background-color: rgb(255, 255, 255);

}

.landing-banner {
  font-size: 12rem;
  font-weight: 700;
  letter-spacing: -2.3rem;
  width: 100%;
  color: black;
  text-align: center;
}

.landing-paragraph {
  font-size: 4em;
  width: 50%;
  letter-spacing: -1.5px;
  font-weight: 600;
  text-align: justify;
  color: #c45b94
}

.landing-paragraph-container {
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  max-width: 100vw;
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

.sassy-marquee {
  width: 100%;
  animation: marquee 10s linear infinite; /* Adjust the duration (10s) to control the speed */
}

@keyframes marquee {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}

.video-background {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.video-foreground {
  position: absolute;
  width: 100%;
  height: 100%;
}

.video-foreground iframe {
  width: 70%;
  height: 200%;
}

.dynamic-text {
  width: 100%;
  position: absolute;
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
/* .parallax-middle-picture {
  width: 100%;
}

.parallax-top {
  position: relative;
}
.parallax-top-picture {
  width: 100%;
  margin-top: -20rem;
  position: absolute;
}

.parallax-lantern {
position: absolute;
  right: 450;
  top: 0;
  /* z-index: 100; 
  width: 20%;
} */

/* 
.star-1 {
  height: 7px;
  width: 7px;
  border-radius: 100%;
  background-color: #EED098;
  -webkit-box-shadow: 0px 0px 59px 30px #EED098;
  -moz-box-shadow: 0px 0px 59px 30px #EED098;
  box-shadow: 0px 0px 59px 30px #EED098;
}

.star-2 {
  height: 70px;
  width: 70px;
  border-radius: 100%;
  margin-top: 30vh;
  border-color: #EED098;
  background-color: #EED098;
  -webkit-box-shadow: 0px 0px 59px 30px #EED098;
  -moz-box-shadow: 0px 0px 59px 30px #EED098;
  box-shadow: 0px 0px 59px 30px #EED098;
  position: absolute;
  right: 0;
}

.star-container,
.big-star-container {
  display: flex;
  flex-direction: column;
}

.star-sm1,
.star-sm2,
.star-sm3 {
  height: 7px;
  width: 7px;
  border-radius: 100%;
  background-color: #EED098;
  -webkit-box-shadow: 0px 0px 59px 30px #EED098;
  -moz-box-shadow: 0px 0px 59px 30px #EED098;
  box-shadow: 0px 0px 59px 30px #EED098;
  margin-top: 30vh;
  /* opacity: 0 
}

.star-sm1 {
  margin-left: 33vw;
}

.star-sm2 {
  justify-self: center;
  margin-left: 10vw;
}

.star-sm3 {
  margin-left: 20vw;
  margin-top: 20vh;
} */

/* .square-1 {
  height: 13rem;
  width: 18rem;
}





.parallax-middle {
  height: 100vh
}

.trigger-1,
.trigger-2,
.trigger-3 {
  height: 10px;
  background-color: pink;
  opacity: 0
}

.spacer-black {
  height: 45vh;
  background-color: black;
  color: white;
  margin-top: -100px;
}


.orange-flower {
  height: 100px;
  width: 100px;
  z-index: 999;
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

span {
  font-family: "Cedarville Cursive", cursive;
}


.parallax-1 {
  width: 100%;
}

.parallax-2 {
  width: 100%;
  z-index: 2;
}

.parallax-lantern {
  scale: 0.5;
  margin-top: 10%;
  margin-left: 53%;
  right: 0;
}

.parallax-top {
  position: relative;
  top: 0;
  left: 0;
}
.parallax-top2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
} */

</style>
