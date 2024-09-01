<script lang="ts" setup>
import { computed, ref } from 'vue'
import _ from 'lodash';
import router from '@/router'

const text = ref('');
const disabled = computed((): boolean => !text.value);
const wrongAnswer = ref('');

const randomTitles = ['Wayfarer', 'Beautiful Stranger', 'Internet Surfer', 'Interweb Traveler', 'Wisdom Seeker']
const randomTitle = ref(_.sample(randomTitles));

const errorMessages = ['Aw, Dangit!', 'You shall not pass!!']
const errorMessage = ref(_.sample(errorMessages));

function check() {
    const answer = text.value.toLowerCase();
    if (answer.includes('gun') || answer.includes('bullet')) {
        router.push({
             name: 'Home'
        });
    } else {
        if (typeof errorMessage.value === 'string') {
            wrongAnswer.value = errorMessage.value
        }
    }
}
</script>

<template lang="pug">
#riddle
    #sphinx.flex.gap-4.max
        p
            | Sphinx:
        p
            | Greetings, {{ randomTitle }}.
            br
            | Solve this riddle to enter!
    pre
        | Within a dark tunnel,
        | there lies a beast of iron,
        | which only kills when pulled back.
        | What am I talking about?
    p.text-red-600(v-if="wrongAnswer")
        | {{ wrongAnswer }}
    input(
        v-model="text",
        type="text",
        @keyup.enter="check"
        )
    button(
        type="button",
        :disabled="disabled",
        @click="check"
        ) Answer Me
</template>

<style lang="sass" scoped>
#sphinx
    margin: 1rem
#riddle
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    font-size: 1.25rem
    gap: 1rem
    font-family: 'Alegreya', serif
    pre
        line-height: 1.5rem
        font-family: inherit
    input
        border: 0
        border-bottom: 2px solid black
        outline: 0
        background: none
        padding: 0.5rem
        &:focus
            border-bottom: 2px dotted black
    button
        background: black
        border: 2px solid black
        border-radius: 5px
        color: white
        padding: 0.5rem
        &:enabled
            animation: floatIn 0.5s ease-in
        &:disabled
            cursor: not-allowed
            visibility: hidden
pre
    &::before
        content: "\201c"
    &::after
        content: "\201d"

@keyframes floatIn
    0%
        opacity: 0
    100%
        opacity: 1
</style>