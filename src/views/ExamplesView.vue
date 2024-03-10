<template>
    <div class="container">
        <h1>This is the examples view</h1>
        <p>Right now it has a set height of 400px</p>
    </div>
</template>

<style scoped>

.container {
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    height: 400px;
}
h1 {
    font-size: 3rem;
    background-color: green;
    padding: 1rem;
    border-radius: 0.4rem;
}

p {
    background-color: blue;
    font-size: 1rem;
    padding: 1rem;
    border-radius: 0.4rem;
}
</style>
