<script setup lang="ts">
import axios from "axios";
import {onMounted, computed, ref} from "vue";
import { useStatsStore } from "@/stores/stats";
import ProgrammingLanguages from "@/charts/ProgrammingLanguages.vue";

const apiURL = import.meta.env.VITE_API;
const statistics = useStatsStore();
const stats = computed(() => statistics.data);

async function loadStatistics() {
    const endpoint = 'wakatime';
    const url = `${apiURL}/${endpoint}`;

    const response = await axios.get(url);
    const data = response.data.data;

    statistics.$patch({ data: data });
}

onMounted(async () => {
    await loadStatistics();
})
</script>

<template lang="pug">
main
    h1.text-3xl Uses
    p
        | I have always been interested in Tools. A good tool can expand the way 
        | you think and work. It helps you achieve more, unlock possibilities.
    section(v-if="stats")
        figure
            ProgrammingLanguages
</template>

<style scoped lang="sass">
main
    font-family: 'Alegreya', 'serif'
    p
        padding: 1rem
        font-size: 1.25rem
figure
    height: 320px
</style>
