<template>
  <footer>
    <span
      >💻 with ❤ &amp;
      <a href="//vuejs.org" target="_blank" rel="noopener noreferrer">Vue.js</a>
      in Medellín</span
    >
  </footer>
</template>

<script>
  export default {
    name: "app-footer",
  };
</script>

<style lang="scss" scoped>
  footer {
    box-sizing: border-box;
    background-color: #cfd8dc;
    bottom: 0;
    left: 0;
    padding: 1rem;
    position: fixed;
    width: 100%;

    a {
      text-decoration: none;
      color: #546e7a;
    }
  }
</style>
