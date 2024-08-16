<script setup>
import nieuwsItems from '../../assets/nieuwsItems.json'
// eslint-disable-next-line
const props = defineProps({
    nummer: String,
    titel: String,
    tekst: String
})
console.log(props.nummer)
const item = nieuwsItems.items[props.nummer]
const titel = item.titel
const tekst = item.inhoud.substring(0, 1000) // Eerste 1000 tekens
</script>

<template>
<div class="col-12 border-bottom border-bottom-primary m-0 mb-2">

<div class="col-12 container p-0 mb-2 row">
    <div class="col-12 col-md-6">
        <h4 class="h4 font-primary text-primary">{{ titel }}</h4>
        <p class="text-justify">
            {{tekst}}...
            <br/><br/><a href="/news/{{props.nummer}}">Lees meer ></a>     
        </p>
     </div>
</div>

</div>
</template>
