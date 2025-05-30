<script setup lang="ts">
import BasisLayout from '../../components/layouts/BasisLayout.vue'
import FooterBalk from '../../components/interactief/FooterBalk.vue'
import NavigatieBalk from '@/components/interactief/NavigatieBalk.vue';
</script>

<template>
    <NavigatieBalk />
    <BasisLayout pageHeader="LHBTIQ+"
        description="">
        <div class="row justify-content-center">
            <div class="col-12 page-section-header-m mt-0">
                LHBTIQ+
                <hr class="divider-small divider-thin divider-gray" />
            </div>
            <p>
                Wij als Ichthus Utrecht zijn een open vereniging waar voor iedereen een plek is.  In de huidige samenleving is het onderwerp LHBTIQ+ erg actueel.  Bij Ichthus is iedereen welkom ongeacht verschillen in Bijbelse visie en interpretatie op hedendaagse onderwerpen. Ook als je nog twijfelt over je geaardheid of gender, je onlangs uit de kast gekomen bent of het nog juist voor jezelf houdt. Voel je dus vooral welkom om een keer langs te komen op onze vereniging om gezellig samen te eten, te kletsen en borrelen!
                Mocht je vragen over dit onderwerp hebben? Dan kan je abactis@ichthusutrecht.nl mailen
            </p>
        </div>

    </BasisLayout>
    <FooterBalk />
</template>

<style lang="css">
@import '../../assets/css/app.css';
</style>