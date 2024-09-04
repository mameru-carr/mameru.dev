<script setup>
import QuoteMachine from '@/components/QuoteMachine.vue';
import router from "@/router";
import { computed } from "vue";

const hr = "◃◄◀◇◈◉◈◇▶►▹ "
const currentRoute = computed(() => router.currentRoute.value.name);
const routes = router.getRoutes();
console.log(routes);
</script>

<template lang="pug">
header
    h1(class="text-4xl font-display") The Lonely Mountain
    Suspense
        QuoteMachine
    nav
        ul
            li(v-for="route in routes")
                button(type="button" @click="router.push({ name: route.name })") {{ route.name }}
    hr
</template>

<style scoped lang="sass">

hr
    border: 0
    height: 2px
    background: #282828
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
