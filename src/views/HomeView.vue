<script setup lang="ts">
import Lenis from "@studio-freight/lenis"
import { onMounted } from "vue"

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const tl = gsap.timeline();

  tl.to(".landing-paragraph", {
    y: -80, // Reduced the distance for smoother transition
    opacity: 0.7, // Starting opacity
    scrollTrigger: {
      trigger: ".trigger-2",
      start: "-1000% center",
      end: "6000% 90%",
      pin: true,
      pinSpacing: false,
      scrub: true,
    },
  });

  tl.to(".landing-banner", {
    scrollTrigger: {
      trigger: ".landing-banner",
      start: "bottom 40%",
      end: "10% 15%",
      // markers: true,
      pin: true,
      pinSpacing: false,
      scrub: 4,
      ease: "power1.inOut"
    },
    y: 1100,
  })

  //   tl.to(".landing-banner", {
  //     duration: 1.5,
  //     y: -20,
  //     repeat:-1,
  //     yoyo: true
  // });

  // tl.fromTo(".star-1", {
  //   // top: "50%", 
  // },
  //   {
  //     scale: 0.65,
  //     opacity: 1,
  //     rotation: 90,
  //     x: 1000,
  //     y: -400,
  //     top: "50%",
  //     left: "-10%",
  //     scrollTrigger: {
  //       trigger: ".star-1",
  //       start: "top top",
  //       end: "bottom top",
  //       scrub: true,
  //       // markers: true
  //     }
  //   });

  // Fade to dark mode when reaching the trigger
  tl.to("body, .container", {
    backgroundColor: "#000",
    color: "#fff",
    scrollTrigger: {
      trigger: ".examples-container",
      start: "35% 90%",
      end: "center center",
      scrub: true,
    },
  });

  tl.to(".star-1", {
    opacity: 1,
    y: 500,
    x: 500,
    scale: 0.6,
    scrollTrigger: {
      trigger: ".examples-container",
      markers: true,
      start: "top center",
      end: "100% bottom",
      scrub: true
    }
  })
  tl.fromTo(".orange-flower", {
    x: -200
  }, {
    x: 750,
    y: 700,
    rotation: -50,
    duration: 2,
    scrollTrigger: {
      start: "top 50%",
      end: "10 00% 100%",
      trigger: ".trigger-1",
      scrub: 2,
      // markers: true
    }
  },
  );

  tl.to(".square-1", {
    scrollTrigger: {
      trigger: ".landing-banner",
      start: "top top",
      end: "bottom 70%", // Adjusted the end value to ensure the square animation covers the entire scroll range
      scrub: 2,
      duration: 2,
      // markers: true
    },
    y: 1500,
    x: -400,
    rotation: 90,
    opacity: 0.5
  });
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
      <div class="header">
        <div class="square-1"></div>
        <div class="landing-banner">
          Melissa</div>
        <div class="orange-flower">
          <img src="../assets/orange-flower.svg" />
        </div>
        <div class="trigger-1"></div>
      </div>
      <div class="spacer"></div>

      <div class="spacer"></div>
      <div class="trigger-2"></div>
      <!-- <span class="landing-paragraph">some optional span text here</span> -->
      <div class="landing-paragraph-container">
        <p class="landing-paragraph">
          This is a paragraph about melissa. I'll try to make it as short and sweet as possible because
          she likes to stay incognito. Hopefully one day she will die in relative obscurity without spawning
          any selfish brats to replace herself. I'm kidding though this is just some filler for some text I haven't
          thought of yet.
        </p>
      </div>
      <div class="trigger-3"></div>
      <div class="home-container" id="home-container">
        <div class="spacer"></div>

        <div class="right">
          <div class="star-1"></div>
          <div class="examples-paragraph">TRIGGER FOR DARKNESS</div>
          <div class="trigger"></div>
        </div>
      </div>

      <div class="star-2"></div>
      <div class="about-container" id="about-container">

      </div>


      <!-- <div class="examples-container" id="examples-container">
        <h1>This is the examples view</h1>
        <p>Right now it has a set height of 400px</p>
      </div> -->
    </div>
  </main>
</template>


<style scoped>
.star-1 {
  height: 7px;
  width: 7px;
  background-color: rgba(255, 252, 217, 0.99);
  -webkit-box-shadow: 0px 0px 59px 60px rgba(255, 252, 217, 0.99);
  -moz-box-shadow: 0px 0px 59px 60px rgba(255, 252, 217, 0.99);
  box-shadow: 0px 0px 59px 74px rgba(255, 252, 217, 0.99);
  opacity: 0
}

.star-2 {
  height: 7px;
  width: 7px;
  z-index: 999;
  background-color: rgba(255, 252, 217, 0.99);
  -webkit-box-shadow: 0px 0px 59px 60px rgba(255, 252, 217, 0.99);
  -moz-box-shadow: 0px 0px 59px 60px rgba(255, 252, 217, 0.99);
  box-shadow: 0px 0px 59px 74px rgba(255, 252, 217, 0.99);
  opacity: 0
}


.container {
  display: flex;
  flex-direction: column;
  width: 100vw;

  /* background-color: rgb(56, 30, 34); */
  color: rgb(10, 3, 3);
  height: 900vh;
}

.square-1 {
  height: 40rem;
  width: 80rem;
  background-color: rgb(255, 128, 128);
  /* border: 3px solid black; */
  opacity: 0.1;
}

.about-container,
.home-container,
.examples-container {
  height: 200vh;
  min-width: 100%;
}

.spacer {
  height: 45vh;
}


.trigger-1,
.trigger-2,
.trigger-3 {
  height: 10px;
  background-color: pink;
  opacity: 0
}

.orange-flower {
  height: 200px;
  width: 200px;
  /* position: relative; */
  z-index: 999;
}


img {
  height: 100%;
}

.trigger {
  height: 5vh;
  /* background-color: pink; */
}

/*MOON*/

.header {
  background-image: "../assets/watercolor.png";
  opacity: 0.5
}

.circle-1 {
  height: 100px;
  width: 100px;
  border: 1px solid #938d9f;
  border-radius: 100%;
  align-self: flex-start;
  margin: 0.1rem;
}

.circle-2 {
  height: 135px;
  width: 40px;
  border: 1px solid rgba(88, 0, 0, 0.774);
  border-radius: 100%;
  align-self: flex-start;
  margin-left: 3rem;
}

.star-5 {
  height: 100px;
  width: 100px;
  left: 0;
  top: 0;
}

h2 {
  font-size: 3rem;
}

.landing-banner {
  font-size: 20rem;
  font-weight: 700;
  letter-spacing: -2.3rem;
  padding-left: 1rem;
  width: 100%;
}

.landing-paragraph {

  opacity: 0.2;
  font-size: 1em;
}

.about-container {
  display: flex;
  justify-content: flex-end;
  width: 100%;
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
</style>
