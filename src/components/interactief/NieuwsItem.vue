<script setup>
import nieuwsItems from '../../assets/nieuwsItems.json'
// eslint-disable-next-line
const props = defineProps({
    nummer: String
})
const nummer = nieuwsItems.items.length - props.nummer // Nieuws van nieuw naar oud laten zien
let tekst = ""
let titel = ""
if (nummer >= 0) // Niet proberen meer nieuws te laten dan er is
{
    const item = nieuwsItems.items[nummer]
    titel = item.titel
    tekst = item.inhoud.substring(0, 1000) // Eerste 1000 tekens
    if (item.inhoud.length > 1000) tekst += '...'
}
const url = "/nieuws/" + nummer
</script>

<template>

<div v-if="nummer >= 0" class="col-12 border-bottom border-bottom-primary m-0 mb-2">

<div class="col-12 container p-0 mb-2 row">
    <div class="col-12 col-md-6">
        <h4 class="h4 font-primary text-primary">{{ titel }}</h4>
        <p class="text-justify">
            {{tekst}}
            <br/><br/><a :href="url">Lees meer ></a>     
        </p>
     </div>
</div>

</div>
</template>
