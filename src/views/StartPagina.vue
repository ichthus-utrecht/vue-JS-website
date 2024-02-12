<template>
  <div class="home">
    <HeaderBalk />
    Welkom bij Ichthus Utrecht!
    <FooterBalk />
  </div>
</template>

<script setup>
import HeaderBalk from '../components/interactief/HeaderBalk.vue'
import FooterBalk from '../components/interactief/FooterBalk.vue'
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app {
  font-family: Caveat, sans-serif, Arial, Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}

body {
  background: white;
}
</style>
