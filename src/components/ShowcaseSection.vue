<template>
  <div class="vertical-container" id="vertical-container">
    <div class="left-section">
      <div class="box front-end">
      <ul class="frontend-list">
        <li class="list-item">TypeScript</li>
        <li class="list-item">React</li>
        <li class="list-item">Vue</li>
        <li class="list-item">GSAP and JQuery</li>
      </ul>
    </div>
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
            <div class="list">
              <p>UML // JAVA // GIT</p>
            </div>
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
            <div class="list">
              <p>REACT // TYPESCRIPT // PYTHON // FLASK // OPENAPI // AUTH0 // MAPBOXGL</p>
            </div>
          </div>
        </div>
      </div>
      <div class="box box-works-right">
        Right side
      </div>
      <div class="box back-end">
        <ul class="backend-list">

          <li class="list-item">Python</li>
        <li class="list-item">Flask</li>
        <li class="list-item">Auth0</li>
        <li class="list-item">NextJS</li>
        <li class="list-item">SQL and Pandas</li>
        
        </ul>

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
    const headingWidths = ref([]);

    const debugging = () => {
      console.log("moused over");
    };

    onMounted(() => {
      gsap.registerPlugin(ScrollTrigger);

      // Wait for the next frame to ensure the DOM is updated
      requestAnimationFrame(() => {
        const cardHeaders = document.querySelectorAll('.card-header');
        cardHeaders.forEach((cardHeader, index) => {
          const width = cardHeader.getBoundingClientRect().width;
          headingWidths.value[index] = width; // Store width for each header
          const underline = cardHeader.nextElementSibling; // Get the next sibling element for the underline
          gsap.to(underline, {
            width: 0, // Start with zero width
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardHeader,
              start: 'top center', // Adjust the start position
              onEnter: () => {
                gsap.to(underline, {
                  width: headingWidths.value[index], // Animate to the stored width
                  duration: 1,
                  ease: 'power3.out'
                });
              },
              onLeaveBack: () => {
                gsap.to(underline, {
                  width: 0, // Animate back to zero width
                  duration: 1,
                  ease: 'power3.out'
                });
              }
            }
          });
        });
      });

      document.querySelectorAll('.frontend-list').forEach((item) => {
        item.innerHTML = item.textContent.replace(/\S/g, "<span class='char'>$&</span>")
        const chars = item.querySelectorAll('.char')
        gsap.from(chars, {
          duration: 1,
          color: 'black',
          stagger: 0.1,
          scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: 'bottom center',
            scrub: true
          }
        });
      });

      document.querySelectorAll('.backend-list').forEach((item) => {
        item.innerHTML = item.textContent.replace(/\S/g, "<span class='char'>$&</span>")
        const chars = item.querySelectorAll('.char')
        gsap.from(chars, {
          duration: 1,
          color: 'black',
          stagger: 0.1,
          scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: 'bottom center',
            scrub: true
          }
        });
      });

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

    return {
      debugging,
      headingWidths // Expose headingWidths for potential use in the template
    };
  },
}
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
  font-size: 5rem;
  font-weight: 600;
  text-align: left;
  text-transform: uppercase;
  width: 100%;
}

.card-header-underline {
  width: 0;
  /* Initially set the width to 0 */
  height: 5px;
  /* Set the height of the underline */
  background-color: #eeeeee;
  /* Set the color of the underline */
}

.box-works-left {
  background-color: yellow;
}

.box-works-right {
  background-color: pink;
}

.list {
  font-size: 0.5em;
  text-align: justify;
}

.frontend-list  {
  display: flex;
  justify-content: center;
  align-items: end;
  font-size: 5rem;
}

.backend-list { 
  font-size: 3rem;
}
.list-item {
  list-style: none;
}

</style>
