<script setup lang="ts">
import FooterBalk from '../../components/interactief/FooterBalk.vue'
import BasisLayout from '../../components/layouts/BasisLayout.vue';
import NavigatieBalk from '@/components/interactief/NavigatieBalk.vue';
</script>

<template>
    <NavigatieBalk />
    <BasisLayout pageHeader="Vrienden van Ichthus">
        <div class="row justify-content-center">
            <div class="col-12 text-justify">
                <img class="no-shadow align-top float-right m-3"
                    src="@/assets/images/vrienden-van-ichthus-logo.png" alt="'" />
                
                <p>
                    Om de vereniging draaiende te houden zijn we naast het innen van contributie afhankelijk van sponsorinkomsten en donateurs. 
                    Dankzij hun bijdragen kunnen wij elke dinsdag en donderdag samenkomen voor Bijbelkring en de gezamenlijke verenigingsmaaltijd en activiteiten organiseren zoals het startweekend, het verdiepingsweekend, en lezingen. 
                    In al deze activiteiten is het onze doelstelling om Jezus te volgen, op Hem te lijken, en elkaar daarin te bemoedigen.
                </p>
                <p>
                    Vrienden van Ichthus zijn mensen die willen investeren Ichthus Utrecht d.m.v. een financiële bijdrage. 
                    Uw bijdrage helpt niet alleen onze vereniging, maar ondersteunt vooral ook de leden in het hebben van een bijzondere en vormende periode van hun leven.
                </p>

                <h4 class="mt-4">U kunt op verschillende manieren een gift doen:</h4>

                <h5 class="font-weight-bold mt-3">Via een periodieke gift (eventueel fiscaal voordelig)</h5>
                <p>
                    Mocht u periodiek willen geven, dan kunt u dat doen door middel van een formulier. 
                    Deze kunt u opvragen door te mailen naar <a href="mailto:fiscus@ichthusutrecht.nl">fiscus@ichthusutrecht.nl</a>. 
                    Wij vullen het aan onze kant ook in en vragen u om het retour naar ons te sturen.
                    Deze manier is fiscaal voordelig, want uw gift is volledig aftrekbaar van de belasting, mits de donatie voor ten minste vijf jaar wordt vastgelegd.
                </p>

                <h5 class="font-weight-bold mt-3">Via automatische incasso</h5>
                <p>
                    U kunt ook het formulier onderaan de pagina invullen of gebruik maken van deze link: <br>
                    <a href="https://forms.gle/cGwK3YSG72Mb3fo58" target="_blank">https://forms.gle/cGwK3YSG72Mb3fo58</a>
                </p>
                <p>
                    Op deze manier machtigt u Ichthus Utrecht om maandelijks of jaarlijks een bedrag af te schrijven. 
                    Deze gift is níet fiscaal aftrekbaar, maar u kunt uw bijdrage op elk moment aanpassen of stopzetten.
                </p>

                <h5 class="font-weight-bold mt-3">Eenmalige donatie</h5>
                <p>
                    Uiteraard is een eenmalige gift ook van harte welkom. Daarmee steunt u onze vereniging zonder verdere verplichtingen. 
                    Dit kan door een overschrijving naar het volgende rekeningnummer:<br>
                    <strong>NL 43 INGB 0000 1959 62</strong>
                    t.n.v. <i> “Christelijke StudentenVereniging Ichthus Utrecht” </i>.
                </p>

                <div class="mt-4">
                    <p>
                        Wij willen u hartelijk bedanken voor uw steun, financieel maar ook in gebed, wij ervaren echt een zegen over de vereniging daarvoor enorm bedankt.
                    </p>
                    <p>
                        <strong>Met hartelijke groet,</strong><br>
                        Het bestuur der C.S.V. Ichthus Utrecht
                    </p>
                </div>

            </div>
            
            <div class="row col-12">
                <div class="col-div-non-xl"></div>
            </div>
            
            <div class="row">
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
    </BasisLayout>
    <FooterBalk />
</template>

<style lang="css">
@import '../../assets/css/app.css';

.centered-image {
    display: block;
    margin: 0 auto !important;
    width: 90% !important;
    height: auto !important;
}
</style>