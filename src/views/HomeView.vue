<script setup lang="ts">
import Lenis from "@studio-freight/lenis"
import { onMounted } from "vue"

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const tl = gsap.timeline();

  tl.to(".landing-paragraph", {
    y: -80,
    opacity: 0.7,
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
      // ease: "power1.inOut"
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
    backgroundColor: "#030C17",
    color: "#fff",
    duration: 0.5,
    scrollTrigger: {
      trigger: ".examples-container",
      start: "35% 90%",
      end: "center center",
      scrub: true,
      // markers: true
    },
  });

  // tl.to(".star-1", {
  //   opacity: 1,
  //   y: 700,
  //   x: 500,
  //   scale: 0.001,
  //   scrollTrigger: {
  //     trigger: ".examples-container",
  //     // markers: true,
  //     start: "top center",
  //     end: "100% bottom",
  //     scrub: true
  //   }
  // })


  // tl.from(".star-2", {
  //   opacity: 1,
  //   y: 700,
  //   x: 500,
  //   scale: 0.001,
  //   scrollTrigger: {
  //     trigger: ".star-2",
  //     markers: true,
  //     start: "top center",
  //     end: "100% bottom",
  //     scrub: true
  //   }
  // })
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


  tl.to(".star-1", {
    scale: 0.6,
    y: 600,
    scrollTrigger: {
      trigger: ".star-1",
      start: "top center",
      end: "3000% bottom",
      scrub: 2,
      // markers: true,
      pin: true
    }
  })

  tl.to(".small-stars", {
    scale: 0.5,
    x: 60,
    y: 300,
    scrollTrigger: {
      trigger: ".small-stars",
      start: "top center",
      end: "bottom bottom",
      scrub: 1,
      // markers: true,
      pin: true,
      pinSpacing: false

    }
  })

  tl.to(".star-2", {
    scale: 0.4,
    x: -700,
    y: 200,
    scollTrigger: {
      trigger: ".star-3",
      start: "top center",
      end: "bottom bottom",
      scrub: 1,
      // markers: true,
    },
  })


  tl.to(".star-3", {
    scale: 0.5,
    y: -600,
    x: 300,
    opacity: 0.01,
    scrollTrigger: {
      trigger: ".big-star-container",
      scrub: 2,
      start: "top center",
      end: "-200% center",
      pin: true
    }
  })

  tl.to(".parallax-1", {
    y: -1200,
    opacity: 0.2,
    scrollTrigger: {
      trigger: ".star-3",
      scrub: true,
    }
  })

  tl.to(".parallax-2", {
    y: -3000,
    opacity: 0.8,
    scale: 1,
    scrollTrigger: {
      trigger: ".parallax-middle",
      scrub: 3,
      pin: true,
      markers: true,
      start: "-100% 30%",
      end: "center center"
    }
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
      <div class="landing-paragraph-container">
        <p class="landing-paragraph">
          Hi, I'm Melissa. I'm a software engineer who is always learning what I don't know. These days, I'm
          located in the San Francisco Bay Area. What else do people say here? They like solving problems? Well,
          I guess I do too. This website was a big problem headache for a few weeks. On top of fullstack development,
          I think human computer interaction and neural networks are pretty neat too.
        </p>
      </div>
      <div class="trigger-3"></div>
      <div class="home-container" id="home-container">
        <div class="spacer"></div>

        <div class="darkness-trigger"></div>
        <div class="spacer"></div>


        <div class="star-container">
          <div class="star-1"></div>
          <div class="trigger"></div>
          <div class="star-2"></div>

          <div class="small-stars">
            <div class="star-sm1"></div>
            <div class="star-sm2"></div>
            <div class="star-sm3"></div>
          </div>
        </div>
        <div class="big-star-container">
          <div class="star-3"></div>
        </div>

      </div>
      <div class="spacer"></div>

      <div class="parallax-middle">
        <img src="../assets/layer1.png" class="parallax-1" />

      </div>

      <div class="parallax-top">
        <img src="../assets/city_lights2.png" class="parallax-2" />
      </div>
      <div class="spacer-black">spacer here</div>



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
  border-radius: 100%;
  /* background-color: #EED098; */
  background-color: #EED098;
  -webkit-box-shadow: 0px 0px 59px 30px #EED098;
  -moz-box-shadow: 0px 0px 59px 30px #EED098;
  box-shadow: 0px 0px 59px 30px #EED098;
  /* opacity: 0 */
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
  /* opacity: 0 */
}

.star-container {
  display: flex;
  flex-direction: column;
}

.small-stars {
  margin-top: 10vh;
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
  /* opacity: 0 */
}

.star-sm1 {
  margin-top: 20vh;
  margin-left: 33vw;
}

.star-sm2 {
  justify-self: center;
  margin-top: 20vh;
  margin-left: 10vw;
}

.star-sm3 {
  /* background-color: rgb(88, 54, 60); */
  /* margin-right: 30vw; */
  margin-left: 20vw;
  margin-top: 10vh;
}


.big-star-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.star-3 {
  height: 100px;
  width: 100px;
  border-radius: 99%;
  margin-top: 90vh;
  margin-right: 20vw;
  border-color: #EED098;
  background-color: #EED098;
  -webkit-box-shadow: 0px 0px 59px 100px #EED098;
  -moz-box-shadow: 0px 0px 59px 100px #EED098;
  box-shadow: 0px 0px 59px 100px #EED098;
  /* opacity: 0 */
}

.right {
  display: flex;
  justify-content: space-between;
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
  height: 30rem;
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
  height: 200px;
  width: 200px;
  z-index: 999;
}


img {
  height: 100%;
}

.trigger {
  height: 5vh;
  /* background-color: pink; */
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
  color: black;
}

.landing-paragraph {
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


.parallax-1 {
  width: 100%;
  z-index: -999;
}

.parallax-2 {
  width: 100%
}
</style>
