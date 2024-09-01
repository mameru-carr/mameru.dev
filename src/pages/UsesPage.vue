<script setup lang="ts">
import axios from "axios";
import {onMounted} from "vue";
import { useStatsStore } from "@/stores/stats";

const apiURL = import.meta.env.VITE_API;
const statistics = useStatsStore();

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
    p
        | Hello
</template>

<style scoped lang="sass">

</style>
