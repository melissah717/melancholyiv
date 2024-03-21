<template>
  <div class="vertical-container" id="vertical-container">
    <div class="left-section">
      <div class="box" @mouseover="showOverlay('testing overlay')">Front end</div>
      <div class="box box-works" @mouseover="debugging">works</div>
      <div class="box guild-gaming">
        <div class="card">
          <img src="../assets/gg.gif" class="gif"/>
        </div>
      </div>
      <div class="box tank-game">
        <div class="card">
          <img src="../assets/cat.gif" class="gif"/>
        </div>
      </div>
    </div>
    <div class="right-section">
      <div class="box">Java game</div>
      <div class="box">Guild Gaming</div>
      <div class="box box-works"><Flower /></div>
      <div class="box">Back end stuffs</div>
    </div>
    <GenericOverlay :overlayText="overlayText" />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Flower from "../components/Flower.vue";
import GenericOverlay from "../components/GenericOverlay.vue";

export default {
  components: {
    Flower,
    GenericOverlay
  },
  setup() {
    const overlayText = ref("");

    const showOverlay = (text) => {
      overlayText.value = text;
    };

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
          snapTolerance: 0.1
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

    return {
      showOverlay,
      overlayText,
      debugging
    };
  }
};
</script>

<style>
/* Your styles here */
</style>


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


.left-section > div,
    .right-section > div {
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 6rem;
      font-weight: 600;
    }

.box {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-tracks: center;
    border: 3px dotted rgb(116, 74, 74);
    font-size: 6rem;
    background-color: #000000
}

.box-works {
  background-color: white;
  border: none;
  color: black;
}

.overlay {
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: black;
  opacity: 0.4;
  z-index: 2;
  cursor: pointer;
}

.guild-gaming, .tank-game {
  background-color: white;
  border: 2px solid red;
}

.gif {
  width: 95%;
  padding: 20px;
}

.card {
  width: 80%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
