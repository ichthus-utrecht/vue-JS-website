<script setup>
import HeaderBalk from '../components/interactief/HeaderBalk.vue'
import StandardLayoutWithHeader from '../components/layouts/StandardLayoutWithHeader.vue'
import FooterBalk from '../components/interactief/FooterBalk.vue'
</script>

<template>
    <HeaderBalk />
    <StandardLayoutWithHeader pageHeader="Error 404 – Pagina niet gevonden"
        description="De pagina die je op hebt gevraagd bestaat niet. Mogelijk klopt het adres niet.">

    </StandardLayoutWithHeader>
    <FooterBalk />
</template>