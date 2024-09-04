<script setup>
import router from "@/router";
</script>

<template lang="pug">
main
    h1.text-3xl Projects
    section
        h2.text-2xl
            a(@click="router.push({ name: 'HunderedNightsOfCode' })") 101 Nights Of Code
        p.
            I build stuff for 101 Nights, while meticulously tracking and journaling everything.
</template>

<style scoped lang="sass">

</style>
