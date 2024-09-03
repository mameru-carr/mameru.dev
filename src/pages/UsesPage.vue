<script setup lang="ts">
import axios from "axios";
import {onMounted, computed, ref} from "vue";
import { useStatsStore } from "@/stores/stats";
import ProgrammingLanguages from "@/charts/ProgrammingLanguages.vue";
import Editors from "@/charts/Editors.vue";

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
    template(v-if="stats")
        section
            h2.text-2xl Programming Languages
            p.
                I use #[code C#], #[code Vue.js] at work and for my hobby 
                projects. I absolutely adore them. 
            p.
                #[code TypeScript] is great, when it works. Everytime I have to
                change #[code tsconfig.json] I have to put on a bomb suit and 
                pray that it works. If I somehow get it working, it breaks the
                build process. 
            p.  
                Although #[code Markdown] is not a programming language, it is 
                what I take notes in so I have included it here.
            figure
                ProgrammingLanguages
        section
            h2.text-2xl Code and Text Editors
            p.
                For all my personal projects I use #[code NeoVim]. It is unobtrusive,
                elegant and a joy to work with.

            p.
                At work I use the beefy JetBrains IDE's for each particular
                language. #[code Rider] works seamlessly. Sometimes it is
                difficult make some features work correctly in #[code WebStorm]
                but, that is just the #[code JavaScript] ecosystem. #[code DataGrip]
                is just brilliant.

            p.
                I take all my notes in #[code Obsidian]. I use it as my Zettelkasten or a garden
                for my notes. At it's core it is a #[code Markdown] editor but it's rich plugin 
                ecosytem take it out of the park. I also sometimes use #[code NeoVim] with 
                #[code Goyo] to take notes.
            figure
                Editors
        section
            h2.text-2xl Programming Tools
            p
                ul
                    li
                        strong Bun 
                        | for all my hobby projects. It is blazingly fast and I
                        | do many things without using an additional tool or
                        | library.
                    li
                        strong Terminator 
                        | Shell
                    li
                        strong WakaTime 
                        | Dashboard that tracks my development activity. All the
                        | graphs you see in this page are based on activity tracked
                        | by #[code WakaTime].
                    li
                        strong Pug 
                        | I wrote this blog in #[code Pug].
</template>

<style scoped lang="sass">
figure
    height: 320px
li
    margin-bottom: 1rem
</style>
