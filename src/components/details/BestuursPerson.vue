<script setup>

// eslint-disable-next-line
defineProps({
    imageNumber: String,
    name: String,
    functie: String,
    email: String,
})

</script>


<template>
<div class="person-section col-12 col-md-5">
    <div class="row align-items-center justify-content-center">
        <div class="col-6 col-md-5">
            <img class="section-image"  :src="require(`@/assets/images/bestuur/bestuur-person-${imageNumber}.jpg`)" alt="'"/>
        </div>
        <div class="col-12 col-md-7">
            <div class="section-header">{{ name }}</div>
            <div class="section-caption">{{ functie }}</div>
            <div class="section-contact">{{ email }}</div>
        </div>
        <div class="col-12 row">
            <div class="col-4"></div>
            <div class="col-4">
                <hr class="divider divider-thin divider-large"/>
            </div>
            <div class="col-4"></div>
        </div>
        <div class="col-12 section-text">
            <slot></slot>
        </div>
    </div>
</div>
</template>