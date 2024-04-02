<template>
    <div class="overlay" v-if="overlayText">
      <div class="overlay-content">{{ overlayText }}</div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      overlayText: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(110, 23, 23, 0.5); /* semi-transparent black background */
    /* display: none; */
    justify-content: center;
    align-items: center;
    z-index: 9999; /* ensure it's on top of other content */
    color: white;
    font-size: 2rem;
    transition: opacity 0.3s ease; /* smooth transition */
  }
  
  .overlay-content {
    padding: 20px;
  }
  
  /* Show the overlay when overlayText is present */
  .overlay[v-if] {
    display: flex;
  }
  </style>
  