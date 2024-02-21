<script setup>
import FooterBalk from '../../components/interactief/FooterBalk.vue'
import NavigatieBalk from '@/components/interactief/NavigatieBalk.vue';
</script>

<template>
    <NavigatieBalk />
    <img class="row page-title-image page-title-image-m centered-image" src="@/assets/images/nav.jpg">
    Contact
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