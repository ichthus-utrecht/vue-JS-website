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
      <div>
        <img class="lustrum-logo m-4" :src="logo"/>
      </div>
      <div>
        <h1>LUSTRUM</h1>
        <p>
          Het lustrum komt eraan. Net zoals deze website. Nou ja, die er er eigenlijk al.
        </p>
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