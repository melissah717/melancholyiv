<template>
  <div class="footer-container" ref="footer">
    <div class="text-content">
      <a href="mailto:melissa.h717@outlook.com" class="email" @mouseenter="animateEmail"
        @mouseleave="resetEmail">melissa.h717@outlook.com</a>
      <div class="links">
        <div class="github">
          <a href="https://github.com/melissah717" class="link" @mouseenter="animateLink($event)"
            @mouseleave="resetLink($event)">github</a>
        </div>
        <div class="linkedin">
          <a href="https://linkedin.com/in/melissah717" class="link" @mouseenter="animateLink($event)"
            @mouseleave="resetLink($event)">linkedin</a>
        </div>
        <div class="blog">
          <a href="/" disabled class="link" @mouseenter="animateLink($event)" @mouseleave="resetLink($event)">blog</a>
        </div>
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
    const footer = ref(null);

    onMounted(() => {
      gsap.registerPlugin(ScrollTrigger);
    });

    function animateEmail(event) {
      const email = event.target;
      gsap.to(email, {
        duration: 0.5,
        backgroundColor: "#fff",
        color: "#000",
        borderRadius: "0px",
        borderWidth: "5px",
        borderColor: "black",
      });
    }

    function resetEmail(event) {
      const email = event.target;
      gsap.to(email, {
        duration: 0.5,
        backgroundColor: "transparent",
        color: "black",
        borderRadius: "10px",
        borderWidth: "0px",
        borderColor: "transparent",
      });
    }

    function animateLink(event) {
      if (window.innerWidth > 768) {
        const link = event.target;
        gsap.to(link, {
          duration: 0.5,
          backgroundColor: "#fff",
          color: "#000",
          borderWidth: "3px",
          borderColor: "black",
        });
      }
    }
    function resetLink(event) {
      const link = event.target;
      gsap.to(link, {
        duration: 0.5,
        backgroundColor: "transparent",
        color: "black",
        borderRadius: "10px",
        borderWidth: "0px",
        borderColor: "transparent",
      });
    }

    return {
      footer,
      animateEmail,
      resetEmail,
      animateLink,
      resetLink
    };
  },
};
</script>

<style scoped>
.footer-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(255, 255, 255);
  color: black;
}

.text-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80rem;
}

.links {
  display: flex;
}

.links>div {
  margin-right: 20px;
}

.links>div:last-child {
  margin-right: 0;
}

.email,
.link {
  text-decoration: none;
  font-size: 2rem;
  color: black;
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  padding: 10px 20px;
  transition: all 0.5s ease;
  border-radius: 10px;
  border: 0px solid transparent;
}

.email:hover,
.link:hover {
  background-color: #686868;
}

.email:before,
.email:after,
.link:before,
.link:after {
  content: '';
  position: absolute;
  width: 50%;
  height: 50%;
  opacity: 0;
  z-index: -1;
  transition: all 0.5s ease;
}

.email:before,
.link:before {
  top: -1px;
  left: -1px;
}

.email:after,
.link:after {
  bottom: -1px;
  right: -1px;
}

.email:hover:before,
.email:hover:after,
.link:hover:before,
.link:hover:after {
  opacity: 1;
  width: 100%;
  height: 100%;
}

@media only screen and (max-width: 768px) {
  .footer-container {
    height: 50vh;
  }

  .text-content {
    width: 100%;
    display: flex;
    flex-direction: column;
  }


  .links>div {
    margin-right: 0;
    margin-bottom: 10px;
  }

  .email {
    font-size: 1.5rem;
  }

  .link {
    width: 100%;
    text-align: left;
    font-size: 1rem;
  }

  .email:hover,
  .link:hover {
    background-color: transparent;
    color: black;
  }

  .email:before,
  .email:after,
  .link:before,
  .link:after {
    opacity: 0;
  }
}
</style>
