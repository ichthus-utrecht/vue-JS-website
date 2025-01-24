<script setup lang="ts">
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
       
<!-- Header met logo en titel en foto-->
<div class="header">
  <div class="logo-titel">
    <img src="@/assets/images/lustrum/lustrum-logo.jpg" alt="Lustrum Logo" class="lustrum-logo"/>
    <h1 class="lustrum-titel"><Strong>Lustrum XIII Ichthus Utrecht</Strong></h1>
    <img src="@/assets/images/lustrum/lustrum-bout.jpg" alt="Extra Foto" class="header-foto"/>
  </div>
</div>

      
      <!-- Flyer sectie -->
     
  <!-- Poster -->
      <div class="poster-section text-center">
        <h2 class="mt-5"><strong>Lustrum agenda</strong></h2>
        <div class="poster-container">
          <img src="@/assets/images/lustrum/lustrum-flyer-1.jpeg" alt="lustrum flyer 1" class="poster-lustrum"/>
          <img src="@/assets/images/lustrum/lustrum-flyer-2.jpeg" alt="lustrum flyer 2" class="poster-lustrum"/>
        </div>
      </div>
      
    
  </div>
</template>

<style lang="css">
:root {
  --lustrum-gold: #B58426;
  --lustrum-blue: #0A0735;
  --white: #fff; 
  --lustrum-gold-light: #9d701b;
}

body.lustrum-body {
  background-color: var(--lustrum-gold) !important;
  color: var(--lustrum-blue);
  font-family: 'Arial', sans-serif;
}


</style>
<style lang="css" scoped>

/* Flexbox voor header */
.header {
  align-items: center; /* Zorgt ervoor dat logo en titel verticaal gecentreerd zijn */
  padding: 10px 20px;
  background-color: var(--lustrum-gold-light); /* Optioneel: achtergrondkleur voor header */
  border-radius: 2rem;
  max-width: 100%;
}

/* Flexbox voor logo en titel */
.logo-titel {
  display: flex;
  align-items: center; /* Zorgt voor verticale uitlijning van logo en titel */
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
}

/* Stijl voor het logo */
.lustrum-logo {
  max-width: 256px; /* Pas de grootte van het logo aan */
  border-radius: 50%;
  border: 4px solid var(--white);
}

/* Stijl voor de titel */
.lustrum-titel {
  font-size: 24px;
  color: var(--lustrum-blue); /* Gouden kleur voor de titel */
  margin: 0;
  
}
/* Stijl voor de extra foto */
.header-foto {
  max-width: 240px; /* Pas de grootte van de foto aan */
  height: auto;
  border-radius: 8px; /* Optioneel: afgeronde hoeken */
  margin-left: 15px; /* Ruimte tussen de titel en de foto */
}

.lustrum-pagina {
  background-color: var(--lustrum-gold);
  color: var(--lustrum-blue);
  max-width: 100vw;
  overflow: hidden;
  padding: 2rem;
  gap: 1rem;
}

h1, h2 {
  color: var(--white);
  margin-top: 20px;
}
.poster-section {
  margin-top: 40px;
}

/* Poster */
.poster-lustrum {
  display: flex;
  background-color: var(--lustrum-blue); /* Gouden achtergrond voor de fotogalerij */
  padding: 20px;
  border-radius: 2rem;
  object-fit: contain;
  max-width: 100%; /* calc(100% - 44px); */
  border: 2px solid var(--white);
  overflow: hidden;
  flex-grow: 1;
}

/* Poster container */
.poster-container {
  display: flex;
  justify-content: center; /* Plaatst de foto's netjes verdeeld */
  align-items: center;
  gap: 32px; /* Ruimte tussen de foto's */
  overflow: hidden;
  max-width: 100%;
  margin-top: 40px;
}

/* Responsief design */
@media (max-width: 768px) {
  .poster-container {
    flex-direction: column; /* Bij een kleiner scherm stapelen de secties op elkaar */
  }

  .fotogalerij-section {
    margin-bottom: 20px; /* Ruimte tussen de secties op kleinere schermen */
  }
}

</style>