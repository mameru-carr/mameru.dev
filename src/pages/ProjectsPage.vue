<script setup>
import router from "@/router";
</script>

<template lang="pug">
main
    h1.text-4xl Projects
    section
        h2.text-3xl
            a(@click="router.push({ name: 'HunderedNightsOfCode' })") 101 Nights Of Code
        p.
            I build stuff for 101 Nights, while meticulously tracking 
            and journaling everything.
        h2.text-3xl
            a(@click="router.push({ name: 'Chess' })") Learning Chess
        p.
            After an incident at work, I realized how important it is to 
            keep a sharp mind, and work on my mental aptitude and fortitude.
</template>

<style scoped lang="sass">

</style>
