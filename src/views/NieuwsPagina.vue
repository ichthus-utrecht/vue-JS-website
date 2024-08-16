<script setup>
import BasisLayout from '../components/layouts/BasisLayout.vue'
import FooterBalk from '../components/interactief/FooterBalk.vue'
import NavigatieBalk from '@/components/interactief/NavigatieBalk.vue'
import nieuwsItems from '../assets/nieuwsItems.json'
// eslint-disable-next-line
const props = defineProps({
    nummer: Number
})

const item = nieuwsItems.items[props.nummer]
const titel = item.titel
const tekst = item.inhoud

</script>

<template>
    <NavigatieBalk />
    <BasisLayout :pageHeader="titel">
        <div class="col-12 col-md-12">
            {{tekst}}
        </div>
    </BasisLayout>
    <FooterBalk />
</template>

<style lang="css">
@import '../assets/css/app.css';
</style>
