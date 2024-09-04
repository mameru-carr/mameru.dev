<script setup>
import QuoteMachine from '@/components/QuoteMachine.vue';
import router from "@/router";
</script>

<template lang="pug">
header
    h1(class="text-4xl font-display") The Lonely Mountain
    Suspense
        QuoteMachine
    nav
        ul
            li
                button(type="button" @click="router.push({ name: 'Home' })") Home
            li
                button(type="button" @click="router.push({ name: 'Uses' })") Uses
    hr
</template>

<style scoped lang="sass">
header
    margin: 1rem
    h1
        margin: 1rem
    nav
        margin: 0.5rem 1rem
        font-size: 1.125rem
        ul
            display: flex
            
            li
                padding: 0.5rem
                font-family: "Alegreya SC", serif
</style>
