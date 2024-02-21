<template>
    <nav :class="{ 'scrolled': scrolled }" class="navbar navbar-expand-lg">

        <div class="navbar-brand nav-link">
            <router-link to="/" :class="{ 'scrolly': scrolled }" class="nav-link">
                <img src="@/assets/images/icons/ichthus-logo-red.png">
                Ichthus Utrecht
            </router-link>
        </div>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"><i class="fas fa-caret-down"></i></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">

            <ul class="nav mr-auto nav-mobile">

                <div class="nav-item dropdown active" @mouseover="uitklappen('vereniging')"
                    @mouseleave="inklappen('vereniging')">

                    <div class="nav-link dropdown-toggle" href="#">
                        Vereniging
                    </div>

                    <ul class="dropdowninhoud" v-if="vereniging">
                        <li>
                            <router-link to="/bestuur" style="text-decoration: none;">
                                <div class="dropdown-item">Bestuur</div>
                            </router-link>

                        </li>
                        <li>
                            <router-link to="/jaarthema" style="text-decoration: none;">
                                <div class="dropdown-item">Jaarthema</div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/visie-missie" style="text-decoration: none;">
                                <div class="dropdown-item">Waar wij voor staan</div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/geschiedenis" style="text-decoration: none;">
                                <div class="dropdown-item">Geschiedenis</div>
                            </router-link>
                        </li>
                    </ul>
                </div>

                <li class="nav-item dropdown" @mouseover="uitklappen('activiteiten')"
                    @mouseleave="inklappen('activiteiten')">

                    <div class="nav-link dropdown-toggle" href="#">
                        Activiteiten
                    </div>

                    <ul class="dropdowninhoud" v-if="activiteiten">
                        <li>
                            <router-link to="/agenda" style="text-decoration: none;">
                                <div class="dropdown-item">Agenda</div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/activiteiten-geloof" style="text-decoration: none;">
                                <div class="dropdown-item">Geloof</div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/activiteiten-praktisch" style="text-decoration: none;">
                                <div class="dropdown-item">Praktisch</div>
                            </router-link>
                        </li>
                    </ul>

                </li>

                <li class="nav-item dropdown" @mouseover="uitklappen('over')" @mouseleave="inklappen('over')">

                    <div class="nav-link dropdown-toggle" href="#">
                        Over
                    </div>

                    <ul class="dropdowninhoud" v-if="over">
                        <li>
                            <router-link to="/extern" style="text-decoration: none;">
                                <div class="dropdown-item">Extern</div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/vrienden" style="text-decoration: none;">
                                <div class="dropdown-item">Vrienden van Ichthus</div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/adverteren" style="text-decoration: none;">
                                <div class="dropdown-item">Adverteren</div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/contact" style="text-decoration: none;">
                                <div class="dropdown-item">Contact</div>
                            </router-link>
                        </li>
                    </ul>

                </li>

                <li class="nav-item">
                    <router-link to="/lid-worden" style="text-decoration: none;">
                        <a class="nav-link">Lid worden</a>
                    </router-link>
                </li>

            </ul>

            <ul class="nav nav-mobile">

                <li class="nav-item nav-social pe-0">
                    <a href="https://www.instagram.com/ichthus_utrecht/" target="_blank" class="nav-link">
                        <i class="fa fa-instagram"></i>
                    </a>
                </li>

                <li class="nav-item nav-social nav-social-right-border">
                    <a href="https://nl-nl.facebook.com/csvichthusutrecht" target="_blank" class="nav-link">
                        <i class="fa fa-facebook"></i>
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="https://ichthusutrecht.churchbook.nl">
                        <svg xmlns="http://www.w3.org/2000/svg" class="fas fa-lock fa-xs icon"
                            style="color: white; text-shadow: black 0px 0px 10px;" aria-hidden="true" focusable="false"
                            viewBox="0 0 448 512"><!-- !Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
                            <path :fill="scrolled ? 'gray' : 'white'"
                                d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                        </svg>
                        Leden
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            scrolled: false,
            vereniging: false,
            activiteiten: false,
            over: false,
        };
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
            if (window.scrollY < 150) {
                this.scrolled = false;
            } else {
                this.scrolled = true;
            }
        },
        uitklappen(sectie) {
            this[sectie] = true
        },
        inklappen(sectie) {
            this[sectie] = false
        }
    }
};
</script>

<style lang="css">
@import '../../assets/css/app.css';

.dropdowninhoud {
    position: absolute;
    /* Zorg ervoor dat de inhoud onder de knop terechtkomt en de knop niet van plek veranderd */
    list-style-type: none;
    /* Geen bolletjes bij de opties */
    /* padding gebruiken ipv margin zodat mouseleave niet triggert bij de witruimte */
    padding: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: transparent;
    margin: 0px;
    text-align: left;
    white-space: nowrap;
}

.dropdowninhoud::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    /* Adjust the height of the line as needed */
    width: 1px;
    /* Adjust the width of the line as needed */
    background-color: white;
    transition: width 0.3s;
}

.icon {
    width: 1em;
    height: 1em;
    vertical-align: -.125em;
    margin-right: 0.8em;
}

.navbar {
    transition: all 0.3s ease;
}

.scrolled {
    background-color: white;
    padding-top: 0;
    color: #970046;
    padding-bottom: 5vh;
    box-shadow: 0px -9px 20px black;
    -moz-box-shadow: 0px -9px 20px black;
    -webkit-box-shadow: 0px -9px 20px black;
}

/* Styles for when scroll condition is met */
.navbar.scrolled {
    background-color: white;
    padding-top: 0;
    color: #970046;
    padding-bottom: 5vh;
    box-shadow: 0px -9px 20px black;
    -moz-box-shadow: 0px -9px 20px black;
    -webkit-box-shadow: 0px -9px 20px black;
}

.navbar.scrolled a {
    color: gray;
    text-shadow: none;
}

.navbar.scrolled li {
    border-right-color: #970046;
}

.navbar.scrolled .navbar-brand {
    color: #970046;
    text-shadow: none;
}

.navbar.scrolled .navbar-brand img {
    filter: none;
}

.dropdown-menu.scrolled {
    background-color: white;
    margin-top: calc(5vh + 2px);
    box-shadow: 0px 13px 30px -6px rgba(0, 0, 0, 0.56);
    -webkit-box-shadow: 0px 13px 30px -6px rgba(0, 0, 0, 0.56);
    -moz-box-shadow: 0px 13px 30px -6px rgba(0, 0, 0, 0.56);
    clip-path: inset(0px -50px -50px -50px);
}

.dropdown-menu.scrolled a {
    border-left-color: #970046;
}

.navbar-toggler.scrolled {
    color: #970046;
}

.navbar .nav-link .scrolly {
    color: #970046;
}

.scrolled .dropdowninhoud {
    transition: all 0.3s ease;
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

.scrolled .dropdowninhoud::before {
    transition: all 0.3s ease;
    content: '';
    position: absolute;
    left: 0;
    top: 51px;
    height: calc(100% - 51px);
    /* Adjust the height of the line as needed */
    width: 1px;
    /* Adjust the width of the line as needed */
    background-color: rgb(151, 0, 70);
    transition: width 0.3s;
}

.navbar a:hover {
    color: #970046;
    text-decoration: underline !important;
}
</style>