<template>
  <div class="overlay" :style="{ display: isVisible ? 'flex' : 'none' }">
    <div class="overlay-content">{{ overlayText }}</div>
    </div>
</template>

<script>
export default {
    props : {
        overlayText: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            isVisible: false
        }
    }
}
</script>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* semi-transparent black background */
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 10; /* ensure it's on top of other content */
  color: white;
  font-size: 2rem;
  transition: opacity 0.3s ease; /* smooth transition */
}

.overlay-content {
  padding: 20px;
}
</style>
