<script setup lang="ts">
import BasisLayout from '../components/layouts/BasisLayout.vue'
import FooterBalk from '../components/interactief/FooterBalk.vue'
import NavigatieBalk from '@/components/interactief/NavigatieBalk.vue'
import nieuwsItems from '../assets/nieuwsItems.json'

const props = defineProps<{
  nummer: number
}>()

const item = nieuwsItems.items[props.nummer]
const titel = item.titel
const tekst = item.inhoud

</script>

<template>
  <NavigatieBalk />
  <BasisLayout :pageHeader="titel">
    <div class="col-12 col-md-12 mb-5 nieuwsText text-justify">
      {{tekst}}
    </div>
  </BasisLayout>
  <FooterBalk />
</template>

<style lang="css">
@import '../assets/css/app.css';

.nieuwsText {
  white-space: pre-line
}
</style>
