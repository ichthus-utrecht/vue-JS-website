<script setup>
    import { ref } from 'vue'

    const tonen = ref(true)

    function verdwijnen() {
        tonen.value = false
    }
</script>

<template>
    <div class="lightbox" id="lightbox-{{ $selector }}" v-if="tonen" style="-moz-user-select: none; -webkit-user-select: none; -ms-user-select:none; user-select:none;-o-user-select:none; background-color: rgba(0,0,40,0.8)" unselectable="on" onselectstart="return false;" onmousedown="return false;">
        <b class="fas fa-3x lightbox-cross" @click="verdwijnen">X</b>

    <div class="lightbox-modal">
        <slot></slot>
    </div>

</div>
</template>

<style scoped>
.lightbox-modal {
    text-align: left;
    overflow-y: auto;
}
</style>