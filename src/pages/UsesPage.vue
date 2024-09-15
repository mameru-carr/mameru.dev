<script setup lang="ts">
import axios from "axios";
import {onMounted, computed } from "vue";
import { useStatsStore } from "@/stores/stats";
import ProgrammingLanguages from "@/charts/ProgrammingLanguages.vue";
import Editors from "@/charts/Editors.vue";
import Loader from "@/components/utilities/Loader.vue";

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
    h1.text-4xl Uses
    p.
        I have always been interested in Tools. A good tool can expand the way 
        you think and work. It helps you achieve more, unlock possibilities.
        It doesn't come in the way of your work. This is a page dedicated to the
        tools that I use or have to use.

    section
        h2.text-3xl Programming Languages
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
        figure(v-if="stats")
            ProgrammingLanguages
        figure(v-else)
            Loader
    section
        h2.text-3xl Code and Text Editors
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
            I take all my notes in #[code Obsidian]. I use it as my Zettelkasten, a garden
            for my notes. At it's core it is a #[code Markdown] editor but it's rich plugin 
            ecosytem take it out of the park. I also sometimes use #[code NeoVim] with 
            #[code Goyo] to take notes.
        figure(v-if="stats")
            Editors
        figure(v-else)
            Loader
    section
        h2.text-3xl Programming Tools
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
                | I wrote this blog in #[code Pug]. In some ways feels like 
                | #[code Markdown] on steroids.
    section
        h2.text-3xl Fonts
        ul
            li
                strong Alegreya Family 
                | A delightful family of free fonts. I use it to for my notes and to read
                | E-Books. It is also the font I have employed for this blog. The family also includes a 
                span.font-serif_sc small caps 
                | variant that I love to use for headings.
            li
                strong JetBrains Mono 
                | My goto font for reading and writing code. Personally, I love the ligatures
                | I have yet to run into any readability issues. But, I understand why
                | they can be a turn off.
</template>

<style scoped lang="sass">
figure
    height: 320px
    display: flex
    justify-content: center
    align-items: center
</style>
