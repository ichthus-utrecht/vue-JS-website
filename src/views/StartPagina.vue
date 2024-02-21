<template>
  <div class="home">
    <NavigatieBalk />
    <img class="row page-title-image page-title-image-m centered-image" src="@/assets/images/nav.jpg">
    Welkom bij Ichthus Utrecht!
    <FooterBalk />
  </div>
</template>

<script setup>
import FooterBalk from '../components/interactief/FooterBalk.vue'
import NavigatieBalk from '@/components/interactief/NavigatieBalk.vue';
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

.centered-image {
  display: block;
  margin: 0 auto !important;
  width: 90% !important;
  height: auto !important;
}
</style>
