<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
</script>

<template>
    <nav class="navbar">
        <div class="container">
            <router-link to="/"><a>Home</a></router-link>
            <router-link to="/about"><a>About</a></router-link>
            <router-link to="/examples"><a>Examples</a></router-link>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    background-color: #938d9f;
    width: auto;
    height: 1.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    position: fixed;
    top: 0;
    left: 0;
}

a {
    color: white;
    text-decoration: none;
    font-size:1rem;
    letter-spacing: -0.8px;
}

a:hover {
    color: rgb(231, 187, 41);
    background-color: blue;
    padding: 2px;
}


@media only screen and (max-width: 768px) {
  .container {
    width: 100%;
  }

  .container a {
    padding: 15px; 
  }
}
</style>
