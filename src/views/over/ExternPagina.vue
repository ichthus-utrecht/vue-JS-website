<script setup>
import BasisLayout from '../../components/layouts/BasisLayout.vue'
import FooterBalk from '../../components/interactief/FooterBalk.vue'
import NavigatieBalk from '@/components/interactief/NavigatieBalk.vue';
</script>

<template>
    <NavigatieBalk />
    <BasisLayout pageHeader="Externe Banden"
        description="Ichthus Utrecht heeft contacten en externe banden door heel Nederland heen. Hieronder zijn ze opgesomd.">
        <div class="row justify-content-center">
            <div class="col-12 page-section-header-m mt-0">
                BOCS
                <hr class="divider-small divider-thin divider-gray" />
            </div>
            <p>
                Binnen Utrecht hebben de vijf christelijke verenigingen samen een koepelorgaan: het Broeder Overleg
                Christelijke Studenten (hierna: BOCS). Zij vertegenwoordigt onze belangen, staat voor onze christelijke
                identiteit en organiseert activiteiten ter verbroedering en verdieping. Daarnaast onderhouden wij als
                vereniging goede banden met onze broederverenigingen.
            </p>
            <table class="table-borderless text-center w-100">
                <tr style="height: 2.5rem">
                    <td style="width: 33.33%">
                        <a href="https://bocsutrecht.com/">BOCS</a>
                    </td>
                    <td style="width: 33.33%">
                        <a href="https://www.sola-scriptura.nl">Sola Scriptura</a>
                    </td>
                    <td style="width: 33.33%">
                        <a href="https://www.nsutrecht.nl">NSU</a>
                    </td>
                </tr>
                <tr style="height: 2.5rem">
                    <td>
                        <a href="https://www.ssr-nu.nl">S.S.R.-N.U.</a>
                    </td>
                    <td>
                        <a href="https://www.vgsu.nl">VGSU</a>
                    </td>
                </tr>
            </table>
        </div>
        <div class="row justify-content-center">
            <div class="col-12 page-section-header-m mt-0">
                Ichthus Landelijk
                <hr class="divider-small divider-thin divider-gray" />
            </div>
            <p>
                Ichthus Landelijk is het overkoepelende verband voor alle 15 Ichthusverenigingen en de RSK. Naast
                ondersteuning van de plaatselijke Ichthusverenigingen, is het Landelijk Bestuur bezig met sponsoring en PR
                op landelijk vlak. Ook worden er vanuit Ichthus Landelijk een aantal activiteiten georganiseerd. De
                belangrijkste hiervan zijn de Retraite, het f.t.-bestuurstoerustingsweekend, het Landelijk Gala en de
                sportdag. Af en toe proberen wij als vereniging ook op bezoek te gaan bij onze zusterverenigingen om een
                maaltijd of borrel bij te wonen.
            </p>
            <table class="table-borderless text-center w-100">
                <tr style="height: 2.5rem">
                    <td style="width: 33.33%"></td>
                    <td style="width: 33.33%">
                        <a href="http://www.ichthuslandelijk.nl/">Ichthus Landelijk</a>
                    </td>
                    <td style="width: 33.33%"></td>
                </tr>
            </table>
        </div>
        <div class="row justify-content-center">
            <div class="col-12 page-section-header-m mt-0">
                IFES
                <hr class="divider-small divider-thin divider-gray" />
            </div>
            <p>
                Als laatste is er de International Fellowship of Evangelical Students (hierna: IFES) welke in Nederland zo’n
                zestig christelijke verenigingen overkoepelt. Deze verenigingen kan je ruwweg indelen in 6 zogenaamde
                'bloedgroepen'; Ichthus, C.S.F.R., de Ghbo verenigingen, OZON en VGS/GSV. Naast dat IFES vele grootse
                conferenties aanbiedt, biedt zij vooral ondersteuning op geloofsgebied en ondersteunt zij de plaatselijke
                verenigingen met stafwerkers. Onderstaand vind u enkele van hun websites en websites van andere organisaties
                waar wij (nauwe) banden mee onderhouden:
            </p>
            <table class="table-borderless text-center w-100">
                <tr style="height: 2.5rem">
                    <td style="width: 33.33%"></td>
                    <td style="width: 33.33%">
                        <a href="http://www.ifes.nl/">IFES</a>
                    </td>
                    <td style="width: 33.33%"></td>
                </tr>
            </table>
        </div>

    </BasisLayout>
    <FooterBalk />
</template>

<style lang="css">
@import '../../assets/css/app.css';
</style>