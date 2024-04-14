<script>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { TextPlugin } from "gsap/TextPlugin";

export default {
  setup() {
    const subheaders = ref([
        {text: "guild gaming", url: "https://guildgaming.gg"}, 
        {text:"admin dashboard", url: "https://gist.github.com/melissah717/public"},
        {text:"redeye media", url: "https://redeyemedia.design"},
        {text:"melissa.h717@outlook.com", url: "mailto:melissa.h717@outlook.com"}
      ])
      const current = ref(0);
      const currentSubheader = ref(subheaders.value[0])
    onMounted(() => {

      document.querySelectorAll('.paragraph').forEach(para => {
        para.innerHTML = para.textContent.replace(/\S/g, "<span class='char'>$&</span>");
        const chars = para.querySelectorAll('.char');
        gsap.to(chars, {
          duration: 1,
          color: 'white',
          stagger: 0.1,
          scrollTrigger: {
            trigger: para,
            start: 'top bottom',
            scrub: 1
          }
        });
      });

      gsap.registerPlugin(ScrollTrigger, Observer, TextPlugin)
      const sections = gsap.utils.toArray(".panel")
      const images = gsap.utils.toArray(".image").reverse();
      const slideImages = gsap.utils.toArray(".panel .img");
      const outerWrappers = gsap.utils.toArray(".panel .outer");
      const innerWrappers = gsap.utils.toArray(".panel .inner");
      const wrap = gsap.utils.wrap(0, sections.length);
      let animating;
      let currentIndex = 0;

      gsap.set(outerWrappers, { xPercent: 100 });
      gsap.set(innerWrappers, { xPercent: -100 });
      gsap.set(".panel:nth-of-type(1) .outer", { xPercent: 0 });
      gsap.set(".panel:nth-of-type(1) .inner", { xPercent: 0 });

      function updateSubheader(index) {
        current.value = index;
        currentSubheader.value = subheaders.value[current.value];
      }
      function gotoSection(index, direction) {

        if (!animating) {
          animating = true;

          index = index % subheaders.value.length;
          updateSubheader(index);  

          // Animation code here, setup your GSAP timeline
          let tl = gsap.timeline({
            defaults: { duration: 1, ease: "expo.inOut" },
            onComplete: () => {
              animating = false;
            }
          });

          // Example of animation, adapt it to your needs
          tl.fromTo(sections[current.value], { opacity: 0 }, { opacity: 1 });
          // You should include your actual transition code here

          current.value = index;  // Update the current index after animation
        }
        animating = true;
        index = wrap(index);

        let tl = gsap.timeline({
          defaults: { duration: 1, ease: "expo.inOut" },
          onComplete: () => {
            animating = false;
          }
        });

        let currentSection = sections[currentIndex];
        let heading = currentSection.querySelector(".panel .heading");
        let nextSection = sections[index];
        let nextHeading = nextSection.querySelector(".panel .heading");

        gsap.set([sections, images], { zIndex: 0, autoAlpha: 0 });
        gsap.set([sections[currentIndex], images[index]], { zIndex: 1, autoAlpha: 1 });
        gsap.set([sections[index], images[currentIndex]], { zIndex: 2, autoAlpha: 1 });

        tl
          // .set(subheader, { text: index + 1 }, 0.32)
          .fromTo(
            outerWrappers[index],
            {
              xPercent: 100 * direction
            },
            { xPercent: 0 },
            0
          )
          .fromTo(
            innerWrappers[index],
            {
              xPercent: -100 * direction
            },
            { xPercent: 0 },
            0
          )
          .to(
            heading,
            {
              "--width": 800,
              xPercent: 30 * direction
            },
            0
          )
          .fromTo(
            nextHeading,
            {
              "--width": 800,
              xPercent: -30 * direction
            },
            {
              "--width": 200,
              xPercent: 0
            },
            0
          )
          .fromTo(
            images[index],
            {
              xPercent: 125 * direction,
              scaleX: 1.5,
              scaleY: 1.3
            },
            { xPercent: 0, scaleX: 1, scaleY: 1, duration: 1 },
            0
          )
          .fromTo(
            images[currentIndex],
            { xPercent: 0, scaleX: 1, scaleY: 1 },
            {
              xPercent: -125 * direction,
              scaleX: 1.5,
              scaleY: 1.3
            },
            0
          )
          .fromTo(
            slideImages[index],
            {
              scale: 2
            },
            { scale: 1 },
            0
          )
          .timeScale(0.9);

        currentIndex = index;
      }

      Observer.create({
        type: "wheel,touch,pointer",
        preventDefault: false,
        wheelSpeed: -1,
        onUp: () => {
          if (animating) return;
          gotoSection(currentIndex + 1, +1);
        },
        onDown: () => {
          if (animating) return;
          gotoSection(currentIndex - 1, -1);
        },
        tolerance: 15
      });

      document.addEventListener("keydown", logKey);

      function logKey(e) {
        console.log(e.code);
        if ((e.code === "ArrowUp" || e.code === "ArrowLeft") && !animating) {
          gotoSection(currentIndex - 1, -1);
        }
        if (
          (e.code === "ArrowDown" ||
            e.code === "ArrowRight" ||
            e.code === "Space" ||
            e.code === "Enter") &&
          !animating
        ) {
          gotoSection(currentIndex + 1, 1);
        }
      }

    });

    

    return {
      currentSubheader
    };
  },
  components: {
  },
};
</script>

<template>
  <div class="container">
  <div class="vertical-scroll">
    <section class="home">
      <div class="banner">Hi I'm Melissa</div>
      <div class="boxes">
        <div class="box1"></div>
      <div class="box2"></div>
      <div class="box3"></div>
      <div class="box4"></div>
      </div>

      <p class="paragraph">
        As full stack developer with over 4 years of experience, my strengths are
        efficiency, communication, and
        flexibility. Currently based in San Francisco. Building something great is both a dynamic and cummulative process that requires iteration and
        reflection. When I'm not coding, you'll probably find me around the house or store trying to DIWHY something.
        I find inspiration from beautiful things, repulsive things, and everything in between.
      </p>

    </section>
  </div>

  <div class="horizontal">
    <section class="panel">
      <div class="outer">
        <div class="inner">
          <div class="content">
            <div class="container">
              <h2 class="heading">web dev</h2>
              <figure class="img-cont">
                <div class="img">
                  <ul>
                    <li>
                      react
                    </li>
                    <li>
                      typescript
                    </li>
                    <li>
                      flask
                    </li>
                    <li>
                      python
                    </li>
                    <li>
                      pytest/jest
                    </li>
                    <li>
                      mapboxGL
                    </li>
                  </ul>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="panel">
      <div class="outer">
        <div class="inner">
          <div class="content">
            <div class="container">
              <h2 class="heading">api design</h2>
              <figure class="img-cont">
                <div class="img">
                  <ul>
                    <li>
                      auth0
                    </li>
                    <li>
                      redux
                    </li>
                    <li>
                      postgres
                    </li>
                    <li>
                      OpenAPI
                    </li>
                    <li>
                      nextJS
                    </li>
                    <li>
                      ChakraUI
                    </li>
                  </ul>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="panel">
      <div class="outer">
        <div class="inner">
          <div class="content">
            <div class="container">
              <h2 class="heading">personal</h2>
              <figure class="img-cont">
                <div class="img">
                  <ul>
                    <li>
                      vue
                    </li>
                    <li>
                      GSAP
                    </li>
                    <li>
                      threeJS
                    </li>
                    <li>
                      CMS
                    </li>
                    <li>
                      figma
                    </li>
                  </ul>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="panel">
      <div class="outer">
        <div class="inner">
          <div class="content">
            <div class="container">
              <h2 class="heading">contact me</h2>
              <figure class="img-cont">
                <div class="img">
                  <ul>
                    melissa.h717@outlook.com
                  </ul>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="overlay">
      <div class="content">
        <a :href="currentSubheader.url" class="subheader">{{ currentSubheader.text }}<i class="fas fa-link"></i></a>
        <figure class="img-cont">
          <img class="image" src="../assets/me.jpg" style="p]"/>
          <img class="image" src="../assets/rem.png" />
          <img class="image" src="../assets/admin.png" />
          <img class="image" src="../assets/gg.png" />
        </figure>
      </div>
    </section>
  </div>

</div>
</template>


<style>

a {
  text-decoration: none;
  color: white;
  font-family: "Quicksand", sans-serif;
  position: relative; 
  top: 10%;
}

.container {
  padding: 0;
  margin: 0;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.vertical-scroll {
  overflow-x: hidden;
  overflow-y: hidden;
  height: 180vh;
}

.horizontal {
  position: relative;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.horizontal .panel {
  position: absolute;
}

.home {
  height: 150vh;
  background:#2f3e46;
  text-align: center;
  color: #84a98c;
  font-size: 3rem;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}

h1 {
  font-size: 3rem;
  font-family: "quicksand", sans-serif;
  font-weight: 900;
}

.paragraph {
  width: 50%;
  text-align: justify;
  font-family: "Quicksand", sans-serif;
}

.panel {
  width: 100%;
  height: 100%;
  display: flex;
  top: 0;
  position: fixed;
  visibility: hidden;
  color: white;
  font-size: 1.4em;

}

.panel .inner,
.panel .outer {
  width: 100%;
  height: 100%;
  overflow-y: hidden;
}

.panel .content {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0
}

.panel .container {
  position: relative;
  max-width: 1400px;
  width: 100vw;
  margin: 0 auto;
  height: 90vh;
  margin-bottom: 10vh;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  padding: 0 1rem;
}

.panel .heading {
  --width: 150;
  display: block;
  text-align: left;
  font-family: "DM Serif Display", serif;
  font-weight: 400;
  font-style: italic;
  font-size: clamp(5rem, 15vw, 15rem);
  font-weight: 600;
  font-variation-settings: "wdth" var(--width);
  margin: 0;
  padding: 0;
  color: #f2f1fc;
  z-index: 999;
  mix-blend-mode: difference;
  grid-area: 2 / 2 / 3 / 10;
  align-self: end;
}

.panel .img-cont {
  margin-top: 4rem;
  overflow: visible;
  grid-area: 2 / 1 / 7 / 8;
}

.panel .img-cont .img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.panel:nth-of-type(1) {
  visibility: visible;

  .content {
    background-color: #84a98c;
  }
}

.panel:nth-of-type(2) {
  .content {
    background-color: #52796f;
  }
}

.panel:nth-of-type(3) {
  .content {
    background-color: #354f52;
  }
}

.panel:nth-of-type(4) {
  .content {
    background-color:  #2f3e46;
  }
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
}

figure {
  margin: 0;
  overflow: hidden;
}

.overlay .content {
  max-width: 1400px;
  width: 100vw;
  margin: 0 auto;
  padding: 0 1rem;
  height: 90vh;
  margin-bottom: 10vh;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.overlay .img-cont {
  position: relative;
  overflow: hidden;
  margin: 0;
  grid-area: 4 / 3 / 9 / 11;
}

.overlay .img-cont .image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
}


.overlay .subheader {
  grid-area: 3 / 10 / 4 / 12;
  font-size: clamp(2rem, 3vw, 13rem);
  margin: 0;
  padding: 0;
  text-align: justify;
  border-bottom: 4px white solid;
  display: flex;        /* Establishes a flex container */
  align-items: center;  /* Centers the items vertically within the container */
  color: white;         /* Text color */
  text-decoration: none; /* Removes underline from links */
  gap: 8px;             /* Optional: Adds space between the text and the icon */
  font-size: 1rem;  
}

@media screen and (min-width: 900px) {

  .overlay .content,
  .panel .container {
    padding: 0 3rem;
    margin-top: 10vh;
    height: 80vh;
  }

  .overlay .img-cont {
    grid-area: 5 / 4 / 10 / 11;
  }

  .overlay .subheader {
    grid-area: 3 / 10 / 3 / 10;
    font-size: 2em;
  }

  .panel .img-cont {
    margin-top: -4%;
    grid-area: 3 / 2 / 8 / 7;
  }

  .panel .heading {
    grid-area: 1 / 1 / 4 / 10;
  }
}

ul {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  font-size: 1.5em;
  border-radius: 10px;
  font-family: "Quicksand", sans-serif;
}


li {
  list-style: none;
  padding-right: 1em;

  z-index: 999;
}

.boxes {
  display: flex;
  flex-direction: row;
  height: 100px;
}

.box1 {
  height: 100px;
  width: 100px;
  background-color: #cad2c5;
}

.box2 {
  height: 100px;
  width: 100px;
  background-color: #84a98c
}

.box3 {
  height: 100px;
  width: 100px;
  background-color: #52796f;
}

.box4 {
  height: 100px;
  width: 100px;
  background-color:#354f52;
}


@media screen and (max-width: 431px) {
  .panel .content {
    overflow: none;
  }
  .overlay .subheader {
    display: none; /* Hide subheaders on small screens */
  }

  .panel .img {
    font-size: 0.5rem;
    margin-top: 1em;
    margin-right: 1em;
    width: 60%;
    border: 1px solid white; /* Smaller font size for mobile */
  }

  .overlay .img-cont {
    margin-right: 1rem;
    width: 90%;
  }

  .paragraph {
    font-size:22px;
    width: 100%;
    margin: 10px;
  }

  .home .banner {
    font-size: 2em;
  }

}


.banner {
  font-size: 10rem;
  font-family: "Quicksand", sans-serif;
}

</style>
