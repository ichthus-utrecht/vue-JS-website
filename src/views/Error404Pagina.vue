<script setup lang="ts">
import BasisLayout from '../components/layouts/BasisLayout.vue'
import FooterBalk from '../components/interactief/FooterBalk.vue'
import NavigatieBalk from '@/components/interactief/NavigatieBalk.vue';
</script>

<template>
    <NavigatieBalk />
    <BasisLayout pageHeader="Error 404 – Pagina niet gevonden"
        description="De pagina die je op hebt gevraagd bestaat niet. Mogelijk klopt het adres niet.">

    </BasisLayout>
    <FooterBalk />
</template>