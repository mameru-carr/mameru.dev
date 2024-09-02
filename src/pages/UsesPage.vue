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
#uses
    template(v-if="stats")
        figure
            ProgrammingLanguages
</template>

<style scoped lang="sass">
figure
    height: 320px
</style>
