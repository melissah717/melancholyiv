<template>
  <div ref="cursor" class="cursor"></div>
</template>

<script>
import { ref, onMounted } from "vue";
import gsap from "gsap";

export default {
  setup() {
    const cursor = ref(null);

    onMounted(() => {
      if (!isTouchDevice()) {
        window.addEventListener("mousemove", handleMouseMove);
        document.body.style.cursor = "none";
      }
    });

    const handleMouseMove = (e) => {
  gsap.to(cursor.value, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.5,
    ease: "power1.out",
    // delay: 0.1,
  });

  const cursorTrail = document.createElement("div");
  cursorTrail.classList.add("cursor-trail");
  cursorTrail.style.left = e.clientX + "px";
  cursorTrail.style.top = e.clientY + "px";
  document.body.appendChild(cursorTrail);
  setTimeout(() => {
    cursorTrail.remove();
  }, 300);
};

    const isTouchDevice = () => {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    };

    return {
      cursor,
    };
  },
};
</script>

<style scoped>
.cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  background-color: rgb(51, 14, 43);
  border-radius: 50%;
  z-index: 9999;
}

.cursor-trail {
  position: fixed;
  pointer-events: none;
  z-index: 9998;
  width: 10px;
  height: 10px;
  background-color: rgba(196, 48, 48, 0.5);
  border-radius: 50%;
  transition: width 0.3s, height 0.3s, opacity 0.3s;
}
</style>
