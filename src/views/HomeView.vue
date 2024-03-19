<script>
import gsap from 'gsap';
import { onMounted } from "vue"
import Flower from "../components/Flower.vue" 
import CursorFollow from "../components/CursorFollow.vue"
import { animateElements } from "../animations"

export default {
  setup() {
    onMounted(() => {
      animateElements()
    })
  },
  components: {
    Flower,
    CursorFollow
  },
};
</script>

<template>
  <main>
    <CursorFollow />
    <div class="container">
      <div class="header">
        <div class="landing-banner">
          <h1>          Melissa</h1>

        </div>
      </div>

      <div class="spacer">        </div>
      <div class="trigger-2"></div>
      <div class="spacer"></div>
      <div class="landing-paragraph-container">
        <!-- <Flower /> -->
        <p class="landing-paragraph">
          Hey there! I’m Sassy Developer Senpai, a woman who slays code like a boss. Armed with my bachelor’s in computer science, I’m the queen of algorithms and the empress of debugging. When I’m not conquering the tech world, you’ll find me strutting down the streets, capturing life’s moments through my lens. And let’s not forget my culinary prowess – I whip up code and gourmet meals with equal finesse. So, buckle up, buttercup, because this sassy developer is here to rock your world! 

        <br />
As a code-slinging software developer with a bachelor's in computer science, I craft digital masterpieces by day and conquer pixelated realms by night. My walks are not just a breath of fresh air—they're a quest for the perfect shot, each picture a trophy in my visual collection. In the kitchen, I'm a culinary wizard, whipping up dishes so good, they'll make your taste buds tap dance. And when it comes to gaming? I'm the undefeated champion, communicating victory and defeat with my arsenal of frog emotes. So, if you're looking for someone who's equal parts tech-savvy and life-loving, you've just hit the jackpot.
</p>      
<br />
      <p class="landing-paragraph"></p>
      </div>

      <div class="spacer"></div>




      <div class="home-container">
      <div class="trigger-3"></div>
      <div class="spacer"></div>
      <div class="spacer"></div>
      <div class="home-container" id="home-container">
        
        <div class="sassy">
  <h1 class="sassy-heading">The 2000s called.</h1>
  <div class="sassy-marquee-wrapper">
    <marquee class="sassy-marquee">(They want their marquees back)</marquee>
  </div>
</div>

<div class="headline-2">Your content should be as</div>
        <div class="video-background">
          <div class="video-foreground">
            <iframe src="https://player.vimeo.com/video/925027042?background=1&autoplay=1&loop=1&byline=0&title=0"
                    frameborder="0"
                    allowfullscreen
                    allow="autoplay; encrypted-media"
                    title="Vimeo video">
            </iframe>
        </div>
      </div>
      <div class="headline-3">as you are</div>
        <div class="darkness-trigger"></div>
        <div class="spacer"></div>
      </div>
    </div>
  </div>
  </main>
</template>




<style scoped>

.container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  color: rgb(10, 3, 3);
  height: 900vh;
}



.container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  color: rgb(10, 3, 3);
  height: auto;
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
  font-size: 2em;
  width: 50%;
  letter-spacing: -1.5px;
  font-weight: 700;
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
  height: 150vh;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.sassy {
  width: 80%;
  align-items: center;
  text-align: center;
  font-size: 2em;
  overflow: hidden; /* Ensures that the curtain effect is applied */
}

.sassy-heading {
  font-size: 10rem
}
.sassy-heading,
.sassy-marquee {
  transform: translateY(100%); /* Initially move the elements out of view */
}

.sassy-marquee-wrapper {
  overflow: hidden; /* Ensures that the marquee content is clipped */
}

.video-background {
  position: relative;
  width: 100%;
  height: 50vh;
  overflow: hidden;
}

.video-foreground {
  position: absolute;

  width: 100%;
  height: 100%;
}

.video-foreground iframe {
  width: 100%;
  height: 200%;
  /* transform: translateY(50%) */
}



.header {
  display: flex;
}
.parallax-middle-picture {
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
  /* z-index: 100; */
  width: 20%;
}

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
