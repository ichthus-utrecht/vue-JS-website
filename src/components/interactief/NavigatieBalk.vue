<template>
    <nav class="navbar navbar-expand-lg">

        <div class="navbar-brand">
            <router-link to="/" style="text-decoration: none; color: white;">
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

                <li class="nav-item dropdown active">

                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Vereniging
                    </a>

                    <ul class="dropdown-menu">
                        <li>
                            <router-link to="/bestuur">
                                <div class="dropdown-item">Bestuur</div>
                            </router-link>

                        </li>
                        <li>
                            <router-link to="/jaarthema">
                                <div class="dropdown-item">Jaarthema</div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/visie-missie">
                                <div class="dropdown-item">Waar wij voor staan</div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/geschiedenis">
                                <div class="dropdown-item">Geschiedenis</div>
                            </router-link>
                        </li>
                    </ul>
                </li>

                <li class="nav-item dropdown">

                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Activiteiten
                    </a>

                    <ul class="dropdown-menu">
                        <li>
                            <router-link to="/agenda">
                                <div class="dropdown-item">Agenda</div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/geloof">
                                <div class="dropdown-item">Geloof</div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/praktisch">
                                <div class="dropdown-item">Praktisch</div>
                            </router-link>
                        </li>
                    </ul>

                </li>

                <li class="nav-item dropdown">

                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Over
                    </a>

                    <ul class="dropdown-menu">
                        <li>
                            <router-link to="/extern">
                                <div class="dropdown-item">Extern</div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/vrienden">
                                <div class="dropdown-item">Vrienden van Ichthus</div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/adverteren">
                                <div class="dropdown-item">Adverteren</div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/contact">
                                <div class="dropdown-item">Contact</div>
                            </router-link>
                        </li>
                    </ul>

                </li>

                <li class="nav-item">
                    <router-link to="/lid-worden">
                        <div class="nav-link">Lid worden</div>
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
                            <path fill="white"
                                d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                        </svg>
                        Leden
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style lang="css">
@import '../../assets/css/app.css';

.icon {
    width: 1em;
    height: 1em;
    vertical-align: -.125em;
    margin-right: 0.8em;
}
</style>