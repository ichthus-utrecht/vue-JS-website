<script setup>
import FooterBalk from '../../components/interactief/FooterBalk.vue'
import SponsorTabel from '../../components/details/SponsorTabel.vue'
import BasisLayout from '../../components/layouts/BasisLayout.vue'
import NavigatieBalk from '../../components/interactief/NavigatieBalk.vue';
</script>

<template>
    <NavigatieBalk />
    <BasisLayout pageHeader="Adverteren" description="Bij Ichthus Utrecht is het mogelijk om uw bedrijf te adverteren, lees de onderstaande informatie voor
            alle mogelijkheden en contactgegevens.">
        <div class="row justify-content-center">
            <div class="col-12 page-section-header-m mt-0">
                Wat adverteren voor uw bedrijf kan
                betekenen
                <hr class="divider divider-gray divider-thin" />
            </div>
            <div class="col-12">
                <p class="text-justify">
                    Door te adverteren bij Ichthus Utrecht brengt u uw bedrijf of organisatie onder de aandacht
                    bij
                    al onze leden en andere Utrechtse studenten. Wij bieden verschillende
                    advertentiemogelijkheden aan.
                    Zo kunt u een banner plaatsen op onze website en adverteren in ons maandelijkse
                    verenigingsblad of
                    de jaarlijkse almanak. Daarnaast zijn er in de introweek ook adverteermogelijkheden.
                    Uiteraard kunt
                    u ook een eigen voorstel doen.
                    <br><br>
                    Voor meer informatie over adverteren bij Ichthus Utrecht of een uitgebreid overzicht van
                    sponsormogelijkheden kunt u met ons contact opnemen met de onderstaande contactgegevens.
                </p>
            </div>
            <div class="col-12 page-section-header-m mt-0">
                Contactgegevens
                <hr class="divider divider-gray divider-thin" />
            </div>
            <div class="col-12 col-md-6">
                <p class="post-text">
                    Ichthus Utrecht is te benaderen via de onderstaande gegevens.
                </p>

                <strong>Postadres</strong>
                <p>
                    C.S.V. Ichthus Utrecht, Pnyx<br>
                    Winthontlaan 30C<br>
                    3526KV Utrecht<br>
                </p>

                <strong>Locatie</strong>
                <p>
                    Boorstraat 107<br>
                    3513 SE Utrecht<br>
                    herus@ichthusutrecht.nl
                </p>
            </div>
            <div class="col-12 col-md-6">
                <h1 class="page-section-header-s post-text">Contactpersoon</h1>
                <div class="person-card">
                    <div class="row w-100 person-section">
                        <div class="col-6">
                            <img class="section-image" src="@/assets/images/bestuur/bestuur-person-6.jpg" alt="'" />
                        </div>
                        <div class="col-6">
                            <div class="section-header">Alinde van Manen</div>
                            <div class="section-contact">
                                herus@ichthusutrecht.nl
                            </div>
                            <div class="section-social">
                                <a href="https://nl-nl.facebook.com/csvichthusutrecht" target="_blank"
                                    class="btn-social btn-sm btn-facebook"><i class="fa fa-facebook"></i></a>
                                <a href="https://www.instagram.com/ichthus_utrecht/" target="_blank"
                                    class="btn-social btn-sm btn-instagram"><i class="fa fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 page-section-header-m mt-0">
                Deze bedrijven gingen u voor
                <hr class="divider divider-gray divider-thin" />
            </div>
        </div>

        <div class="overflow-hidden mb-5">
            <div class="col-12">
                <SponsorTabel></SponsorTabel>
            </div>
        </div>
    </BasisLayout>
    <FooterBalk />
</template>

<style lang="css">
@import '../../assets/css/app.css';
</style>