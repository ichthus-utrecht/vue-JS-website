<script setup>
import HeaderBalk from '../../components/interactief/HeaderBalk.vue'
import StandardLayoutWithHeader from '../../components/layouts/StandardLayoutWithHeader.vue'
import FooterBalk from '../../components/interactief/FooterBalk.vue'
</script>

<template>
    <HeaderBalk />
    <StandardLayoutWithHeader pageHeader="Waar wij voor staan"
        description="Ichthus Utrecht heeft waarden en normen waar zij voor staat en die door heel de vereniging heen te merken zijn.">
        <div class="row justify-content-center">
            <div class="col-12 col-md-10 post-text">
                Onze identiteit als christenen wordt bepaald door God: Hij heeft ons gemaakt voor Zijn doel. Jezus
                Christus is volmaakt en zo heeft God ons ook bedoeld. Hieruit volgt het hoofddoel van onze
                vereniging:

                <div class="post-text-quote" style="color: rgb(151, 0, 70);">Jezus Christus volgen en op Hem gaan lijken.
                </div>

                Dit doel is wat ons tot een betrokken vereniging maakt. De vereniging heeft hiervoor nog drie
                doelstellingen en met het oog hierop worden activiteiten georganiseerd en de vereniging draaiende
                gehouden.
            </div>
            <div class="row align-items-center">
                <div class="col-12 col-md-10 post-text-block">
                    <p>
                        <b>1. Geestelijke en persoonlijke ontwikkeling van studenten</b><br>

                        Hieronder verstaan we het toerusten, motiveren en begeleiden van christelijke studenten
                        in het volgen van Jezus Christus. Dit gebeurt onder andere op Bijbelstudiekringen,
                        toerustingsavonden, Praise & Prayers en in gebedsgroepjes.
                    </p>
                    <p>
                        <b>2. Evangelisatie in woord en daad</b><br>

                        Evangeliseren betekent het brengen van de blijde Boodschap van verlossing door Jezus
                        Christus. Dit kan concreet door activiteiten zoals StudentLife, meedoen met de kerstoutreach, en
                        zingen op het station.
                        Daarnaast willen we deze doelstelling bereiken door een 'open' vereniging te zijn, door
                        maatschappelijk betrokken te zijn en door een getuigende levensstijl te stimuleren.
                    </p>
                    <p>
                        <b>3. Wetenschappelijke en maatschappelijke vorming vanuit een christelijke identiteit</b><br>

                        Activiteiten om deze doelstelling uit te werken zijn onder andere lezingen, borrel-debat
                        avonden en studietrajecten. Ook het onder de aandacht brengen van activiteiten op dit
                        gebied buiten Ichthus is een middel hiertoe.
                    </p>
                </div>
            </div>

            <div class="col-12 col-md-10 post-text">
                De ongeschreven vierde doelstelling is gezelligheid. Onderlinge contacten en vriendschappen groeien
                op bijvoorbeeld de kringen, de maaltijd en soos. Een belangrijk punt, want als er binnen Ichthus
                sprake is van gemeenschap, kan dit een 'broedplaats' worden voor nieuwe ideeën en activiteiten.
                <br><br>
                Deze doelstellingen hebben betrekking op alle aspecten van de vereniging: ze zijn met elkaar
                verbonden en kunnen zonder Christus niet verwezenlijkt worden.
            </div>
            <div class="col-12">
                <img class="post-image banner" src="@/assets/images/visie-missie.jpg" alt="'" />
            </div>
        </div>
    </StandardLayoutWithHeader>
    <FooterBalk />
</template>

<style lang="css">
@import '../../assets/css/app.css';
</style>