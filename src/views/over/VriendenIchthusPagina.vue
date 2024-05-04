<script setup>
import FooterBalk from '../../components/interactief/FooterBalk.vue'
import NavigatieBalk from '@/components/interactief/NavigatieBalk.vue';
import StandardLayoutWithHeader from '@/components/layouts/StandardLayoutWithHeader.vue';
</script>

<template>
    <NavigatieBalk />
    <StandardLayoutWithHeader pageHeader="Vrienden van Ichthus">
        <!-- Er is geen beschrijving op deze pagina -->
        <div class="row justify-content-center">
            <div class="col-12 text-justify">
                <img class="no-shadow align-top float-right m-3"
                    src="@/assets/images/vrienden-van-ichthus-logo.png" alt="'" />
                <p>
                    Om de vereniging draaiende te houden zijn we naast het innen van contributie afhannkelijk van
                    sponsorinkomsten en donateurs.
                    Van uw donatie worden activiteiten zoals het verdiepingsweekend en start- en slotweekend betaald.
                </p>
                <p>
                    Omdat wij het belangrijk vinden dat een donateur ook betrokken is bij de vereniging, hebben wij
                    Vrienden van Ichthus opgezet.
                    Vrienden van Ichthus is een netwerk waar u bij uw donatie wordt ingedeeld in een trap n.a.v. uw
                    donatie. Elke trap heeft een uniek geschenk,
                    en hoe hoger uw donatie, hoe hoger uw trap. De oplettende donateur herkent misschien het Bijbelse
                    visioen dat in de verschillende trappen is verwerkt.
                    Daarnaast ontvangt u viermaal per jaar een nieuwsbrief om op de hoogte te blijven, zodat u weet wat
                    de vereniging met uw geld allemaal kan doen.
                    Ook zal er een Vrienden van Ichthus avond worden georaniseerd waar u de vereniging kan bezoeken.
                </p>
                <p>
                    We hopen u als donatuer op deze manier te kunnen betrekken bij de vereniging en we zijn u dankbaar
                    voor uw donatie!
                </p>
                <div class="table-responsive">
                    <table class="table" style="table-layout: fixed;">
                        <thead>
                            <tr>
                                <th>Trap</th>
                                <th>Cadeau</th>
                                <th>Prijs per jaar</th>
                                <th>Prijs per maand</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Leem</td>
                                <td>Sticker & Sleutelhanger</td>
                                <td>Vanaf €12,-</td>
                                <td>Vanaf €1,-</td>
                            </tr>
                            <tr>
                                <td>IJzer</td>
                                <td>Sticker & Sleutelhanger & Linnen tasje</td>
                                <td>Vanaf €30,-</td>
                                <td>Vanaf €2,50</td>
                            </tr>
                            <tr>
                                <td>Brons</td>
                                <td>Kerstkaartje & Bonbons</td>
                                <td>Vanaf €90,-</td>
                                <td>Vanaf €7,50</td>
                            </tr>
                            <tr>
                                <td>Zilver</td>
                                <td>Kerstkaartje & Domtoren kaars</td>
                                <td>Vanaf €150,-</td>
                                <td>Vanaf €12,50</td>
                            </tr>
                            <tr>
                                <td>Goud</td>
                                <td>Kerstkaartje & Vrienden van Ichthus glas</td>
                                <td>Vanaf €240,-</td>
                                <td>Vanaf €20,-</td>
                            </tr>
                            <tr>
                                <td>Diamant</td>
                                <td>Kerstkaartje & Ichthus trui</td>
                                <td>Vanaf €360,-</td>
                                <td>Vanaf €30,-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>
                    <i>
                        De keuze voor de cadeaus is optioneel. U kunt dus zelf aangeven of u het wel of niet wilt
                        ontvangen.
                    </i>
                </p>
            </div>
            <div class="row col-12">
                <div class="col-div-non-xl"></div>
            </div>
            <div class="row">
                <div class="col-12">
                    <strong>
                        Bent u geïnteresseerd in het worden van Vriend van Ichthus?
                    </strong>
                    <p>
                        Vul dan onderstaand formulier in.<br> Bij vragen kunt u contact opnemen met
                        vriendenvanichthus@ichthusutrecht.nl
                    </p>
                    <strong>
                        Met hartelijke groet,
                    </strong>
                    <p>
                        Commissie Vrienden van Ichthus
                    </p>
                </div>
                <div class="col-12">
                    <hr class="divider divider-gray" />
                </div>
            </div>


            <div class="row w-100">
                <iframe class="w-100" height="740px"
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfG2q0c-QvghtvXwnKYye3P-uwUz1JlOrnofTk8_gbUcj2g1g/viewform?embedded=true"
                    frameborder="0" marginheight="0" marginwidth="0">Laden…
                </iframe>
            </div>
        </div>
    </StandardLayoutWithHeader>
    <FooterBalk />
</template>

<style scoped lang="css">
@import '../../assets/css/app.css';

.centered-image {
    display: block;
    margin: 0 auto !important;
    width: 90% !important;
    height: auto !important;
}
</style>