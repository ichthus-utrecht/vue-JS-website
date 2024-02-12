<script setup>
// Hier importeren we de componenten die we nodig hebben
import NavigatieKnop from '../interactief/NavigatieKnop.vue'
import NavigatieDropdown from '../interactief/NavigatieDropdown.vue'

import { ref } from 'vue'
</script>

<template>
    <div class="menu">
        <div class="menu-item">
            <router-link to="/"><img src="../../assets/images/icons/ichthus-logo-red.png" class="logo"></router-link>
        </div>
        <div class="menu-item">
            <div class="titleCorner">Ichthus Utrecht</div>
        </div>
        <div class="menu-item">
            <NavigatieDropdown tekst="Vereniging" :inhoud="ref([
                { tekst: 'Bestuur', koppeling: 'bestuur' },
                { tekst: 'Jaarthema', koppeling: 'jaarthema' },
                { tekst: 'Waar wij voor staan', koppeling: 'visie-missie' },
                { tekst: 'Geschiedenis', koppeling: 'geschiedenis' }
            ])" />
        </div>
        <div class="menu-item">
            <NavigatieDropdown tekst="Activiteiten" :inhoud="ref([
                { tekst: 'Agenda', koppeling: 'agenda' },
                { tekst: 'Geloof', koppeling: 'activiteiten-geloof' },
                { tekst: 'Praktisch', koppeling: 'activiteiten-praktisch' }
            ])" />
        </div>
        <div class="menu-item">
            <NavigatieDropdown tekst="Over" :inhoud="ref([
                { tekst: 'Extern', koppeling: 'extern' },
                { tekst: 'Vrienden van Ichthus', koppeling: 'vrienden' },
                { tekst: 'Adverteren', koppeling: 'adverteren' },
                { tekst: 'Contact', koppeling: 'contact' }
            ])" />
        </div>
        <div class="menu-item">
            <NavigatieKnop tekst="Lid worden" koppeling="lid-worden" />
        </div>
        <div class="menu-item">
            <ul class="nav nav-mobile">

                <li class="nav-item nav-social pe-0">
                    <a href="https://www.instagram.com/ichthus_utrecht/" target="_blank"
                        style="border-right-color: rgb(151,0,70);" class="nav-link">
                        <i class="fa fa-instagram" style="color: gray; text-shadow: none;"></i>
                    </a>
                </li>
            </ul>
        </div>
        <div class="menu-item">
            <ul class="nav nav-mobile">

                <li class="nav-item nav-social nav-social-right-border" style="border-right-color: rgb(151,0,70);">
                    <a href="https://nl-nl.facebook.com/csvichthusutrecht" target="_blank"
                        style="color: gray; text-shadow: none;" class="nav-link">
                        <i class="fa fa-facebook"></i>
                    </a>
                </li>
            </ul>
        </div>
        <div class="menu-item">
            <a class="nav-link" href="https://ichthusutrecht.churchbook.nl">
                <i class="fas fa-lock fa-xs m-2" id="headerLock" style="color: gray;"></i>
                <NavigatieKnop tekst="Leden" koppeling="https://ichthusutrecht.churchbook.nl" />
            </a>
        </div>
    </div>
</template>

<style scoped lang="css">
@import '../../assets/css/app.css';

.menu {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 10px;
    margin-bottom: 40px;
    padding: 0 10px;
    /* Added padding for smaller screens */
    height: 60px;
    margin-left: 10%;
    margin-right: 25%;
}

.menu-item {
    flex: 1;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo {
    height: 50px;
    /* Decreased logo size for smaller screens */
}

.titleCorner {
    color: rgb(151, 0, 70);
    font-family: "Bree Serif", serif;
    font-size: 25px;
    margin: 0;
    white-space: nowrap;
}

@media screen and (max-width: 768px) {
    .menu {
        flex-direction: column;
        /* Changed flex-direction to column for smaller screens */
        height: auto;
        /* Changed height to auto for smaller screens */
        margin-left: 5%;
        /* Adjusted margin for smaller screens */
        margin-right: 5%;
        /* Adjusted margin for smaller screens */
    }

    .menu-item {
        width: 100%;
        text-align: left;
        align-items: flex-start;
    }

    .logo {
        height: 30px;
        /* Reduced logo size for smaller screens */
    }

    .titleCorner {
        color: rgb(151, 0, 70);
        font-family: "Bree Serif", serif;
        font-size: 15px;
        margin: 0;
        white-space: nowrap;
        text-align: left;
    }

    .nav-link {
        color: gray
    }

}
</style>