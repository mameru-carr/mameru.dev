<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
	quote: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		required: false,
        default: '',
	},
	link: {
		type: String,
		required: false,
        default: '',
	},
});

function isUrdu(quote: string) {
    const words = quote.split(' ');
    const regex = /[\u0600-\u06ff]+|[\u0750-\u077f]+|[\ufb50-\ufc3f]+|[\ufe70-\ufefc]+/
    return regex.test(words[0]);
}

</script>

<template lang="pug">
div(:class="{ urdu: isUrdu(quote), quote: !isUrdu(quote) }")
	template(v-if="link")
		a(
      :href="link"
      target="_blank"
      )
			blockquote {{ quote }}
			p.author(v-if="author") {{ author }}
	template(v-else)
		blockquote {{ quote }}
		p.author(v-if="author") - {{ author }}
</template>

<style scoped lang="sass">
.quote
    border-left: 3px solid black
    padding: 0 1rem
    margin: 0.5rem 1.5rem
    font-family: "Josefin Sans", sans-serif

    blockquote
        &::before 
            content: "\201c"
        &::after
            content: "\201d"
    
.urdu
    font-family: "Markazi Text", serif
    font-size: 1.25rem
    margin: 0.5rem 1.5rem
    padding: 0 1rem
    direction: rtl
    border-right: 3px solid black

    blockquote
        &::before 
            content: "\201d"
        &::after
            content: "\201c"
</style>
