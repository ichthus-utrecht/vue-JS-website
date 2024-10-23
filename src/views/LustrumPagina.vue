<script setup lang="ts">
import logo from '@/assets/images/lustrum/lustrum-logo.jpeg'
import { onUnmounted } from 'vue';

// Add the body to class lustrum-body. Now, style can be applied to the body on the lustrum page only.
const lustrumBodyClassName = 'lustrum-body'
document.body.classList.add(lustrumBodyClassName)

onUnmounted(() => {
  // Remove the classname when unloaded, so it is not shown on the main page.
  document.body.classList.remove(lustrumBodyClassName)
})
</script>
<template>
  <div class="lustrum-pagina">
    <div class="container-fluid">
       <!-- Logo -->
       <div class="logo-container text-center">
        <img class="lustrum-logo m-4" :src="logo" alt="Lustrum logo"/>
      </div>
      
       <!-- Titel en introductie -->
       <div class="text-center">
        <h1><strong>Lustrumviering</strong></h1>
        <p>
          <em>Het lustrum komt eraan. Net zoals deze website. Nou ja, die is er eigenlijk al.</em>
        </p>
      </div>
      
      <!-- Agenda sectie -->
      <div class="agenda-section">
        <h2 class="text-center mt-5">Agenda</h2>
        <ul class="agenda-list">
          <li><strong>25 oktober 2024</strong> - Openingsceremonie</li>
          <li><strong>26 oktober 2024</strong> - Lezingen & Workshops</li>
          <li><strong>27 oktober 2024</strong> - Slotfeest</li>
        </ul>
      </div>

      <!-- Poster -->
      <div class="poster-section text-center">
        <h2 class="mt-5">Poster</h2>
        <div class="poster-container">
          <img src="" alt="Poster 1" class="lustrum-foto"/>
          
        </div>
      </div>
    
    </div>
  </div>
</template>
<style lang="css">
:root {
  --lustrum-gold: #B58426;
  --lustrum-blue: #0A0735;
}

body.lustrum-body {
  background-color: var(--lustrum-gold) !important;
}


</style>
<style lang="css" scoped>

.lustrum-pagina {
  background-color: var(--lustrum-gold);
  color: var(--lustrum-blue);
  height: 100vh;
}

.lustrum-logo {
  max-width: 400px;
}
</style>