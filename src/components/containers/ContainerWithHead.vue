<script setup>

// eslint-disable-next-line
defineProps({header: String})

</script>

<template>
    <div class="row w-100 m-0 mb-3">

    <h3 class="w-100 h4 font-primary text-secondary border-bottom border-bottom-primary p-0 pb-2">
        {{ header }}
    </h3>

    <slot></slot>

    </div>
</template>