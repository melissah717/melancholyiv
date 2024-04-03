<template>
  <div class="vertical-container" id="vertical-container">
    <div class="left-section">
      <div class="box-works-left final">
        <div class="letter m">m</div>
        <div class="letter y">y</div>
      </div>
      <div class="box guild-gaming">
        <div class="card">
          <img v-if="!isSmallScreen" src="../assets/gg.gif" class="gif" />
          <h1 v-else class="heading">Guild Gaming</h1>
        </div>
      </div>
      <div class="box tank-game">
        <div class="card">
          <img v-if="!isSmallScreen" src="../assets/cat.gif" class="gif" />
          <h1 v-else class="heading">Game Dev</h1>
        </div>
      </div>
    </div>
    <div class="right-section">
      <div class="box tank-info">
        <div class="info-card">
          <div class="text-card">
            <div class="card-header">
              Game Dev
            </div>
            <div class="tank" ref="tank">
              <p>java</p>
              <p>oop</p>
              <p>uml</p>
              <p>git</p>
              <p>mvc</p>
            </div>
            <div class="external-links">
              <a class="ex-links" href="https://github.com/melissah717/Tank-Game.git">repository</a>
              <a class="ex-links" href="https://www.youtube.com/watch?v=gMRex3wlUPo">demo</a>
            </div>

          </div>
        </div>
      </div>
      <div class="box gg-info">
        <div class="info-card">
          <div class="text-card">
            <div class="card-header">
              Guild Gaming
            </div>
            <div class="gg" ref="gg">
              <p>react</p>
              <p>typescript</p>
              <p>flask</p>
              <p>openAPI</p>
              <p>auth0</p>
            </div>
            <div class="external-links">
              <a class="ex-links" href="https://guildgaming.gg">https://guildgaming.gg</a>
              <a class="ex-links" href="https://gist.github.com/melissah717/public">gists</a>

            </div>
          </div>
        </div>
      </div>
      <div class="box-works-right final">
        <div class="letter w">w</div>
        <div class="letter o">o</div>
        <div class="letter r">r</div>
        <div class="letter k">k</div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip);

export default {
  setup() {

    const isSmallScreen = ref(false);
    onMounted(() => {
      if (window.innerWidth <= 768) {
        isSmallScreen.value = true;
      }

      let layouts = ["final", "grid"]
      let containerLeft = document.querySelector(".box-works-left")
      console.log(containerLeft)
      let curLayout = 0;
      let containerRight = document.querySelector(".box-works-right")

      function nextState() {
        const state = Flip.getState(".letter", { props: "color,backgroundColor", simple: true }); // capture current state

        containerLeft.classList.remove(layouts[curLayout]);
        containerRight.classList.remove(layouts[curLayout]);
        curLayout = (curLayout + 1) % layouts.length;
        containerLeft.classList.add(layouts[curLayout]);
        containerRight.classList.add(layouts[curLayout]);
        Flip.from(state, {
          absolute: true,
          stagger: 0.07,
          duration: 0.5,
          ease: "power2.inOut",
          spin: curLayout === 0,
          onEnter: (elements, animation) => gsap.fromTo(elements, { opacity: 0 }, { opacity: 1, delay: animation.duration() - 0.1 }),
          onLeave: elements => gsap.to(elements, { opacity: 0 })
        });

        gsap.delayedCall(1.5, nextState);
      }

      gsap.delayedCall(1, nextState);

      document.querySelectorAll('.frontend-list p').forEach((para) => {
        animateText(para);
      });

      document.querySelectorAll('.backend-list p').forEach((para) => {
        animateText(para, true);
      });

      const verticalContainer = document.getElementById("vertical-container");
      const leftSection = verticalContainer.querySelector(".left-section");
      const rightSection = verticalContainer.querySelector(".right-section");
      const containers = gsap.utils.toArray(".left-section .box");
      const snapPoints = containers.map((_, i) => {
        return (i + 1) / containers.length;
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
          scrub: true,
          snap: snapPoints,
          snapTolerance: 0
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

    function animateText(element, reverse = false) {
      element.innerHTML = element.textContent.replace(/\S/g, "<span class='char'>$&</span>");
      const chars = element.querySelectorAll('.char');
      gsap.from(chars, {
        duration: 1,
        color: 'black',
        stagger: 0.1,
        scrollTrigger: {
          trigger: element,
          start: reverse ? 'bottom center' : 'top bottom',
          end: reverse ? 'top center' : 'bottom center',
          scrub: true
        }
      });
    }

    return { isSmallScreen };
  }
}
</script>


<style>
.vertical-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  color: white;
}

.left-section,
.right-section {
  width: 50%;
  height: 300vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.flip-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.flip-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.left-section>div,
.right-section>div {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.my,
.works {
  font-size: 4rem;
  font-weight: 800;
  text-transform: uppercase;
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
}


.gif {
  width: 80%;
  height: auto;
  padding: 6px;
  background-color: black;
}

.card {
  width: 80%;
  height: 80%;
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.info-card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80%;
  background-image: url("../assets/textured.png");
  background-size: cover;
  filter: grayscale(100%);
  overflow: hidden;
}


.gg-info,
.tank-info {
  font-weight: 500;
  text-align: left;
  align-self: center;
}



.card-header {
  font-size: 4rem;
  font-weight: 600;
  text-align: left;
  text-transform: uppercase;
  width: 100%;
}

.tank,
.gg {
  font-size: 1.5rem;
  text-align: start;
  align-items: center;
  padding-left: 0.4rem;
}



.box-works-left,
.box-works-right {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.box-works-right.grid,
.box-works-left.grid {
  align-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  overflow: hidden;
}

.letter {
  text-align: center;
  color: black;
  font-size: 10vmax;
  font-weight: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 6px;
  font-family: "Rubik Mono One";
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.box-works-left.grid .letter,
.box-works-right.grid .letter {
  flex-basis: 49%;
}


.m {
  background: #355070;
}

.y {
  background: #6d597a;
}

.w {
  background: #b56576;
}

.o {
  background: #e56b6f;
}

.r {
  background: #eaac8b;
}

.k {
  background: #6d597a;
}

.s {
  background: #b56576;
}

.box {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
}


.front-end {
  align-items: end;
}

.frontend-list,
.backend-list {
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
  color: teal
}

.gg {
  color: white;
}

.external-links {
  font-size: 3rem;
  display: flex;
  flex-direction: column;
}

.ex-links {
  text-decoration: none;
  color: white;
  transition: transform 0.3s ease;
  line-height: 80%;
}

.ex-links:hover {
  animation: cameraEffect 2.5s ease-in-out infinite;
  scale: 1.05
}

@keyframes cameraEffect {
  0% {
    transform: translateX(12px) scale(1.1);
  }

  25% {
    transform: translateX(5px);
    filter: grayscale(75%) sepia(50%);
    color: teal;
  }

  50% {
    transform: translateX(20px) scale(1.1);
    filter: grayscale(50%) sepia(50%);
    color: teal;
  }

  75% {
    transform: translateX(-1px) rotate(1deg) scale(1.1);
    color: teal;
  }

  100% {
    transform: translateX(0) scale(1.1) rotate(-1deg);
  }
}

@media only screen and (max-width: 768px) {
  .letter {
    font-size: 3rem;

    border-radius: 5px;
    align-items: end;
    display: flex;
  }


  .box {
    height: 30vh;
  }

  .info-card {
    height: 40vh;
    width: 100%;
  }

  .tank,
  .gg {
    font-size: 1rem;
    text-align: left;
  }

  .card-header {
    display: none;
  }

  .external-links {
    font-size: 1rem;
    display: flex;
    align-items: start;
    padding: 0.5rem;
    justify-content: flex-start;
  }

  .final {
    height: 90%;
  }
  .box {
    height: 30vh;
  }

  h1 {
    color: black;
    font-family: "Comfortaa", sans-serif;
    font-weight: 800;
    font-size: 2rem;
    text-align: right;
  }
}
</style>
