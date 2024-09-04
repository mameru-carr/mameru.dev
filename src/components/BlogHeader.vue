<script setup>
import QuoteMachine from '@/components/QuoteMachine.vue';
</script>

<template lang="pug">
header
    h1(class="text-4xl font-display") The Lonely Mountain
    Suspense
        QuoteMachine
    nav
        ul
            li
                a(href="/home") Home
            li
                a(href="/uses") Uses
            li
                a(href="/now") Now
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
