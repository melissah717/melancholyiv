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
    ease: "power3.out",
    delay: 0.1,
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
  width: 15px;
  height: 15px;
  background-color: #6d597a;
  border-radius: 50%;
  z-index: 999;
}

</style>
