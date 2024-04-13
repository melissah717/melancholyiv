<script>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { TextPlugin } from "gsap/TextPlugin";
import FooterSection from "@/components/FooterSection.vue";

export default {
  setup() {
    onMounted(() => {

      gsap.registerPlugin(ScrollTrigger, Observer, TextPlugin)
      const sections = gsap.utils.toArray(".panel")
      const images = gsap.utils.toArray(".image").reverse();
      const slideImages = gsap.utils.toArray(".panel .img");
      const outerWrappers = gsap.utils.toArray(".panel .outer");
      const innerWrappers = gsap.utils.toArray(".panel .inner");
      const subheader = document.querySelector(".subheader");
      const wrap = gsap.utils.wrap(0, sections.length);
      let animating;
      let currentIndex = 0;

      gsap.set(outerWrappers, { xPercent: 100 });
      gsap.set(innerWrappers, { xPercent: -100 });
      gsap.set(".panel:nth-of-type(1) .outer", { xPercent: 0 });
      gsap.set(".panel:nth-of-type(1) .inner", { xPercent: 0 });

      function gotoSection(index, direction) {
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
          .set(subheader, { text: index + 1 }, 0.32)
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
          .timeScale(0.8);

        currentIndex = index;
      }

      Observer.create({
        type: "wheel,touch,pointer",
        preventDefault: true,
        wheelSpeed: -1,
        onUp: () => {
          console.log("down");
          if (animating) return;
          gotoSection(currentIndex + 1, +1);
        },
        onDown: () => {
          console.log("up");
          if (animating) return;
          gotoSection(currentIndex - 1, -1);
        },
        tolerance: 10
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
    };
  },
  components: {
  },
};
</script>

<template>
  <div class="vertical-scroll">
    <section class="home">
      <p class="paragraph">
        I'm a full stack developer with over 4 years of experience based in San Francisco. My strengths are
        efficiency, communication, and
        flexibility. Building something great is both a dynamic and cummulative process that requires iteration and
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
        I'm a full stack developer with over 4 years of experience based in San Francisco. My strengths are
        efficiency, communication, and
        flexibility. Building something great is both a dynamic and cummulative process that requires iteration and
        reflection. When I'm not coding, you'll probably find me around the house or store trying to DIWHY something.
        I find inspiration from beautiful things, repulsive things, and everything in between.
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
        I'm a full stack developer with over 4 years of experience based in San Francisco. My strengths are
        efficiency, communication, and
        flexibility. Building something great is both a dynamic and cummulative process that requires iteration and
        reflection. When I'm not coding, you'll probably find me around the house or store trying to DIWHY something.
        I find inspiration from beautiful things, repulsive things, and everything in between.
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
              <h2 class="heading">redeye media</h2>
              <figure class="img-cont">
                <div class="img">
        I'm a full stack developer with over 4 years of experience based in San Francisco. My strengths are
        efficiency, communication, and
        flexibility. Building something great is both a dynamic and cummulative process that requires iteration and
        reflection. When I'm not coding, you'll probably find me around the house or store trying to DIWHY something.
        I find inspiration from beautiful things, repulsive things, and everything in between.
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
              <h2 class="heading">contact</h2>
              <figure class="img-cont">
                <div class="img">
        I'm a full stack developer with over 4 years of experience based in San Francisco. My strengths are
        efficiency, communication, and
        flexibility. Building something great is both a dynamic and cummulative process that requires iteration and
        reflection. When I'm not coding, you'll probably find me around the house or store trying to DIWHY something.
        I find inspiration from beautiful things, repulsive things, and everything in between.
</div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="overlay">
      <div class="content">
        <p class="subheader">about me</p>
        <figure class="img-cont">
          <img class="image"
            src="../assets/me.jpg"/>
          <img class="image"
            src="../assets/rem.png" />
          <img class="image"
            src="../assets/admin.png" />
          <img class="image"
            src="../assets/gg.png" />
        </figure>
      </div>
    </section>

  </div>

</template>


<style>
.vertical-scroll {
  overflow-x: hidden;
  overflow-y: hidden;
  height: 200vh;
}

.horizontal {
  position: relative;
  height: 100vh;
  width: 100%;
  /* overflow-x: hidden;
  overflow-y: hidden; */
}

.horizontal .panel {
  position: absolute;
}

.home {
  height: 200vh;
  background: rgb(79, 79, 130);
  text-align: center;
  color: white;
  font-size: 3rem;
  padding: 5rem;
}

.blue {
  background-color: #2c7ad2;
  background-image: radial-gradient(circle at 47% 14%, rgba(205, 205, 205, 0.04) 0%, rgba(205, 205, 205, 0.04) 43%, transparent 43%, transparent 100%), radial-gradient(circle at 35% 12%, rgba(215, 215, 215, 0.04) 0%, rgba(215, 215, 215, 0.04) 4%, transparent 4%, transparent 100%), radial-gradient(circle at 1% 35%, rgba(24, 24, 24, 0.04) 0%, rgba(24, 24, 24, 0.04) 37%, transparent 37%, transparent 100%), radial-gradient(circle at 21% 1%, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.04) 26%, transparent 26%, transparent 100%), radial-gradient(circle at 23% 82%, rgba(249, 249, 249, 0.04) 0%, rgba(249, 249, 249, 0.04) 60%, transparent 60%, transparent 100%), radial-gradient(circle at 11% 54%, rgba(251, 251, 251, 0.04) 0%, rgba(251, 251, 251, 0.04) 23%, transparent 23%, transparent 100%), radial-gradient(circle at 69% 68%, rgba(234, 234, 234, 0.04) 0%, rgba(234, 234, 234, 0.04) 10%, transparent 10%, transparent 100%), linear-gradient(90deg, #2c7ad2, #1568c6);
}

.orange {
  background-color: #e77614;
  background-image: radial-gradient(circle at 46% 40%, rgba(228, 228, 228, 0.06) 0%, rgba(228, 228, 228, 0.06) 13%, transparent 13%, transparent 100%), radial-gradient(circle at 11% 41%, rgba(198, 198, 198, 0.06) 0%, rgba(198, 198, 198, 0.06) 19%, transparent 19%, transparent 100%), radial-gradient(circle at 52% 23%, rgba(14, 14, 14, 0.06) 0%, rgba(14, 14, 14, 0.06) 69%, transparent 69%, transparent 100%), radial-gradient(circle at 13% 85%, rgba(148, 148, 148, 0.06) 0%, rgba(148, 148, 148, 0.06) 44%, transparent 44%, transparent 100%), radial-gradient(circle at 57% 74%, rgba(232, 232, 232, 0.06) 0%, rgba(232, 232, 232, 0.06) 21%, transparent 21%, transparent 100%), radial-gradient(circle at 59% 54%, rgba(39, 39, 39, 0.06) 0%, rgba(39, 39, 39, 0.06) 49%, transparent 49%, transparent 100%), radial-gradient(circle at 98% 38%, rgba(157, 157, 157, 0.06) 0%, rgba(157, 157, 157, 0.06) 24%, transparent 24%, transparent 100%), radial-gradient(circle at 8% 6%, rgba(60, 60, 60, 0.06) 0%, rgba(60, 60, 60, 0.06) 12%, transparent 12%, transparent 100%), linear-gradient(90deg, #ff7600, #ff7600);
}

.red {
  background-color: #c82736;
  background-image: radial-gradient(circle at 19% 90%, rgba(190, 190, 190, 0.04) 0%, rgba(190, 190, 190, 0.04) 17%, transparent 17%, transparent 100%), radial-gradient(circle at 73% 2%, rgba(78, 78, 78, 0.04) 0%, rgba(78, 78, 78, 0.04) 94%, transparent 94%, transparent 100%), radial-gradient(circle at 45% 2%, rgba(18, 18, 18, 0.04) 0%, rgba(18, 18, 18, 0.04) 55%, transparent 55%, transparent 100%), radial-gradient(circle at 76% 60%, rgba(110, 110, 110, 0.04) 0%, rgba(110, 110, 110, 0.04) 34%, transparent 34%, transparent 100%), radial-gradient(circle at 68% 56%, rgba(246, 246, 246, 0.04) 0%, rgba(246, 246, 246, 0.04) 16%, transparent 16%, transparent 100%), radial-gradient(circle at 71% 42%, rgba(156, 156, 156, 0.04) 0%, rgba(156, 156, 156, 0.04) 47%, transparent 47%, transparent 100%), radial-gradient(circle at 46% 82%, rgba(247, 247, 247, 0.04) 0%, rgba(247, 247, 247, 0.04) 39%, transparent 39%, transparent 100%), radial-gradient(circle at 50% 47%, rgba(209, 209, 209, 0.04) 0%, rgba(209, 209, 209, 0.04) 45%, transparent 45%, transparent 100%), linear-gradient(90deg, #e53949, #cc2232);
}

.purple {
  background-color: #8d3dae;
  background-image: radial-gradient(circle at 47% 14%, rgba(205, 205, 205, 0.04) 0%, rgba(205, 205, 205, 0.04) 43%, transparent 43%, transparent 100%), radial-gradient(circle at 35% 12%, rgba(215, 215, 215, 0.04) 0%, rgba(215, 215, 215, 0.04) 4%, transparent 4%, transparent 100%), radial-gradient(circle at 1% 35%, rgba(24, 24, 24, 0.04) 0%, rgba(24, 24, 24, 0.04) 37%, transparent 37%, transparent 100%), radial-gradient(circle at 21% 1%, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.04) 26%, transparent 26%, transparent 100%), radial-gradient(circle at 23% 82%, rgba(249, 249, 249, 0.04) 0%, rgba(249, 249, 249, 0.04) 60%, transparent 60%, transparent 100%), radial-gradient(circle at 11% 54%, rgba(251, 251, 251, 0.04) 0%, rgba(251, 251, 251, 0.04) 23%, transparent 23%, transparent 100%), radial-gradient(circle at 69% 68%, rgba(234, 234, 234, 0.04) 0%, rgba(234, 234, 234, 0.04) 10%, transparent 10%, transparent 100%), linear-gradient(90deg, #8d3dae, #8d3dae);
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
  padding: 10px;
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
  --width: 200;
  display: block;
  text-align: left;
  font-family: "Bandeins Sans & Strange Variable";
  font-size: clamp(5rem, 15vw, 15rem);
  font-weight: 900;
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
    background-color: #6d597a;
  }
}

.panel:nth-of-type(2) {
  .content {
    background-color: #355070;
  }
}

.panel:nth-of-type(3) {
  .content {
    background-color: #b56576;
  }
}

.panel:nth-of-type(4) {
  .content {
    background-color: #9a8c98;
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
  grid-area: 3 / 10 / 4 / 10;
  font-size: clamp(3rem, 4vw, 15rem);
  margin: 0;
  padding: 0;
  text-align: right;
  border-bottom: 7px white solid;
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
    grid-area: 3 / 10 / 4 / 11;
  }

  .panel .img-cont {
    margin-top: 0;
    grid-area: 3 / 2 / 8 / 7;
  }

  .panel .heading {
    grid-area: 1 / 1 / 4 / 10;
  }
}
</style>
