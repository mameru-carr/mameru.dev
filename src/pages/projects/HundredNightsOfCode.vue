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
    section.statistics
        ul
            li
                | #[strong Days]: 3
    section
        h2.text-2xl September
        .night
            h3.text-xl The 01#[sup st] of September, Sunday
            p.
                I have been meaning to start a blog for ages, I finally did.
                My CSS is a little rusty but, I had fun making it. 
            p
                strong API for WakaTime Integration in Blog using #[code Bun]
            p
                | I use #[code WakaTime] to track all my programming activity.
                | I wanted to create a #[a(@click="router.push({ name: 'Uses' })") #[code /uses]]
                | page and integrate #[code WakaTime] statistics into it. Since it
                | is unsafe to use the #[code WakaTime] API Key directly from the
                | front-end, I have to create an API.
            p.
                I thought it would be fun to use #[code Bun]. Since my API is very small.
            p.
                It responded to #[code curl] and #[code Insomnia] requests but refused
                to work in the browser. This was due to missing #[code CORS] erros.
                It turns out that I had to 
                #[a(href="https://github.com/oven-sh/bun/issues/5466") manually add the strings to each #[code HTTP Header]].
                But, that didn't work.
                I tried many different things, spent hours, before realizing
                that I had installed #[code Bun] ages ago. Upgrading #[code Bun]
                made everything work. I was on version #[code v1.1.11]
                while #[code Bun] had moved on to #[code v1.1.26].
            p
                strong Deploying #[code Bun] API 
                | I tried to deploy the API to #[code Vercel] but, 
                | #[a(href="https://vercel.com/guides/npm-run-start-not-working") I couldn't get it to work.]
                | I turned to #[code Render]. It was very straight forward.
                | But, it keeps spinning down after 15 minutes of inactivity in the Free Tier.
                | Which is a bit annoying but, it will do for now.
            p.
                Boy, oh boy, is this fun! I have been missing out all these 
                years.
        .night
            h3.text-xl
                | The 03#[sup rd] of September, Tuesday
            p.
                I thought it'd be cool to display my #[code WakaTime]
                statistics in my #[code /uses] page. I decided on using 
                #[code #[a(href="https://vue-echarts.dev/") vue-echarts]], which
                provides #[code #[a(href="https://echarts.apache.org/examples/en/index.html") Apache E-Charts]]
                charts as #[code Vue] Components
            p.
                My #[code Bun] backend was ready. It returned my data from
                #[code WakaTime]. All that was left to do was display it as a
                graph. After initializing the data visualization library. I
                picked a sample radar chart from the
                #[code #[a(href="https://echarts.apache.org/examples/en/index.html") Apache E-Charts Demo]]
                page

        .night
            h3.text-xl
                | The 20#[sup th] of September, Friday
            p.
                It has been a hot minute. It has been a difficult couple of
                weeks but, I am back on track.
            p.
                I have wanted to make a Task Management App for a while now.
                So, I dusted off the project I initialized a while (3 months)
                ago. It was initialized in #[code C#]. Although I use #[code C#]
                at work, I am not well versed at it (yet). So, I decided to
                use #[code TypeScript] instead.

</template>

<style scoped lang="sass">
h3
    font-family: "Alegreya SC", serif
    &::before
        content: "▩ "
</style>

