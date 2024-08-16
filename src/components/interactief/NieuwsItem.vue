<script setup>
import nieuwsItems from '../../assets/nieuwsItems.json'
// eslint-disable-next-line
const props = defineProps({
    nummer: String
})
console.log(props.nummer)
const item = nieuwsItems.items[props.nummer]
const titel = item.titel
const tekst = item.inhoud
</script>

<template>
    {{ titel }}
    {{ tekst }}
<!--<div class="col-12 border-bottom border-bottom-primary m-0 mb-2">

<div class="col-12 container p-0 mb-2 row">
    <div class="col-12 col-md-6">
        <h4 class="h4 font-primary text-primary">{{ titel }}</h4>
        <p class="text-justify">
            {!! nl2br(e(substr({{tekst}}, 0,1000))) !!}...
            <br/><br/><a href="/news/{{props.nummer}}">Lees meer ></a>     
            {{  tekst }}   
        </p>
     </div>
</div>

</div>-->
</template>
