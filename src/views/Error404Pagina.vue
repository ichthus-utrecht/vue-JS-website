<script setup>
import StandardLayoutWithHeader from '../components/layouts/StandardLayoutWithHeader.vue'
import FooterBalk from '../components/interactief/FooterBalk.vue'
import NavigatieBalk from '@/components/interactief/NavigatieBalk.vue';
</script>

<template>
    <NavigatieBalk />
    <StandardLayoutWithHeader pageHeader="Error 404 – Pagina niet gevonden"
        description="De pagina die je op hebt gevraagd bestaat niet. Mogelijk klopt het adres niet.">

    </StandardLayoutWithHeader>
    <FooterBalk />
</template>