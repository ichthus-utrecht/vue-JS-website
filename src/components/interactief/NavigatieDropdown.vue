<script setup lang="ts">
import { ref } from 'vue'

import NavigatieKnop from './NavigatieKnop.vue'

// eslint-disable-next-line
defineProps({
    tekst: String,
    inhoud: Object
})
// 'tekst' is wat weergegeven wordt op de uitklapknop, 'inhoud' is een lijst met paren van knoptitels en koppelingen

const uitgeklapt = ref(false) // Houdt bij of de uitklapknop is uitgeklapt of niet

function uitklappen() {
    uitgeklapt.value = true
}

function inklappen() {
    uitgeklapt.value = false
}

</script>

<template>
    <div class="dropdown" @mouseover="uitklappen" @mouseleave="inklappen">
        <a class="uitklapknop" href="#">{{ tekst }}</a>
        <ul class="dropdowninhoud" v-if="uitgeklapt">
            <!-- De inhoud van de dropdown wordt alleen weergegeven als hij uitgeklapt is -->
            <li v-for="knop in inhoud.value" :key="knop.tekst">
                <!-- We gebruiken een lijst om de knoppen onder elkaar weer te geven -->
                <NavigatieKnop class="inhoudsknop" :tekst="knop.tekst" :koppeling="knop.koppeling" />
            </li>
        </ul>
    </div>
</template>


<style scoped>
.dropdowninhoud {
    position: absolute;
    /* Zorg ervoor dat de inhoud onder de knop terechtkomt en de knop niet van plek veranderd */
    list-style-type: none;
    /* Geen bolletjes bij de opties */
    /* padding gebruiken ipv margin zodat mouseleave niet triggert bij de witruimte */
    padding: 30px;
    padding-top: 60px;
    padding-bottom: 10px;
    background-color: white;
    margin: 0px;
    text-align: left;
    white-space: nowrap;
}

.dropdowninhoud::before {
    content: '';
    position: absolute;
    left: 0;
    top: 58px;
    height: calc(100% - 58px);
    /* Adjust the height of the line as needed */
    width: 2px;
    /* Adjust the width of the line as needed */
    background-color: rgb(151, 0, 70);
    transition: width 0.3s;
}

/* Dit is momenteel gekopieerd uit NavigatieKnop.vue; als deze af is kijken of we het beide in een component kunnen zetten die hergebruikt wordt, of misschien stylen in een ander component */
a {
    color: gray;
    text-decoration: none;
}
</style>
