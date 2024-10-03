<script setup lang="ts">
import BasisContainer from '../containers/BasisContainer.vue'
import backgroundImage from '@/assets/images/nav.jpg'
// eslint-disable-next-line
defineProps({
    pageHeader: String,
    description: String
})

</script>

<template>
    <div class="container-fluid">
        <div class="row page-title-image page-title-image-m" style="margin-top: 0;"
            :style="{ backgroundImage: `url(${backgroundImage})` }"></div>
        <div class="row">
            <BasisContainer>
                <h1 class="page-header">
                    {{ pageHeader == null ? '' : pageHeader }}
                </h1>
                <div v-if="description !== undefined && description !== null" class="page-caption">
                    {{ description }}
                </div>
            </BasisContainer>
            <div class="row col-12 justify-content-center">
                <div class="col-12 col-md-7">
                    <hr class="divider-small divider-thin divider-gray" />
                </div>
            </div>
            <BasisContainer>
                <div class="container-fluid">
                    <slot></slot>
                </div>
            </BasisContainer>
        </div>
        <div class="row">
            <div class="col-div-non-xl"></div>
        </div>
    </div>
</template>

<style>
.page-header {
    text-align: left;
}

.row {
    text-align: left;
}


#app {
    margin-top: 0;
}
</style>