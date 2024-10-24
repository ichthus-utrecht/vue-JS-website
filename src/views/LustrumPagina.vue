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
       
<!-- Header met logo en titel en foto-->
<div class="header">
  <div class="logo-titel">
    <img src="@/assets/images/lustrum/lustrum-logo.jpeg" alt="Lustrum Logo" class="lustrum-logo"/>
    <h1 class="lustrum-titel"><Strong>Lustrum XIII Ichthus Utrecht</Strong></h1>
    <img src="@/assets/images/lustrum/Lustrum Bout.jpg" alt="Extra Foto" class="header-foto"/>
  </div>
</div>

      
      <!-- Agenda en Fotogalerij sectie -->
<div class="content-section d-flex">

      <!-- Agenda sectie -->
<div class="agenda-section">
        <h2 class="text-center mt-5"><strong>Agenda</strong></h2>
        <ul class="agenda-list">
          <li><strong>31 oktober 2024</strong> - Lustrum I - Openingsfeest</li>
          <li><strong>13 februari 2025</strong> - Lustrummaaltijd</li>
          <li><strong>20 februari 2025</strong> - Lustrum II </li>
          <li><strong>27 februari 2025</strong> - Lustrum III</li>
          <li><strong>28 februari </strong> - Lustrum gala</li>
        </ul>
      </div>

      <!-- Poster -->
      <div class="poster-section text-center">
        <h2 class="mt-5"><strong>Openingsfeest</strong></h2>
        <div class="poster-container">
          <img src="@/assets/images/lustrum/Poster-lustrum.jpg" alt="Poster 1" class="poster-lustrum"/>
          
        </div>
      </div>

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
  display: flex;
  align-items: center; /* Zorgt ervoor dat logo en titel verticaal gecentreerd zijn */
  padding: 10px 20px;
  background-color: var(--lustrum-gold-light); /* Optioneel: achtergrondkleur voor header */
  border-radius: 50px;
}

/* Flexbox voor logo en titel */
.logo-titel {
  display: flex;
  align-items: center; /* Zorgt voor verticale uitlijning van logo en titel */
  
}

/* Stijl voor het logo */
.lustrum-logo {
  max-width: 80px; /* Pas de grootte van het logo aan */
  margin-right: 15px; /* Ruimte tussen logo en titel */
  
}

/* Stijl voor de titel */
.lustrum-titel {
  font-size: 24px;
  color: var(--lustrum-blue); /* Gouden kleur voor de titel */
  margin: 0;
  
}
/* Stijl voor de extra foto */
.header-foto {
  max-width: 100px; /* Pas de grootte van de foto aan */
  height: auto;
  border-radius: 5px; /* Optioneel: afgeronde hoeken */
  margin-left: 15px; /* Ruimte tussen de titel en de foto */
}

.lustrum-pagina {
  background-color: var(--lustrum-gold);
  color: var(--lustrum-blue);
  height: 100vh;
  padding: 20px;
}

.lustrum-logo {
  max-width: 200px;
  border-radius: 50%;
  border: 4px solid var(--white);
}

h1, h2 {
  color: var(--white);
  margin-top: 20px;
}
.agenda-section, .poster-section {
  margin-top: 40px;
}
.agenda-list {
  list-style-type: none;
  padding-left: 0;
}
.agenda-list li {
  font-size: 16px;
  padding: 5px 0;
}
.poster-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}
.poster-lustrum {
  max-width: 500px;
  border-radius: 10px;
  border: 2px solid var(--white);
}

/* Flex container voor agenda en poster */
.content-section {
  display: flex;
  justify-content: space-between; /* Zorgt voor ruimte tussen de secties */
  gap: 100px; /* Ruimte tussen agenda en poster */
  margin-top: 40px;
}
/* Agenda links */
.agenda-section {
  flex: 1; /* Zorgt ervoor dat de agenda één deel van de beschikbare ruimte inneemt */
  background-color: var(--lustrum-blue); /* Achtergrondkleur voor visueel onderscheid */
  color: var(--white);
  padding: 20px;
  border-radius: 100px;
  border: 2px solid var(--white);
}

/* Poster rechts */
.poster-lustrum {
  flex: 1; /* Fotogalerij neemt ook één deel van de ruimte */
  background-color: var(--lustrum-blue); /* Gouden achtergrond voor de fotogalerij */
  padding: 20px;
  border-radius: 100px;
}

/* Poster foto*/
.poster-container {
  display: flex;
  justify-content: space-around; /* Plaatst de foto's netjes verdeeld */
  gap: 10px; /* Ruimte tussen de foto's */
}

.lustrum-foto {
  max-width: 100px;
  border-radius: 10px;
  border: 2px solid var(--white);
}

/* Responsief design */
@media (max-width: 768px) {
  .content-section {
    flex-direction: column; /* Bij een kleiner scherm stapelen de secties op elkaar */
  }

  .agenda-section, .fotogalerij-section {
    margin-bottom: 20px; /* Ruimte tussen de secties op kleinere schermen */
  }
}

</style>