<script setup lang="ts">
import { ref } from "vue";
import _ from "lodash";

const randomTitles = ['Wayfarer', 'Beautiful Stranger', 'Internet Surfer', 'Interweb Traveler', 'Wisdom Seeker']
const randomTitle = ref(_.sample(randomTitles));

</script>

<template lang="pug">
main
    h1.text-3xl Welcome!
    p.
        Welcome to my little corner of the internet, {{ randomTitle }}.
        You have stumbled upon my online home. A home for my musings,
        my experiences many, and my notes.
    p.
        Take a look around. Maybe we are alike, may be we share nothing
        in common, maybe you are a long lost friend, may be you are 
        going to be my friend!

</template>
<style scoped>

</style>
