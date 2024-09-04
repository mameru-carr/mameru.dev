<script setup>
import router from "@/router";
</script>

<template lang="pug">
main
    h1.text-3xl 101 Nights Of Code
    section
        h2.text-2xl Introduction
        p.
            I realized very late that I can just build whatever, however I
            want just for fun.
    section
        h2.text-2xl September
        .night
            p.date The 01#[sup st] of September, Sunday
            p
                | I have been meaning to start a blog for ages, I finally did.
            p
                strong Sphinx: Riddle 
                | I had this wonderful idea to make guests solve a riddle before
                | entering the site. Like a fun captcha. Making it mandatory
                | would be a little annoying, so will be just a fun prompt in the
                | front page.
            p.
                My CSS is a little rusty but, I had fun making it. For now, I
                have shelved this in a separate branch before I figure somethings
                out.
            p
                strong API for Blog and WakaTime Integration 
                | I use #[code WakaTime] to track all my programming activity.
                | I wanted to create a #[a(@click="router.push({ name: 'Uses' })") #[code uses]]
                | page and integrate #[code WakaTime] statistics into it. Since it
                | is unsafe to use the #[code WakaTime] API Key directly from the
                | front-end, I have to create an API.
            p.
                I instinctively installed #[code Express] and initialized it, before
                remembering that I use #[code Bun] and it has a #[code HTTP Server]
                baked into it. Since, I only need a minimal API, I thought it would be
                fun to use #[code Bun].
            p.
                It is super minimalistic. It was easy to get a #[code HTTP Server] up and
                running. I was able to hit it using #[code curl] and #[code Insomnia].
                But, all requests from my front-end were blocked because the API was not 
                returning the #[code CORS] headers. While in express I would could just
                slap the #[code cors()] middleware package and forget about it, in #[code Bun]
                I had to include the #[code Access-Control-Allow-Origin] header manually for
                every #[code Response]. Which although fine, could be handled better. But, 
                that refused work. I tried many different things, spent hours, before realizing
                that I had installed #[code Bun] ages ago. Upgrading #[code Bun] made 
                everything work. I was on version #[code v1.1.11] while #[code Bun] had
                moved on to #[code v1.1.26].
            p
                strong Deploying #[code Bun] API 
                | I tried to deploy the API to #[code Vercel] but, I couldn't get it to work.
                | I don't why hitting the API just kept returning the code. My code doesn't
                | belong to a 'Framework Preset' so I understand. I wasn't able to specify 
                | my own start command. It is a shame because #[code Vercel] works 
                | smoothly for all my #[code Vue.js] projects. I turned to #[code Render]. It
                | was super simple and I was able to get the API up in about 5 minutes.
                | But, it keeps spinning down after 15 minutes of inactivity in the Free Tier.
                | Which is a bit annoying but, it will do for now.
            p.
                Boy, oh boy, is this fun! I have been missing out all these 
                years.
        .night
            p.date The 02#[sup nd] of September, Tuesday
        .night
            p.date The 03#[sup rd] of September, Tuesday
            p.
                I use #[code WakaTime] to track my coding activity. 
</template>

<style scoped lang="sass">
.date
    font-family: "Alegreya SC", serif
    &::before
        content: "▩ "
</style>

