<script setup lang="ts">
// eslint-disable-next-line
defineProps({
    tekst: String,
    koppeling: String
})
</script>


<template>
    <a class="koppeling" :href="koppeling">{{ tekst }}</a>
</template>

<style scoped>
/* We laten de knopjes niet van kleur veranderen maar geven wel aan wanneer de muis eroverheen zit. */
a {
    color: gray;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>