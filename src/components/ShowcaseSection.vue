<template>
  <div class="vertical-container" id="vertical-container">
    <div class="left-section">
      <div class="box front-end">Front end</div>
      <div class="box box-works-left">
        FE develpoment
      </div>
      <div class="box guild-gaming">
        <div class="card">
          <img src="../assets/gg.gif" class="gif" />
        </div>
      </div>
      <div class="box tank-game">
        <div class="card">
          <img src="../assets/cat.gif" class="gif" />
        </div>
      </div>
    </div>
    <div class="right-section">
      <div class="box tank-info">
        <div class="info-card">
          <div class="text-card">
            <div class="card-header">
              Game Development
            </div>
            <div class="card-header-underline"></div>
            <br />
            // UML
            <br />
            // JAVA
          </div>
        </div>
      </div>
      <div class="box gg-info">
        <div class="line"></div>
        <div class="line"></div>
        <div class="info-card">
          <div class="text-card">
            <div class="card-header">
              Guild Gaming
            </div>
            <div class="card-header-underline"></div>
            <br />
            // React
            <br />
            // Python
            <br />
            // Auth0
            <br />
            // MapboxGL
          </div>
        </div>
      </div>
      <div class="box box-works-right">
        <Flower />
      </div>
      <div class="box back-end" @mouseover="showOverlay('backend box overlay')">Back end stuffs</div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Flower from "../components/Flower.vue";
export default {
  components: {
    Flower,
  },
  setup() {

    const debugging = () => {
      console.log("moused over");
    };

    onMounted(() => {
      gsap.registerPlugin(ScrollTrigger);
      const verticalContainer = document.getElementById("vertical-container");
      const leftSection = verticalContainer.querySelector(".left-section");
      const rightSection = verticalContainer.querySelector(".right-section");
      const containers = gsap.utils.toArray(".left-section .box");
      const snapPoints = containers.map((_, i) => {
        return i / (containers.length - 1);
      });

      gsap.set(rightSection, {
        y: window.innerHeight - leftSection.clientHeight
      });

      gsap.timeline({
        defaults: {
          ease: "none"
        },
        scrollTrigger: {
          trigger: verticalContainer,
          start: "top top",
          end: "+=3000",
          pin: true,
          invalidateOnRefresh: true,
          markers: true,
          scrub: true,
          snap: snapPoints,
          snapTolerance: -1
        }
      })
        .to(leftSection, {
          y: window.innerHeight - leftSection.clientHeight
        })
        .to(
          rightSection,
          {
            y: 0
          },
          0
        );
    });

    const animateUnderline = () => {
      const cardHeader = document.querySelector('.card-header')
      const headingWidth = cardHeader.getBoundingClientRect().width
      gsap.to('.card-header-underline', {
        width: headingWidth,
        duration: 1,
        ease: 'power3.out',
        justifyContent: 'center'
      })
    }

    const reverseUnderline = () => {
      gsap.to('.card-header-underline', {
        width: 0,
        duration: 1,
        ease: 'power3.out'
      })
    }

    ScrollTrigger.create({
      trigger: 'card-header',
      start: 'top center',
      onEnter: animateUnderline,
      onLeaveBack: reverseUnderline
    })

    return {
      debugging
    };
  }
};
</script>

<style>
.vertical-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex
}

.left-section,
.right-section {
  width: 50%;
  height: 400vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}


.left-section>div,
.right-section>div {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-tracks: center;
  background-color: #ffffff
}


.guild-gaming,
.tank-game {
  background-color: white;
}

.text-card {
  background-color: rgb(0, 0, 0);
  width: 85%;
  height: 85%;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;

}


.gif {
  width: 95%;
  padding: 6px;
  background-color: black;
}

.card {
  width: 70%;
  height: 70%;
  background-color: rgb(112, 112, 112);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.info-card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 70%;
  background-image: url("../assets/textured.png");
  background-size: cover;
  /* Adjusts the background image size to cover the entire element */
  filter: grayscale(100%);
  /* Converts the background image to black and white */
  overflow: hidden;
  /* Prevents the background image from overflowing */
}


.gg-info,
.tank-info {
  font-size: 5rem;
  font-weight: 400;
  text-align: right;
  align-self: center;
}

.front-end,
.back-end {
  color: black;
}

.card-header {
  font-size: 6rem;
  font-weight: 600;
  text-align: left;
  text-transform: uppercase;
  width: 100%;
}

.card-header-underline {
  width: 0;
  /* Initially set the width to 0 */
  height: 2px;
  /* Set the height of the underline */
  background-color: #eeeeee;
  /* Set the color of the underline */
}
</style>
