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
    p.
        I have always been interested in Tools. A good tool can expand the way 
        you think and work. It helps you achieve more, unlock possibilities.
        It doesn't come in the way of your work. This is a page dedicated to the
        tools that I use or have to use.
    section(v-if="stats")
        h2.text-2xl Programming Languages
            .chart
                p.
                    I use #[code C#], #[code Vue.js] at work and for my hobby 
                    projects. I absolutely adore them. 
                p.  
                    Although #[code Markdown] 
                    is not a programming language, it is what I take notes in so I 
                    have included it here.
                figure
                    ProgrammingLanguages
</template>

<style scoped lang="sass">
figure
    height: 320px
</style>
