<script setup>
import BasisLayout from '../../components/layouts/BasisLayout.vue'
import FooterBalk from '../../components/interactief/FooterBalk.vue'
import NavigatieBalk from '@/components/interactief/NavigatieBalk.vue';
</script>

<template>
    <NavigatieBalk />
    <BasisLayout pageHeader="Activiteiten op de vereniging"
        description="Als student wil je uiteraard ook een leven naast je studie en bij Ichthus komt daar genoeg bij kijken! Lees hieronder wat voor activiteiten wij allemaal doen op de vereniging.">
        <div class="row justify-content-center activity-section-wrapper">
            <div class="row activity-section mt-4">
                <div class="col-12 col-md-4">
                    <div class="post-polaroid">
                        <img class="post-polaroid-image polaroid-image-l" src="@/assets/images/home-1.jpg" alt="'">
                        <div class="post-polaroid-caption polaroid-caption-l">Onze locatie!</div>
                    </div>
                </div>
                <div class="col-12 col-md-8 section-description">
                    <div class="section-header">Maaltijd</div>
                    <div class="post-text">Iedere week is er een verenigingsavond in Denksportcentrum Dijckzigt (Boorstraat
                        107, Utrecht). We beginnen samen met een maaltijd om 18:00 uur. Deze maaltijd is toegankelijk voor
                        iedereen en kent een laagdrempelig en gezellig karakter. De maaltijd wordt elke week gemiddeld door
                        zo'n 80 tot 90 personen bezocht. Tijdens de maaltijd is er de mogelijkheid om een mededeling te doen
                        om de vereniging op de hoogte te houden van activiteiten en andere belangrijke informatie.</div>
                </div>
            </div>
            <div class="row activity-section mt-4">
                <div class="col-12 col-md-8 section-description">
                    <div class="section-header">Activiteit op donderdag</div>
                    <div class="post-text">Bijna iedere donderdagavond na de maaltijd is er een activiteit. Hierbij kun je
                        denken aan een borreldebatavond, Algemene Ledenvergadering (ALV), jazzavond of een stadsspel.
                        Daarnaast hebben we door het jaar heen een aantal keer een feest en ieder jaar een gala. Ichthianen
                        komen verder op zondagen bij elkaar om na de kerk samen koffie en thee te drinken. Verder komen
                        leden ook zelf met leuke initiatieven, zoals picknicken in het park, een sportavond organiseren of
                        gaan liften. </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="post-polaroid">
                        <img class="post-polaroid-image polaroid-image-l" src="@/assets/images/praktisch-2.jpg" alt="'">
                        <div class="post-polaroid-caption polaroid-caption-l">Schaatsen!!</div>
                    </div>
                </div>
            </div>
            <div class="row activity-section mt-4">
                <div class="col-12 col-md-4">
                    <div class="post-polaroid">
                        <img class="post-polaroid-image polaroid-image-l" src="@/assets/images/praktisch-3.jpg" alt="'">
                        <div class="post-polaroid-caption polaroid-caption-l">Diepgaande gesprekken...</div>
                    </div>
                </div>
                <div class="col-12 col-md-8 section-description">
                    <div class="section-header">Borrels</div>
                    <div class="post-text">Wekelijks na de activiteit op donderdag hebben we soos. Met een biertje, wijntje
                        of watertje in de hand praten we dan na over bijvoorbeeld een lezing, spelen we bierpong of vermaken
                        we ons met karaoke.</div>
                </div>
            </div>
            <div class="row activity-section mt-4">
                <div class="col-12 col-md-8 section-description">
                    <div class="section-header">Weekenden weg</div>
                    <div class="post-text">Elk jaar zijn er verschillende weekenden waar je heen kunt gaan. We hebben
                        kringweekenden, waar je met je kring een weekendje weggaat en die vrij in te vullen zijn. Aan het
                        begin van het collegejaar, in september, is er het startweekend: een gezellig en ontspannen weekend
                        om eerstejaars en ouderejaars kennis met elkaar te laten maken en het jaar op een leuke manier te
                        beginnen. In het voorjaar is er een verdiepingsweekend. Zoals de naam al zegt, is dit een verdiepend
                        weekend, met lezingen, workshops, maar ook vrije tijd om te ontspannen. Het slotweekend in juni is
                        een gezellige afsluiter van het jaar. Daarnaast zijn er ook nog een aantal externe weekenden van
                        onze landelijke verbanden waar we vaak met een afvaardiging naartoe gaan. Hier ontmoet je veel
                        mensen van verenigingen uit het hele land.</div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="post-polaroid">
                        <img class="post-polaroid-image polaroid-image-l" src="@/assets/images/praktisch-4.jpg" alt="'">
                        <div class="post-polaroid-caption polaroid-caption-l">Zomer 2022</div>
                    </div>
                </div>
            </div>
            <div class="row activity-section mt-4">
                <div class="col-12 col-md-4">
                    <div class="post-polaroid">
                        <img class="post-polaroid-image polaroid-image-l" src="@/assets/images/praktisch-5.jpg" alt="'">
                        <div class="post-polaroid-caption polaroid-caption-l">Alle jaarlagen</div>
                    </div>
                </div>
                <div class="col-12 col-md-8 section-description">
                    <div class="section-header">Jaarlagen</div>
                    <div class="post-text">Eens in de zoveel weken kom je samen met je eigen jaarlaag. Samen ben je op de
                        vereniging gekomen en met deze groep mensen blijf je verbonden voor de rest van je studententijd bij
                        Ichthus. Met deze jaarlaag onderneem je leuke activiteiten zoals apenkooigym, een pubquiz of een
                        stadsspel. Daarnaast heb je ieder jaar ook een jaarlagenweekend, waar je tot in de late uurtjes
                        samen een kaartspel speelt of geniet van een drankje. </div>
                </div>
            </div>
        </div>
    </BasisLayout>
    <FooterBalk />
</template>

<style lang="css">
@import '../../assets/css/app.css';
</style>